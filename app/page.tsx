import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { CoyoteMark } from "@/components/Logo";
import { SITE } from "./data";
import poolImg from "@/public/images/pool.avif";
import food4 from "@/public/images/food-4.avif";
import drinkSol from "@/public/images/drink-sol-searcher.avif";
import building1 from "@/public/images/building-1.avif";
import rosita from "@/public/images/rosita.avif";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Marquee />
      <Intro />
      <Teasers />
      <RositaStrip />
    </main>
  );
}

/* ------------------------------------------------------------------ HERO */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-night text-bone">
      <HeroVideo />
      <div className="absolute inset-0 bg-night/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-night/60" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-24 text-center md:px-12">
        <p className="eyebrow mb-6 animate-fade-up text-sun">
          {SITE.neighborhood}
        </p>
        <h1
          className="animate-fade-up font-script text-6xl leading-[1.05] tracking-tight drop-shadow-lg sm:text-7xl md:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          Wander off the
          <span className="block text-sun">beaten path.</span>
        </h1>
        <p
          className="mx-auto mt-8 max-w-2xl animate-fade-up text-lg text-bone/90 drop-shadow md:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          A restaurant, bar, and heated 21+ pool right in the heart of Esplanade
          Avenue. Bold Louisiana flavors, craft cocktails, and a day-pass oasis
          where the city goes to get a little lost.
        </p>
        <div
          className="mt-10 flex animate-fade-up flex-wrap justify-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href={SITE.reserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Reserve a Table
          </a>
          <Link href="/pool" className="btn-ghost">
            Pool Day Passes
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- MARQUEE */
function Marquee() {
  const words = [
    "Poolside Cocktails",
    "Gulf Seafood",
    "Weekend Brunch",
    "Heated 21+ Pool",
    "Live Happenings",
    "Meet Rosita",
  ];
  return (
    <div className="relative z-10 overflow-hidden border-y border-night/10 bg-clay py-4 text-bone">
      <div className="flex whitespace-nowrap">
        <Track words={words} />
        <Track words={words} />
      </div>
    </div>
  );
}
function Track({ words }: { words: string[] }) {
  return (
    <div className="marquee-track flex shrink-0 items-center gap-8 px-4">
      {words.map((w, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="font-sans text-lg font-medium italic">{w}</span>
          <CoyoteMark className="h-4 w-4 text-sun" />
        </span>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------- INTRO */
function Intro() {
  return (
    <section className="section bg-bone">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow mb-4">Our Story</p>
          <h2 className="font-script text-4xl leading-[1.15] md:text-5xl">
            Named for the coyotes that{" "}
            <span className="text-clay">roam the city</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-night/75">
            <p>
              The coyote is untamed and resilient — it thrives in the wild and
              wanders where it pleases. That spirit of adaptability, curiosity,
              and the pure joy of exploration is what Lost Coyote is built on.
            </p>
            <p>
              Set inside a restored 1870s building on Esplanade, we serve
              polished comfort food, craft cocktails, and a courtyard pool that
              turns an ordinary afternoon into somewhere you got happily lost.
            </p>
          </div>
          <Link href="/about" className="btn-dark mt-8">
            Read Our Story
          </Link>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={building1}
              alt="The historic Lost Coyote building on Esplanade Avenue"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-sun px-6 py-5 text-night shadow-xl sm:block">
            <p className="font-script text-3xl">Tremé</p>
            <p className="text-xs uppercase tracking-widest">
              Off the beaten path
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- TEASERS */
const teasers = [
  {
    href: "/pool",
    img: poolImg,
    alt: "The heated pool at Lost Coyote",
    eyebrow: "Spend the day",
    title: "The Pool",
    blurb: "Heated, 21+, and open all day. Day passes from $20.",
  },
  {
    href: "/menu",
    img: food4,
    alt: "A spread of dishes at Lost Coyote",
    eyebrow: "Food & Drinks",
    title: "The Menu",
    blurb: "Polished comfort food and craft cocktails, all day long.",
  },
  {
    href: "/happenings",
    img: drinkSol,
    alt: "A cocktail at Lost Coyote",
    eyebrow: "What's on",
    title: "Happenings",
    blurb: "DJs, bottomless brunch, dive-in cinema, and private events.",
  },
];

function Teasers() {
  return (
    <section className="section bg-night text-bone">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {teasers.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={t.img}
                  alt={t.alt}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="eyebrow mb-2 text-sun">{t.eyebrow}</p>
                <h3 className="font-script text-4xl leading-none">{t.title}</h3>
                <p className="mt-3 text-sm text-bone/80">{t.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sun">
                  Explore
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- ROSITA STRIP */
function RositaStrip() {
  return (
    <section className="section bg-bone">
      <Link
        href="/about#rosita"
        className="mx-auto flex max-w-7xl items-center gap-8 rounded-3xl bg-sun/20 p-6 transition-colors hover:bg-sun/30 md:p-10"
      >
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full shadow-lg ring-4 ring-sun md:h-36 md:w-36">
          <Image
            src={rosita}
            alt="Rosita, the resident goat"
            sizes="144px"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow mb-2">Meet the staff</p>
          <h2 className="font-script text-3xl md:text-5xl">
            Say hi to Rosita, our resident goat
          </h2>
          <p className="mt-2 max-w-xl text-night/70">
            The most photographed regular we&apos;ve got. Read how she came with
            the building →
          </p>
        </div>
      </Link>
    </section>
  );
}
