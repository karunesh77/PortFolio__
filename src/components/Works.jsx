import { useState } from 'react'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'ai', label: 'AI / LLM' },
  { key: 'react', label: 'React' },
]

const projects = [
  {
    id: 1,
    category: 'fullstack',
    tag: 'Full Stack',
    title: 'HireMitra — Job Marketplace',
    desc: 'Full-stack job marketplace with geolocation-based matching, dual rating system, and JWT auth. Optimized REST APIs reducing response time by 30%.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Geolocation API'],
    link: 'https://github.com/karunesh77/HireMitra',
    preview: <HireMitraPreview />,
  },
  {
    id: 2,
    category: 'react',
    tag: 'React / Music',
    title: 'VYBE — Music Streaming App',
    desc: 'Full-featured music streaming app with custom audio hooks, search, and playlist management. Achieved 40% faster load times.',
    tech: ['React.js', 'Jamendo API', 'iTunes API', 'CSS Modules', 'Vercel'],
    link: 'https://github.com/karunesh77/VibesMusic',
    preview: <VybePreview />,
  },
  {
    id: 3,
    category: 'ai',
    tag: 'AI / Claude API',
    title: 'AI Support Agent',
    desc: 'Live AI support agent with multi-turn conversation handling via Claude API — end-to-end from prompt engineering to Vercel deployment.',
    tech: ['Claude API', 'React.js', 'Node.js', 'Multi-turn Conversations', 'Vercel'],
    link: 'https://github.com/karunesh77/ai-support-agent',
    preview: <AISupportPreview />,
  },
  {
    id: 4,
    category: 'ai',
    tag: 'AI / Claude API',
    title: 'ResumeX — AI Resume Builder',
    desc: 'AI-powered resume builder using Claude API with structured prompt engineering to generate ATS-optimized resumes and dynamic PDF output.',
    tech: ['Claude API', 'React.js', 'Python', 'ReportLab', 'Vercel'],
    link: 'https://github.com/karunesh77/ResumeX',
    preview: <ResumeXPreview />,
  },
  {
    id: 5,
    category: 'ai',
    tag: 'AI / MCP',
    title: 'AI Email Classifier Agent',
    desc: 'AI email classification agent that automatically labels job-related emails using Claude API and Gmail MCP with natural language processing.',
    tech: ['Claude API', 'Gmail MCP', 'Node.js', 'NLP', 'Automation'],
    link: '#',
    preview: <EmailAgentPreview />,
  },
]

export default function Works() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="works" className="py-28 bg-dark">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-3">
          My recent <span className="text-accent">projects</span>
        </h2>
        <p className="text-secondary text-sm text-center mb-10">
          Production-grade applications built and deployed on Vercel.
        </p>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-12">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200
                ${active === f.key
                  ? 'bg-accent border-accent text-dark font-semibold'
                  : 'border-[#1e3a55] text-secondary hover:border-accent hover:text-accent'}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div
              key={p.id}
              className="bg-[#0f2235] rounded-xl overflow-hidden border border-white/5 flex flex-col
                hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                hover:border-accent/20 transition-all duration-300 group"
            >
              {/* Preview */}
              <div className="relative overflow-hidden bg-[#0a1929]" style={{ aspectRatio: '16/10' }}>
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.04]">
                  {p.preview}
                </div>
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-dark
                      scale-50 group-hover:scale-100 transition-transform duration-300"
                  >
                    <i className="fas fa-external-link-alt text-sm" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <span className="text-accent text-[0.68rem] font-bold uppercase tracking-widest">{p.tag}</span>
                <h3 className="text-white font-semibold mt-1.5 mb-2 text-[0.97rem]">{p.title}</h3>
                <p className="text-secondary text-[0.78rem] leading-relaxed mb-4 flex-1">{p.desc}</p>
                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[0.65rem] font-medium bg-accent/5
                        border border-accent/15 text-accent/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SVG Previews ── */
