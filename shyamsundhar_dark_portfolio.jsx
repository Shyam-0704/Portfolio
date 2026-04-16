export default function Portfolio() {
  const skills = {
    "Application & Product Security": [
      "Web Application Security",
      "API Security",
      "Threat Modeling",
      "OWASP Top 10",
      "Secure Architecture Review",
      "API Authentication (HMAC)"
    ],
    "Cloud & Infrastructure": [
      "Cloudflare",
      "ModSecurity",
      "AWS Inspector",
      "AWS GuardDuty",
      "AWS Security Hub",
      "SIEM Log Analysis"
    ],
    "DevSecOps & Automation": [
      "Jenkins",
      "SonarQube",
      "Dependency Scanning",
      "CI/CD Security",
      "Python Security Automation",
      "REST APIs"
    ],
    "Tools & Programming": [
      "Burp Suite",
      "Postman",
      "Git",
      "Docker",
      "Android Studio",
      "VS Code",
      "Python",
      "JavaScript",
      "Bash"
    ]
  };

  const experience = [
    "Performed threat modeling and security testing for sprint features and releases.",
    "Conducted web and API security testing using Burp Suite and Postman.",
    "Implemented API request authentication and anti-tampering using HMAC and timestamp validation.",
    "Integrated security checks into CI/CD pipelines using SonarQube and dependency scanning.",
    "Monitored Cloudflare logs and security events to identify anomalies and suspicious traffic.",
    "Collaborated with developers to improve secure coding practices and remediation.",
    "Supported ISO 27001 risk assessment, audits, and security documentation."
  ];

  const projects = [
    {
      title: "IP Reputation-Based Threat Detection System",
      description:
        "Built an automated system to detect and block malicious IPs using threat intelligence APIs, dynamic allowlist/banlist logic, and real-time alerting."
    },
    {
      title: "API Request Authentication & Anti-Tampering",
      description:
        "Designed and documented a request authentication flow using HMAC signatures, endpoint and method binding, and timestamp validation to reduce tampering and replay risks."
    }
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "Python Certification"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-6xl px-6 py-10 md:px-8 lg:px-10">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                Application Security Engineer
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Shyamsundhar S
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                Junior Security Engineer focused on application security, web and API testing,
                threat modeling, and DevSecOps integration. I work across sprint security validation,
                secure SDLC practices, API protection mechanisms, and cloud security monitoring.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2">Coimbatore, India</span>
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2">~2 Years Experience</span>
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2">AppSec • DevSecOps • Cloud Security</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:shyam.sam0704@gmail.com"
                  className="rounded-2xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
                >
                  Contact Me
                </a>
                <a
                  href="https://linkedin.com/in/shyamsundhar-s"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Shyam-0704"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <h2 className="text-xl font-semibold text-white">Quick Snapshot</h2>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-slate-400">Current Focus</p>
                  <p className="mt-1 text-white">Threat Modeling, Sprint Release Security, API Security</p>
                </div>
                <div>
                  <p className="text-slate-400">DevSecOps</p>
                  <p className="mt-1 text-white">SonarQube, Dependency Scanning, Secure SDLC Support</p>
                </div>
                <div>
                  <p className="text-slate-400">Cloud Security</p>
                  <p className="mt-1 text-white">Cloudflare Monitoring, AWS Inspector, GuardDuty, Security Hub</p>
                </div>
                <div>
                  <p className="text-slate-400">Methodologies</p>
                  <p className="mt-1 text-white">OWASP Top 10, STRIDE, MITRE ATT&CK, NIST</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white">About Me</h2>
            <p className="mt-4 leading-7 text-slate-300">
              I primarily work on application security activities within sprint cycles, including
              threat modeling for premium sprint tasks, security testing for sprint releases, and
              collaborating with developers to implement secure features. I also contribute to
              DevSecOps through dependency and code scanning, review Cloudflare events and logs,
              support documentation, participate in team security discussions, and continuously
              expand my knowledge in modern security practices.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-semibold text-white">Certifications</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {certifications.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Professional Experience</h2>
          <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Security Engineer</h3>
                <p className="text-slate-400">Span Technology Services Pvt Ltd</p>
              </div>
              <div className="text-sm text-cyan-300">2025 – Present</div>
            </div>
            <ul className="mt-5 grid gap-3 text-slate-300 md:grid-cols-2">
              {experience.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 leading-6">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Junior Security Intern</h3>
                <p className="text-slate-400">Prompt InfoTech Pvt Ltd</p>
              </div>
              <div className="text-sm text-slate-300">6 Months</div>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Assisted in web application security testing and vulnerability identification.</li>
              <li>Gained hands-on experience with OWASP Top 10 vulnerabilities.</li>
              <li>Used Burp Suite for testing and analysis.</li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Projects</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-black/20 p-6 transition hover:-translate-y-1 hover:bg-black/30"
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
          <h2 className="text-2xl font-semibold text-white">Skills</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-3xl border border-white/10 bg-black/20 p-6">
                <h3 className="text-lg font-semibold text-white">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 p-8 text-center">
          <h2 className="text-2xl font-semibold text-white">Let’s Connect</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
            I’m currently exploring opportunities in Application Security, Product Security,
            and related cybersecurity roles where I can contribute to secure SDLC, threat modeling,
            testing, and continuous security improvement.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shyam.sam0704@gmail.com"
              className="rounded-2xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/shyamsundhar-s"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              View LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
