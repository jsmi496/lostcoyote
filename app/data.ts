// Menu copy taken from lostcoyotenola.com (brunch / lunch / dinner / cocktails).
// Prices intentionally omitted.

type Item = { name: string; desc: string };
type Group = { name: string; items: Item[] };
export type MenuTab = { label: string; note: string; groups: Group[] };

export const menus: MenuTab[] = [
  {
    label: "Brunch",
    note: "Saturday & Sunday · 10am–3pm",
    groups: [
      {
        name: "Snacks",
        items: [
          { name: "Passionfruit Beignets", desc: "guava glaze, powdered sugar" },
          { name: "Cajun Corndogs", desc: "crawfish boil andouille, honey mustard" },
          { name: "Cornbread Muffins", desc: "cane butter, Steen's syrup, thyme" },
          { name: "Melon Cucumber Salad", desc: "cantaloupe, watermelon, cucumber, coconut vinaigrette, feta, chili crisp, mint" },
        ],
      },
      {
        name: "Small Plates",
        items: [
          { name: "Waldorf Wedge Salad", desc: "buttermilk ranch, bleu cheese, pickled red grapes, celery, bacon, dill" },
          { name: "Crab Claws", desc: "chorizo butter, white wine, cream, cherry tomatoes, herbs, grilled bread" },
          { name: "Burrata", desc: "fig agrodolce, toasted pine nuts, crispy prosciutto, pickled watermelon, basil, grilled bread" },
          { name: "Shrimp Roll", desc: "chamoy aioli, lemon, celery, dill, lettuce, pickles" },
          { name: "Caesar Salad", desc: "frisée, spiced pepitas, pickled apple, pecorino romano, croutons, cracked pepper" },
        ],
      },
      {
        name: "Large Plates",
        items: [
          { name: "Short Rib", desc: "whipped ricotta, herbed potatoes, bleu cheese, sunny-side up egg, mushroom bordelaise" },
          { name: "Southern Fried Chicken", desc: "monday red beans, citrus cane slaw, sunny-side up egg, pickled watermelon, fig agrodolce" },
          { name: "Shrimp & Grits with Crispy Fish", desc: "cherry tomatoes, peppers, white wine, chorizo cream sauce, herbs" },
          { name: "Crawfish Pasta", desc: "chorizo butter, white wine, cream, andouille, peppers, cherry tomatoes, pecorino, citrus breadcrumbs" },
          { name: "Shakshuka", desc: "spiced tomato & potato stew, baked eggs, cajun boiled cashews, boursin, fresh herbs" },
        ],
      },
    ],
  },
  {
    label: "Lunch",
    note: "Daily · until close",
    groups: [
      {
        name: "Snacks",
        items: [
          { name: "Fried Gnocchi", desc: "jalapeño gremolata, pecorino romano, basil, chili crisp ranch" },
          { name: "Cajun Corndogs", desc: "crawfish boil andouille, honey mustard" },
          { name: "Melon Cucumber Salad", desc: "cantaloupe, watermelon, cucumber, coconut vinaigrette, feta, chili crisp, mint" },
        ],
      },
      {
        name: "Shares + Plates",
        items: [
          { name: "Waldorf Wedge Salad", desc: "buttermilk ranch, bleu cheese, pickled red grapes, celery, bacon, dill" },
          { name: "Black Bean Hummus", desc: "jalapeño gremolata, sumac, plantains, pickled peppers" },
          { name: "Crab Claws", desc: "chorizo butter, white wine, cream, cherry tomatoes, herbs, grilled bread" },
          { name: "Burrata", desc: "fig agrodolce, toasted pine nuts, crispy prosciutto, pickled watermelon, basil, grilled bread" },
          { name: "Shrimp Roll", desc: "chamoy aioli, lemon, celery, dill, lettuce, pickles" },
          { name: "Fried Chicken Sandwich", desc: "citrus cane slaw, pickles, hot honey, buttermilk ranch, chamoy aioli, potato bun" },
          { name: "Hot Fish & Fries", desc: "hot honey, buttermilk ranch, pineapple tartar sauce" },
          { name: "Cuban Crunchwrap", desc: "mojo pork, honey ham, aji verde, swiss cheese, pickles, yellow mustard" },
        ],
      },
    ],
  },
  {
    label: "Dinner",
    note: "Daily · from 5pm",
    groups: [
      {
        name: "Snacks",
        items: [
          { name: "Crispy Olives", desc: "fried herbs, citrus" },
          { name: "Cornbread Muffins", desc: "cane butter, Steen's syrup, thyme" },
          { name: "Crawfish Boil Fried Potatoes", desc: "red potatoes, pickled chickpeas, pecorino romano, jalapeño gremolata" },
          { name: "Cajun Corndogs", desc: "crawfish boil andouille, honey mustard" },
        ],
      },
      {
        name: "Small Plates",
        items: [
          { name: "Black Bean Hummus", desc: "jalapeño gremolata, sumac, plantains, pickled peppers" },
          { name: "Crab Claws", desc: "chorizo butter, white wine, cream, cherry tomatoes, herbs, grilled bread" },
          { name: "Burrata", desc: "fig agrodolce, toasted pine nuts, crispy prosciutto, pickled watermelon, basil, grilled bread" },
          { name: "Whipped Ricotta", desc: "lemon zest, hot honey, pickled pomegranate seeds, mint, grilled bread" },
          { name: "Caesar Salad", desc: "frisée, spiced pepitas, pickled apple, pecorino romano, croutons, cracked pepper" },
        ],
      },
      {
        name: "Large Plates",
        items: [
          { name: "Pan Seared Gulf Fish", desc: "chilled white bean salad, sautéed kale, salsa verde" },
          { name: "Grilled Steak", desc: "whipped ricotta, herbed potatoes, chili crisp, pickled shallots, bleu cheese" },
          { name: "Southern Fried Chicken", desc: "monday red beans, citrus cane slaw, pickled watermelon, fig agrodolce" },
          { name: "Short Rib", desc: "smoked gouda grits, mushroom bordelaise, herb frisée salad" },
          { name: "Crawfish Pasta", desc: "chorizo butter, white wine, cream, andouille, peppers, cherry tomatoes, pecorino, citrus breadcrumbs" },
        ],
      },
    ],
  },
];

