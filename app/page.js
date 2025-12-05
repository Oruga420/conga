"use client";

const summary =
  "Visionary Software Architect with 15+ years of experience in distributed systems, automation, and platform engineering. Currently focused on architecting foundational GenAI layers for enterprise environments. Expert in bridging the gap between hype and production-ready systems, utilizing GCP, AWS, and Azure. Proven success in driving AI adoption (47% to 97%), reducing operational costs by over $1M, and leading technical strategy for scalable, secure AI platforms. A recognized thought leader dedicated to mentoring teams and fostering community innovation.";

const expertise = [
  "LLMs & RAG",
  "Agentic Workflows",
  "MCP Servers",
  "AI Governance",
  "Cloud (GCP, AWS, Azure)",
  "Next.js & FastAPI",
  "Automation & DevOps",
  "Salesforce (AI Associate/Admin)",
  "Platform Engineering",
  "Technical Strategy",
];

const experiences = [
  {
    role: "AI Solutions Architect",
    company: "Assent",
    location: "Canada",
    date: "Feb 2025 - Present",
    bullets: [
      "Architected the company's GenAI stack on a regulated compliance platform while leveraging models like OpenAI and Gemini via GCP/AWS.",
      "Designed and deployed agentic workflows and internal tools that replaced repetitive tasks, saving the company over 20,000 man-hours and $1M+ in costs within one year.",
      "Drove internal AI adoption from 47% to 97% by creating governance frameworks and documentation that empowered admins to use AI tools safely.",
      "Built custom MCP servers to expose data and tools safely to AI agents, moving beyond simple chatbots to complex, multi-step execution engines.",
    ],
  },
  {
    role: "AI Solutions Architect",
    company: "Sesh",
    location: "Toronto, Ontario",
    date: "Nov 2021 - Present",
    bullets: [
      "Architected and shipped over 120 GenAI applications and 90+ chatbots for 30+ diverse clients, solving real-world operational problems.",
      "Led AI training and webinars for communities like Latinas in Tech and Somos Latinos in Tech Ottawa; manage a 100+ person community focused on AI education.",
      "Built AI-ready websites and marketing sites using Next.js and Vercel, wired directly into automation backends for immediate lead conversion.",
    ],
  },
  {
    role: "Salesforce Consultant",
    company: "Online Business Systems",
    location: "Toronto, Ontario",
    date: "Jun 2024 - Nov 2024",
    bullets: [
      "Led the architecture and configuration of Salesforce Agentforce (AI Copilots), defining prompts, actions, and data security policies.",
      "Designed reusable automation patterns to align sales and marketing teams, ensuring scalability for future AI features.",
    ],
  },
  {
    role: "Salesforce Manager & Platform Lead",
    company: "Globalization Partners",
    location: "Ontario, Canada",
    date: "Nov 2018 - Nov 2023",
    bullets: [
      "Managed a complex Salesforce environment for 1,000+ users, overseeing the architectural transition from simple workflows to advanced, data-driven automation.",
      "Pioneered the \"GIA\" internal chatbot and introduced LLM-assisted development workflows, ensuring governance and compliance during early AI adoption.",
    ],
  },
  {
    role: "Project Manager",
    company: "Amstar DMC",
    location: "Mexico",
    date: "May 2016 - Nov 2018",
    bullets: [
      "Managed complex integration projects involving Java, PHP, and C# across booking engines and CRMs, laying the foundation for understanding high-scale data movement.",
      "Led agile teams of up to 18 people, managing budgets up to $700k and ensuring rigorous QA/Risk management.",
    ],
  },
];

const education = [
  {
    title: "Ingenieria en Sistemas (Systems Engineering)",
    school: "Universidad Marista de Merida",
    date: "2004 – 2007",
  },
];

const certifications = [
  "Salesforce Certified AI Associate",
  "Salesforce Certified Administrator (SCA)",
];

const community = [
  "Frequent speaker on GenAI workflows and automation for tech communities.",
  "Maintained repository of 100+ shipped GenAI projects demonstrating practical application of LLMs and agents.",
];

export default function Home() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <main>
      <div className="page">
        <div className="floating-blobs" aria-hidden>
          <div className="blob one" />
          <div className="blob two" />
          <div className="blob three" />
        </div>
        <div className="content">
          <header className="hero">
            <div className="headline">
              <div className="role">AI Solutions Architect | Salesforce Developer</div>
              <h1>Alejandro De La Mora</h1>
              <p className="summary">{summary}</p>
            </div>
            <div className="contact-card">
              <h3 className="contact-title">Contact</h3>
              <ul className="contact-list">
                <li className="contact-item">
                  Phone: <span>+1 437 243 3693</span>
                </li>
                <li className="contact-item">
                  Email: <span>alex@seshwithfriends.org</span>
                </li>
                <li className="contact-item">
                  LinkedIn: <span>linkedin.com/in/amorac</span>
                </li>
                <li className="contact-item">
                  Website: <span>eloruga.com/about/index.html</span>
                </li>
                <li className="contact-item">
                  GitHub: <span>github.com/Oruga420</span>
                </li>
              </ul>
              <div className="cta-row">
                <button className="btn btn-primary" onClick={handlePrint}>
                  Download PDF
                </button>
              </div>
            </div>
          </header>

          <section className="section">
            <h2>Areas of Expertise</h2>
            <div className="pill-row">
              {expertise.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>

          <div className="divider" />

          <section className="section">
            <h2>Professional Experience</h2>
            <div className="experience-grid">
              {experiences.map((exp) => (
                <article className="card" key={exp.company + exp.role}>
                  <div className="card-header">
                    <div>
                      <h3 className="card-title">
                        {exp.role} — {exp.company}
                      </h3>
                      <p className="card-sub">{exp.location}</p>
                    </div>
                    <p className="card-meta">{exp.date}</p>
                  </div>
                  <ul className="card-list">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <div className="divider" />

          <section className="section">
            <h2>Education & Certifications</h2>
            <div className="two-col">
              <div className="card">
                <h3 className="card-title">Education</h3>
                <ul className="card-list">
                  {education.map((edu) => (
                    <li key={edu.title}>
                      <strong>{edu.title}</strong> — {edu.school} ({edu.date})
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3 className="card-title">Certifications</h3>
                <div className="tag-row">
                  {certifications.map((cert) => (
                    <span className="tag" key={cert}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="divider" />

          <section className="section">
            <h2>Community & Open Source</h2>
            <div className="card">
              <ul className="card-list">
                {community.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
