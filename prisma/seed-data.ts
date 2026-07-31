// Curated starter dataset of major USA amusement / theme parks and their
// headline rides. This is not exhaustive of every USA amusement park, but
// covers all the major chains (Disney, Universal, Six Flags, Cedar Fair
// legacy parks, SeaWorld/Busch Gardens, Herschend) plus notable independent
// parks, so the app has real, useful data out of the box.
//
// To add more parks or rides, append to this file and re-run `npm run db:seed`.
// Slugs must be unique per-park (park slug) and unique-per-park for rides.

export type SeedRide = {
  slug: string;
  name: string;
  type:
    | "ROLLER_COASTER"
    | "DARK_RIDE"
    | "WATER_RIDE"
    | "FLAT_RIDE"
    | "KIDDIE"
    | "TRANSPORT"
    | "SHOW"
    | "OTHER";
  manufacturer?: string;
  opened?: number;
};

export type SeedPark = {
  slug: string;
  name: string;
  chain:
    | "DISNEY"
    | "UNIVERSAL"
    | "SIX_FLAGS"
    | "CEDAR_FAIR"
    | "SEAWORLD"
    | "HERSCHEND"
    | "INDEPENDENT"
    | "OTHER";
  city: string;
  state: string;
  website?: string;
  rides: SeedRide[];
};

