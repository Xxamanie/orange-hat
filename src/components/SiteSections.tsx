import React, { useEffect, useState } from 'react';
import { programs } from '../data/programs';

export type RoutePath =
  | '/'
  | '/programs'
  | '/team'
  | '/impact'
  | '/contact'
  | '/contact/give'
  | '/contact/volunteer'
  | '/contact/sponsor'
  | '/contact/partner'
  | '/contact/enquire';

interface ProgramListItem {
  strong: string;
  text: string;
}

interface ProgramDetails {
  pills?: string[];
  list?: ProgramListItem[];
  firstPara?: string;
}

interface ContactJourney {
  path: Extract<RoutePath, `/contact/${string}`>;
  title: string;
  label: string;
  image: string;
  lead: string;
  body: string[];
  highlight: string;
  cta: string;
}

const withBase = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
};

const staffMembers = [
  { name: 'Blessing Samuel', role: 'Director', image: '/images/blessing.jpg' },
  { name: 'Muniru Funke A.', role: 'Director of Operations', image: '/images/funke.jpg' },
  { name: 'Joel Katembue Tshibangu', role: 'HwoleMen & Youth Development Coordinator', image: '/images/joel.jpg' },
  { name: 'Jang Rachel', role: 'Reading Tutor', image: '/images/rachael.png' },
  { name: 'Madugu Jideh Vincent', role: 'Academic Support Instructor', image: '/images/madugu-jideh-vincent.png' },
  { name: 'Nuhu Celina', role: 'Lovin Oven Baking Instructor', image: null },
  { name: 'Stella Nkem Oriaku', role: 'Residential Caregiver', image: null },
  { name: 'Nanna John', role: 'Residential Caregiver', image: '/images/nanna-john.jpg' },
  { name: 'Ukeni Onyinyechi Christiana', role: 'Residential Caregiver', image: '/images/onyinyechi-christiana.jpg' },
];

const programDetails: Record<string, ProgramDetails> = {
  'lovin-oven': {
    pills: ['Professional Baking', 'Entrepreneurship', 'Starter Kit', 'Faith & Finance'],
  },
  'hwolemen': {
    list: [
      { strong: 'Rehabilitation', text: 'Breaking old cycles and healing from the past.' },
      { strong: 'Discipleship', text: 'Grounding men in faith and spiritual maturity.' },
      { strong: 'Mentorship', text: 'Walking alongside experienced leaders who model character.' },
      { strong: 'Skill Acquisition', text: 'Hands-on vocational training for economic independence.' },
    ],
  },
  'learning-center': {
    list: [
      { strong: 'Foundational Literacy & Numeracy', text: 'Patient, structured learning for adult learners and out-of-school youth.' },
      { strong: 'Examination Preparatory Track', text: 'Intensive coaching for WAEC, NECO, and JAMB national exams.' },
    ],
  },
  'rooted-house': {
    list: [
      { strong: 'Total Care & Wellness', text: 'Safe home, meals, clothing, medical coverage.' },
      { strong: 'Education & Literacy', text: 'Foundational literacy through WAEC/JAMB prep.' },
      { strong: 'Vocational Empowerment', text: 'Culinary arts, baking, and business management.' },
      { strong: 'Spiritual Discipleship', text: 'Faith, purpose, and godly stewardship.' },
    ],
  },
  'after-school-adventures': {
    list: [
      { strong: 'Beyond the Curriculum', text: 'Life skills and creative subjects conventional schools often miss.' },
      { strong: 'Bridging the Gap', text: 'Patient, foundational support in literacy and numeracy.' },
      { strong: 'A Personalized Path', text: 'We meet each child where they are; no one is rushed.' },
    ],
  },
  'holiday-orange-hat': {
    pills: ['Baking', 'Music', 'Dance', 'Drama', 'Agri-Science', 'French', 'Computer Science'],
  },
};

const navItems: Array<{ label: string; path: RoutePath }> = [
  { label: 'Programs', path: '/programs' },
  { label: 'Our Team', path: '/team' },
  { label: 'Impact', path: '/impact' },
  { label: 'Contact', path: '/contact' },
];

