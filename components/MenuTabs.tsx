"use client";

import { useState } from "react";
import { menus, drinks } from "@/app/data";

const tabs = [...menus.map((m) => m.label), "Drinks"];

export function MenuTabs() {
  const [active, setActive] = useState(tabs[0]);
  const activeMenu = menus.find((m) => m.label === active);
  const note =
    activeMenu?.note ?? "Cocktails, frozens & zero-proof · served all day";

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-night/10 pb-4">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest transition-colors ${
              active === t
                ? "bg-night text-bone"
                : "text-night/50 hover:bg-night/5 hover:text-night"
            }`}
          >
            {t}
          </button>
        ))}
        <span className="ml-auto hidden text-xs uppercase tracking-widest text-night/40 sm:block">
          {note}
        </span>
      </div>

      {/* Content */}
      <div className="mt-10 columns-1 gap-12 md:columns-2 lg:columns-3">
        {(active === "Drinks" ? drinks : activeMenu?.groups ?? []).map(
          (group) => (
            <div key={group.name} className="mb-10 break-inside-avoid">
              <h3 className="mb-4 font-sans text-base font-bold uppercase tracking-wider text-clay">
                {group.name}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-semibold leading-snug">{item.name}</p>
                    <p className="mt-0.5 text-sm text-night/60">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
}