export const parks: SeedPark[] = [
  // --- Disney -------------------------------------------------------
  {
    slug: "magic-kingdom",
    name: "Magic Kingdom",
    chain: "DISNEY",
    city: "Bay Lake",
    state: "FL",
    website: "https://disneyworld.disney.go.com/destinations/magic-kingdom/",
    rides: [
      { slug: "seven-dwarfs-mine-train", name: "Seven Dwarfs Mine Train", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 2014 },
      { slug: "space-mountain", name: "Space Mountain", type: "ROLLER_COASTER", manufacturer: "WED Enterprises", opened: 1975 },
      { slug: "big-thunder-mountain-railroad", name: "Big Thunder Mountain Railroad", type: "ROLLER_COASTER", manufacturer: "WED Enterprises", opened: 1980 },
      { slug: "pirates-of-the-caribbean", name: "Pirates of the Caribbean", type: "DARK_RIDE", opened: 1973 },
      { slug: "haunted-mansion", name: "Haunted Mansion", type: "DARK_RIDE", opened: 1971 },
      { slug: "tron-lightcycle-run", name: "TRON Lightcycle / Run", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 2023 },
      { slug: "jungle-cruise", name: "Jungle Cruise", type: "DARK_RIDE", opened: 1971 },
      { slug: "its-a-small-world", name: "it's a small world", type: "DARK_RIDE", opened: 1971 },
    ],
  },
  {
    slug: "epcot",
    name: "EPCOT",
    chain: "DISNEY",
    city: "Bay Lake",
    state: "FL",
    rides: [
      { slug: "guardians-of-the-galaxy-cosmic-rewind", name: "Guardians of the Galaxy: Cosmic Rewind", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 2022 },
      { slug: "test-track", name: "Test Track", type: "DARK_RIDE", opened: 1999 },
      { slug: "soarin-around-the-world", name: "Soarin' Around the World", type: "FLAT_RIDE", opened: 2005 },
      { slug: "frozen-ever-after", name: "Frozen Ever After", type: "DARK_RIDE", opened: 2016 },
      { slug: "spaceship-earth", name: "Spaceship Earth", type: "DARK_RIDE", opened: 1982 },
    ],
  },
  {
    slug: "hollywood-studios",
    name: "Disney's Hollywood Studios",
    chain: "DISNEY",
    city: "Bay Lake",
    state: "FL",
    rides: [
      { slug: "rise-of-the-resistance", name: "Star Wars: Rise of the Resistance", type: "DARK_RIDE", opened: 2019 },
      { slug: "millennium-falcon-smugglers-run", name: "Millennium Falcon: Smugglers Run", type: "DARK_RIDE", opened: 2019 },
      { slug: "rock-n-roller-coaster", name: "Rock 'n' Roller Coaster Starring Aerosmith", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 1999 },
      { slug: "twilight-zone-tower-of-terror", name: "The Twilight Zone Tower of Terror", type: "FLAT_RIDE", opened: 1994 },
      { slug: "slinky-dog-dash", name: "Slinky Dog Dash", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 2018 },
    ],
  },
  {
    slug: "animal-kingdom",
    name: "Disney's Animal Kingdom",
    chain: "DISNEY",
    city: "Bay Lake",
    state: "FL",
    rides: [
      { slug: "avatar-flight-of-passage", name: "Avatar: Flight of Passage", type: "FLAT_RIDE", opened: 2017 },
      { slug: "expedition-everest", name: "Expedition Everest", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 2006 },
      { slug: "kilimanjaro-safaris", name: "Kilimanjaro Safaris", type: "OTHER", opened: 1998 },
      { slug: "navi-river-journey", name: "Na'vi River Journey", type: "DARK_RIDE", opened: 2017 },
    ],
  },
  {
    slug: "disneyland-park",
    name: "Disneyland Park",
    chain: "DISNEY",
    city: "Anaheim",
    state: "CA",
    rides: [
      { slug: "space-mountain-dl", name: "Space Mountain", type: "ROLLER_COASTER", opened: 1977 },
      { slug: "matterhorn-bobsleds", name: "Matterhorn Bobsleds", type: "ROLLER_COASTER", opened: 1959 },
      { slug: "indiana-jones-adventure", name: "Indiana Jones Adventure", type: "DARK_RIDE", opened: 1995 },
      { slug: "rise-of-the-resistance-dl", name: "Star Wars: Rise of the Resistance", type: "DARK_RIDE", opened: 2019 },
      { slug: "pirates-of-the-caribbean-dl", name: "Pirates of the Caribbean", type: "DARK_RIDE", opened: 1967 },
      { slug: "haunted-mansion-dl", name: "Haunted Mansion", type: "DARK_RIDE", opened: 1969 },
      { slug: "big-thunder-mountain-dl", name: "Big Thunder Mountain Railroad", type: "ROLLER_COASTER", opened: 1979 },
    ],
  },
  {
    slug: "disney-california-adventure",
    name: "Disney California Adventure",
    chain: "DISNEY",
    city: "Anaheim",
    state: "CA",
    rides: [
      { slug: "guardians-of-the-galaxy-mission-breakout", name: "Guardians of the Galaxy – Mission: BREAKOUT!", type: "FLAT_RIDE", opened: 2017 },
      { slug: "radiator-springs-racers", name: "Radiator Springs Racers", type: "ROLLER_COASTER", opened: 2012 },
      { slug: "incredicoaster", name: "Incredicoaster", type: "ROLLER_COASTER", opened: 2001 },
      { slug: "web-slingers", name: "WEB SLINGERS: A Spider-Man Adventure", type: "DARK_RIDE", opened: 2021 },
    ],
  },

  // --- Universal ------------------------------------------------------
  {
    slug: "universal-studios-florida",
    name: "Universal Studios Florida",
    chain: "UNIVERSAL",
    city: "Orlando",
    state: "FL",
    rides: [
      { slug: "harry-potter-escape-from-gringotts", name: "Harry Potter and the Escape from Gringotts", type: "DARK_RIDE", opened: 2014 },
      { slug: "revenge-of-the-mummy", name: "Revenge of the Mummy", type: "ROLLER_COASTER", manufacturer: "Premier Rides", opened: 2004 },
      { slug: "hollywood-rip-ride-rockit", name: "Hollywood Rip Ride Rockit", type: "ROLLER_COASTER", manufacturer: "Maurer Söhne", opened: 2009 },
      { slug: "transformers-the-ride-3d", name: "Transformers: The Ride-3D", type: "DARK_RIDE", opened: 2013 },
    ],
  },
  {
    slug: "islands-of-adventure",
    name: "Universal's Islands of Adventure",
    chain: "UNIVERSAL",
    city: "Orlando",
    state: "FL",
    rides: [
      { slug: "hagrids-magical-creatures-motorbike-adventure", name: "Hagrid's Magical Creatures Motorbike Adventure", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2019 },
      { slug: "harry-potter-forbidden-journey", name: "Harry Potter and the Forbidden Journey", type: "DARK_RIDE", opened: 2010 },
      { slug: "velocicoaster", name: "Jurassic World VelociCoaster", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2021 },
      { slug: "the-incredible-hulk-coaster", name: "The Incredible Hulk Coaster", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1999 },
    ],
  },
  {
    slug: "epic-universe",
    name: "Universal Epic Universe",
    chain: "UNIVERSAL",
    city: "Orlando",
    state: "FL",
    rides: [
      { slug: "stardust-racers", name: "Stardust Racers", type: "ROLLER_COASTER", manufacturer: "Mack Rides", opened: 2025 },
      { slug: "harry-potter-battle-at-the-ministry", name: "Harry Potter and the Battle at the Ministry", type: "DARK_RIDE", opened: 2025 },
      { slug: "monsters-unchained", name: "Monsters Unchained: The Frankenstein Experiment", type: "DARK_RIDE", opened: 2025 },
    ],
  },
  {
    slug: "universal-studios-hollywood",
    name: "Universal Studios Hollywood",
    chain: "UNIVERSAL",
    city: "Universal City",
    state: "CA",
    rides: [
      { slug: "harry-potter-forbidden-journey-usc", name: "Harry Potter and the Forbidden Journey", type: "DARK_RIDE", opened: 2016 },
      { slug: "jurassic-world-the-ride", name: "Jurassic World – The Ride", type: "WATER_RIDE", opened: 2019 },
      { slug: "revenge-of-the-mummy-usc", name: "Revenge of the Mummy", type: "ROLLER_COASTER", opened: 2004 },
      { slug: "studio-tour", name: "Studio Tour", type: "TRANSPORT", opened: 1964 },
    ],
  },

  // --- Six Flags --------------------------------------------------
  {
    slug: "six-flags-magic-mountain",
    name: "Six Flags Magic Mountain",
    chain: "SIX_FLAGS",
    city: "Valencia",
    state: "CA",
    rides: [
      { slug: "x2", name: "X2", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 2002 },
      { slug: "twisted-colossus", name: "Twisted Colossus", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2015 },
      { slug: "tatsu", name: "Tatsu", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2006 },
      { slug: "full-throttle", name: "Full Throttle", type: "ROLLER_COASTER", manufacturer: "Premier Rides", opened: 2013 },
      { slug: "goliath-sfmm", name: "Goliath", type: "ROLLER_COASTER", manufacturer: "Giovanola", opened: 2000 },
    ],
  },
  {
    slug: "six-flags-great-adventure",
    name: "Six Flags Great Adventure",
    chain: "SIX_FLAGS",
    city: "Jackson",
    state: "NJ",
    rides: [
      { slug: "jersey-devil-coaster", name: "Jersey Devil Coaster", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2021 },
      { slug: "kingda-ka", name: "Kingda Ka", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2005 },
      { slug: "el-toro", name: "El Toro", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2006 },
      { slug: "nitro", name: "Nitro", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2001 },
    ],
  },
  {
    slug: "six-flags-over-georgia",
    name: "Six Flags Over Georgia",
    chain: "SIX_FLAGS",
    city: "Austell",
    state: "GA",
    rides: [
      { slug: "goliath-sfog", name: "Goliath", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2006 },
      { slug: "twisted-cyclone", name: "Twisted Cyclone", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2018 },
      { slug: "blue-hawk", name: "Blue Hawk", type: "ROLLER_COASTER", opened: 2023 },
    ],
  },
  {
    slug: "six-flags-fiesta-texas",
    name: "Six Flags Fiesta Texas",
    chain: "SIX_FLAGS",
    city: "San Antonio",
    state: "TX",
    rides: [
      { slug: "wonder-woman-golden-lasso-coaster", name: "Wonder Woman Golden Lasso Coaster", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2018 },
      { slug: "iron-rattler", name: "Iron Rattler", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2013 },
    ],
  },
  {
    slug: "six-flags-over-texas",
    name: "Six Flags Over Texas",
    chain: "SIX_FLAGS",
    city: "Arlington",
    state: "TX",
    rides: [
      { slug: "titan", name: "Titan", type: "ROLLER_COASTER", manufacturer: "Morgan", opened: 2001 },
      { slug: "new-texas-giant", name: "New Texas Giant", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2011 },
    ],
  },
  {
    slug: "six-flags-great-america",
    name: "Six Flags Great America",
    chain: "SIX_FLAGS",
    city: "Gurnee",
    state: "IL",
    rides: [
      { slug: "goliath-sfga", name: "Goliath", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2014 },
      { slug: "raging-bull", name: "Raging Bull", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1999 },
      { slug: "maxx-force", name: "Maxx Force", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2019 },
    ],
  },
  {
    slug: "six-flags-magic-mountain-hurricane-harbor",
    name: "Six Flags St. Louis",
    chain: "SIX_FLAGS",
    city: "Eureka",
    state: "MO",
    rides: [
      { slug: "boss", name: "The Boss", type: "ROLLER_COASTER", opened: 2000 },
      { slug: "americas-thrill-ride", name: "American Thunder", type: "ROLLER_COASTER", opened: 2008 },
    ],
  },

  // --- Cedar Fair legacy parks -------------------------------------
  {
    slug: "cedar-point",
    name: "Cedar Point",
    chain: "CEDAR_FAIR",
    city: "Sandusky",
    state: "OH",
    website: "https://www.cedarpoint.com",
    rides: [
      { slug: "steel-vengeance", name: "Steel Vengeance", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2018 },
      { slug: "top-thrill-2", name: "Top Thrill 2", type: "ROLLER_COASTER", manufacturer: "Zamperla", opened: 2024 },
      { slug: "millennium-force", name: "Millennium Force", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2000 },
      { slug: "maverick", name: "Maverick", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2007 },
      { slug: "raptor", name: "Raptor", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1994 },
      { slug: "magnum-xl-200", name: "Magnum XL-200", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1989 },
    ],
  },
  {
    slug: "kings-island",
    name: "Kings Island",
    chain: "CEDAR_FAIR",
    city: "Mason",
    state: "OH",
    rides: [
      { slug: "orion", name: "Orion", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2020 },
      { slug: "diamondback", name: "Diamondback", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2009 },
      { slug: "the-beast", name: "The Beast", type: "ROLLER_COASTER", opened: 1979 },
      { slug: "mystic-timbers", name: "Mystic Timbers", type: "ROLLER_COASTER", manufacturer: "GCI", opened: 2017 },
    ],
  },
  {
    slug: "kings-dominion",
    name: "Kings Dominion",
    chain: "CEDAR_FAIR",
    city: "Doswell",
    state: "VA",
    rides: [
      { slug: "twisted-timbers", name: "Twisted Timbers", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2018 },
      { slug: "intimidator-305", name: "Intimidator 305", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2010 },
      { slug: "dominator", name: "Dominator", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2007 },
    ],
  },
  {
    slug: "carowinds",
    name: "Carowinds",
    chain: "CEDAR_FAIR",
    city: "Charlotte",
    state: "NC",
    rides: [
      { slug: "fury-325", name: "Fury 325", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2015 },
      { slug: "copperhead-strike", name: "Copperhead Strike", type: "ROLLER_COASTER", manufacturer: "Mack Rides", opened: 2019 },
    ],
  },
  {
    slug: "knotts-berry-farm",
    name: "Knott's Berry Farm",
    chain: "CEDAR_FAIR",
    city: "Buena Park",
    state: "CA",
    rides: [
      { slug: "ghostrider", name: "GhostRider", type: "ROLLER_COASTER", manufacturer: "CCI", opened: 1998 },
      { slug: "silver-bullet", name: "Silver Bullet", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2004 },
      { slug: "haunt-hangtime", name: "HangTime", type: "ROLLER_COASTER", manufacturer: "Gerstlauer", opened: 2018 },
    ],
  },
  {
    slug: "california-great-america",
    name: "California's Great America",
    chain: "CEDAR_FAIR",
    city: "Santa Clara",
    state: "CA",
    rides: [
      { slug: "railblazer", name: "RailBlazer", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2018 },
      { slug: "gold-striker", name: "Gold Striker", type: "ROLLER_COASTER", manufacturer: "GCI", opened: 2013 },
    ],
  },
  {
    slug: "dorney-park",
    name: "Dorney Park & Wildwater Kingdom",
    chain: "CEDAR_FAIR",
    city: "Allentown",
    state: "PA",
    rides: [
      { slug: "iron-menace", name: "Iron Menace", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2022 },
      { slug: "hydra-the-revenge", name: "Hydra the Revenge", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2005 },
    ],
  },
  {
    slug: "valleyfair",
    name: "Valleyfair",
    chain: "CEDAR_FAIR",
    city: "Shakopee",
    state: "MN",
    rides: [
      { slug: "wild-thing", name: "Wild Thing", type: "ROLLER_COASTER", opened: 1996 },
      { slug: "steel-venom", name: "Steel Venom", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2003 },
    ],
  },
  {
    slug: "worlds-of-fun",
    name: "Worlds of Fun",
    chain: "CEDAR_FAIR",
    city: "Kansas City",
    state: "MO",
    rides: [
      { slug: "mamba", name: "Mamba", type: "ROLLER_COASTER", opened: 1998 },
      { slug: "patriot", name: "Patriot", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2006 },
    ],
  },

  // --- SeaWorld / Busch Gardens -------------------------------------
  {
    slug: "busch-gardens-tampa",
    name: "Busch Gardens Tampa Bay",
    chain: "SEAWORLD",
    city: "Tampa",
    state: "FL",
    rides: [
      { slug: "iron-gwazi", name: "Iron Gwazi", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2022 },
      { slug: "cheetah-hunt", name: "Cheetah Hunt", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2011 },
      { slug: "sheikra", name: "SheiKra", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2005 },
    ],
  },
  {
    slug: "busch-gardens-williamsburg",
    name: "Busch Gardens Williamsburg",
    chain: "SEAWORLD",
    city: "Williamsburg",
    state: "VA",
    rides: [
      { slug: "pantheon", name: "Pantheon", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2022 },
      { slug: "verbolten", name: "Verbolten", type: "ROLLER_COASTER", manufacturer: "Zierer", opened: 2012 },
      { slug: "apollos-chariot", name: "Apollo's Chariot", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1999 },
    ],
  },
  {
    slug: "seaworld-orlando",
    name: "SeaWorld Orlando",
    chain: "SEAWORLD",
    city: "Orlando",
    state: "FL",
    rides: [
      { slug: "ice-breaker", name: "Ice Breaker", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2022 },
      { slug: "mako", name: "Mako", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2016 },
      { slug: "manta", name: "Manta", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2009 },
    ],
  },
  {
    slug: "seaworld-san-diego",
    name: "SeaWorld San Diego",
    chain: "SEAWORLD",
    city: "San Diego",
    state: "CA",
    rides: [
      { slug: "emperor", name: "Emperor", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2022 },
      { slug: "electric-eel", name: "Electric Eel", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2018 },
    ],
  },

  // --- Herschend ------------------------------------------------------
  {
    slug: "dollywood",
    name: "Dollywood",
    chain: "HERSCHEND",
    city: "Pigeon Forge",
    state: "TN",
    rides: [
      { slug: "big-bear-mountain", name: "Big Bear Mountain", type: "ROLLER_COASTER", manufacturer: "GCI", opened: 2022 },
      { slug: "lightning-rod", name: "Lightning Rod", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2016 },
      { slug: "wild-eagle", name: "Wild Eagle", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2012 },
    ],
  },
  {
    slug: "silver-dollar-city",
    name: "Silver Dollar City",
    chain: "HERSCHEND",
    city: "Branson",
    state: "MO",
    rides: [
      { slug: "time-traveler", name: "Time Traveler", type: "ROLLER_COASTER", manufacturer: "Mack Rides", opened: 2018 },
      { slug: "outlaw-run", name: "Outlaw Run", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2013 },
      { slug: "powder-keg", name: "Powder Keg", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2010 },
    ],
  },

  // --- Notable independents -------------------------------------------
  {
    slug: "hersheypark",
    name: "Hersheypark",
    chain: "INDEPENDENT",
    city: "Hershey",
    state: "PA",
    rides: [
      { slug: "candymonium", name: "Candymonium", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2020 },
      { slug: "wildcats-revenge", name: "Wildcat's Revenge", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2023 },
      { slug: "skyrush", name: "Skyrush", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2012 },
      { slug: "fahrenheit", name: "Fahrenheit", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2008 },
    ],
  },
  {
    slug: "kennywood",
    name: "Kennywood",
    chain: "INDEPENDENT",
    city: "West Mifflin",
    state: "PA",
    rides: [
      { slug: "steel-curtain", name: "Steel Curtain", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2019 },
      { slug: "phantoms-revenge", name: "Phantom's Revenge", type: "ROLLER_COASTER", opened: 1991 },
      { slug: "thunderbolt", name: "Thunderbolt", type: "ROLLER_COASTER", opened: 1968 },
      { slug: "jack-rabbit", name: "Jack Rabbit", type: "ROLLER_COASTER", opened: 1920 },
    ],
  },
  {
    slug: "knoebels",
    name: "Knoebels Amusement Resort",
    chain: "INDEPENDENT",
    city: "Elysburg",
    state: "PA",
    rides: [
      { slug: "phoenix", name: "Phoenix", type: "ROLLER_COASTER", opened: 1947 },
      { slug: "twister", name: "Twister", type: "ROLLER_COASTER", opened: 1999 },
      { slug: "impulse", name: "Impulse", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2015 },
    ],
  },
  {
    slug: "holiday-world",
    name: "Holiday World & Splashin' Safari",
    chain: "INDEPENDENT",
    city: "Santa Claus",
    state: "IN",
    rides: [
      { slug: "thunderbird", name: "Thunderbird", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2015 },
      { slug: "the-voyage", name: "The Voyage", type: "ROLLER_COASTER", manufacturer: "GCI", opened: 2006 },
      { slug: "the-raven", name: "The Raven", type: "ROLLER_COASTER", opened: 1995 },
    ],
  },
  {
    slug: "silverwood",
    name: "Silverwood Theme Park",
    chain: "INDEPENDENT",
    city: "Athol",
    state: "ID",
    rides: [
      { slug: "stunt-pilot", name: "Stunt Pilot", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2017 },
      { slug: "aftershock", name: "Aftershock", type: "ROLLER_COASTER", opened: 1998 },
    ],
  },
  {
    slug: "lagoon",
    name: "Lagoon",
    chain: "INDEPENDENT",
    city: "Farmington",
    state: "UT",
    rides: [
      { slug: "cannibal", name: "Cannibal", type: "ROLLER_COASTER", opened: 2015 },
      { slug: "wicked", name: "Wicked", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2007 },
    ],
  },
  {
    slug: "six-flags-darien-lake",
    name: "Darien Lake",
    chain: "SIX_FLAGS",
    city: "Darien Center",
    state: "NY",
    rides: [
      { slug: "tantrum", name: "Tantrum", type: "ROLLER_COASTER", manufacturer: "Gerstlauer", opened: 2018 },
      { slug: "ride-of-steel", name: "Ride of Steel", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 1999 },
    ],
  },
  {
    slug: "morey-piers",
    name: "Morey's Piers",
    chain: "INDEPENDENT",
    city: "Wildwood",
    state: "NJ",
    rides: [
      { slug: "great-white", name: "Great White", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 1996 },
      { slug: "gale-force", name: "Gale Force", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2018 },
    ],
  },
];