export const drinks: Group[] = [
  {
    name: "Cocktails",
    items: [
      { name: "Sol Searcher", desc: "reposado tequila, blood orange, rosemary-honey, ancho chili" },
      { name: "Half Day, Huh?", desc: "rum, coconut, grapefruit, passionfruit, orange blossom" },
      { name: "From The Vine", desc: "tomato-infused gin, caprese-washed vermouth, lemon, tonic" },
      { name: "Peach, Please", desc: "peach-infused bourbon, black tea, lemon, honey, mint" },
      { name: "Phone It In", desc: "vodka, pomegranate, berries, lemon, thyme" },
      { name: "The Upside", desc: "brown-butter-washed brandy, pineapple, maraschino cherry foam" },
    ],
  },
  {
    name: "Frozens",
    items: [
      { name: "Painkiller", desc: "'phantom' cognac, pineapple, banana, orange, coconut, cinnamon" },
      { name: "Frosé-Tinted Glasses", desc: "'phantom' cognac, rosé, strawberry, peach, basil" },
      { name: "Baja Belle", desc: "'small batch' white rum, baja blast" },
      { name: "Mangonada", desc: "'small batch' white rum, mango, lime, turmeric, ginger, chamoy" },
    ],
  },
  {
    name: "Zero Proof",
    items: [
      { name: "Lost in Thyme", desc: "thyme, coconut, lemon, soda" },
      { name: "Herb Your Enthusiasm", desc: "rosemary-honey, basil, strawberry, lemon" },
      { name: "Sweet Rosita", desc: "hibiscus, lime, warm spices, ginger beer" },
      { name: "The Ladybug", desc: "kava haven, watermelon, jalapeño, lime, soda" },
    ],
  },
];

export const hours = [
  { day: "Monday – Thursday", time: "10am – 9pm" },
  { day: "Friday", time: "10am – 10pm" },
  { day: "Saturday – Sunday", time: "10am – 10pm" },
  { day: "Brunch (Sat & Sun)", time: "10am – 3pm" },
];

export const SITE = {
  name: "Lost Coyote",
  phone: "(504) 381-4829",
  phoneHref: "tel:+15043814829",
  address: "1614 Esplanade Ave, New Orleans, LA 70116",
  mapHref:
    "https://maps.google.com/?q=1614+Esplanade+Ave+New+Orleans+LA+70116",
  instagram: "https://www.instagram.com/lostcoyotenola/",
  neighborhood: "Historic Tremé · New Orleans",
  // Live booking / ordering destinations
  reserveUrl: "https://www.opentable.com/r/lost-coyote-new-orleans",
  orderUrl:
    "https://order.spotin.com/ppos-lost-coyote-24645/new-orleans-la/687818331187012caa27206f/pickup",
  giftCardUrl: "https://lostcoyote.shop.securetree.com/",
};

export const poolTiers = [
  {
    tier: "Day Pass",
    price: "$20",
    period: "per person / all day",
    features: [
      "All-day pool access",
      "A towel on the house",
      "Complimentary pour of Brut",
      "Poolside food & drink service",
    ],
    cta: "Get a Day Pass",
    highlight: true,
  },
  {
    tier: "Cabana",
    price: "$150",
    period: "per day / up to 6",
    features: [
      "Reserved shaded cabana",
      "Priority poolside service",
      "Day passes for your crew",
      "Bottle service available",
    ],
    cta: "Reserve a Cabana",
    highlight: false,
  },
  {
    tier: "Annual Membership",
    price: "$600",
    period: "per year",
    features: [
      "Unlimited pool access",
      "Bring a guest each visit",
      "Member events & early RSVPs",
      "10% off food & retail",
    ],
    cta: "Become a Member",
    highlight: false,
  },
];

export const events = [
  {
    day: "Thu",
    title: "Vinyl & Vermouth",
    desc: "Local DJs spinning poolside while the sun goes down.",
    time: "6–9pm",
    tag: "Weekly",
  },
  {
    day: "Sat",
    title: "Bottomless Brunch",
    desc: "Passionfruit beignets, bubbles, and the full brunch menu.",
    time: "10am–3pm",
    tag: "Weekend",
  },
  {
    day: "Sun",
    title: "Dive-In Cinema",
    desc: "Films projected on the courtyard wall after dark.",
    time: "After sunset",
    tag: "Seasonal",
  },
];
