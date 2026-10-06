"use client";

import { FormEvent, useState } from "react";

const whatsapp = "923227180756";
const waLink = (message = "Hi Mehar, I want to discuss a website project.") => `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

const projects = [
  ["01", "MF FutureTech", "Personal brand website", "https://mf-futuretech.netlify.app/"],
  ["02", "Tileather", "Business website", "https://tileather.wuaze.com/"],
  ["03", "Madina Family Restaurant", "Restaurant website", "https://madina-familyresturant.netlify.app/"],
  ["04", "Beauty Paulo R", "Beauty brand website", "https://beautypaulor.wuaze.com/"],
];

const demos = [
  ["Cars Show", "https://cars-show-demo.netlify.app/"],
  ["Birthday Website", "https://birthday-websitedemo.netlify.app/"],
  ["Restaurant", "https://resturants-demo-website.netlify.app/"],
  ["Gym Website", "https://gymwebsitesitedemo.netlify.app/"],
  ["Sorry Demo", "https://sorrrydemo.netlify.app/"],
];

export default function Home() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hi Mehar, I want to discuss a project.\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nMessage: ${data.get("message")}`;
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return <main>
    <header className="header" id="top">
      <a className="brand" href="#top"><span>MF</span><b>FUTURETECH</b></a>
      <nav><a href="#top">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#company">Company</a><a href="#social">Social</a></nav>
      <a className="header-cta" href={waLink()} target="_blank" rel="noreferrer">Let&apos;s connect <span>↗</span></a>
    </header>

    <section className="hero wrap">
      <div className="hero-copy"><p className="eyebrow">WEB DESIGNER · SEO PRACTITIONER · DIGITAL FREELANCER</p><h1>Building digital<br /><em>ideas that matter.</em></h1><p className="intro">I&apos;m Mehar Faheem — a web designer and SEO expert from Kasur, helping people and businesses turn their ideas into clean, useful, and high-performing digital experiences.</p><div className="hero-buttons"><a className="primary" href={waLink("Hi Mehar, I would like to work with you.")} target="_blank" rel="noreferrer">Let&apos;s talk on WhatsApp ↗</a><a className="secondary" href="#projects">View my projects ↓</a></div><div className="hero-meta"><span><b>18</b> years old</span><span><b>Kasur</b> Punjab, Pakistan</span><span><b>2026</b> building forward</span></div></div>
      <div className="portrait-card"><div className="portrait-grid" /><div className="portrait-letter">MF<span>.</span></div><div className="portrait-caption"><span>MEHAR FAHEEM</span><b>CREATIVE DIGITAL WORK</b></div><div className="floating-chip">Available<br /><strong>for work</strong> <i>↗</i></div></div>
    </section>

    <div className="ticker"><span>WEB DESIGN</span><b>✳</b><span>WORDPRESS</span><b>✳</b><span>SEO STRATEGY</span><b>✳</b><span>FRONT-END CODE</span><b>✳</b><span>ETSY</span></div>

    <section className="section wrap about" id="about"><div className="section-label">01 / GET TO KNOW ME</div><div className="about-grid"><h2>About<br /><em>Mehar Faheem</em></h2><div className="about-copy"><p className="large">Hello! I&apos;m <strong>Mehar Faheem</strong>, an 18-year-old web designer, SEO practitioner, and digital freelancer from Kasur, Punjab, Pakistan.</p><p>My journey in technology is driven by a passion for designing clean user experiences and exploring modern digital tools. I specialize in front-end website creation using HTML, CSS, and JavaScript, alongside content management platforms like WordPress.</p><p>Alongside web creation, I study and implement practical Search Engine Optimization strategies to help digital properties build a strong technical foundation and stand out in search engines. My objective is to consistently build functional, high-performing websites while expanding my technical skills across modern digital services and freelancer workflows.</p></div></div></section>

    <section className="section skills-section" id="skills"><div className="section-label">02 / WHAT I KNOW</div><div className="section-title"><h2>Skills &amp; technical<br /><em>knowledge.</em></h2><p>Practical skills, learned through building real websites and helping ideas move from concept to launch.</p></div><div className="skill-grid"><article><span>01</span><h3>Web Designing</h3><p>Responsive, clean and user-focused websites designed to look confident on every screen.</p><div className="skill-tags">HTML · CSS · JavaScript</div></article><article><span>02</span><h3>WordPress</h3><p>Flexible content-managed sites that are easy to update, grow, and hand over.</p><div className="skill-tags">Themes · Pages · Setup</div></article><article><span>03</span><h3>SEO Fundamentals</h3><p>Solid foundations that make websites easier for search engines and real people to understand.</p><div className="skill-tags">On-page · Local SEO</div></article><article><span>04</span><h3>Etsy Expert</h3><p>Thoughtful shop presentation, product structure, and digital workflows for online sellers.</p><div className="skill-tags">Listings · Store setup</div></article></div></section>

    <section className="section services" id="services"><div className="section-label">03 / PROFESSIONAL DIGITAL SERVICES</div><div className="service-list"><div><span>01</span><h3>Web Design &amp; Development</h3><p>From a personal portfolio to a business website, I create responsive digital homes that feel clear, modern, and true to the brand.</p><a href={waLink("Hi Mehar, I need help with web design.")} target="_blank" rel="noreferrer">Discuss a website ↗</a></div><div><span>02</span><h3>SEO &amp; Search Visibility</h3><p>I improve the details behind a website — structure, on-page content, local signals, and the essentials that help the right audience find you.</p><a href={waLink("Hi Mehar, I need help with SEO.")} target="_blank" rel="noreferrer">Discuss SEO ↗</a></div><div><span>03</span><h3>WordPress &amp; Etsy Support</h3><p>Practical setup and support for creators, small businesses, and sellers who need a reliable digital foundation.</p><a href={waLink("Hi Mehar, I need help with WordPress or Etsy.")} target="_blank" rel="noreferrer">Start a conversation ↗</a></div></div></section>

    <section className="section projects" id="projects"><div className="section-label">04 / FEATURED WEB PROJECTS</div><div className="section-title"><h2>Selected work,<br /><em>made with purpose.</em></h2><p>A few websites and digital experiences from my growing portfolio.</p></div><div className="project-grid">{projects.map(([num, title, type, url]) => <a className="project-card" href={url} target="_blank" rel="noreferrer" key={title}><div className="project-art"><span>{num}</span><b>{title.split(" ").map(word => word[0]).join("")}</b><i>↗</i></div><small>{type}</small><h3>{title}</h3></a>)}</div></section>

    <section className="section demos"><div className="section-label">05 / DEMO COLLECTION</div><div className="demo-heading"><h2>More things<br /><em>to explore.</em></h2><p>Concepts and demo builds that show range across different industries and moments.</p></div><div className="demo-list">{demos.map(([name, url], i) => <a href={url} target="_blank" rel="noreferrer" key={name}><span>0{i + 1}</span><b>{name}</b><i>View demo ↗</i></a>)}</div></section>

    <section className="company" id="company"><div className="company-mark">MF<span>FT</span></div><div><div className="section-label">06 / MY COMPANY</div><h2>About <em>MF FutureTech</em></h2><p>MF FutureTech is Mehar Faheem&apos;s digital company — a small, focused space for web design, SEO, and modern digital services. The goal is simple: build useful work, keep learning, and help businesses show up better online.</p><a className="primary" href="https://mf-futuretech.netlify.app/" target="_blank" rel="noreferrer">Visit company website ↗</a></div></section>

    <section className="section social" id="social"><div className="section-label">07 / STAY CONNECTED</div><div className="social-heading"><h2>Follow my<br /><em>social accounts.</em></h2><p>See new projects, experiments, and updates from my creative journey.</p></div><div className="social-grid"><a href="https://www.instagram.com/meharfaheem.pk?stkn=NWE5MngwMmk4anJ2" target="_blank" rel="noreferrer"><span>Instagram</span><b>@meharfaheem.pk ↗</b></a><a href="https://www.facebook.com/share/19Pbwd29Wp/" target="_blank" rel="noreferrer"><span>Facebook</span><b>Mehar Faheem Official ↗</b></a><a href="https://www.tiktok.com/@meharfaheem.pk?_r=1&_t=ZS-99v1QEVwueb" target="_blank" rel="noreferrer"><span>TikTok</span><b>@meharfaheem.pk ↗</b></a></div></section>

    <section className="contact wrap"><div><div className="section-label">08 / HAVE A PROJECT?</div><h2>Let&apos;s make<br /><em>something useful.</em></h2><p>Have an idea, a website that needs improvement, or simply want to ask a question? I&apos;d love to hear from you.</p><a className="contact-link" href={waLink()} target="_blank" rel="noreferrer">WhatsApp · 0322 7180756 ↗</a><a className="contact-link" href="mailto:mf.futuretech.pk@gmail.com">mf.futuretech.pk@gmail.com ↗</a></div><form onSubmit={submit}><label>Your name<input name="name" required placeholder="Mehar" /></label><label>Email address<input name="email" type="email" required placeholder="you@email.com" /></label><label>How can I help?<textarea name="message" required placeholder="Tell me a little about your project..." /></label><button className="primary" type="submit">{sent ? "Message ready in WhatsApp ↗" : "Send inquiry ↗"}</button></form></section>

    <footer><a className="brand" href="#top"><span>MF</span><b>FUTURETECH</b></a><p>Web design · SEO · digital growth</p><small>© 2026 MF FutureTech · Kasur, Pakistan</small></footer>
  </main>;
}