function HireMitraPreview() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0d1b2e" />
      <rect x="0" y="0" width="320" height="44" fill="#0a1525" />
      <text x="16" y="26" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#00d4c0">HireMitra</text>
      <rect x="220" y="13" width="60" height="18" rx="9" fill="#00d4c0" opacity="0.15" />
      <rect x="228" y="19" width="45" height="6" rx="3" fill="#00d4c0" opacity="0.7" />
      <rect x="100" y="14" width="30" height="8" rx="2" fill="white" opacity="0.3" />
      <rect x="140" y="14" width="30" height="8" rx="2" fill="white" opacity="0.3" />
      <rect x="16" y="58" width="190" height="30" rx="6" fill="#0f2235" />
      <rect x="24" y="65" width="120" height="6" rx="3" fill="#00d4c0" opacity="0.7" />
      <rect x="24" y="75" width="80" height="5" rx="2" fill="white" opacity="0.3" />
      <rect x="220" y="58" width="85" height="30" rx="6" fill="#00d4c0" />
      <rect x="232" y="68" width="60" height="8" rx="4" fill="#0d1b2e" opacity="0.7" />
      {[0,1,2].map(i => (
        <g key={i} transform={`translate(0,${i * 38})`}>
          <rect x="16" y="100" width="288" height="32" rx="8" fill="#0f2235" />
          <circle cx="40" cy="116" r="12" fill="#1a3a5c" />
          <circle cx="40" cy="116" r="7" fill="#00d4c0" opacity="0.5" />
          <rect x="60" y="107" width="70" height="6" rx="3" fill="white" opacity="0.5" />
          <rect x="60" y="117" width="50" height="4" rx="2" fill="white" opacity="0.3" />
          <rect x="248" y="109" width="45" height="14" rx="7" fill="#00d4c0" opacity={0.7 - i * 0.15} />
        </g>
      ))}
    </svg>
  )
}

function VybePreview() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vybeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a0533" />
          <stop offset="100%" stopColor="#0d1b2e" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#vybeGrad)" />
      <text x="16" y="28" fontFamily="Arial" fontSize="18" fontWeight="900" fill="#a855f7">VYBE</text>
      <rect x="16" y="40" width="170" height="100" rx="10" fill="#1a0a35" />
      <rect x="24" y="50" width="154" height="82" rx="6" fill="#2a0f5a" />
      <circle cx="100" cy="91" r="30" fill="#1a0533" />
      <circle cx="100" cy="91" r="22" fill="#3d1a6e" />
      <circle cx="100" cy="91" r="10" fill="#a855f7" opacity="0.8" />
      <polygon points="95,84 95,98 108,91" fill="white" opacity="0.9" />
      <rect x="16" y="150" width="170" height="40" rx="8" fill="#1a0a35" />
      <rect x="24" y="158" width="80" height="6" rx="3" fill="white" opacity="0.6" />
      <rect x="24" y="168" width="55" height="4" rx="2" fill="#a855f7" opacity="0.7" />
      <rect x="148" y="155" width="28" height="28" rx="14" fill="#a855f7" opacity="0.3" />
      <polygon points="158,164 158,174 167,169" fill="#a855f7" />
      <rect x="200" y="40" width="105" height="150" rx="10" fill="#1a0a35" />
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="208" y={50 + i * 36} width="89" height="28" rx="6" fill="#2a0f5a" />
          <rect x="216" y={57 + i * 36} width="50" height="5" rx="2" fill="white" opacity="0.5" />
          <rect x="216" y={65 + i * 36} width="35" height="4" rx="2" fill="#a855f7" opacity="0.5" />
          <circle cx="282" cy={63 + i * 36} r="8" fill="#a855f7" opacity={0.6 - i * 0.1} />
        </g>
      ))}
    </svg>
  )
}

function AISupportPreview() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0d1b2e" />
      <rect x="0" y="0" width="320" height="38" fill="#0a1525" />
      <circle cx="20" cy="19" r="8" fill="#00d4c0" opacity="0.8" />
      <text x="34" y="24" fontFamily="Arial" fontSize="11" fontWeight="bold" fill="white">AI Support Agent</text>
      <circle cx="300" cy="19" r="5" fill="#00d4c0" opacity="0.6" />
      {/* Chat messages */}
      <rect x="60" y="50" width="160" height="28" rx="14" fill="#1a3a5c" />
      <text x="74" y="68" fontFamily="Arial" fontSize="9" fill="white" opacity="0.8">How can I help you today?</text>
      <rect x="100" y="88" width="180" height="28" rx="14" fill="#00d4c0" opacity="0.15" />
      <text x="114" y="106" fontFamily="Arial" fontSize="9" fill="#00d4c0">I need help with my account</text>
      <rect x="40" y="126" width="200" height="40" rx="14" fill="#1a3a5c" />
      <text x="54" y="142" fontFamily="Arial" fontSize="9" fill="white" opacity="0.8">Sure! I can help with that.</text>
      <text x="54" y="156" fontFamily="Arial" fontSize="9" fill="#00d4c0" opacity="0.7">What's the issue you're facing?</text>
      {/* Input */}
      <rect x="16" y="176" width="230" height="18" rx="9" fill="#0f2235" stroke="#1e3a55" strokeWidth="1" />
      <text x="26" y="189" fontFamily="Arial" fontSize="8" fill="#8b9cb6">Type your message...</text>
      <rect x="258" y="174" width="46" height="22" rx="11" fill="#00d4c0" />
      <text x="268" y="189" fontFamily="Arial" fontSize="9" fontWeight="bold" fill="#0d1b2e">Send</text>
    </svg>
  )
}

