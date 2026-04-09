import { useState, useRef, useEffect } from 'react'

const contactInfo = [
  { icon: 'fa-envelope', text: 'heyitskaruneshgupta@gmail.com', href: 'mailto:heyitskaruneshgupta@gmail.com' },
  { icon: 'fa-phone', text: '+91 8881138810', href: 'tel:+918881138810' },
  { icon: 'fa-map-marker-alt', text: 'Noida, UP, India', href: '#' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

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
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Get form data
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm ${name}.\n\nEmail: ${email}\n\nMessage: ${message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappURL = `https://wa.me/918881138810?text=${encodedMessage}`

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappURL, '_blank')
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-gradient-to-b from-dark to-[#091524]">
      <style>{`
        @keyframes inputSlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes textareSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes buttonPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 212, 192, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(0, 212, 192, 0); }
        }
        @keyframes successPop {
          0% {
            opacity: 0;
            transform: scale(0.5) rotateZ(-10deg);
          }
          70% {
            transform: scale(1.1) rotateZ(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateZ(0);
          }
        }
        @keyframes iconRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(5deg) scale(1.05); }
          100% { transform: rotate(0deg) scale(1); }
        }
        .form-input {
          animation: inputSlide 0.5s ease-out forwards;
          opacity: 0;
        }
        .form-input:nth-child(1) { animation-delay: 0.1s; }
        .form-input:nth-child(2) { animation-delay: 0.2s; }
        .form-textarea {
          animation: textareSlide 0.5s ease-out forwards;
          opacity: 0;
          animation-delay: 0.3s;
        }
        .btn-submit {
          animation: buttonPulse 2s infinite;
        }
        .success-icon {
          animation: successPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        .contact-icon {
          transition: all 0.3s ease;
        }
        .contact-icon:hover {
          animation: iconRotate 0.6s ease-in-out;
        }
        .contact-info-item {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .contact-info-item:hover {
          transform: translateX(5px);
        }
      `}</style>

      {/* doodles */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.07" stroke="#00d4c0" strokeWidth="1.5" fill="none">
            <path d="M50,200 Q100,180 150,200 Q100,220 50,200Z" />
            <circle cx="1100" cy="400" r="40" /><circle cx="1100" cy="400" r="25" />
            <polygon points="200,500 208,524 234,524 213,538 221,562 200,548 179,562 187,538 166,524 192,524" />
          </g>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div ref={leftRef} className="opacity-0 -translate-x-10 transition-all duration-700">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Got a project in <span className="text-accent">mind?</span>
            </h2>
            <p className="text-secondary text-[0.93rem] leading-relaxed mb-8">
              I'm open to full-time roles and freelance projects. Whether you need a
              full-stack web app, an AI integration, or a complete MERN solution — let's
              build something great together.
            </p>

            {/* Illustration */}
            <div className="flex justify-start mb-8">
              <svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg" className="w-60 animate-float-slow">
                <rect x="80" y="220" width="30" height="80" rx="4" fill="#1a3a5c" />
                <rect x="120" y="185" width="30" height="115" rx="4" fill="#1a3a5c" />
                <rect x="160" y="155" width="30" height="145" rx="4" fill="#1a3a5c" />
                <rect x="200" y="125" width="30" height="175" rx="4" fill="#00d4c0" opacity="0.8" />
                <path d="M215,125 Q210,110 205,95" stroke="#e8c09a" strokeWidth="8" fill="none" strokeLinecap="round" />
                <path d="M215,125 Q222,112 228,100" stroke="#2c3e6b" strokeWidth="8" fill="none" strokeLinecap="round" />
                <ellipse cx="204" cy="93" rx="10" ry="6" fill="#1a2a4a" />
                <ellipse cx="229" cy="98" rx="10" ry="6" fill="#1a2a4a" />
                <rect x="202" y="68" width="26" height="65" rx="12" fill="#00d4c0" />
                <path d="M202,80 Q185,68 178,55" stroke="#e8c09a" strokeWidth="7" fill="none" strokeLinecap="round" />
                <path d="M228,75 Q242,60 248,45" stroke="#e8c09a" strokeWidth="7" fill="none" strokeLinecap="round" />
                <circle cx="176" cy="53" r="8" fill="#e8c09a" />
                <circle cx="250" cy="43" r="8" fill="#e8c09a" />
                <ellipse cx="215" cy="50" rx="24" ry="26" fill="#e8c09a" />
                <path d="M191,44 Q192,22 215,20 Q238,22 239,44 Q228,32 215,30 Q202,32 191,44Z" fill="#3d2b1f" />
                <ellipse cx="207" cy="50" rx="4" ry="4.5" fill="#3d2b1f" />
                <ellipse cx="223" cy="50" rx="4" ry="4.5" fill="#3d2b1f" />
                <circle cx="209" cy="48" r="1.5" fill="#fff" />
                <circle cx="225" cy="48" r="1.5" fill="#fff" />
                <path d="M207,60 Q215,67 223,60" stroke="#c4956a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                <line x1="260" y1="280" x2="260" y2="80" stroke="#00d4c0" strokeWidth="2" strokeDasharray="5,4" />
                <polyline points="252,92 260,78 268,92" stroke="#00d4c0" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(item => (
                <a
                  key={item.text}
                  href={item.href}
                  className="contact-info-item flex items-center gap-3 text-secondary text-sm hover:text-accent group"
                >
                  <span className="contact-icon w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center
                    justify-center text-accent text-xs group-hover:bg-accent/20 group-hover:border-accent/40 transition-all">
                    <i className={`fas ${item.icon}`} />
                  </span>
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Right – form */}
          <div ref={rightRef} className="opacity-0 translate-x-10 transition-all duration-700">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-20 text-accent">
                <i className="fas fa-check-circle text-5xl mb-4 success-icon" />
                <p className="text-lg font-semibold">Message sent!</p>
                <p className="text-secondary text-sm mt-2">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="form-input flex flex-col gap-2">
                    <label className="text-[0.8rem] text-secondary font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="bg-[#0f2035] border border-[#1e3a55] rounded-lg px-4 py-3.5 text-white text-sm
                        placeholder-secondary/40 outline-none focus:border-accent focus:ring-2
                        focus:ring-accent/10 transition-all hover:border-accent/40"
                    />
                  </div>
                  <div className="form-input flex flex-col gap-2">
                    <label className="text-[0.8rem] text-secondary font-medium">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="bg-[#0f2035] border border-[#1e3a55] rounded-lg px-4 py-3.5 text-white text-sm
                        placeholder-secondary/40 outline-none focus:border-accent focus:ring-2
                        focus:ring-accent/10 transition-all hover:border-accent/40"
                    />
                  </div>
                </div>
                <div className="form-textarea flex flex-col gap-2">
                  <label className="text-[0.8rem] text-secondary font-medium">Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-[#0f2035] border border-[#1e3a55] rounded-lg px-4 py-3.5 text-white text-sm
                      placeholder-secondary/40 outline-none focus:border-accent focus:ring-2
                      focus:ring-accent/10 transition-all resize-none hover:border-accent/40"
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-primary btn-submit self-start">
                  {loading
                    ? <><i className="fas fa-spinner fa-spin text-xs" /> Sending…</>
                    : <><span>Send Message</span><i className="fas fa-paper-plane text-xs" /></>
                  }
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
