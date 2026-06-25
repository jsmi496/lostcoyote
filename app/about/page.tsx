import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import coyoteBg from "@/public/images/coyote-bg.avif";
import building2 from "@/public/images/building-2.avif";
import rosita from "@/public/images/rosita.avif";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Lost Coyote — a restaurant, bar, and pool in a restored 1870s building in Historic Tremé, and Rosita, the goat who came with the lease.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Story"
        title="Named for the coyotes that roam the city"
        image={building2}
        imageAlt="The historic Lost Coyote building on Esplanade Avenue"
      />

      {/* Story */}
      <section className="section bg-bone">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5 text-lg leading-relaxed text-night/75">
            <p>
              The coyote is untamed and resilient — it thrives in the wild and
              wanders where it pleases. That spirit of adaptability, curiosity,
              and the pure joy of exploration is what Lost Coyote is built on.
            </p>
            <p>
              We&apos;re set inside a restored 1870s building on Esplanade
              Avenue, on the edge of Historic Tremé. Inside, you&apos;ll find
              polished comfort food — Louisiana flavors with a global twist,
              built on regional ingredients. Out back, a heated courtyard pool
              turns an ordinary afternoon into somewhere you got happily lost.
            </p>
            <p>
              It&apos;s a place to gather, to wander, and to stay a little
              longer than you planned.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4 pt-4 text-sm">
              <Stat n="2025" l="Opened on Esplanade" />
              <Stat n="21+" l="Heated saltwater pool" />
              <Stat n="1" l="Resident goat" />
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#f4b9c0] shadow-xl">
            <Image
              src={coyoteBg}
              alt="Stylized illustration of two coyotes"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rosita */}
      <section id="rosita" className="section scroll-mt-24 bg-night text-bone">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[auto_1fr]">
          <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full shadow-2xl ring-4 ring-sun md:h-64 md:w-64">
            <Image
              src={rosita}
              alt="Rosita, the resident goat at Lost Coyote"
              sizes="256px"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-3 text-sun">Meet the staff</p>
            <h2 className="font-script text-4xl md:text-6xl">
              Rosita, our resident goat
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-bone/80">
              When we signed the lease, we inherited Rosita — a tenant from back
              when the building was a Mexican joint called Joe Joe&apos;s on the
              Ridge. She stayed. Now she&apos;s the unofficial mascot, greeter,
              and the most photographed regular we&apos;ve got.
            </p>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="section scroll-mt-24 bg-bone">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-3">Join the team</p>
          <h2 className="font-script text-4xl md:text-6xl">
            Come wander with us
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-night/75">
            We&apos;re always looking for warm, curious people who love
            hospitality — front of house, back of house, and poolside. If that
            sounds like you, we&apos;d love to meet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/visit" className="btn-primary">
              Get in Touch
            </Link>
            <a href="#" className="btn-dark">
              View Open Roles
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-sans text-3xl font-bold text-clay">{n}</div>
      <div className="text-night/60">{l}</div>
    </div>
  );
}
