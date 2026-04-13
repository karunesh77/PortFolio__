const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#works' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: 'fa-linkedin-in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/karunesh-gupta-680bb0326/' },
  { icon: 'fa-github', label: 'GitHub', href: 'https://github.com/karunesh77' },
  { icon: 'fa-envelope', label: 'Email', href: 'mailto:heyitskaruneshgupta@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060f1a] border-t border-white/5 pt-12 pb-6">
      <div className="max-w-5xl mx-auto px-8">

        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-9">
          <div>
            <a href="#home" className="text-xl font-bold hover:text-accent transition-colors">
              KG<span className="text-accent">.</span>dev
            </a>
            <p className="text-secondary text-xs mt-1">Full Stack &amp; AI Developer · Noida, India</p>
          </div>

          <ul className="hidden md:flex gap-7">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="text-secondary text-sm hover:text-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-[#1e3a55] flex items-center justify-center
                  text-secondary text-sm hover:bg-accent hover:border-accent hover:text-dark
                  hover:-translate-y-1 transition-all duration-200"
              >
                <i className={`fab ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/5 pt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-secondary text-xs">
            &copy; {new Date().getFullYear()} Karunesh Gupta. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-secondary">
            <span>Built with</span>
            <span className="text-accent font-semibold">React</span>
            <span>&amp;</span>
            <span className="text-accent font-semibold">Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
