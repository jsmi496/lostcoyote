export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Lost Coyote",
    servesCuisine: ["American", "Louisiana", "Creole"],
    priceRange: "$$",
    telephone: "+15043814829",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1614 Esplanade Ave",
      addressLocality: "New Orleans",
      addressRegion: "LA",
      postalCode: "70116",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "10:00", closes: "21:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday", "Sunday"], opens: "10:00", closes: "22:00" },
    ],
    url: "https://www.lostcoyotenola.com",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
