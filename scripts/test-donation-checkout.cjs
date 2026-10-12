// Behavioral checks with a mocked Paystack SDK: no network or real charges.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { transformSync } = require('esbuild');

const config = { publicKey: 'pk_test_example', paystackUrl: 'https://paystack.shop/pay/orange-hat', minAmount: 100, maxAmount: 1000000, defaultAmount: 5000 };
const source = transformSync(fs.readFileSync('src/components/DonationForm.tsx', 'utf8'), {
  loader: 'tsx', format: 'cjs', jsx: 'transform',
}).code;

function fixture(loadError = false) {
  const slots = [];
  let cursor = 0;
  const checkouts = [];
  const react = {
    createElement: (type, props, ...children) => ({ type, props: props || {}, children: children.flat(Infinity) }),
    useState: (initial) => {
      const index = cursor++;
      if (!(index in slots)) slots[index] = initial;
      return [slots[index], value => { slots[index] = value; }];
    },
    useRef: (initial) => {
      const index = cursor++;
      if (!(index in slots)) slots[index] = { current: initial };
      return slots[index];
    },
    useEffect: () => {},
  };
  class Paystack { newTransaction(options) { checkouts.push(options); } }
  const context = {
    module: { exports: {} }, Error, crypto: { randomUUID: () => 'unique-reference' },
    require: name => {
      if (name === 'react') return react;
      if (name === '../utils/constants') return { DONATION_CONFIG: config };
      if (name === '../utils/paystack') return { loadPaystack: async () => {
        if (loadError) throw new Error('Network unavailable');
        return Paystack;
      } };
      throw new Error(`Unexpected dependency: ${name}`);
    },
  };
  vm.runInNewContext(source, context);
  const render = () => { cursor = 0; return context.module.exports.default(); };
  function find(node, predicate) {
    if (node && typeof node === 'object') {
      if (predicate(node)) return node;
      for (const child of node.children || []) { const found = find(child, predicate); if (found) return found; }
    }
  }
  const field = id => find(render(), node => node.props.id === id);
  return { render, find, field, checkouts, submit: () => render().props.onSubmit({ preventDefault() {} }) };
}

(async () => {
  const donor = fixture();
  donor.field('donation-email').props.onChange({ target: { value: 'donor@example.com' } });
  donor.field('donation-amount').props.onChange({ target: { value: '1234.56' } });
  const first = donor.submit();
  const duplicate = donor.submit();
  await Promise.all([first, duplicate]);
  assert.equal(donor.checkouts.length, 1, 'double clicks must open one checkout');
  const checkout = donor.checkouts[0];
  assert.equal(checkout.amount, 123456, 'NGN must convert exactly to kobo');
  assert.equal(checkout.currency, 'NGN');
  assert.equal(checkout.email, 'donor@example.com');
  assert.equal(checkout.key, 'pk_test_example');
  assert.equal(donor.render().props['aria-busy'], true);
  checkout.onCancel();
  assert.equal(donor.render().props['aria-busy'], false, 'cancellation must allow retry');
  await donor.submit();
  assert.equal(donor.checkouts.length, 2);
  donor.checkouts[1].onSuccess({ reference: 'PAYSTACK-REF' });
  const status = donor.find(donor.render(), node => node.props['aria-live'] === 'polite');
  assert.match(status.children.join(''), /PAYSTACK-REF/);

  for (const amount of ['0', '-100', '99.99', '1000000.01', 'NaN', '100.001']) {
    const invalid = fixture();
    invalid.field('donation-amount').props.onChange({ target: { value: amount } });
    await invalid.submit();
    assert.equal(invalid.checkouts.length, 0, `invalid amount ${amount} must not reach Paystack`);
  }
  for (const amount of ['100', '1000000']) {
    const boundary = fixture();
    boundary.field('donation-amount').props.onChange({ target: { value: amount } });
    await boundary.submit();
    assert.equal(boundary.checkouts[0].amount, Number(amount) * 100);
  }
  const offline = fixture(true);
  await offline.submit();
  assert.equal(offline.render().props['aria-busy'], false, 'SDK failure must unlock the form');
  assert.match(offline.find(offline.render(), node => node.props['aria-live'] === 'polite').children.join(''), /Network unavailable/);
  console.log('Donation checks passed: amount conversion/bounds, duplicate clicks, cancellation/retry, receipt reference, and SDK failure. No real payments made.');
})().catch(error => { console.error(error); process.exitCode = 1; });
