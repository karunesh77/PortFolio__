import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const titles = [
    'Full Stack & AI Developer',
    'MERN Stack Developer',
  ]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    requestAnimationFrame(() => el.classList.add('opacity-100', 'translate-y-0'))
  }, [])

  useEffect(() => {
    const currentTitle = titles[textIndex]
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentTitle.length) {
          setCharIndex(charIndex + 1)
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 50 : 80)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, titles])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .typing-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: #00d4c0;
          margin-left: 2px;
          animation: blink 0.7s infinite;
        }
      `}</style>
      <Doodles />

      <div className="max-w-5xl mx-auto px-8 py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text */}
        <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Hello, I am
          </p>
          <h1 className="text-5xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tight mb-2">
            KARUNESH
          </h1>
          <h1 className="text-5xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tight mb-5">
            <span className="text-accent">GUPTA</span>
          </h1>
          <p className="text-accent/80 text-base font-semibold mb-4 tracking-wide h-6 flex items-center">
            {titles[textIndex].substring(0, charIndex)}
            <span className="typing-cursor"></span>
          </p>
          <p className="text-secondary text-[0.93rem] leading-relaxed max-w-md mb-8">
            Building scalable MERN stack applications and integrating AI via Claude API,
            MCP servers, and REST APIs. Proficient in React.js, Node.js, Express.js, and MongoDB.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['React.js', 'Node.js', 'MongoDB', 'Claude API', 'Tailwind CSS'].map(tech => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-[0.72rem] font-semibold border border-accent/30
                  text-accent/80 bg-accent/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://drive.google.com/file/d/1TiIGaW4usot4fX5QtAo3tZvgIEIQfxVE/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <i className="fas fa-download text-sm" /> Resume
            </a>
            <a
              href="https://github.com/karunesh77"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <i className="fab fa-github text-sm" /> GitHub
            </a>
           
          </div>
        </div>

        {/* Ultra Premium Animated Illustration */}
        <div className="flex justify-center">
          <PremiumHeroIllustration />
        </div>
      </div>

      {/* Scroll down */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full border
          border-white/20 flex items-center justify-center text-white/50 hover:border-accent
          hover:text-accent transition-all animate-bounce2"
      >
        <i className="fas fa-chevron-down text-xs" />
      </a>
    </section>
  )
}

function Doodles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="120" r="3" fill="#00d4c0" opacity="0.5" />
        <circle cx="200" cy="60" r="2" fill="#00d4c0" opacity="0.4" />
        <circle cx="350" cy="180" r="3" fill="#00d4c0" opacity="0.3" />
        <circle cx="900" cy="80" r="2" fill="#00d4c0" opacity="0.5" />
        <circle cx="1050" cy="150" r="3" fill="#00d4c0" opacity="0.4" />
        <polygon points="800,100 803,110 813,110 805,117 808,127 800,121 792,127 795,117 787,110 797,110" fill="#00d4c0" opacity="0.4" />
        <polygon points="150,650 152,657 159,657 154,662 156,669 150,665 144,669 146,662 141,657 148,657" fill="#00d4c0" opacity="0.35" />
        <g opacity="0.09" stroke="#00d4c0" strokeWidth="1.5" fill="none">
          <rect x="60" y="200" width="55" height="38" rx="3" />
          <line x1="52" y1="238" x2="123" y2="238" />
          <text x="940" y="600" fontSize="42" fill="#00d4c0" opacity="1" fontFamily="monospace">&lt;/&gt;</text>
          <circle cx="1050" cy="450" r="28" />
          <ellipse cx="1050" cy="450" rx="14" ry="28" />
          <line x1="1022" y1="450" x2="1078" y2="450" />
          <rect x="50" y="380" width="60" height="40" rx="8" />
          <polygon points="65,420 75,435 80,420" />
          <line x1="62" y1="395" x2="98" y2="395" />
          <line x1="62" y1="405" x2="90" y2="405" />
          <path d="M1130,530 Q1150,510 1170,530" />
          <path d="M1122,522 Q1150,495 1178,522" />
          <path d="M1114,514 Q1150,480 1186,514" />
          <circle cx="1150" cy="538" r="3" fill="#00d4c0" />
          <circle cx="300" cy="600" r="18" />
          <rect x="293" y="618" width="14" height="5" rx="2" />
          <line x1="300" y1="578" x2="300" y2="570" />
          <rect x="100" y="500" width="10" height="50" rx="2" transform="rotate(30,105,525)" />
          <polygon points="95,545 115,545 105,560" transform="rotate(30,105,525)" />
        </g>
      </svg>
    </div>
  )
}

function PremiumHeroIllustration() {
  return (
    <svg
      viewBox="0 0 1100 1200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[1024px]"
      style={{ filter: 'drop-shadow(0 40px 80px rgba(0, 212, 192, 0.2))' }}
    >
      <defs>
        {/* PREMIUM GRADIENTS */}
        <radialGradient id="heroGlowPro" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4c0" stopOpacity="0.3"/>
          <stop offset="50%" stopColor="#00d4c0" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#00d4c0" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="screenGlowPro" cx="45%" cy="25%" r="90%">
          <stop offset="0%" stopColor="#2a7a8e"/>
          <stop offset="40%" stopColor="#1a5a8e"/>
          <stop offset="100%" stopColor="#0a1929"/>
        </radialGradient>
        <linearGradient id="torsoPro" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1fbf9f"/>
          <stop offset="50%" stopColor="#00d4c0"/>
          <stop offset="100%" stopColor="#0a9e8a"/>
        </linearGradient>
        <linearGradient id="laptopFramePro" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a3050"/>
          <stop offset="100%" stopColor="#0a1825"/>
        </linearGradient>
        <filter id="premiumShadow">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodOpacity="0.3"/>
        </filter>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <clipPath id="screenClipPro">
          <rect x="360" y="730" width="290" height="160" rx="8"/>
        </clipPath>

        {/* ULTRA ANIMATIONS */}
        <style>{`
          @keyframes charFloatPro {
            0%,100%{transform:translateY(0px)}
            50%{transform:translateY(-18px)}
          }
          @keyframes cardFloatPro {
            0%,100%{transform:translateY(0px) translateX(0px)}
            50%{transform:translateY(-14px) translateX(2px)}
          }
          @keyframes iconOrbitPro {
            from{transform:rotate(0deg) translateX(360px) rotate(0deg) scale(1)}
            to{transform:rotate(360deg) translateX(360px) rotate(-360deg) scale(1)}
          }
          @keyframes badgeFloatPro {
            0%,100%{transform:translateY(0px) rotateZ(0deg)}
            50%{transform:translateY(-10px) rotateZ(2deg)}
          }
          @keyframes cursorBlinkPro {
            0%,100%{opacity:1;box-shadow:0 0 8px #00d4c0}
            50%{opacity:0.3}
          }
          @keyframes pulseGlowPro {
            0%,100%{opacity:0.15}
            50%{opacity:0.4}
          }
          @keyframes particleRisePro {
            0%{transform:translateY(0) translateX(0) scale(1);opacity:1}
            100%{transform:translateY(-140px) translateX(var(--tx,0)) scale(0.3);opacity:0}
          }
          @keyframes screenFlickerPro {
            0%,100%{opacity:1}
            50%{opacity:0.96}
          }
          @keyframes rotateSmooth {
            from{transform:rotate(0deg)}
            to{transform:rotate(360deg)}
          }
          @keyframes laptopGloss {
            0%,100%{opacity:0.05}
            50%{opacity:0.15}
          }
          .char-pro { animation: charFloatPro 5.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; }
          .card1 { animation: cardFloatPro 4.2s ease-in-out infinite; }
          .card2 { animation: cardFloatPro 4.8s ease-in-out infinite 0.6s; }
          .card3 { animation: cardFloatPro 4s ease-in-out infinite 1.2s; }
          .icon1 { animation: iconOrbitPro 14s linear infinite; transform-origin: 550px 600px; }
          .icon2 { animation: iconOrbitPro 14s linear infinite 4.67s; transform-origin: 550px 600px; }
          .icon3 { animation: iconOrbitPro 14s linear infinite 9.34s; transform-origin: 550px 600px; }
          .badge1 { animation: badgeFloatPro 3.4s ease-in-out infinite 0.3s; }
          .badge2 { animation: badgeFloatPro 4s ease-in-out infinite 0.9s; }
          .badge3 { animation: badgeFloatPro 3.6s ease-in-out infinite 0.15s; }
          .badge4 { animation: badgeFloatPro 4.4s ease-in-out infinite 1.4s; }
          .cursor-pro { animation: cursorBlinkPro 1.2s step-end infinite; }
          .bg-glow-pro { animation: pulseGlowPro 4.5s ease-in-out infinite; }
          .particle-pro { animation: particleRisePro 3s cubic-bezier(0.2, 0.5, 0.5, 0.95) infinite; }
          .screen-glow-pro { animation: screenFlickerPro 3.5s ease-in-out infinite; }
          .gloss-shine { animation: laptopGloss 4s ease-in-out infinite; }
          @keyframes techLabelOrbit {
            from{transform:rotate(0deg) translateX(240px) rotate(0deg) scale(1)}
            to{transform:rotate(360deg) translateX(240px) rotate(-360deg) scale(1)}
          }
          .tech-label { animation: techLabelOrbit 12s linear infinite; }
        `}</style>
      </defs>

      {/* MULTI-LAYER GLOW */}
      <ellipse cx="550" cy="640" rx="480" ry="400" fill="url(#heroGlowPro)" className="bg-glow-pro"/>
      <ellipse cx="550" cy="660" rx="400" ry="320" fill="#00d4c0" opacity="0.03"/>

      {/* GROUND */}
      <ellipse cx="550" cy="1140" rx="300" ry="36" fill="#00d4c0" opacity="0.12"/>
      <ellipse cx="550" cy="1150" rx="260" ry="16" fill="#00d4c0" opacity="0.06"/>

      {/* ORBITING PREMIUM ICONS */}

      <g className="icon1" transform="translate(550, 600)">
        <defs>
          <filter id="iconGlow1"><feGaussianBlur stdDeviation="4" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
        </defs>
        <circle r="64" fill="#0f2235" stroke="#00d4c0" strokeWidth="2.4" strokeOpacity="0.5" filter="url(#iconGlow1)"/>
        <circle r="54" fill="#1a3a5c" opacity="0.7"/>
        <path d="M-16,-10 L10,16 L20,-16 L16,10 L36,4 L16,20 L10,40 L0,16 L-16,24 L-10,0Z" fill="#00d4c0" opacity="0.9" transform="translate(0, 4)"/>
        <circle cx="0" cy="0" r="56" fill="none" stroke="#00d4c0" strokeWidth="1" opacity="0.2"/>
      </g>

      <g className="icon2" transform="translate(550, 600)">
        <circle r="64" fill="#0f2235" stroke="#22c55e" strokeWidth="2.4" strokeOpacity="0.5"/>
        <circle r="54" fill="#1a3a5c" opacity="0.7"/>
        <text x="-20" y="20" fontFamily="Arial" fontSize="56" fontWeight="bold" fill="#22c55e">◆</text>
      </g>

      <g className="icon3" transform="translate(550, 600)">
        <circle r="64" fill="#0f2235" stroke="#f472b6" strokeWidth="2.4" strokeOpacity="0.5"/>
        <circle r="54" fill="#1a3a5c" opacity="0.7"/>
        <text x="-16" y="24" fontFamily="Arial" fontSize="52" fontWeight="bold" fill="#f472b6">∆</text>
      </g>

      {/* PREMIUM CODE CARDS */}

      <g className="card1" transform="translate(30, 140)">
        <rect width="270" height="190" rx="24" fill="#0f2235" stroke="#00d4c0" strokeWidth="2.4" strokeOpacity="0.5" filter="url(#premiumShadow)"/>
        <defs><linearGradient id="cardTopGrad" x1="0%" y1="0%" x2="100%"><stop offset="0%" stopColor="#00d4c0"/><stop offset="100%" stopColor="#0a8e72"/></linearGradient></defs>
        <rect x="24" y="24" width="222" height="20" rx="10" fill="url(#cardTopGrad)" opacity="0.85"/>
        <line x1="24" y1="56" x2="246" y2="56" stroke="#00d4c0" strokeWidth="1.6" opacity="0.2"/>
        <rect x="30" y="72" width="140" height="9" rx="5" fill="#a78bfa" opacity="0.75"/>
        <rect x="30" y="90" width="110" height="9" rx="5" fill="white" opacity="0.35"/>
        <rect x="30" y="108" width="170" height="9" rx="5" fill="#00d4c0" opacity="0.65"/>
        <rect x="30" y="126" width="130" height="9" rx="5" fill="#f472b6" opacity="0.55"/>
        <rect x="30" y="144" width="150" height="9" rx="5" fill="white" opacity="0.3"/>
        <circle cx="226" cy="34" r="5.6" fill="#ff5f57" opacity="0.95"/>
        <circle cx="208" cy="34" r="5.6" fill="#ffbd2e" opacity="0.95"/>
        <circle cx="190" cy="34" r="5.6" fill="#28c840" opacity="0.95"/>
      </g>

      <g className="card2" transform="translate(750, 100)">
        <rect width="300" height="220" rx="24" fill="#0f2235" stroke="#00d4c0" strokeWidth="2.4" strokeOpacity="0.45" filter="url(#premiumShadow)"/>
        <rect x="28" y="28" width="244" height="24" rx="12" fill="#00d4c0" opacity="0.8"/>
        <line x1="28" y1="66" x2="272" y2="66" stroke="#00d4c0" strokeWidth="1.6" opacity="0.15"/>
        <rect x="28" y="86" width="250" height="9" rx="5" fill="#00d4c0" opacity="0.4"/>
        <rect x="28" y="104" width="210" height="9" rx="5" fill="white" opacity="0.32"/>
        <rect x="28" y="122" width="240" height="9" rx="5" fill="#a78bfa" opacity="0.5"/>
        <rect x="28" y="140" width="190" height="9" rx="5" fill="white" opacity="0.27"/>
        <rect x="28" y="158" width="260" height="9" rx="5" fill="#f472b6" opacity="0.45"/>
        <rect x="28" y="176" width="170" height="9" rx="5" fill="white" opacity="0.2"/>
      </g>

      <g className="card3" transform="translate(780, 620)">
        <rect width="250" height="170" rx="22" fill="#0f2235" stroke="#a78bfa" strokeWidth="2.2" strokeOpacity="0.55" filter="url(#premiumShadow)"/>
        <rect x="26" y="26" width="198" height="18" rx="9" fill="#a78bfa" opacity="0.9"/>
        <line x1="26" y1="56" x2="224" y2="56" stroke="#a78bfa" strokeWidth="1.6" opacity="0.2"/>
        <rect x="30" y="74" width="160" height="8" rx="4" fill="white" opacity="0.35"/>
        <rect x="30" y="88" width="190" height="8" rx="4" fill="#f472b6" opacity="0.5"/>
        <rect x="30" y="102" width="170" height="8" rx="4" fill="white" opacity="0.28"/>
        <rect x="30" y="116" width="190" height="8" rx="4" fill="#00d4c0" opacity="0.45"/>
        <rect x="30" y="132" width="140" height="8" rx="4" fill="white" opacity="0.22"/>
      </g>

      {/* TECH BADGES - Ultra Premium */}

      <g className="badge1" transform="translate(24, 620)">
        <rect width="196" height="76" rx="38" fill="#0f2235" stroke="#00d4c0" strokeWidth="2.6" strokeOpacity="0.8" filter="url(#premiumShadow)"/>
        <circle cx="48" cy="38" r="24" fill="#00d4c0" opacity="0.3"/>
        <circle cx="48" cy="38" r="16" fill="#00d4c0" opacity="0.9"/>
        <text x="88" y="54" fontFamily="Arial" fontSize="22" fontWeight="700" fill="white" opacity="0.9">React</text>
      </g>

      <g className="badge2" transform="translate(40, 920)">
        <rect width="210" height="76" rx="38" fill="#0f2235" stroke="#22c55e" strokeWidth="2.6" strokeOpacity="0.8" filter="url(#premiumShadow)"/>
        <circle cx="48" cy="38" r="24" fill="#22c55e" opacity="0.3"/>
        <circle cx="48" cy="38" r="16" fill="#22c55e" opacity="0.85"/>
        <text x="84" y="54" fontFamily="Arial" fontSize="22" fontWeight="700" fill="white" opacity="0.88">Node.js</text>
      </g>

      <g className="badge3" transform="translate(350, 30)">
        <rect width="250" height="76" rx="38" fill="#0f2235" stroke="#22c55e" strokeWidth="2.4" strokeOpacity="0.75" filter="url(#premiumShadow)"/>
        <circle cx="48" cy="38" r="24" fill="#22c55e" opacity="0.25"/>
        <circle cx="48" cy="38" r="16" fill="#22c55e" opacity="0.8"/>
        <text x="84" y="54" fontFamily="Arial" fontSize="22" fontWeight="700" fill="white" opacity="0.85">MongoDB</text>
      </g>

      <g className="badge4" transform="translate(840, 480)">
        <rect width="220" height="76" rx="38" fill="#0f2235" stroke="#f472b6" strokeWidth="2.6" strokeOpacity="0.8" filter="url(#premiumShadow)"/>
        <circle cx="48" cy="38" r="24" fill="#f472b6" opacity="0.3"/>
        <circle cx="48" cy="38" r="16" fill="#f472b6" opacity="0.9"/>
        <text x="84" y="54" fontFamily="Arial" fontSize="22" fontWeight="700" fill="white" opacity="0.9">Claude AI</text>
      </g>

      {/* CHARACTER - ULTRA PREMIUM */}
      <g className="char-pro">

        {/* LAPTOP PRO DESIGN */}
        <rect x="350" y="720" width="400" height="270" rx="28" fill="url(#laptopFramePro)" stroke="#00d4c0" strokeWidth="4.4" filter="url(#premiumShadow)"/>
        <rect x="368" y="740" width="304" height="170" rx="10" fill="#0a1520"/>
        <rect x="368" y="740" width="304" height="170" rx="10" fill="url(#screenGlowPro)"/>
        <rect x="368" y="740" width="304" height="170" rx="10" fill="#00d4c0" opacity="0.05" className="screen-glow-pro"/>

        {/* Screen code display */}
        <g clipPath="url(#screenClipPro)" className="screen-glow-pro">
          <rect x="376" y="748" width="110" height="14" rx="7" fill="#00d4c0" opacity="0.95"/>
          <rect x="500" y="748" width="130" height="14" rx="7" fill="#a78bfa" opacity="0.75"/>
          <rect x="376" y="774" width="90" height="11" rx="6" fill="white" opacity="0.42"/>
          <rect x="480" y="774" width="120" height="11" rx="6" fill="#f472b6" opacity="0.6"/>
          <rect x="388" y="796" width="180" height="11" rx="6" fill="white" opacity="0.35"/>
          <rect x="388" y="818" width="150" height="11" rx="6" fill="#00d4c0" opacity="0.55"/>
          <rect x="376" y="840" width="116" height="11" rx="6" fill="#f472b6" opacity="0.5"/>
          <rect x="504" y="840" width="100" height="11" rx="6" fill="white" opacity="0.28"/>
          <rect x="376" y="862" width="160" height="11" rx="6" fill="#a78bfa" opacity="0.6"/>
          <rect x="544" y="862" width="6" height="28" rx="4" fill="#00d4c0" className="cursor-pro"/>
        </g>

        {/* Screen bezel effect */}
        <rect x="368" y="740" width="304" height="170" rx="10" fill="none" stroke="#00d4c0" strokeWidth="1.4" opacity="0.25"/>

        {/* Keyboard area */}
        <rect x="324" y="960" width="452" height="28" rx="14" fill="url(#laptopFramePro)" stroke="#00d4c0" strokeWidth="2.6" opacity="0.85"/>
        <line x1="368" y1="960" x2="724" y2="960" stroke="#00d4c0" strokeWidth="2.4" opacity="0.35"/>

        {/* Laptop stand */}
        <path d="M360,988 L350,1030 Q350,1042 360,1042 L740,1042 Q750,1042 750,1030 L740,988Z" fill="#0a1520" stroke="#00d4c0" strokeWidth="2.4" opacity="0.7"/>
        <ellipse cx="550" cy="988" rx="200" ry="8" fill="#00d4c0" opacity="0.08"/>

        {/* LEGS */}
        <path d="M384,984 Q340,1050 304,1100 Q344,1116 404,1080 Q410,1024 420,984Z" fill="#2c3e6b"/>
        <path d="M716,984 Q760,1050 796,1100 Q756,1116 696,1080 Q690,1024 680,984Z" fill="#2c3e6b"/>
        <ellipse cx="308" cy="1106" rx="56" ry="24" fill="#1a2a4a"/>
        <ellipse cx="792" cy="1106" rx="56" ry="24" fill="#1a2a4a"/>

        {/* TORSO - Ultra Premium */}
        <defs><radialGradient id="torsoRadial" cx="50%" cy="40%"><stop offset="0%" stopColor="#2fbfbf"/><stop offset="50%" stopColor="#00d4c0"/><stop offset="100%" stopColor="#0a8e72"/></radialGradient></defs>
        <rect x="456" y="636" width="220" height="380" rx="64" fill="url(#torsoPro)"/>
        <ellipse cx="566" cy="650" rx="110" ry="16" fill="#1fbf9f" opacity="0.4"/>
        <rect x="480" y="656" width="64" height="240" rx="32" fill="white" opacity="0.09"/>
        <rect x="580" y="676" width="36" height="180" rx="18" fill="white" opacity="0.06"/>
        <path d="M500,632 Q566,664 632,632" stroke="#0a8e72" strokeWidth="7" fill="none" strokeLinecap="round"/>

        {/* ARMS - Premium */}
        <path d="M456,730 Q390,780 350,870 Q380,892 424,870 Q456,784 490,750Z" fill="#e8c09a" filter="url(#glow)"/>
        <path d="M676,730 Q742,780 782,870 Q752,892 708,870 Q676,784 642,750Z" fill="#e8c09a" filter="url(#glow)"/>
        <ellipse cx="460" cy="670" rx="20" ry="20" fill="white" opacity="0.12"/>
        <ellipse cx="672" cy="670" rx="20" ry="20" fill="white" opacity="0.12"/>

        {/* NECK - Premium */}
        <rect x="524" y="604" width="84" height="60" rx="24" fill="#e8c09a"/>
        <ellipse cx="566" cy="604" rx="42" ry="16" fill="#d4956a" opacity="0.35"/>

        {/* HEAD - Ultra Quality */}
        <ellipse cx="566" cy="496" rx="124" ry="144" fill="#e8c09a" filter="url(#glow)"/>
        <ellipse cx="566" cy="520" rx="124" ry="128" fill="#d4956a" opacity="0.12"/>

        {/* HAIR - Ultra Detailed */}
        <path d="M442,472 Q448,320 566,308 Q684,320 690,472 Q640,416 566,410 Q492,416 442,472Z" fill="#3d2b1f"/>
        <path d="M442,472 Q428,416 432,360 Q446,312 464,350Z" fill="#3d2b1f"/>
        <path d="M690,472 Q704,416 700,360 Q686,312 668,350Z" fill="#3d2b1f"/>
        <path d="M536,308 Q550,296 566,296 Q582,296 596,308" stroke="#2a1a10" strokeWidth="2.4" opacity="0.6" fill="none" strokeLinecap="round"/>

        {/* CAP - Ultra Premium */}
        <ellipse cx="566" cy="424" rx="140" ry="36" fill="#1a3a5c"/>
        <path d="M426,424 Q422,328 566,304 Q710,328 706,424Z" fill="#1a3a5c"/>
        <path d="M426,414 Q566,380 706,414" stroke="#00d4c0" strokeWidth="7" fill="none" strokeLinecap="round"/>
        <ellipse cx="530" cy="372" rx="40" ry="16" fill="white" opacity="0.1" transform="rotate(-18,530,372)"/>
        <ellipse cx="602" cy="382" rx="28" ry="12" fill="white" opacity="0.08" transform="rotate(22,602,382)"/>

        {/* EYES - Ultra Expressive */}
        <ellipse cx="524" cy="500" rx="18" ry="22" fill="#2a1a10"/>
        <ellipse cx="608" cy="500" rx="18" ry="22" fill="#2a1a10"/>
        <circle cx="532" cy="490" r="10" fill="#ffffff"/>
        <circle cx="616" cy="490" r="10" fill="#ffffff"/>
        <circle cx="536" cy="484" r="5" fill="white" opacity="0.95"/>
        <circle cx="620" cy="484" r="5" fill="white" opacity="0.95"/>
        <circle cx="532" cy="500" r="5" fill="#2a1a10"/>
        <circle cx="616" cy="500" r="5" fill="#2a1a10"/>

        {/* EYEBROWS - Expressive */}
        <path d="M496,466 Q524,450 552,466" stroke="#3d2b1f" strokeWidth="6.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M580,466 Q608,450 636,468" stroke="#3d2b1f" strokeWidth="6.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

        {/* NOSE */}
        <path d="M558,530 Q566,548 574,530" stroke="#c4956a" strokeWidth="4.4" fill="none" strokeLinecap="round"/>

        {/* MOUTH - Premium Smile */}
        <path d="M516,574 Q566,608 616,574" stroke="#c4956a" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

        {/* CHEEK BLUSH - Subtle */}
        <ellipse cx="456" cy="536" rx="28" ry="16" fill="#ff9999" opacity="0.25"/>
        <ellipse cx="676" cy="536" rx="28" ry="16" fill="#ff9999" opacity="0.25"/>

        {/* EARS - Ultra Detailed */}
        <ellipse cx="442" cy="520" rx="24" ry="36" fill="#e8c09a"/>
        <ellipse cx="690" cy="520" rx="24" ry="36" fill="#e8c09a"/>
        <ellipse cx="442" cy="520" rx="14" ry="26" fill="#d4956a" opacity="0.45"/>
        <ellipse cx="690" cy="520" rx="14" ry="26" fill="#d4956a" opacity="0.45"/>

      </g>

      {/* TECH STACK ORBITING LABELS */}
      <g className="tech-label" style={{transformOrigin: '550px 600px', animationDelay: '0s'}}>
        <text x="550" y="280" fontFamily="Arial" fontSize="26" fontWeight="800" fill="#00d4c0" textAnchor="middle" opacity="0.95">React</text>
      </g>

      <g className="tech-label" style={{transformOrigin: '550px 600px', animationDelay: '1.5s'}}>
        <text x="710" y="380" fontFamily="Arial" fontSize="26" fontWeight="800" fill="#f59e0b" textAnchor="middle" opacity="0.95">Express</text>
      </g>

      <g className="tech-label" style={{transformOrigin: '550px 600px', animationDelay: '3s'}}>
        <text x="800" y="600" fontFamily="Arial" fontSize="26" fontWeight="800" fill="#22c55e" textAnchor="middle" opacity="0.95">Node.js</text>
      </g>

      <g className="tech-label" style={{transformOrigin: '550px 600px', animationDelay: '4.5s'}}>
        <text x="710" y="820" fontFamily="Arial" fontSize="26" fontWeight="800" fill="#3b82f6" textAnchor="middle" opacity="0.95">Tailwind</text>
      </g>

      <g className="tech-label" style={{transformOrigin: '550px 600px', animationDelay: '6s'}}>
        <text x="550" y="920" fontFamily="Arial" fontSize="26" fontWeight="800" fill="#22c55e" textAnchor="middle" opacity="0.95">MongoDB</text>
      </g>

      <g className="tech-label" style={{transformOrigin: '550px 600px', animationDelay: '7.5s'}}>
        <text x="390" y="820" fontFamily="Arial" fontSize="26" fontWeight="800" fill="#a78bfa" textAnchor="middle" opacity="0.95">Python</text>
      </g>

      <g className="tech-label" style={{transformOrigin: '550px 600px', animationDelay: '9s'}}>
        <text x="300" y="600" fontFamily="Arial" fontSize="26" fontWeight="800" fill="#f472b6" textAnchor="middle" opacity="0.95">Claude AI</text>
      </g>

      <g className="tech-label" style={{transformOrigin: '550px 600px', animationDelay: '10.5s'}}>
        <text x="390" y="380" fontFamily="Arial" fontSize="26" fontWeight="800" fill="#ec4899" textAnchor="middle" opacity="0.95">APIs</text>
      </g>

      {/* PREMIUM FLOATING PARTICLES */}
      <circle cx="490" cy="990" r="8" fill="#00d4c0" className="particle-pro" opacity="0.85" style={{"--tx": "20px"}}/>
      <circle cx="550" cy="986" r="6" fill="#00d4c0" className="particle-pro" opacity="0.7" style={{animationDelay: '0.8s', "--tx": "-28px"}}/>
      <circle cx="610" cy="996" r="7" fill="#00d4c0" className="particle-pro" opacity="0.8" style={{animationDelay: '1.6s', "--tx": "16px"}}/>
      <circle cx="520" cy="980" r="4.4" fill="#00d4c0" className="particle-pro" opacity="0.6" style={{animationDelay: '0.4s', "--tx": "-14px"}}/>
      <circle cx="580" cy="1004" r="6.4" fill="#00d4c0" className="particle-pro" opacity="0.75" style={{animationDelay: '1.2s', "--tx": "24px"}}/>
      <circle cx="460" cy="996" r="5" fill="#00d4c0" className="particle-pro" opacity="0.65" style={{animationDelay: '0.2s', "--tx": "-20px"}}/>

    </svg>
  )
}
