import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { hours, SITE } from "../data";
import building1 from "@/public/images/building-1.avif";
import food2 from "@/public/images/food-2.avif";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Find Lost Coyote at 1614 Esplanade Ave, New Orleans. Hours, reservations, online ordering, and gift cards.",
};

export default function VisitPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Visit Us"
        title="Come get a little lost"
        intro="Reservations are recommended for dinner and weekend brunch. Walk-ins always welcome at the bar and poolside."
        image={building1}
        imageAlt="The Lost Coyote building on Esplanade Avenue"
      />

      {/* Reserve + hours */}
      <section id="reserve" className="section scroll-mt-24 bg-bone">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Reservations</p>
            <h2 className="font-script text-4xl leading-[1.15] md:text-5xl">
              Book a table or a cabana
            </h2>
            <p className="mt-6 text-lg text-night/75">
              Dinner, weekend brunch, pool cabanas, and private events — pick a
              time and we&apos;ll have a spot waiting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SITE.reserveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Reserve on OpenTable
              </a>
              <a
                href={SITE.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                Order Online
              </a>
            </div>

            <div className="mt-12 space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-clay">
                Hours
              </h3>
              <dl className="divide-y divide-night/10">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between py-2.5 text-sm">
                    <dt className="text-night/70">{h.day}</dt>
                    <dd className="font-medium">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <div className="relative aspect-[16/10]">
                <Image
                  src={food2}
                  alt="A table set for a group at Lost Coyote"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="rounded-3xl border border-night/10 bg-sand/40 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-clay">
                Find Us
              </h3>
              <p className="mt-3 font-sans text-2xl font-semibold">
                {SITE.address}
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-1 inline-block text-lg text-clay hover:text-ember"
              >
                {SITE.phone}
              </a>
              <div className="mt-5">
                <a
                  href={SITE.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift cards */}
      <section id="gift-cards" className="section scroll-mt-24 bg-night text-bone">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-3 text-sun">Gift Cards</p>
          <h2 className="font-script text-4xl md:text-6xl">
            The gift of getting lost
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-bone/80">
            Good for dinner, drinks, brunch, or a day at the pool. Digital
            delivery or a physical card — your call.
          </p>
          <a
            href={SITE.giftCardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            Buy a Gift Card
          </a>
        </div>
      </section>
    </main>
  );
}