export const contactJourneys: ContactJourney[] = [
  {
    path: '/contact/give',
    title: 'Give Financially',
    label: '',
    image: '/images/rooted house.jpeg',
    lead: 'Support Orange Hat through practical giving that strengthens programs, homes, and educational pathways.',
    body: [
      'Your gifts help sustain core needs across tutoring, residential support, discipleship, skill acquisition, and sponsorship care.',
    ],
    highlight: 'Fund learning, care, and long-term restoration.',
    cta: 'I want to support financially',
  },
  {
    path: '/contact/volunteer',
    title: 'Volunteer Your Time',
    label: 'Volunteer',
    image: '/images/holiday.jpeg',
    lead: 'Step into the work directly by offering your time, skills, energy, or presence where it is most useful.',
    body: [
      'Volunteers can strengthen any of our programs through tutoring, mentoring, logistics help, creative support, event service, and practical community engagement.',
      'This route makes it easy for someone to say not just "I care", but I am ready to show up.',
    ],
    highlight: 'Join the work on the ground.',
    cta: 'I want to volunteer',
  },
  {
    path: '/contact/sponsor',
    title: 'Sponsor A Child',
    label: 'Sponsor',
    image: '/images/learning center.jpg',
    lead: 'Help remove educational barriers by supporting a child or young person through tuition, materials, and ongoing care.',
    body: [
      'Sponsorship reaches beyond school fees into books, uniforms, supplies, academic monitoring, and the relational support needed for progress.',
      'This destination speaks to visitors who want their giving tied to a clear educational outcome.',
    ],
    highlight: 'Back a student with consistent support.',
    cta: 'I want to sponsor a student',
  },
  {
    path: '/contact/partner',
    title: 'Build A Partnership',
    label: 'Partner',
    image: '/images/joel.jpg',
    lead: 'Explore institutional, ministry, business, or strategic collaboration with Orange Hat.',
    body: [
      'Partnerships can take the form of funding, expertise, in-kind support, referrals, facilities access, training, or coordinated community programming.',
      'This page is built for people looking beyond one-off support toward sustained collaboration.',
    ],
    highlight: 'Create shared impact with Orange Hat.',
    cta: 'I want to discuss partnership',
  },
  {
    path: '/contact/enquire',
    title: 'Ask A Question',
    label: 'Enquire',
    image: '/images/blessing.jpg',
    lead: 'Start with a conversation if you want to learn more before choosing how to engage.',
    body: [
      'Are still deciding, comparing options, or looking for clarity around a specific program or need?',
    ],
    highlight: 'Get clarity before taking your next step.',
    cta: 'I have a question',
  },
];

const isContactNavPath = (path: RoutePath) => path.startsWith('/contact');
const isNavItemActive = (currentPath: RoutePath, itemPath: RoutePath) =>
  itemPath === '/contact' ? isContactNavPath(currentPath) : currentPath === itemPath;

export const routeHref = (path: RoutePath) => (path === '/' ? '#/' : `#${path}`);

