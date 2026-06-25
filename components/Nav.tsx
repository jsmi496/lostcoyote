"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.avif";
import { SITE } from "@/app/data";

const links = [
  { href: "/menu", label: "Food & Drinks" },
  { href: "/pool", label: "Pool" },
  { href: "/happenings", label: "Happenings" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // The home page has a dark full-bleed hero, so the nav can start transparent.
  // Inner pages need a solid bar from the top for legibility.
  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-night/95 py-3 shadow-lg shadow-night/20 backdrop-blur"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center" aria-label="Lost Coyote home">
          <Image src={logo} alt="Lost Coyote" priority className="h-9 w-auto md:h-11" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-sun ${
                  active ? "text-sun" : "text-bone/80"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={SITE.reserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-6 !py-2.5"
          >
            Reserve
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-bone lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="mx-6 mt-3 rounded-2xl bg-night/98 p-6 shadow-xl backdrop-blur lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-lg font-medium hover:text-sun ${
                  pathname === l.href ? "text-sun" : "text-bone/90"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={SITE.reserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
