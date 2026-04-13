import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: '1+', label: 'Years Experience' },
  { number: '5+', label: 'Live Projects' },
  { number: '4+', label: 'Certifications' },
]

const skills = [
  { label: 'Frontend', items: ['React.js', 'Tailwind CSS', 'CSS Modules', 'Responsive UI'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
  { label: 'Database', items: ['MongoDB', 'Supabase', 'Firebase'] },
  { label: 'AI / LLM', items: ['Claude API', 'Prompt Engineering', 'AI Agents', 'Gmail MCP'] },
  { label: 'DevOps', items: ['Vercel', 'Git', 'GitHub', 'CI/CD', 'Vite'] },
  { label: 'Languages', items: ['JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3', 'SQL'] },
]

const certs = [
  'Web Developer Internship Certificate',
  'React.js Developer Certificate',
  'Be10X AI Tools Certificate',
  'O Level Certificate — NIELIT',
]

export default function About() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const skillGroupsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-x-0')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.15 }
    )
    if (leftRef.current) observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)

    // Animate skill groups
    const skillObserver = new IntersectionObserver(
      entries => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-skill-group')
          }
        })
      },
      { threshold: 0.1 }
    )
    skillGroupsRef.current.forEach(group => {
      if (group) skillObserver.observe(group)
    })

    return () => {
      observer.disconnect()
      skillObserver.disconnect()
    }
  }, [])

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-gradient-to-b from-dark to-[#0b1a2d]">
      <style>{`
        @keyframes skillGroupSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes skillBadgeFlip {
          0% {
            opacity: 0;
            transform: scale(0.7) rotateY(90deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateY(0);
          }
        }
        .skill-group {
          opacity: 0;
          transform: translateY(20px);
        }
        .skill-group.animate-skill-group {
          animation: skillGroupSlide 0.5s ease-out forwards;
        }
        .skill-badge-item {
          animation: skillBadgeFlip 0.5s ease-out forwards;
          perspective: 1000px;
        }
      `}</style>

      {/* Background doodle */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.07" stroke="#00d4c0" strokeWidth="1.5" fill="none">
            <circle cx="1100" cy="100" r="30" /><circle cx="1100" cy="100" r="18" /><circle cx="1100" cy="100" r="8" />
            <polygon points="200,600 210,624 234,624 213,638 221,662 200,648 179,662 187,638 166,624 192,624" />
            <rect x="40" y="120" width="45" height="32" rx="4" />
            <line x1="40" y1="136" x2="85" y2="136" />
          </g>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* Left – bio */}
          <div ref={leftRef} className="opacity-0 -translate-x-10 transition-all duration-700">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-accent">me</span>
            </h2>
            <p className="text-secondary text-[0.93rem] leading-[1.85] mb-4">
              I'm a <span className="text-white font-semibold">Full Stack &amp; AI Developer</span> based in Noida, India,
              with 2+ years of hands-on experience building and shipping production-grade MERN stack applications.
            </p>
            <p className="text-secondary text-[0.93rem] leading-[1.85] mb-6">
              I specialize in integrating AI into real-world products — from Claude API-powered resume builders to
              AI email classification agents using Gmail MCP. I manage end-to-end CI/CD pipelines on Vercel and
              love turning ideas into live, working software.
            </p>

            {/* Education */}
            <div className="mb-6 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">Education</p>
              <p className="text-white font-semibold text-sm">B.Sc — Siddharth University</p>
              <p className="text-secondary text-xs mt-0.5">Science · 2025 · Uttar Pradesh, India</p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-8 mb-8">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-extrabold text-accent leading-none">{s.number}</p>
                  <p className="text-[0.72rem] text-secondary mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-3">Certifications</p>
              <ul className="flex flex-col gap-2">
                {certs.map(c => (
                  <li key={c} className="flex items-start gap-2 text-secondary text-[0.82rem]">
                    <i className="fas fa-check-circle text-accent mt-0.5 text-xs" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="btn-primary self-start"
            >
              Let's Work Together <i className="fas fa-arrow-right text-xs" />
            </a>
          </div>

          {/* Right – Premium Skills Illustration */}
          <div ref={rightRef} className="opacity-0 translate-x-10 transition-all duration-700">
            <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-5">Technical Skills</p>
            <div className="flex flex-col gap-5 mb-8">
              {skills.map((group, gIdx) => (
                <div key={group.label} ref={el => skillGroupsRef.current[gIdx] = el} className="skill-group" style={{animationDelay: `${gIdx * 0.1}s`}}>
                  <p className="text-white text-xs font-semibold mb-2 uppercase tracking-wider opacity-60">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, iIdx) => (
                      <span
                        key={item}
                        className="skill-badge-item px-3 py-1 rounded-full text-[0.75rem] font-medium bg-accent/15
                          border border-accent/30 text-accent/90 hover:bg-accent/25 hover:border-accent/50
                          hover:scale-110 transition-all duration-300 cursor-default"
                        style={{animationDelay: `${(gIdx * 0.1) + (iIdx * 0.05)}s`}}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Premium SVG Illustration */}
            <svg
              viewBox="0 0 500 520"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[420px] mx-auto"
              style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 212, 192, 0.12))' }}
            >
              <defs>
                <radialGradient id="aboutGlow" cx="50%" cy="50%" r="45%">
                  <stop offset="0%" stopColor="#00d4c0" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#00d4c0" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a3a5c"/>
                  <stop offset="100%" stopColor="#0d2040"/>
                </linearGradient>
                <linearGradient id="stackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00d4c0"/>
                  <stop offset="100%" stopColor="#0a8e72"/>
                </linearGradient>
                <filter id="skillCardShadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.25"/>
                </filter>
                <style>{`
                  @keyframes bookFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
                  @keyframes bookFloat2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
                  @keyframes bookFloat3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
                  @keyframes bookRotate { 0%,100%{transform:rotateZ(-3deg)} 50%{transform:rotateZ(3deg)} }
                  @keyframes skillFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
                  @keyframes lightPulse { 0%,100%{opacity:0.2} 50%{opacity:0.4} }
                  @keyframes stackRise { 0%{transform:translateY(0)} 100%{transform:translateY(-50px)} }
                  .book1 { animation: bookFloat 4.5s ease-in-out infinite; }
                  .book2 { animation: bookFloat2 5s ease-in-out infinite 0.5s; }
                  .book3 { animation: bookFloat3 4.2s ease-in-out infinite 1s; }
                  .book-rotate { animation: bookRotate 3s ease-in-out infinite; }
                  .skill-badge { animation: skillFloat 3.5s ease-in-out infinite; }
                  .light-glow { animation: lightPulse 3s ease-in-out infinite; }
                  .stack-particle { animation: stackRise 2.5s ease-out infinite; }
                  @keyframes skillOrbit {
                    from{transform:rotate(0deg) translateX(130px) rotate(0deg) scale(1)}
                    to{transform:rotate(360deg) translateX(130px) rotate(-360deg) scale(1)}
                  }
                  .skill-label { animation: skillOrbit 14s linear infinite; }
                `}</style>
              </defs>

              {/* Background glow */}
              <ellipse cx="250" cy="260" rx="200" ry="160" fill="url(#aboutGlow)" className="light-glow"/>

              {/* Ground shadow */}
              <ellipse cx="250" cy="480" rx="120" ry="14" fill="#00d4c0" opacity="0.08"/>

              {/* FLOATING BOOKS */}

              {/* Book 1 - left */}
              <g className="book1">
                <rect x="20" y="80" width="90" height="120" rx="6" fill="url(#bookGrad)" stroke="#00d4c0" strokeWidth="1.2" filter="url(#skillCardShadow)"/>
                <rect x="28" y="88" width="74" height="15" rx="3" fill="#00d4c0" opacity="0.7"/>
                <line x1="28" y1="110" x2="102" y2="110" stroke="#00d4c0" strokeWidth="0.8" opacity="0.3"/>
                <rect x="32" y="118" width="60" height="3" rx="1.5" fill="white" opacity="0.4"/>
                <rect x="32" y="126" width="50" height="3" rx="1.5" fill="white" opacity="0.3"/>
                <rect x="32" y="134" width="65" height="3" rx="1.5" fill="#00d4c0" opacity="0.5"/>
                <rect x="32" y="142" width="55" height="3" rx="1.5" fill="white" opacity="0.25"/>
                <rect x="32" y="150" width="70" height="3" rx="1.5" fill="#a78bfa" opacity="0.4"/>
                <rect x="32" y="158" width="45" height="3" rx="1.5" fill="white" opacity="0.3"/>
                <rect x="32" y="166" width="60" height="3" rx="1.5" fill="#f472b6" opacity="0.4"/>
                <rect x="32" y="174" width="50" height="3" rx="1.5" fill="white" opacity="0.25"/>
                <circle cx="86" cy="93" r="2" fill="#ff5f57"/>
                <circle cx="79" cy="93" r="2" fill="#ffbd2e"/>
                <circle cx="72" cy="93" r="2" fill="#28c840"/>
              </g>

              {/* Book 2 - right */}
              <g className="book2">
                <rect x="380" y="60" width="100" height="140" rx="8" fill="url(#bookGrad)" stroke="#a78bfa" strokeWidth="1.2" filter="url(#skillCardShadow)"/>
                <rect x="388" y="68" width="84" height="18" rx="3" fill="#a78bfa" opacity="0.8"/>
                <line x1="388" y1="95" x2="480" y2="95" stroke="#a78bfa" strokeWidth="0.8" opacity="0.25"/>
                <rect x="392" y="105" width="70" height="3.5" rx="2" fill="white" opacity="0.4"/>
                <rect x="392" y="113" width="60" height="3.5" rx="2" fill="white" opacity="0.3"/>
                <rect x="392" y="121" width="75" height="3.5" rx="2" fill="#a78bfa" opacity="0.5"/>
                <rect x="392" y="129" width="65" height="3.5" rx="2" fill="white" opacity="0.25"/>
                <rect x="392" y="137" width="80" height="3.5" rx="2" fill="#00d4c0" opacity="0.4"/>
                <rect x="392" y="145" width="55" height="3.5" rx="2" fill="white" opacity="0.3"/>
                <rect x="392" y="153" width="70" height="3.5" rx="2" fill="#f472b6" opacity="0.45"/>
                <rect x="392" y="161" width="60" height="3.5" rx="2" fill="white" opacity="0.25"/>
                <rect x="392" y="169" width="75" height="3.5" rx="2" fill="#a78bfa" opacity="0.4"/>
              </g>

              {/* Book 3 - center back */}
              <g className="book3" style={{opacity: 0.7}}>
                <rect x="185" y="140" width="85" height="110" rx="7" fill="url(#bookGrad)" stroke="#22c55e" strokeWidth="1" filter="url(#skillCardShadow)"/>
                <rect x="192" y="148" width="71" height="13" rx="2.5" fill="#22c55e" opacity="0.6"/>
                <line x1="192" y1="168" x2="256" y2="168" stroke="#22c55e" strokeWidth="0.7" opacity="0.2"/>
                <rect x="196" y="177" width="55" height="2.5" rx="1.5" fill="white" opacity="0.3"/>
                <rect x="196" y="184" width="45" height="2.5" rx="1.5" fill="white" opacity="0.25"/>
                <rect x="196" y="191" width="60" height="2.5" rx="1.5" fill="#22c55e" opacity="0.45"/>
              </g>

              {/* SKILL FLOAT BADGES */}

              <g className="skill-badge" transform="translate(40, 320)">
                <rect width="95" height="36" rx="18" fill="#0f2235" stroke="#00d4c0" strokeWidth="1.2" filter="url(#skillCardShadow)"/>
                <circle cx="22" cy="18" r="11" fill="#00d4c0" opacity="0.25"/>
                <circle cx="22" cy="18" r="7" fill="#00d4c0" opacity="0.85"/>
                <text x="42" y="24" fontFamily="Arial" fontSize="10" fontWeight="600" fill="white" opacity="0.85">Frontend</text>
              </g>

              <g className="skill-badge" style={{animationDelay: '0.5s'}} transform="translate(365, 370)">
                <rect width="95" height="36" rx="18" fill="#0f2235" stroke="#22c55e" strokeWidth="1.2" filter="url(#skillCardShadow)"/>
                <circle cx="22" cy="18" r="11" fill="#22c55e" opacity="0.25"/>
                <circle cx="22" cy="18" r="7" fill="#22c55e" opacity="0.8"/>
                <text x="42" y="24" fontFamily="Arial" fontSize="10" fontWeight="600" fill="white" opacity="0.8">Backend</text>
              </g>

              <g className="skill-badge" style={{animationDelay: '1s'}} transform="translate(150, 420)">
                <rect width="95" height="36" rx="18" fill="#0f2235" stroke="#f472b6" strokeWidth="1.2" filter="url(#skillCardShadow)"/>
                <circle cx="22" cy="18" r="11" fill="#f472b6" opacity="0.25"/>
                <circle cx="22" cy="18" r="7" fill="#f472b6" opacity="0.85"/>
                <text x="42" y="24" fontFamily="Arial" fontSize="10" fontWeight="600" fill="white" opacity="0.85">Database</text>
              </g>

              {/* CENTRAL LEARNING ICON */}

              {/* Stack of papers/learning */}
              <g transform="translate(200, 260)">
                {/* Paper stack */}
                <rect x="-35" y="-45" width="70" height="90" rx="4" fill="#1a3a5c" stroke="#00d4c0" strokeWidth="1" opacity="0.9"/>
                <rect x="-32" y="-40" width="64" height="80" rx="3" fill="#0d2a45" stroke="#00d4c0" strokeWidth="0.8" opacity="0.85"/>
                <rect x="-30" y="-35" width="60" height="75" rx="3" fill="url(#stackGrad)" stroke="#00d4c0" strokeWidth="1"/>

                {/* Paper shine */}
                <rect x="-28" y="-30" width="18" height="50" rx="3" fill="white" opacity="0.08"/>

                {/* Lines on paper */}
                <line x1="-25" y1="-20" x2="15" y2="-20" stroke="white" strokeWidth="1" opacity="0.3"/>
                <line x1="-25" y1="-12" x2="20" y2="-12" stroke="white" strokeWidth="1" opacity="0.25"/>
                <line x1="-25" y1="-4" x2="15" y2="-4" stroke="white" strokeWidth="1" opacity="0.2"/>
                <line x1="-25" y1="4" x2="25" y2="4" stroke="#00d4c0" strokeWidth="1.5" opacity="0.4"/>
                <line x1="-25" y1="14" x2="18" y2="14" stroke="white" strokeWidth="1" opacity="0.2"/>
                <line x1="-25" y1="22" x2="20" y2="22" stroke="white" strokeWidth="1" opacity="0.15"/>
                <line x1="-25" y1="30" x2="15" y2="30" stroke="white" strokeWidth="1" opacity="0.2"/>

                {/* Checkmarks on papers */}
                <path d="M-8,42 L-2,48 L8,35" stroke="#00d4c0" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
              </g>

              {/* LIGHT RAYS around learning icon */}
              <g opacity="0.15">
                <line x1="250" y1="140" x2="250" y2="180" stroke="#00d4c0" strokeWidth="1"/>
                <line x1="320" y1="260" x2="280" y2="260" stroke="#00d4c0" strokeWidth="1"/>
                <line x1="180" y1="260" x2="140" y2="260" stroke="#00d4c0" strokeWidth="1"/>
                <line x1="250" y1="340" x2="250" y2="380" stroke="#00d4c0" strokeWidth="1"/>
              </g>

              {/* ORBITING SKILL LABELS */}
              <g className="skill-label" style={{transformOrigin: '250px 260px', animationDelay: '0s'}}>
                <text x="250" y="110" fontFamily="Arial" fontSize="18" fontWeight="700" fill="#00d4c0" textAnchor="middle" opacity="0.9">Frontend</text>
              </g>

              <g className="skill-label" style={{transformOrigin: '250px 260px', animationDelay: '2.8s'}}>
                <text x="370" y="260" fontFamily="Arial" fontSize="18" fontWeight="700" fill="#22c55e" textAnchor="middle" opacity="0.9">Backend</text>
              </g>

              <g className="skill-label" style={{transformOrigin: '250px 260px', animationDelay: '5.6s'}}>
                <text x="250" y="410" fontFamily="Arial" fontSize="18" fontWeight="700" fill="#f472b6" textAnchor="middle" opacity="0.9">Database</text>
              </g>

              <g className="skill-label" style={{transformOrigin: '250px 260px', animationDelay: '8.4s'}}>
                <text x="130" y="260" fontFamily="Arial" fontSize="18" fontWeight="700" fill="#a78bfa" textAnchor="middle" opacity="0.9">AI/LLM</text>
              </g>

              {/* FLOATING SKILL PARTICLES */}
              <circle cx="220" cy="420" r="3.5" fill="#00d4c0" className="stack-particle" opacity="0.75"/>
              <circle cx="250" cy="418" r="2.5" fill="#00d4c0" className="stack-particle" opacity="0.6" style={{animationDelay: '0.8s'}}/>
              <circle cx="280" cy="422" r="3" fill="#00d4c0" className="stack-particle" opacity="0.7" style={{animationDelay: '1.6s'}}/>
              <circle cx="235" cy="425" r="2" fill="#00d4c0" className="stack-particle" opacity="0.55" style={{animationDelay: '0.4s'}}/>

            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}
