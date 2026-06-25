import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { events } from "../data";
import food7 from "@/public/images/food-7.avif";
import drinkWanderer from "@/public/images/drink-wanderers-call.avif";

export const metadata: Metadata = {
  title: "Happenings",
  description:
    "DJs, bottomless brunch, dive-in cinema, and private events at Lost Coyote on Esplanade. Host your next celebration poolside in Tremé.",
};

export default function HappeningsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="What's on"
        title="There's always something going on"
        intro="Weekly residencies, seasonal one-offs, and a courtyard built for a party. Here's what's coming up."
        image={drinkWanderer}
        imageAlt="A cocktail on the bar at Lost Coyote"
      />

      {/* Recurring events */}
      <section className="section bg-bone">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((e) => (
              <div
                key={e.title}
                className="group rounded-3xl border border-night/10 bg-sand/40 p-8 transition-colors hover:border-clay/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-script text-5xl text-clay">{e.day}</span>
                  <span className="rounded-full border border-night/20 px-3 py-1 text-xs uppercase tracking-widest text-night/60">
                    {e.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold">{e.title}</h3>
                <p className="mt-2 text-night/70">{e.desc}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-clay">
                  {e.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private events */}
      <section className="section bg-night text-bone">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl lg:order-1">
            <Image
              src={food7}
              alt="A shared dish set out for a gathering at Lost Coyote"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4 text-sun">Host with us</p>
            <h2 className="font-script text-4xl leading-[1.15] md:text-5xl">
              Your next event, poolside
            </h2>
            <p className="mt-6 text-lg text-bone/75">
              Birthdays, rehearsal dinners, company parties, or a full courtyard
              buyout — we&apos;ll build a menu and a vibe around it. Tell us what
              you&apos;re dreaming up and we&apos;ll take it from there.
            </p>
            <Link href="/visit#reserve" className="btn-primary mt-8">
              Make an Event Inquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
