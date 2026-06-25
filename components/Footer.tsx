import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.avif";
import { SITE } from "@/app/data";

const cols = [
  {
    head: "Visit",
    links: [
      { label: "Food & Drinks", href: "/menu" },
      { label: "The Pool", href: "/pool" },
      { label: "Happenings", href: "/happenings" },
      { label: "Reserve a Table", href: SITE.reserveUrl, external: true },
    ],
  },
  {
    head: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Meet Rosita", href: "/about#rosita" },
      { label: "Join the Team", href: "/about#careers" },
      { label: "Order Online", href: SITE.orderUrl, external: true },
      { label: "Gift Cards", href: SITE.giftCardUrl, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 bg-night px-6 pb-10 pt-16 text-bone md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-bone/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="inline-block">
              <Image src={logo} alt="Lost Coyote" className="h-12 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-bone/60">
              A restaurant, bar, and heated 21+ pool in the heart of Historic
              Tremé. Wander off the beaten path.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.head}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-sun">
                {c.head}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) =>
                  "external" in l && l.external ? (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bone/70 hover:text-sun"
                      >
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link href={l.href} className="text-bone/70 hover:text-sun">
                        {l.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-sun">
              Find Us
            </h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-bone/70">
              <p>{SITE.address}</p>
              <p>
                <a href={SITE.phoneHref} className="hover:text-sun">
                  {SITE.phone}
                </a>
              </p>
            </address>
            <div className="mt-4 flex gap-4 text-sm">
              <a href={SITE.instagram} className="text-bone/70 hover:text-sun">
                Instagram
              </a>
              <a href="#" className="text-bone/70 hover:text-sun">
                Facebook
              </a>
              <a href="#" className="text-bone/70 hover:text-sun">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-bone/40">
          © 2026 {SITE.name} · {SITE.address} · {SITE.phone} · Prototype redesign
          concept.
        </p>
      </div>
    </footer>
  );
}
