import Link from "next/link"
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/site-data"

const FOOTER_COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Listen",
    links: [
      { href: "/schedule", label: "Schedule" },
      { href: "/how-to-tune", label: "How to Tune In" },
      { href: "/shows", label: "Shows" },
      { href: "/hosts", label: "Hosts" },
      { href: "/markets", label: "Markets & Coverage" },
      { href: "/markets/raleigh-durham", label: "Raleigh-Durham 99.9 FM" },
    ],
  },
  {
    title: "Discover",
    links: [
      { href: "/podcasts", label: "Podcasts" },
      { href: "/youtube", label: "YouTube" },
      { href: "/shorts", label: "Shorts" },
      { href: "/news", label: "News" },
      { href: "/blog", label: "Blog" },
      { href: "/events", label: "Events" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/community", label: "Community Hub" },
      { href: "/near-me", label: "Near Me" },
      { href: "/directory", label: "Business Directory" },
      { href: "/gallery", label: "Gallery" },
      { href: "/festival-calendar", label: "Festival Calendar" },
      { href: "/partners", label: "Partners" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/advertise", label: "Advertise" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
      { href: "/press", label: "Press" },
      { href: "/faq", label: "FAQ" },
    ],
  },
]

/**
 * Compact site footer: four short link columns, contact + socials, the
 * newsletter form, and the legal row. Promotional copy and duplicated
 * navigation were removed — the detail lives on the pages themselves.
 */
export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-ink text-white/80">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3" aria-label="Radio Nyra — home">
              <span className="h-11 w-11 overflow-hidden rounded-full border border-white/20">
                <img
                  src="/images/radio-nyra-logo.jpg"
                  alt=""
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-tight text-white">Radio Nyra</span>
                <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/60">
                  The Indian Subcontinent Community Media Network
                </span>
              </span>
            </Link>

            <address className="mt-5 space-y-1.5 text-sm not-italic text-white/60">
              <p>
                <a className="transition-colors hover:text-white" href={`mailto:${CONTACT_INFO.email}`}>
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p>
                <a
                  className="transition-colors hover:text-white"
                  href={`tel:${CONTACT_INFO.phone.replace(/[^+\d]/g, "")}`}
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p className="text-white/50">{CONTACT_INFO.address.full}</p>
            </address>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-white"
                  title={social.label}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={`Footer — ${column.title}`}>
              <h2 className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">
                {column.title}
              </h2>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Newsletter */}
        <form
          action="https://formspree.io/f/fa42a7d8-c45e-4e7d-868c-7861ef21d915"
          method="POST"
          className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <label htmlFor="footer-email" className="text-sm font-semibold text-white/80">
            Get the weekly newsletter
          </label>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <input
              id="footer-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email address"
              className="h-11 w-full rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-primary sm:w-72"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-lg bg-primary px-6 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-primary/90"
            >
              Join
            </button>
          </div>
        </form>

        {/* Legal */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Radio Nyra. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-services" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="/write-for-us" className="transition-colors hover:text-white">
              Write For Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
