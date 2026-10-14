export interface PromotionItem {
  id: string;
  title: string;
  tagline: string;
  schedule: string;
  image: string;
  badgeColor: string; // hex
  textColor: string;
  description: string;
}

export interface JobPosition {
  id: string;
  title: string;
  salary: string;
  schedule: string;
  experience: string;
  requirements?: string;
  description: string;
}

export interface DaySchedule {
  day: string;
  diningRoom: string;
  bar: string;
  breakfast: string;
  happyHour: string;
  takeaway: string;
  delivery: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "pizza" | "mains" | "pasta" | "breakfast" | "cocktails" | "dessert";
  tag?: string;
  image?: string;
}

export const TICKER_MESSAGES = [
  { icon: "cocktail", title: "Happy Hour", detail: "Daily 2–6 pm." },
  { icon: "egg", title: "Lunch Specials", detail: "Daily 11 am–2 pm." },
  { icon: "fish", title: "Fish & Chips", detail: "Every Tuesday 11 am–10 pm." },
  { icon: "pizza", title: "Pizza Wednesday", detail: "20% off all pizzas in delivery and take out." },
  { icon: "shell", title: "Unlimited Mussels & Fries", detail: "Every Wednesday starting at 4 pm." },
  { icon: "wine", title: "Half-Price Wine", detail: "Every Thursday from 11 am." },
];

export const PROMOTIONS: PromotionItem[] = [
  {
    id: "happy-hour",
    title: "Happy Hour",
    tagline: "Your afternoons, elevated.",
    schedule: "Daily 2–6 pm.",
    image: "https://delice.ca/wp-content/uploads/2025/04/c712d28a-a727-465e-a475-a4712d5c12ec.png",
    badgeColor: "#75c2bd", // cyan
    textColor: "#f8efdc",
    description: "Unwind with specially priced craft cocktails, local draft beers, and select appetizers on our terrace or lively bar lounge.",
  },
  {
    id: "lunch-specials",
    title: "Lunch Specials",
    tagline: "Your midday break, made better.",
    schedule: "Daily 11 am–2 pm.",
    image: "https://delice.ca/wp-content/uploads/2025/01/dscf5210.png",
    badgeColor: "#91964f", // olive
    textColor: "#f8efdc",
    description: "Quick, flavorful lunch duos featuring gourmet soup or fresh salad paired with our signature pizzas and sandwiches.",
  },
  {
    id: "fish-and-chips",
    title: "Fish & Chips",
    tagline: "Crispy, golden, irresistible.",
    schedule: "Every Tuesday 11 am–10 pm.",
    image: "https://delice.ca/wp-content/uploads/2025/03/dscf5208-1-2560x2560.png",
    badgeColor: "#263150", // navy
    textColor: "#f8efdc",
    description: "Fresh beer-battered Atlantic cod fillet, house-made remoulade sauce, creamy coleslaw, and crispy seasoned fries.",
  },
  {
    id: "pizza-wednesday",
    title: "Pizza Wednesday",
    tagline: "Wednesdays are made for pizza.",
    schedule: "20% off all pizzas in delivery and take out.",
    image: "https://delice.ca/wp-content/uploads/2025/01/dscf5221.png",
    badgeColor: "#e58833", // orange
    textColor: "#f8efdc",
    description: "Take home our legendary wood-fired stone oven pizzas at an exclusive 20% discount all day Wednesday.",
  },
  {
    id: "unlimited-mussels",
    title: "Unlimited Mussels & Fries",
    tagline: "Indulge without limits!",
    schedule: "Every Wednesday starting at 4 pm.",
    image: "https://delice.ca/wp-content/uploads/2025/03/creation-sans-titre-6-1.png",
    badgeColor: "#263150", // navy
    textColor: "#f8efdc",
    description: "All-you-can-enjoy fresh marinière, garlic cream, or spicy arrabbiata mussels accompanied by golden hand-cut fries.",
  },
  {
    id: "half-price-wine",
    title: "Half-Price Wine",
    tagline: "Every bottle, half price.",
    schedule: "Every Thursday from 11 am.",
    image: "https://delice.ca/wp-content/uploads/2025/04/icoeua9hcrg8y02p2mir4jnspyzzq1sgw89zhpfidav2zxed.png",
    badgeColor: "#de2b2b", // primary red
    textColor: "#f8efdc",
    description: "Discover our private import cellars with 50% off all bottles of red, white, rosé, and sparkling selections.",
  },
];

