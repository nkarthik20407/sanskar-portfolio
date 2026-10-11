import { useEffect, useRef, useState } from "react";

import {
  ArrowDown,
  ArrowRight,
  Code2,
  GraduationCap,
  Layers,
  Lightbulb,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";


const skills = [
  { name: "HTML & CSS", note: "Web design fundamentals", icon: "01" },
  { name: "JavaScript", note: "Learning web interactivity", icon: "02" },
  { name: "React", note: "Exploring component-based UI", icon: "03" },
  { name: "Problem Solving", note: "Growing step by step", icon: "04" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
const avatarRef = useRef(null);

const handleAvatarMove = (event) => {
  const card = avatarRef.current;
  if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;

  const rotateY = (x - 0.5) * 18;
  const rotateX = (0.5 - y) * 18;

  card.style.transform =
    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`;
};

const resetAvatar = () => {
  if (avatarRef.current) {
    avatarRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }
};
  const closeMenu = () => setMenuOpen(false);

const roles = [
  "Student",
  "Aspiring Developer",
  "Creative Thinker",
  "Lifelong Learner",
];

const [roleIndex, setRoleIndex] = useState(0);
const [typedText, setTypedText] = useState("");
const [deleting, setDeleting] = useState(false);

useEffect(() => {
  const currentRole = roles[roleIndex];

  const timer = setTimeout(() => {
    if (!deleting) {
      if (typedText.length < currentRole.length) {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      } else {
        setTimeout(() => setDeleting(true), 900);
      }
    } else if (typedText.length > 0) {
      setTypedText(typedText.slice(0, -1));
    } else {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
  }, deleting ? 45 : 90);

  return () => clearTimeout(timer);
}, [typedText, deleting, roleIndex]);

useEffect(() => {
  const elements = document.querySelectorAll(
    ".content-section, .contact-inner, .journey-item, .skill-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => {
    element.classList.add("reveal-on-scroll");
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">S.</span>
          <span>
            SANSKAR<span className="brand-light"> PATIL</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Journey", "#journey"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's Talk <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="status-pill">
              <span className="status-dot" />
              STUDENT · ALWAYS LEARNING
            </div>

            <p className="eyebrow">HEY THERE, I'M</p>
            <h1>
              Sanskar
              <br />
              <span>Patil.</span>
            </h1>

            <h2>
             
<span className="typing-role">
  {typedText}
  <span className="typing-cursor">|</span>
</span>

            </h2>

            <p className="hero-description">
              Exploring technology, building my skills, and turning curiosity
              into something meaningful. This is where my journey begins.
            </p>

            <div className="hero-actions">
              <a href="#about" className="button-primary">
                Discover My Story <ArrowRight size={17} />
              </a>
              <a href="#contact" className="button-secondary">
                Get in Touch
              </a>
            </div>

            <a href="#about" className="scroll-cue">
              <ArrowDown size={15} /> SCROLL TO EXPLORE
            </a>
          </div>

          <div className="hero-art" aria-label="Sanskar Patil initials">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-glow" />
            <div
  className="profile-card"
  ref={avatarRef}
  onMouseMove={handleAvatarMove}
  onMouseLeave={resetAvatar}
  onTouchEnd={resetAvatar}
>
              <div className="card-top">
                <span className="mini-dot" />
                <span>PERSONAL PORTFOLIO</span>
                <span className="card-number">SP / 01</span>
              <div className="holo-ring holo-ring-one" />
<div className="holo-ring holo-ring-two" />

<div className="avatar-particles" aria-hidden="true">
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
</div>
              </div>
              
<div className="photo-frame">
  <img
    className="profile-photo"
    src="/Profile.png"
    alt="Sanskar Patil"
  />
  <div className="photo-scanline" />
  <span className="photo-badge">SP · DEVELOPER</span>
</div>

              <div className="card-bottom">
                <span>CREATIVE MINDSET</span>
                <Sparkles size={18} />
              </div>
            </div>
            <div className="floating-chip chip-top">
              <Code2 size={17} /> <span>Learning by doing</span>
            </div>
            <div className="floating-chip chip-bottom">
              <Lightbulb size={17} /> <span>Ideas in progress</span>
            </div>
            <span className="decor decor-one">✳</span>
            <span className="decor decor-two">+</span>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span className="ticker-group" key={i}>
                LEARN <b>✳</b> BUILD <b>✳</b> EXPLORE <b>✳</b> IMPROVE <b>✳</b>
                CREATE <b>✳</b> REPEAT <b>✳</b>
              </span>
            ))}
          </div>
        </div>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 — A LITTLE ABOUT ME</p>
            <h2>
              Curious by nature.
              <br />
              <span className="gradient-text">Driven to grow.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-icon">
              <GraduationCap size={36} />
              <span>THE JOURNEY STARTS HERE</span>
            </div>
            <div className="about-copy">
              <p>
                Hey! I'm <strong>Sanskar Patil</strong>, a student with an
                interest in technology, development, and creative problem
                solving.
              </p>
              <p>
                I'm focused on learning new things, strengthening my
                fundamentals, and gradually turning what I learn into real work.
                I believe consistency matters more than perfection.
              </p>
              <p className="muted">
                This portfolio will grow alongside me. One skill, one idea, and
                one step at a time.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">02 — MY TOOLKIT</p>
              <h2>
                Skills I'm
                <br />
                <span className="gradient-text">working on.</span>
              </h2>
              <p className="section-description">
                A growing toolkit. I'll keep improving these skills as I learn
                and practise.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card-top">
                    <span>{skill.icon}</span>
                    <Layers size={19} />
                  </div>
                  <h3>{skill.name}</h3>
                  <p>{skill.note}</p>
                  <div className="skill-line">
                    <span />
                  </div>
                </article>
              ))}
            </div>
            <p className="edit-note">
              Note: Update this list to match your actual skills and learning
              progress.
            </p>
          </div>
        </section>

        <section className="content-section section-wrap" id="journey">
          <div className="section-heading">
            <p className="eyebrow">03 — THE ROAD AHEAD</p>
            <h2>
              My journey,
              <br />
              <span className="gradient-text">in progress.</span>
            </h2>
          </div>

          <div className="journey-list">
            <article className="journey-item">
              <span className="journey-number">01</span>
              <div>
                <span className="journey-tag">THE FOUNDATION</span>
                <h3>Learn the fundamentals</h3>
                <p>Understand the basics and develop a strong foundation.</p>
              </div>
              <Code2 className="journey-icon" size={25} />
            </article>
            <article className="journey-item">
              <span className="journey-number">02</span>
              <div>
                <span className="journey-tag">THE PROCESS</span>
                <h3>Practise consistently</h3>
                <p>Experiment, solve problems, and learn from mistakes.</p>
              </div>
              <Lightbulb className="journey-icon" size={25} />
            </article>
            <article className="journey-item">
              <span className="journey-number">03</span>
              <div>
                <span className="journey-tag">THE FUTURE</span>
                <h3>Turn knowledge into action</h3>
                <p>Build real things when I'm ready and keep improving.</p>
              </div>
              <Sparkles className="journey-icon" size={25} />
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner section-wrap">
            <p className="eyebrow">04 — LET'S CONNECT</p>
            <h2>
              Every journey
              <br />
              starts with a <span className="gradient-text">hello.</span>
            </h2>
            <p>
              Have an idea, want to connect, or just want to say hi? My inbox is
              open.
            </p>
            <a className="button-primary" href="mailto:patilsanskar20@outlook.com">
              <Mail size={17} /> Say Hello <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">S.</span>
          <span>
            SANSKAR<span className="brand-light"> PATIL</span>
          </span>
        </a>
        <p>Made with curiosity & a little bit of code.</p>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/sanskar-patil-390531381"
          target="_blank"
          rel="noreferrer"
          aria-label="Sanskar Patil on LinkedIn"
        >
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>in</span>
        </a>
        <span className="copyright">© {new Date().getFullYear()} SP</span>
      </footer>
    </div>
  );
}

export default App;
