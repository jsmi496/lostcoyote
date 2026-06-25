"use client";

export function HeroVideo() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
      autoPlay
      loop
      muted
      playsInline
      poster="/images/hero-poster.jpg"
      preload="auto"
      aria-hidden="true"
    >
      <source src="/images/hero.mp4" type="video/mp4" />
    </video>
  );
}