function ResumeXPreview() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0d1b2e" />
      <rect x="0" y="0" width="320" height="38" fill="#0a1525" />
      <text x="16" y="24" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#00d4c0">ResumeX</text>
      <rect x="250" y="10" width="55" height="18" rx="9" fill="#00d4c0" />
      <text x="259" y="23" fontFamily="Arial" fontSize="9" fontWeight="bold" fill="#0d1b2e">Generate</text>
      {/* Form */}
      <rect x="16" y="48" width="140" height="140" rx="8" fill="#0f2235" />
      <rect x="24" y="56" width="60" height="5" rx="2" fill="#00d4c0" opacity="0.6" />
      <rect x="24" y="66" width="124" height="18" rx="4" fill="#1a3a5c" />
      <rect x="24" y="90" width="60" height="5" rx="2" fill="#00d4c0" opacity="0.6" />
      <rect x="24" y="100" width="124" height="18" rx="4" fill="#1a3a5c" />
      <rect x="24" y="124" width="60" height="5" rx="2" fill="#00d4c0" opacity="0.6" />
      <rect x="24" y="134" width="124" height="40" rx="4" fill="#1a3a5c" />
      {/* Resume output */}
      <rect x="170" y="48" width="134" height="140" rx="8" fill="#f5f5f5" />
      <rect x="178" y="56" width="80" height="6" rx="3" fill="#333" opacity="0.7" />
      <rect x="178" y="65" width="50" height="4" rx="2" fill="#666" opacity="0.5" />
      <line x1="178" y1="76" x2="296" y2="76" stroke="#ccc" strokeWidth="0.5" />
      <rect x="178" y="82" width="45" height="5" rx="2" fill="#00d4c0" opacity="0.8" />
      <rect x="178" y="91" width="110" height="3.5" rx="1.5" fill="#999" opacity="0.5" />
      <rect x="178" y="98" width="95" height="3.5" rx="1.5" fill="#999" opacity="0.4" />
      <rect x="178" y="105" width="100" height="3.5" rx="1.5" fill="#999" opacity="0.4" />
      <rect x="178" y="116" width="45" height="5" rx="2" fill="#00d4c0" opacity="0.8" />
      <rect x="178" y="125" width="110" height="3.5" rx="1.5" fill="#999" opacity="0.4" />
      <rect x="178" y="132" width="80" height="3.5" rx="1.5" fill="#999" opacity="0.35" />
      <rect x="178" y="145" width="45" height="5" rx="2" fill="#00d4c0" opacity="0.8" />
      <rect x="178" y="154" width="110" height="3.5" rx="1.5" fill="#999" opacity="0.4" />
      <rect x="178" y="161" width="90" height="3.5" rx="1.5" fill="#999" opacity="0.35" />
    </svg>
  )
}

function EmailAgentPreview() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0d1b2e" />
      <rect x="0" y="0" width="320" height="38" fill="#0a1525" />
      <text x="16" y="24" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white">AI Email Classifier</text>
      <circle cx="298" cy="19" r="8" fill="#00d4c0" opacity="0.2" />
      <text x="294" y="23" fontFamily="Arial" fontSize="10" fill="#00d4c0">✓</text>
      {/* Email list */}
      {[
        { label: 'Job Opportunity — Google', tag: 'Job', color: '#00d4c0', y: 48 },
        { label: 'Your application at Meta', tag: 'Job', color: '#00d4c0', y: 84 },
        { label: 'Team lunch tomorrow', tag: 'Other', color: '#8b9cb6', y: 120 },
        { label: 'Interview invite — Amazon', tag: 'Job', color: '#00d4c0', y: 156 },
      ].map(item => (
        <g key={item.y}>
          <rect x="16" y={item.y} width="288" height="30" rx="6" fill="#0f2235" />
          <circle cx="36" cy={item.y + 15} r="10" fill="#1a3a5c" />
          <text x="31" y={item.y + 20} fontFamily="Arial" fontSize="12" fill={item.color}>@</text>
          <text x="54" y={item.y + 19} fontFamily="Arial" fontSize="9" fill="white" opacity="0.8">{item.label}</text>
          <rect x="230" y={item.y + 8} width="66" height="14" rx="7"
            fill={item.color} opacity={item.tag === 'Job' ? 0.2 : 0.1} />
          <text x={item.tag === 'Job' ? 247 : 241} y={item.y + 19} fontFamily="Arial" fontSize="8"
            fontWeight="bold" fill={item.color}>{item.tag}</text>
        </g>
      ))}
    </svg>
  )
}
