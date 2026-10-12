interface CheckoutOptions {
  key: string;
  email: string;
  amount: number;
  currency: string;
  reference: string;
  onSuccess: (transaction: { reference: string }) => void;
  onCancel: () => void;
  onError: () => void;
}

type PaystackConstructor = new () => { newTransaction: (options: CheckoutOptions) => void };

declare global {
  interface Window { PaystackPop?: PaystackConstructor; }
}

let loading: Promise<PaystackConstructor> | undefined;

export function loadPaystack(): Promise<PaystackConstructor> {
  if (window.PaystackPop) return Promise.resolve(window.PaystackPop);
  if (loading) return loading;
  loading = new Promise<PaystackConstructor>((resolve, reject) => {
    const script = document.createElement('script');
    const fail = () => {
      window.clearTimeout(timeout);
      script.onload = null;
      script.onerror = null;
      script.remove();
      loading = undefined;
      reject(new Error('Could not load checkout. Check your connection and try again, or use the Paystack payment page below.'));
    };
    const timeout = window.setTimeout(fail, 15000);
    script.src = 'https://js.paystack.co/v2/inline.js';
    script.async = true;
    script.onload = () => {
      if (!window.PaystackPop) return fail();
      window.clearTimeout(timeout);
      resolve(window.PaystackPop);
    };
    script.onerror = fail;
    document.head.appendChild(script);
  });
  return loading;
}
