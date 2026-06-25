import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { MenuTabs } from "@/components/MenuTabs";
import { SITE } from "../data";
import food3 from "@/public/images/food-3.avif";
import food5 from "@/public/images/food-5.avif";
import food6 from "@/public/images/food-6.avif";
import drinkSol from "@/public/images/drink-sol-searcher.avif";
import drinkPhone from "@/public/images/drink-phone-it-in.avif";
import drinkWanderer from "@/public/images/drink-wanderers-call.avif";

export const metadata: Metadata = {
  title: "Food & Drinks",
  description:
    "Polished comfort food with a global twist — brunch, lunch, dinner — plus signature cocktails, frozens, and zero-proof drinks at Lost Coyote in Tremé.",
};

const drinkShots = [
  { img: drinkSol, name: "Sol Searcher", desc: "reposado tequila, blood orange, rosemary-honey, ancho chili" },
  { img: drinkPhone, name: "Phone It In", desc: "vodka, pomegranate, berries, lemon, thyme" },
  { img: drinkWanderer, name: "The Upside", desc: "brown-butter-washed brandy, pineapple, maraschino cherry foam" },
];

export default function MenuPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Food & Drinks"
        title="Polished comfort, global twist"
        intro="Louisiana flavors, regional ingredients, and a little wandering off the map. Menus change with the season."
        image={food3}
        imageAlt="A spread of Lost Coyote dishes"
      />

      <section className="section bg-bone">
        <div className="mx-auto max-w-7xl">
          <MenuTabs />
        </div>
      </section>

      {/* Signature cocktails gallery */}
      <section className="section bg-night text-bone">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3 text-sun">From the bar</p>
            <h2 className="font-script text-4xl md:text-6xl">
              Built for the deep end
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {drinkShots.map((d) => (
              <div key={d.name} className="overflow-hidden rounded-3xl bg-moss/40">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={d.img}
                    alt={d.name}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-script text-3xl text-sun">{d.name}</h3>
                  <p className="mt-1 text-sm text-bone/70">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food close-ups + order CTA */}
      <section className="section bg-bone">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg">
              <Image src={food6} alt="Passionfruit beignets" sizes="40vw" className="h-full w-full object-cover" />
            </div>
            <div className="relative mt-8 aspect-square overflow-hidden rounded-3xl shadow-lg">
              <Image src={food5} alt="Black bean hummus with crudité" sizes="40vw" className="h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <p className="eyebrow mb-4">Can&apos;t make it in?</p>
            <h2 className="font-script text-4xl leading-[1.15] md:text-5xl">
              Take a little of the wander home
            </h2>
            <p className="mt-6 text-lg text-night/75">
              Order your poolside favorites for pickup, or grab a gift card for
              the wanderer in your life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SITE.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Order Online
              </a>
              <a
                href={SITE.giftCardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                Gift Cards
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
