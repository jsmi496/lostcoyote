import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { poolTiers } from "../data";
import poolImg from "@/public/images/pool.avif";

export const metadata: Metadata = {
  title: "The Pool",
  description:
    "A heated, 21+ pool oasis in the heart of Tremé. Day passes from $20 (towel + a pour of Brut), cabanas, and annual memberships at Lost Coyote.",
};

const steps = [
  { n: "01", t: "Grab a pass", d: "Day passes are $20 and include a towel and a complimentary pour of Brut." },
  { n: "02", t: "Claim a chair", d: "Find your spot poolside. Cabanas available for groups up to six." },
  { n: "03", t: "Order in", d: "Full food and drink service comes right to you. No need to get up." },
];

export default function PoolPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Spend the day"
        title="A pool oasis in the city"
        intro="Our heated, 21-and-over pool is open all day. Grab a pass, claim a chair, and let someone else bring the cocktails."
        image={poolImg}
        imageAlt="The heated pool at Lost Coyote"
      />

      {/* How it works */}
      <section className="section bg-bone">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="font-script text-5xl text-clay">{s.n}</div>
                <h3 className="mt-2 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-night/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passes */}
      <section className="section bg-night text-bone">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3 text-pool">Passes & memberships</p>
            <h2 className="font-script text-4xl md:text-6xl">Pick your pace</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {poolTiers.map((t) => (
              <div
                key={t.tier}
                className={`flex flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  t.highlight
                    ? "bg-pool text-night shadow-2xl shadow-pool/20"
                    : "border border-bone/15 bg-moss/40"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-widest">
                  {t.tier}
                </p>
                <span className="mt-4 font-sans text-5xl font-bold">{t.price}</span>
                <p className={t.highlight ? "text-night/70" : "text-bone/60"}>
                  {t.period}
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className={t.highlight ? "text-clay" : "text-pool"}>✦</span>
                      <span className={t.highlight ? "text-night/80" : "text-bone/80"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/visit#reserve"
                  className={`mt-8 ${t.highlight ? "btn-dark" : "btn-primary"}`}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-bone/50">
            Must be 21+ to enter the pool area. Day passes are first-come,
            first-served on busy weekends — members and cabana guests always get
            in.
          </p>
        </div>
      </section>
    </main>
  );
}