export const SiteNav: React.FC<{ currentPath: RoutePath }> = ({ currentPath }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  return (
    <>
      <nav className="navbar">
        <a className="logo-wrap" href={routeHref('/')}>
          <div className="logo-circle">
            <img src={withBase('/images/logo.png')} alt="Orange Hat Childcare Foundation logo" />
          </div>
          <div className="logo-text">
            Orange Hat Childcare Foundation
            <span>Nigeria</span>
          </div>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <a href={routeHref(item.path)} className={isNavItemActive(currentPath, item.path) ? 'is-active' : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={routeHref('/contact')} className="nav-cta">Donate / Partner</a>

        <div className="hamburger" onClick={() => setMenuOpen((open) => !open)} aria-label="Menu">
          <span></span><span></span><span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        {navItems.map((item) => (
          <a
            key={item.path}
            href={routeHref(item.path)}
            className={isNavItemActive(currentPath, item.path) ? 'is-active' : undefined}
          >
            {item.label}
          </a>
        ))}
        <a href={routeHref('/contact')} className="nav-cta">Donate / Partner</a>
      </div>
    </>
  );
};

export const SiteFooter: React.FC = () => (
  <footer>
    <div className="logo-text">
      Orange Hat Childcare Foundation
      <span>Nigeria</span>
    </div>
    <p>&copy; {new Date().getFullYear()} Orange Hat Childcare Foundation. All rights reserved.</p>
    <ul className="footer-links">
      <li><a href={routeHref('/programs')}>Programs</a></li>
      <li><a href={routeHref('/team')}>Team</a></li>
      <li><a href={routeHref('/contact')}>Contact</a></li>
    </ul>
  </footer>
);

export const HomeHero: React.FC = () => (
  <section id="hero" className="hero fade-in">
    <div
      className="hero-bg"
      style={{ backgroundImage: `url('${withBase('/images/holiday.jpeg')}')` }}
    ></div>
    <div className="hero-content">
      <div className="hero-text">
        <div className="hero-eyebrow">Faith . Purpose . Transformation</div>
        <h1 className="hero-h1">
          Turning Potential<br/>into <em>Purposeful</em><br/>Living
        </h1>
        <p className="hero-sub">
          Orange Hat Childcare Foundation is a faith-based NGO in Nigeria, equipping vulnerable youth and women
          with the education, skills, and spiritual grounding they need to build dignified, independent lives.
        </p>
        <div className="hero-btns">
          <a href={routeHref('/programs')} className="btn-primary cta-button">Explore Our Programs</a>
          <a href={routeHref('/contact')} className="btn-ghost">Partner With Us</a>
        </div>
      </div>
    </div>
  </section>
);

export const MissionStrip: React.FC = () => (
  <div id="mission-strip" className="fade-in">
    <div className="mission-quote reveal">
      <div className="section-tag" style={{ color: 'var(--gold)', marginBottom: '20px' }}>Vision</div>
      <p>"We envision a place where healthy, gospel-rooted interactions and engaging learning activities inspire hope, healing, and wholeness that strengthen and build families and transform communities."</p>
    </div>
    <div className="mission-desc reveal">
      <div className="section-tag" style={{ color: 'var(--gold)', marginBottom: '20px' }}>Mission</div>
      <p>
        The Orange Hat Childcare Foundation is committed to providing holistic Christ-centered support to underserved demographics through bridging the educational gap, academic sponsorship and creative expression for children and youth.
      </p>
      <p style={{ marginTop: '10px' }}>
        We facilitate empowerment through skill acquisition, learning, technologies, intentional residential homes, Christian discipleship, mentorship and rehabilitation for vulnerable youth.
      </p>
    </div>
  </div>
);

export const HomeGatewaySection: React.FC = () => (
  <section className="page-links-section fade-in">
    <div className="programs-header reveal">
      <div className="section-tag">Explore The Site</div>
      <h2 className="section-h2">Choose a <em>Page</em></h2>
      <p className="section-lead">
        Each section now lives on its own page, so you can move through the site without scrolling through everything at once.
      </p>
    </div>
    <div className="page-link-grid reveal">
      <a href={routeHref('/programs')} className="page-link-card">
        <span>Programs</span>
        <strong>{programs.length} initiatives and detailed program information</strong>
      </a>
      <a href={routeHref('/team')} className="page-link-card">
        <span>Our Team</span>
        <strong>Meet the staff serving families, children, and young adults</strong>
      </a>
      <a href={routeHref('/impact')} className="page-link-card">
        <span>Impact</span>
        <strong>Key numbers that show the reach and rhythm of the work</strong>
      </a>
      <a href={routeHref('/contact')} className="page-link-card">
        <span>Contact</span>
        <strong>Ways to partner, give, volunteer, or ask a question</strong>
      </a>
    </div>
  </section>
);

export const PageHero: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  image: string;
}> = ({ eyebrow, title, lead, image }) => (
  <section className="page-hero fade-in">
    <div className="page-hero-bg" style={{ backgroundImage: `url('${withBase(image)}')` }}></div>
    <div className="page-hero-inner">
      <div className="section-tag page-hero-tag">{eyebrow}</div>
      <h1 className="page-hero-title">{title}</h1>
      <p className="page-hero-lead">{lead}</p>
    </div>
  </section>
);