export const JOB_POSITIONS: JobPosition[] = [
  {
    id: "dishwasher",
    title: "Dishwasher",
    salary: "Starting at $20/hour",
    schedule: "Full-time or part-time",
    experience: "No experience required",
    description:
      "You clean and organize dishes and kitchen equipment to keep the dishwashing area clean, organized, and running efficiently throughout service.",
  },
  {
    id: "floor-manager",
    title: "Floor Manager",
    salary: "Competitive salary + benefits",
    schedule: "Full-time",
    experience: "Minimum 5 years in the restaurant industry, including at least 1 year in management",
    description:
      "You oversee dining room operations, lead the team, and ensure smooth, professional service while creating memorable guest experiences.",
  },
  {
    id: "pizzaiolo",
    title: "Pizzaman / Pizzaiolo",
    salary: "Starting at $20/hour + tip sharing",
    schedule: "Full-time or part-time",
    experience: "Pizza experience is an asset",
    description:
      "You prepare, stretch, top, and bake our handcrafted artisan pizzas according to Délice's 50-year heritage recipes and standards.",
  },
  {
    id: "delivery-driver",
    title: "Delivery Driver",
    salary: "Starting at $13.30/hour + individual tips",
    schedule: "Full-time or part-time",
    experience: "No experience required",
    requirements: "Valid driver's licence · Good knowledge of the Lévis area",
    description:
      "You deliver orders quickly and courteously throughout Lévis in our dedicated delivery fleet.",
  },
  {
    id: "receptionist",
    title: "Receptionist / Host",
    salary: "$17/hour + tips",
    schedule: "Full-time or part-time",
    experience: "Comfortable with customer service and computer systems",
    description:
      "You welcome guests in person and over the phone, manage table reservations, and handle takeout and delivery orders while ensuring smooth communication with the team.",
  },
  {
    id: "busser",
    title: "Busser",
    salary: "Starting at $13.30/hour + tip sharing",
    schedule: "Full-time or part-time",
    experience: "No experience required",
    description:
      "You support the service team by clearing and resetting tables, keeping the dining room spotless, and ensuring service stations stay stocked so service remains fast and smooth.",
  },
  {
    id: "bartender",
    title: "Bartender",
    salary: "Starting at $13.30/hour + individual tips",
    schedule: "Full-time or part-time",
    experience: "Minimum 2 years of experience behind a bar or in table service",
    description:
      "You prepare and serve signature cocktails, wine, and spirits quickly and accurately, while providing attentive service and contributing to the vibrant atmosphere of the lounge.",
  },
  {
    id: "server",
    title: "Server",
    salary: "Starting at $13.30/hour + individual tips",
    schedule: "Full-time or part-time",
    experience: "Minimum 2 years of table service experience",
    description:
      "You welcome and advise guests, take orders, and provide fast, attentive, and professional service from the beginning to the end of the meal.",
  },
  {
    id: "line-cook",
    title: "Line Cook",
    salary: "Starting at $24/hour + tip sharing",
    schedule: "Full-time or part-time",
    experience: "Minimum 3 years of kitchen experience or a completed DEP in Professional Cooking",
    description:
      "You prepare and assemble menu items consistently, with passion, culinary technique, and precision during high-volume services.",
  },
  {
    id: "hostess",
    title: "Hostess",
    salary: "Starting at $17/hour + tip sharing",
    schedule: "Full-time or part-time",
    experience: "No experience required",
    description:
      "You welcome guests upon arrival, escort them to their table, distribute menus, and help the team keep the entrance and dining room clean, organized, and welcoming.",
  },
  {
    id: "food-runner",
    title: "Food Runner",
    salary: "Starting at $13.30/hour + tip sharing",
    schedule: "Full-time or part-time",
    experience: "No experience required",
    description:
      "You act as the link between the kitchen and dining room by delivering hot dishes to the correct tables swiftly and courteously.",
  },
];

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    day: "Monday",
    diningRoom: "Closed",
    bar: "Closed",
    breakfast: "Closed",
    happyHour: "Closed",
    takeaway: "Closed",
    delivery: "Closed",
  },
  {
    day: "Tuesday",
    diningRoom: "07:30 to 22:00",
    bar: "11:00 to 22:00",
    breakfast: "07:30 to 14:00",
    happyHour: "14:00 to 18:00",
    takeaway: "10:00 to 22:00",
    delivery: "11:00 to 22:00",
  },
  {
    day: "Wednesday",
    diningRoom: "07:30 to 22:00",
    bar: "11:00 to 22:00",
    breakfast: "07:30 to 14:00",
    happyHour: "14:00 to 18:00",
    takeaway: "10:00 to 22:00",
    delivery: "11:00 to 22:00",
  },
  {
    day: "Thursday",
    diningRoom: "07:30 to 23:00",
    bar: "11:00 to 00:00",
    breakfast: "07:30 to 14:00",
    happyHour: "14:00 to 18:00",
    takeaway: "10:00 to 23:00",
    delivery: "11:00 to 23:00",
  },
  {
    day: "Friday",
    diningRoom: "07:30 to 23:00",
    bar: "11:00 to 02:00",
    breakfast: "07:30 to 14:00",
    happyHour: "14:00 to 18:00",
    takeaway: "10:00 to 23:00",
    delivery: "11:00 to 23:00",
  },
  {
    day: "Saturday",
    diningRoom: "08:00 to 23:00",
    bar: "11:00 to 02:00",
    breakfast: "08:00 to 15:00",
    happyHour: "14:00 to 18:00",
    takeaway: "10:00 to 23:00",
    delivery: "11:00 to 23:00",
  },
  {
    day: "Sunday",
    diningRoom: "08:00 to 21:00",
    bar: "11:00 to 22:00",
    breakfast: "08:00 to 15:00",
    happyHour: "14:00 to 18:00",
    takeaway: "10:00 to 23:00",
    delivery: "11:00 to 23:00",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Pizzas
  {
    id: "p1",
    name: "The Classic Délice 1970",
    description: "House tomato sauce, double mozzarella, spiced pepperoni, sautéed mushrooms, bell peppers, fresh oregano.",
    price: "$24.50",
    category: "pizza",
    tag: "House Special",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "p2",
    name: "Truffle Prosciutto & Burrata",
    description: "White truffle cream sauce, fior di latte mozzarella, 18-month aged prosciutto di Parma, creamy burrata, arugula, balsamic glaze.",
    price: "$28.00",
    category: "pizza",
    tag: "Chef's Favorite",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "p3",
    name: "Four Fromages Rustica",
    description: "San Marzano tomatoes, fresh mozzarella, gorgonzola dolce, aged cheddar, pecorino romano, wild thyme blossom.",
    price: "$23.00",
    category: "pizza",
    tag: "Vegetarian",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "p4",
    name: "Smoked Salmon & Capers",
    description: "Herbed dill crème fraîche, Quebec cold-smoked salmon, pickled red onions, crispy capers, lemon zest, baby spinach.",
    price: "$27.50",
    category: "pizza",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&auto=format&fit=crop&q=80",
  },

  // Mains
  {
    id: "m1",
    name: "Beer-Battered Atlantic Cod & Chips",
    description: "Line-caught Atlantic cod fillet in crispy craft beer batter, house remoulade sauce, sweet cabbage slaw, hand-cut russet fries.",
    price: "$26.00",
    category: "mains",
    tag: "Tuesday Special",
    image: "https://delice.ca/wp-content/uploads/2025/04/dscf5672-2560x1920.jpg",
  },
  {
    id: "m2",
    name: "Slow-Braised Beef Short Rib",
    description: "Quebec AAA short rib braised for 14 hours in red wine reduction, buttery whipped Yukon potatoes, roasted baby heirloom carrots.",
    price: "$38.00",
    category: "mains",
    tag: "Signature",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "m3",
    name: "Délice Prime Smash Burger",
    description: "Twin 4oz Quebec Angus beef patties, melted aged cheddar, bacon-onion jam, house garlic aioli, butter brioche bun, fries.",
    price: "$22.50",
    category: "mains",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
  },

  // Pasta
  {
    id: "pa1",
    name: "Seafood Tagliatelle Marinara",
    description: "Handmade egg tagliatelle, jumbo tiger prawns, sea scallops, blue mussels, garlic-white wine San Marzano sauce, fresh parsley.",
    price: "$32.00",
    category: "pasta",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "pa2",
    name: "Wild Mushroom & Truffle Gnocchi",
    description: "Pan-seared potato gnocchi, roasted chanterelle and cremini mushrooms, truffle butter cream, crispy sage, parmesan crisp.",
    price: "$27.00",
    category: "pasta",
    tag: "Vegetarian",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80",
  },

  // Breakfast
  {
    id: "b1",
    name: "Classic Smoked Salmon Eggs Benedict",
    description: "Two poached farm eggs, smoked salmon, velvety citrus hollandaise sauce, toasted English muffin, lyonnaise potatoes, seasonal fruit.",
    price: "$21.50",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "b2",
    name: "Golden Brioche French Toast",
    description: "Caramelized thick brioche, Quebec pure maple syrup, mixed wild berry compote, whipped Chantilly cream, toasted pecans.",
    price: "$18.50",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=80",
  },

  // Cocktails
  {
    id: "c1",
    name: "Délice Signature Smoked Old Fashioned",
    description: "Woodford Reserve Bourbon, spiced orange bitters, organic cane syrup, torched rosemary, applewood smoke infusion.",
    price: "$17.00",
    category: "cocktails",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "c2",
    name: "Passionfruit & Basil Spritz",
    description: "Aperol, passionfruit purée, muddled Thai basil, prosecco, sparkling soda, dehydrated blood orange wheel.",
    price: "$15.00",
    category: "cocktails",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&auto=format&fit=crop&q=80",
  },

  // Desserts
  {
    id: "d1",
    name: "Classic Italian Tiramisu",
    description: "Savoiardi ladyfingers soaked in dark espresso and Kahlúa, layered with whipped mascarpone cream, Dutch cocoa dusting.",
    price: "$12.00",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "d2",
    name: "Molten Valrhona Chocolate Lava Cake",
    description: "Warm flowing dark chocolate center, Madagascar vanilla bean gelato, fresh raspberry coulis.",
    price: "$13.50",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80",
  },
];
