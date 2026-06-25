import Image, { type StaticImageData } from "next/image";

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: StaticImageData;
  imageAlt: string;
}) {
  return (
    <header className="relative flex min-h-[58vh] items-end overflow-hidden bg-night text-bone">
      <Image
        src={image}
        alt={imageAlt}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-night/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 md:px-12">
        <p className="eyebrow mb-3 text-sun">{eyebrow}</p>
        <h1 className="font-script text-6xl leading-[1.05] drop-shadow-lg md:text-8xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg text-bone/85 drop-shadow md:text-xl">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
