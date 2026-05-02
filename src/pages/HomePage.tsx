import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/NewDesign.css';
import { programs } from '../data/programs';

gsap.registerPlugin(ScrollTrigger);

const withBase = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
};

const staffMembers = [
  { name: 'Blessing Samuel', role: 'Director & Director of Programs', image: '/images/blessing.jpg' },
  { name: 'Muniru Funke A.', role: 'Director of Operations', image: '/images/funke.jpg' },
  { name: 'Joel Katembue Tshibangu', role: 'HwoleMen & Youth Development Coordinator', image: '/images/joel.jpg' },
  { name: 'Jang Rachel', role: 'Reading Tutor', image: null },
  { name: 'Madugu Jideh Vincent', role: 'Academic Support Instructor', image: '/images/madugu-jideh-vincent.png' },
  { name: 'Nuhu Celina', role: 'Lovin Oven / Baking Instructor', image: null },
  { name: 'Stella Nkem Oriaku', role: 'Residential Caregiver', image: null },
  { name: 'Nanna John', role: 'Residential Caregiver', image: '/images/nanna-john.jpg' },
  { name: 'Ukeni Onyinyechi Christiana', role: 'Residential Caregiver', image: '/images/onyinyechi-christiana.jpg' },
];

interface ProgramListItem {
  strong: string;
  text: string;
}

interface ProgramDetails {
  pills?: string[];
  list?: ProgramListItem[];
  firstPara?: string;
}

const programDetails: Record<string, ProgramDetails> = {
  'lovin-oven': {
    pills: ['Professional Baking', 'Entrepreneurship', 'Starter Kit', 'Faith & Finance'],
    list: undefined,
    firstPara: 'To ensure a successful launch, we provide each graduate with a starter kit of basic baking materials — the seeds of their own thriving business.',
  },
  'hwolemen': {
    pills: undefined,
    list: [
      { strong: 'Rehabilitation', text: 'Breaking old cycles and healing from the past.' },
      { strong: 'Discipleship', text: 'Grounding men in faith and spiritual maturity.' },
      { strong: 'Mentorship', text: 'Walking alongside experienced leaders who model character.' },
      { strong: 'Skill Acquisition', text: 'Hands-on vocational training for economic independence.' },
    ],
    firstPara: undefined,
  },
  'learning-center': {
    pills: undefined,
    list: [
      { strong: 'Foundational Literacy & Numeracy', text: 'Patient, structured learning for adult learners and out-of-school youth.' },
      { strong: 'Examination Preparatory Track', text: 'Intensive coaching for WAEC, NECO, and JAMB national exams.' },
    ],
    firstPara: undefined,
  },
  'rooted-house': {
    pills: undefined,
    list: [
      { strong: 'Total Care & Wellness', text: 'Safe home, meals, clothing, medical coverage, and monthly stipend.' },
      { strong: 'Education & Literacy', text: 'Foundational literacy through WAEC/JAMB prep.' },
      { strong: 'Vocational Empowerment', text: 'Culinary arts, baking, and business management.' },
      { strong: 'Spiritual Discipleship', text: 'Faith, purpose, and godly stewardship.' },
    ],
    firstPara: undefined,
  },
  'after-school-adventures': {
    pills: undefined,
    list: [
      { strong: 'Beyond the Curriculum', text: 'Life skills and creative subjects conventional schools often miss.' },
      { strong: 'Bridging the Gap', text: 'Patient, foundational support in literacy and numeracy.' },
      { strong: 'A Personalized Path', text: 'We meet each child where they are; no one is rushed.' },
    ],
    firstPara: undefined,
  },
  'educational-sponsorship': {
    pills: undefined,
    list: [
      { strong: 'Primary & Secondary', text: 'Tuition, uniforms, shoes, textbooks, and stationery.' },
      { strong: 'University', text: 'Full tuition, hostel, electricity, data, and living essentials.' },
      { strong: 'Academic Advocacy', text: 'Open Day consultations, tutoring, and homework support.' },
    ],
    firstPara: undefined,
  },
  'holiday-orange-hat': {
    pills: ['Baking', 'Music', 'Dance', 'Drama', 'Agri-Science', 'French', 'Computer Science'],
    list: [
      { strong: 'South America (Ages 3–5)', text: 'Foundational play and storytelling.' },
      { strong: 'Asia (Ages 6–12)', text: 'Core academic and creative foundations.' },
      { strong: 'Australia (Ages 13+)', text: 'Advanced skills and leadership.' },
    ],
    firstPara: undefined,
  },
};

const HomePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProgramId, setActiveProgramId] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-bg', {
        scale: 1,
        scrollTrigger: {
          trigger: '.hero',
          scrub: true,
        },
      });

      gsap.from('.hero h1', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      gsap.from('.hero p', {
        y: 40,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.utils.toArray<HTMLElement>('section').forEach((section) => {
        gsap.from(Array.from(section.children), {
          opacity: 0,
          y: 60,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        });
      });

      gsap.from('.pillar-card', {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        immediateRender: false,
        scrollTrigger: {
          trigger: '.pillars-grid',
          start: 'top 85%',
        },
      });

      gsap.from('.cta-section h2', {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        immediateRender: false,
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

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
              <li key={i}><strong>{item.strong}</strong> — {item.text}</li>
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <div className="new-design-root">
      {/* NAVBAR */}
      <nav className="navbar">
         <a className="logo-wrap" href="#">
           <div className="logo-circle">
             <img src={withBase('/images/logo.png')} alt="Orange Hat Childcare Foundation logo" />
           </div>
           <div className="logo-text">
             Orange Hat Childcare Foundation
             <span>Nigeria</span>
           </div>
         </a>

        <ul className="nav-links">
          <li><a href="#programs">Programs</a></li>
          <li><a href="#staff">Our Team</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Donate / Partner</a>

        <div className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#programs" onClick={closeMenu}>Programs</a>
        <a href="#staff" onClick={closeMenu}>Our Team</a>
        <a href="#impact" onClick={closeMenu}>Impact</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>Donate / Partner</a>
      </div>

       {/* HERO */}
         <section id="hero" className="hero fade-in">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url('${withBase('/images/holiday.jpeg')}')` }}
          ></div>
         <div className="hero-content">
           <div className="hero-text">
             <div className="hero-eyebrow">Faith · Purpose · Transformation</div>
             <h1 className="hero-h1">
               Turning Potential<br/>into <em>Purposeful</em><br/>Living
             </h1>
             <p className="hero-sub">
                Orange Hat Childcare Foundation is a faith-based NGO in Nigeria, equipping vulnerable youth and women
               with the education, skills, and spiritual grounding they need to build dignified, independent lives.
             </p>
             <div className="hero-btns">
                <a href="#programs" className="btn-primary cta-button">Explore Our Programs</a>
               <a href="#contact" className="btn-ghost">Partner With Us</a>
             </div>
           </div>
         </div>
       </section>

       {/* MISSION & VISION STRIP */}
       <div id="mission-strip" className="fade-in">
        <div className="mission-quote reveal">
          <div className="section-tag" style={{color: 'var(--gold)', marginBottom: '20px'}}>Vision</div>
          <p>"We envision a place where healthy, gospel-rooted interactions and engaging learning activities inspire hope, healing, and wholeness that strengthen and build families and transform communities."</p>
        </div>
        <div className="mission-desc reveal">
          <div className="section-tag" style={{color: 'var(--gold)', marginBottom: '20px'}}>Mission</div>
          <p>
            The Orange Hat Childcare Foundation is committed to providing holistic Christ-centered support to underserved demographics through bridging the educational gap, academic sponsorship and creative expression for children and youth.
          </p>
          <p style={{marginTop: '10px'}}>
            We facilitate empowerment through skill acquisition, learning, technologies, intentional residential homes, Christian discipleship, mentorship and rehabilitation for vulnerable youth.
          </p>
        </div>
      </div>

        {/* PROGRAMS */}
        <section id="programs" className="pillars-grid fade-in">
        <div className="programs-header reveal">
          <div className="section-tag">What We Do</div>
          <h2 className="section-h2">Our <em>Programs</em></h2>
          <p className="section-lead">
            {programs.length} distinct initiatives designed to meet people exactly where they are — and carry them further than they imagined.
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
                        {isActive ? 'Hide details' : 'Tap to read more'}
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

       {/* IMPACT */}
       <section id="impact" className="fade-in">
        <div className="reveal">
          <div className="section-tag">Our Reach</div>
          <h2 className="section-h2">Changing Lives, <em>Measurably</em></h2>
        </div>
        <div className="impact-grid reveal">
          <div className="impact-stat"><div className="impact-num">{programs.length}+</div><div className="impact-label">Active Programs</div></div>
          <div className="impact-stat"><div className="impact-num">9</div><div className="impact-label">Dedicated Staff</div></div>
          <div className="impact-stat"><div className="impact-num">20+</div><div className="impact-label">Annual Volunteers</div></div>
          <div className="impact-stat"><div className="impact-num">5</div><div className="impact-label">Weeks of Summer Programming</div></div>
          <div className="impact-stat"><div className="impact-num">2yr</div><div className="impact-label">Rooted House Journey</div></div>
        </div>
      </section>

       {/* STAFF */}
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
                  '✦'
                )}
              </div>
              <div className="staff-name">{member.name}</div>
              <div className="staff-role">{member.role}</div>
            </div>
          ))}
        </div>

        {/* Team photo / video placeholder */}
        <div className="staff-video-placeholder reveal" style={{marginTop: '48px'}}>
          <div className="vid-icon">🎥</div>
          <p><strong style={{color:'rgba(255,255,255,.8)'}}>Team Photo &amp; Intro Video</strong><br/>
          A group photo of all staff and a welcome video from the team will appear here.<br/>
          Please upload your team photo and video to replace this placeholder.</p>
        </div>
      </section>

       {/* CONTACT */}
        <section id="contact" className="cta-section fade-in">
        <div className="contact-left reveal">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-h2">Partner With<br/><em>Orange Hat Childcare Foundation</em></h2>
          <p className="section-lead">
            Whether you'd like to volunteer, donate, sponsor a student, or simply find out more about our work — we'd love to hear from you.
          </p>

          <div className="contact-item" style={{marginTop: '36px'}}>
            <div className="contact-icon">✉️</div>
            <a href="mailto:orangehatjoy@gmail.com">orangehatjoy@gmail.com</a>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <span>Nigeria (Jos, Plateau State)</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🕊️</div>
            <span>Faith-Based · Community-Driven · Christ-Centered</span>
          </div>
        </div>

        <div className="contact-form reveal">
          <form onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label>I want to…</label>
              <select>
                <option>Donate / Give financially</option>
                <option>Volunteer my time</option>
                <option>Sponsor a student</option>
                <option>Partner with Orange Hat Childcare Foundation</option>
                <option>Learn more about a program</option>
                <option>Other enquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us a bit about yourself and how you'd like to help…" required></textarea>
            </div>
            <button type="submit" className="form-submit">Send Message →</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="logo-text">
          Orange Hat Childcare Foundation
          <span>Nigeria</span>
        </div>
        <p>© {new Date().getFullYear()} Orange Hat Childcare Foundation. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#programs">Programs</a></li>
          <li><a href="#staff">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default HomePage;