export const ProgramsSection: React.FC = () => {
  const [activeProgramId, setActiveProgramId] = useState<string | null>(null);

  const renderProgramContent = (program: typeof programs[0]) => {
    const details = programDetails[program.id];
    return (
      <>
        <p>{program.shortDescription}</p>
        <p>{program.description.split('\n\n')[0]}</p>
        {program.description.split('\n\n').slice(1).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {details?.firstPara && <p>{details.firstPara}</p>}
        {details?.pills && (
          <div className="prog-pills">
            {details.pills.map((pill, i) => (
              <span className="pill" key={i}>{pill}</span>
            ))}
          </div>
        )}
        {details?.list && (
          <ul className="prog-list">
            {details.list.map((item, i) => (
              <li key={i}><strong>{item.strong}</strong> - {item.text}</li>
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <section id="programs" className="pillars-grid fade-in">
      <div className="programs-header reveal">
        <div className="section-tag">What We Do</div>
        <h2 className="section-h2">Our <em>Programs</em></h2>
        <p className="section-lead">
          {programs.length} distinct initiatives designed to meet people exactly where they are - and carry them further than they imagined.
        </p>
      </div>

      <div className="program-card-grid reveal">
        {programs.map((program) => {
          const isActive = activeProgramId === program.id;

          return (
            <article
              className={`program-showcase-card pillar-card ${isActive ? 'is-active' : ''}`}
              key={program.id}
            >
              <button
                type="button"
                className="program-showcase-trigger"
                onClick={() => setActiveProgramId(isActive ? null : program.id)}
                aria-expanded={isActive}
                aria-controls={`program-details-${program.id}`}
              >
                <div className="program-showcase-media">
                  <img
                    src={encodeURI(withBase(program.image))}
                    alt={program.title}
                    className="program-showcase-image"
                  />
                  <div className="program-showcase-overlay" />
                  <div className="program-showcase-glow" />
                  <div className="program-showcase-copy">
                    <span className="program-showcase-category">{program.category}</span>
                    <h3>{program.title}</h3>
                    <span className="program-showcase-cta">
                      {isActive ? '' : 'Tap to read more'}
                    </span>
                  </div>
                </div>
              </button>

              <div
                id={`program-details-${program.id}`}
                className={`program-showcase-details ${isActive ? 'is-open' : ''}`}
              >
                <div className="program-showcase-meta">
                  {program.targetAge && <span>{program.targetAge}</span>}
                  {program.duration && <span>{program.duration}</span>}
                </div>
                <div className="program-showcase-body">
                  {renderProgramContent(program)}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export const ImpactSection: React.FC = () => (
  <section id="impact" className="fade-in">
    <div className="reveal">
      <div className="section-tag">Our Reach</div>
      <h2 className="section-h2">Changing Lives, <em>Measurably</em></h2>
    </div>
    <div className="impact-grid reveal">
      <div className="impact-stat"><div className="impact-num">{programs.length}+</div><div className="impact-label">Active Programs</div></div>
      <div className="impact-stat"><div className="impact-num">9</div><div className="impact-label">Dedicated Staff</div></div>
      <div className="impact-stat"><div className="impact-num">20+</div><div className="impact-label">Annual Volunteers</div></div>
      <div className="impact-stat"><div className="impact-num">5</div><div className="impact-label">Weeks of Summer Program</div></div>
      <div className="impact-stat"><div className="impact-num">2yr</div><div className="impact-label">Rooted House Journey</div></div>
    </div>
  </section>
);

export const StaffSection: React.FC = () => (
  <section id="staff" className="fade-in">
    <div className="staff-intro reveal">
      <div className="section-tag">The People Behind the Work</div>
      <h2 className="section-h2">Meet Our <em>Team</em></h2>
      <p className="section-lead">
        A passionate, dedicated group of educators, caregivers, and trainers committed to walking alongside every person we serve.
      </p>
    </div>

    <div className="staff-grid reveal">
      {staffMembers.map((member, index) => (
        <div key={index} className="staff-card">
          <div className="staff-avatar">
            {member.image ? (
              <img src={withBase(member.image)} alt={member.name} />
            ) : (
              '*'
            )}
          </div>
          <div className="staff-name">{member.name}</div>
          <div className="staff-role">{member.role}</div>
        </div>
      ))}
    </div>

    <div className="staff-video-placeholder reveal" style={{ marginTop: '48px' }}>
      <div className="vid-icon">Video</div>
      <p><strong style={{ color: 'rgba(255,255,255,.8)' }}>Team Photo and Intro Video</strong><br/>
      A group photo of all staff and a welcome video from the team will appear here.<br/>
      Please upload your team photo and video to replace this placeholder.</p>
    </div>
  </section>
);

export const ContactSection: React.FC = () => {
  const [activePath, setActivePath] = useState<ContactJourney['path'] | null>(contactJourneys[0].path);

  return (
    <section id="contact-journey" className="fade-in">
      <div className="programs-header reveal">
        <div className="section-tag">Choose Your Next Step</div>
        <h2 className="section-h2">Move through the <em>Contact Journey</em></h2>
        <p className="section-lead">
          Select the card that fits your reason for visiting.
        </p>
      </div>

      <div className="program-card-grid reveal">
        {contactJourneys.map((journey) => {
          const isActive = activePath === journey.path;

          return (
            <article
              className={`program-showcase-card pillar-card ${isActive ? 'is-active' : ''}`}
              key={journey.path}
            >
              <button
                type="button"
                className="program-showcase-trigger"
                onClick={() => setActivePath(isActive ? null : journey.path)}
                aria-expanded={isActive}
                aria-controls={`contact-details-${journey.path}`}
              >
                <div className="program-showcase-media">
                  <img
                    src={encodeURI(withBase(journey.image))}
                    alt={journey.title}
                    className="program-showcase-image"
                  />
                  <div className="program-showcase-overlay" />
                  <div className="program-showcase-glow" />
                  <div className="program-showcase-copy">
                    <span className="program-showcase-category">{journey.label}</span>
                    <h3>{journey.title}</h3>
                    <span className="program-showcase-cta">
                      {isActive ? 'Hide details' : 'Tap to read more'}
                    </span>
                  </div>
                </div>
              </button>

              <div
                id={`contact-details-${journey.path}`}
                className={`program-showcase-details ${isActive ? 'is-open' : ''}`}
              >
                <div className="program-showcase-meta">
                  <span>{journey.highlight}</span>
                </div>
                <div className="program-showcase-body">
                  <p>{journey.lead}</p>
                  {journey.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  <div className="contact-highlight" style={{ marginTop: 22 }}>
                    <span style={{ fontWeight: 800 }}>{journey.cta}</span>
                  </div>
                </div>

                <div style={{ marginTop: 18 }}>
                  <a
                    className="form-submit"
                    href={routeHref(journey.path)}
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                  >
                    Continue to this route -&gt;
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};


export const ContactDetailSection: React.FC<{ journeyPath: ContactJourney['path'] }> = ({ journeyPath }) => {
  const journey = contactJourneys.find((item) => item.path === journeyPath) ?? contactJourneys[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="pillars-grid fade-in">
      <div className="programs-header reveal">
        <div className="section-tag">Get In Touch</div>
        <h2 className="section-h2">{journey.title} <em>with Orange Hat</em></h2>       
      </div>

      <div className="program-card-grid reveal">
        <article className="program-showcase-card pillar-card is-active">
          <div className="program-showcase-media">
            <img
              src={encodeURI(withBase(journey.image))}
              alt={journey.title}
              className="program-showcase-image"
            />
            <div className="program-showcase-overlay" />
            <div className="program-showcase-glow" />
            <div className="program-showcase-copy">
              <span className="program-showcase-category">{journey.label}</span>
              <h3>{journey.title}</h3>
              <span className="program-showcase-cta">Ready to reach out</span>
            </div>
          </div>

          <div id={`contact-details-${journey.path}`} className="program-showcase-details is-open">
            <div className="program-showcase-meta">
              <span>{journey.highlight}</span>              
            </div>

            <div className="program-showcase-body">
              <p>{journey.lead}</p>
              {journey.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}              

              <ul className="prog-list">
                <li><strong>Email</strong> - orangehatjoy@gmail.com</li>
                <li><strong>Location</strong> - Nigeria (Jos, Plateau State)</li>
                <li><strong>Approach</strong> - Faith-rooted, practical, and community-led collaboration.</li>
              </ul>
            </div>

            <div className="contact-route-form-wrap">
              <form onSubmit={handleSubmit} className="contact-route-form">
                <h3>{journey.cta}</h3>
                <div className="contact-route-grid">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input id="contact-name" type="text" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input id="contact-email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-interest">I want to...</label>
                  <select id="contact-interest" defaultValue={journey.title}>
                    {contactJourneys.map((item) => (
                      <option key={item.path} value={item.title}>{item.title}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell us a bit about yourself and how you'd like to help..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="form-submit">Send Message -&gt;</button>
              </form>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
