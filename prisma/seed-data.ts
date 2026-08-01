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
  foundedYear?: number;
  description?: string;
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
    foundedYear: 1971,
    description:
      "The first park built at Walt Disney World, Magic Kingdom opened October 1, 1971 as the flagship of the resort, following the template Walt Disney set with Disneyland sixteen years earlier. It remains the most-visited theme park in the world.",
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
    foundedYear: 1982,
    description:
      "Opened October 1, 1982, EPCOT began as Walt Disney's vision for an 'Experimental Prototype Community of Tomorrow' before evolving into a park split between a futurism-themed core and World Showcase's ring of international pavilions.",
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
    foundedYear: 1989,
    description:
      "Opened May 1, 1989 as Disney-MGM Studios, a working film and TV production backlot turned theme park. It was renamed Disney's Hollywood Studios in 2008 and is now anchored by Star Wars: Galaxy's Edge and Toy Story Land.",
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
    foundedYear: 1998,
    description:
      "Opened April 22, 1998, Disney's Animal Kingdom is the largest of the four Walt Disney World parks by acreage, combining a zoological park with rides around the 145-foot hand-carved Tree of Life.",
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
    foundedYear: 1955,
    description:
      "Walt Disney's original theme park, opened July 17, 1955 in Anaheim. It was the first park to organize themed lands around a central hub, a format nearly every theme park built since has followed in some form.",
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
    foundedYear: 2001,
    description:
      "Opened February 8, 2001 next to Disneyland, DCA had a rocky start but was substantially reimagined through the 2010s with the additions of Cars Land (2012) and Avengers Campus (2021), all themed around California's landscapes and industries.",
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
    foundedYear: 1990,
    description:
      "Opened June 7, 1990 as a working movie and TV studio built to rival Disney-MGM Studios. It's now anchored by The Wizarding World of Harry Potter – Diagon Alley, linked to Islands of Adventure by the Hogwarts Express.",
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
    foundedYear: 1999,
    description:
      "Opened May 28, 1999 as Universal Orlando's second gate, organized into themed 'islands' including Jurassic Park, Marvel Super Hero Island, and The Wizarding World of Harry Potter – Hogsmeade.",
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
    foundedYear: 2025,
    description:
      "Universal's newest Orlando gate, opened May 22, 2025 as its first built-from-scratch park in over two decades, with lands themed to Harry Potter's Ministry of Magic, Super Nintendo World, How to Train Your Dragon, and the Dark Universe of classic Universal Monsters.",
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
    foundedYear: 1964,
    description:
      "Began in 1964 as a tram tour through Universal's working studio backlot and grew into a full theme park. It remains built around that original Studio Tour, now alongside Harry Potter and Super Nintendo World.",
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
    foundedYear: 1971,
    description:
      "Opened May 29, 1971 in Valencia, California, Magic Mountain has held the world record for most roller coasters at a single park for decades, currently running around 20.",
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
    foundedYear: 1974,
    description:
      "Opened in 1974 by Broadway and film producer Warner LeRoy as Great Adventure, it joined the Six Flags chain in 1977 and is now home to Kingda Ka, the tallest roller coaster in the world.",
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
    foundedYear: 1967,
    description:
      "Opened June 16, 1967 as the second Six Flags park after the original Texas location, bringing the same six-nations theming concept to metro Atlanta.",
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
    foundedYear: 1992,
    description:
      "Opened in 1992 inside a former limestone quarry on San Antonio's north side, giving the park its distinctive rock-walled canyon setting. Six Flags took a stake in 1996 and later full ownership.",
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
    foundedYear: 1961,
    description:
      "The original Six Flags park, opened August 5, 1961 between Dallas and Fort Worth and named for the six nations that have governed Texas — the concept that gave the entire chain its name.",
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
    foundedYear: 1976,
    description:
      "Opened in 1976 as Marriott's Great America, a sister park to the identically named California location built the same year. Six Flags purchased it in 1984.",
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
    foundedYear: 1971,
    description:
      "Opened in 1971 as Six Flags Over Mid-America, later renamed Six Flags St. Louis; it sits in the wooded hills of Eureka, Missouri, southwest of the city.",
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
    foundedYear: 1870,
    description:
      "One of the oldest amusement parks in America, Cedar Point opened in 1870 on a Lake Erie peninsula in Sandusky, Ohio. Known as 'America's Roller Coast,' it has run as many as 18 roller coasters at once.",
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
    foundedYear: 1972,
    description:
      "Opened April 29, 1972 near Cincinnati as a larger successor to the older, smaller Coney Island park downtown. Kings Island is famous for The Beast, the longest wooden roller coaster in the world.",
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
    foundedYear: 1975,
    description:
      "Opened May 3, 1975 in Doswell, Virginia; its 300-foot Eiffel Tower replica has served as the park's icon and highest vantage point since opening day.",
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
    foundedYear: 1973,
    description:
      "Opened March 31, 1973 straddling the North Carolina–South Carolina border — the state line is painted through the park itself — which is how Carowinds got its name.",
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
    foundedYear: 1920,
    description:
      "Began as a roadside berry stand and fried-chicken restaurant Walter and Cordelia Knott opened in the 1920s. Walter added Old West attractions through the 1940s, making Knott's arguably America's first theme park — years before Disneyland.",
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
    foundedYear: 1976,
    description:
      "Opened in 1976 in Santa Clara as Marriott's Great America, twin to the Illinois park of the same original name. Cedar Fair has owned it since 2006.",
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
    foundedYear: 1884,
    description:
      "Traces back to a trout hatchery and picnic grove Solomon Dorney opened in 1884, making it one of the oldest continuously operating amusement parks in the United States.",
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
    foundedYear: 1976,
    description:
      "Opened in 1976 on the banks of the Minnesota River in Shakopee, Valleyfair has long been the Twin Cities' major regional theme park.",
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
    foundedYear: 1973,
    description:
      "Opened in 1973 in Kansas City, loosely themed around Jules Verne's 'Around the World in Eighty Days,' with lands representing Africa, Europe, and Asia.",
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
    foundedYear: 1959,
    description:
      "Opened in 1959 as a free hospitality garden and bird sanctuary next to an Anheuser-Busch brewery, it grew into a full African-themed park and zoo with one of the largest animal collections of any American theme park.",
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
    foundedYear: 1975,
    description:
      "Opened in 1975 next to Colonial Williamsburg, themed around 17th- to 19th-century European villages. It's consistently rated one of the most beautifully landscaped parks in the world.",
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
    foundedYear: 1973,
    description:
      "Opened December 15, 1973 as SeaWorld's second marine-life park after San Diego. It has expanded well beyond its marine-show roots with record-setting roller coasters like Mako.",
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
    foundedYear: 1964,
    description:
      "The original SeaWorld park, opened March 21, 1964 on Mission Bay — the founding park of the entire SeaWorld chain.",
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
    foundedYear: 1961,
    description:
      "Traces back to Rebel Railroad, a small Smoky Mountains park that opened in 1961. Dolly Parton became a co-owner in 1986 and renamed it Dollywood, growing it into East Tennessee's most-visited attraction.",
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
    foundedYear: 1960,
    description:
      "Opened in 1960 around the real Marvel Cave in the Ozark Mountains near Branson, themed as an 1880s craft village. It's still run by the Herschend family who founded it.",
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
    foundedYear: 1906,
    description:
      "Founded in 1906 by chocolate magnate Milton Hershey as a leisure park for his factory workers, Hersheypark still sits beside Hershey's Chocolate World and the company town he built around it.",
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
    foundedYear: 1898,
    description:
      "Opened in 1898 as a trolley park outside Pittsburgh, Kennywood is a National Historic Landmark and one of the best-preserved traditional amusement parks in America, still home to three wooden coasters built before 1970.",
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
    foundedYear: 1926,
    description:
      "Opened in 1926 in rural Elysburg and still family-owned, Knoebels is the largest free-admission amusement park in the United States — there's no gate fee, you pay only for what you ride.",
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
    foundedYear: 1946,
    description:
      "Opened in 1946 as Santa Claus Land in the town of Santa Claus, Indiana — often cited as the world's first themed amusement park, predating Disneyland by nine years. It's also known for free sunscreen and unlimited soft drinks park-wide.",
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
    foundedYear: 1988,
    description:
      "Opened in 1988 by aviation enthusiast Gary Norton, Silverwood pairs a theme park with an antique-aircraft museum, plus the adjoining Boulder Beach water park in summer.",
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
    foundedYear: 1886,
    description:
      "Founded in 1886 on the shore of the Great Salt Lake before relocating to its current Farmington site in 1896, Lagoon is Utah's largest amusement park and one of the oldest still operating in the U.S.",
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
    foundedYear: 1964,
    description:
      "What began as a campground with a small kiddie section in the 1960s grew into a full theme park outside Buffalo over the following decades. Six Flags has operated it since 2011.",
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
    foundedYear: 1969,
    description:
      "Founded in 1969 by the Morey family, this still family-owned collection of piers and boardwalk rides has anchored the Wildwood, New Jersey beach resort for over 50 years.",
    rides: [
      { slug: "great-white", name: "Great White", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 1996 },
      { slug: "gale-force", name: "Gale Force", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2018 },
    ],
  },
  {
    slug: "canobie-lake-park",
    name: "Canobie Lake Park",
    chain: "INDEPENDENT",
    city: "Salem",
    state: "NH",
    website: "https://www.canobie.com",
    foundedYear: 1902,
    description:
      "Opened in 1902 as a trolley park on the shore of Canobie Lake, it's been run by the same family since the 1950s. Its Yankee Cannonball, relocated to the park in 1936, is one of the oldest wooden roller coasters still operating in the country.",
    rides: [
      { slug: "yankee-cannonball", name: "Yankee Cannonball", type: "ROLLER_COASTER", manufacturer: "Fred Church", opened: 1936 },
      { slug: "untamed", name: "Untamed", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2019 },
      { slug: "corkscrew", name: "Corkscrew", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 1990 },
      { slug: "boston-tea-party", name: "Boston Tea Party", type: "WATER_RIDE", opened: 1974 },
      { slug: "starblaster", name: "Starblaster", type: "FLAT_RIDE", manufacturer: "HUSS", opened: 2007 },
    ],
  },

  // --- More independents & regional chains -----------------------------
  {
    slug: "six-flags-new-england",
    name: "Six Flags New England",
    chain: "SIX_FLAGS",
    city: "Agawam",
    state: "MA",
    foundedYear: 1870,
    description:
      "Traces back to Gallup's Grove, a picnic ground established in 1870 along the Connecticut River, which grew into Riverside Park through the 20th century. Six Flags took over in 2000.",
    rides: [
      { slug: "wicked-cyclone", name: "Wicked Cyclone", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2015 },
      { slug: "superman-the-ride", name: "Superman The Ride", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2000 },
    ],
  },
  {
    slug: "six-flags-discovery-kingdom",
    name: "Six Flags Discovery Kingdom",
    chain: "SIX_FLAGS",
    city: "Vallejo",
    state: "CA",
    foundedYear: 1968,
    description:
      "Opened in 1968 as Marine World, a marine-life and wildlife park in Redwood City before relocating to Vallejo in 1986. Six Flags began operating it in 2007, blending drive-through wildlife, marine shows, and thrill rides.",
    rides: [
      { slug: "medusa", name: "Medusa", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2000 },
      { slug: "superman-ultimate-flight", name: "Superman Ultimate Flight", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2011 },
    ],
  },
  {
    slug: "elitch-gardens",
    name: "Elitch Gardens",
    chain: "INDEPENDENT",
    city: "Denver",
    state: "CO",
    foundedYear: 1890,
    description:
      "Founded in 1890 as a zoological garden and amusement park by John and Mary Elitch, it was one of the first amusement parks in the American West. It relocated from its original Highlands neighborhood site to downtown Denver in 1995.",
    rides: [
      { slug: "twister-ii", name: "Twister II", type: "ROLLER_COASTER", opened: 1995 },
      { slug: "sidewinder", name: "Sidewinder", type: "ROLLER_COASTER", manufacturer: "Vekoma" },
    ],
  },
  {
    slug: "michigans-adventure",
    name: "Michigan's Adventure",
    chain: "CEDAR_FAIR",
    city: "Muskegon",
    state: "MI",
    foundedYear: 1956,
    description:
      "Began in 1956 as a small children's park called Deer Park Funland and expanded into a full-scale amusement park over the following decades. Cedar Fair acquired it in 2001.",
    rides: [
      { slug: "shivering-timbers", name: "Shivering Timbers", type: "ROLLER_COASTER", opened: 1998 },
      { slug: "wolverine-wildcat", name: "Wolverine Wildcat", type: "ROLLER_COASTER", opened: 1988 },
    ],
  },
  {
    slug: "waldameer-park",
    name: "Waldameer Park & Water World",
    chain: "INDEPENDENT",
    city: "Erie",
    state: "PA",
    foundedYear: 1896,
    description:
      "Founded in 1896 on the shore of Lake Erie next to Presque Isle State Park, Waldameer remains family-owned and free to enter — guests pay only for rides or a wristband.",
    rides: [
      { slug: "ravine-flyer-ii", name: "Ravine Flyer II", type: "ROLLER_COASTER", opened: 2008 },
    ],
  },
  {
    slug: "rye-playland",
    name: "Playland",
    chain: "INDEPENDENT",
    city: "Rye",
    state: "NY",
    foundedYear: 1928,
    description:
      "Opened in 1928 on Long Island Sound, Playland is one of only two amusement parks in the U.S. designated a National Historic Landmark, alongside Kennywood, and is still owned and operated by Westchester County.",
    rides: [
      { slug: "dragon-coaster", name: "Dragon Coaster", type: "ROLLER_COASTER", opened: 1929 },
    ],
  },
  {
    slug: "story-land",
    name: "Story Land",
    chain: "HERSCHEND",
    city: "Glen",
    state: "NH",
    foundedYear: 1954,
    description:
      "Opened in 1954 in New Hampshire's White Mountains as a fairy-tale themed park built for young children, Story Land joined the Herschend family of parks in 2019.",
    rides: [
      { slug: "polar-coaster", name: "Polar Coaster", type: "ROLLER_COASTER", opened: 2006 },
      { slug: "antique-cars", name: "Antique Cars", type: "TRANSPORT" },
    ],
  },
  {
    slug: "legoland-florida",
    name: "Legoland Florida",
    chain: "OTHER",
    city: "Winter Haven",
    state: "FL",
    foundedYear: 1936,
    description:
      "Cypress Gardens opened on this site in 1936, one of Florida's first tourist attractions and a birthplace of competitive water skiing. The current Legoland Florida rides opened in 2011, preserving parts of the historic botanical gardens within the new park.",
    rides: [
      { slug: "coastersaurus", name: "Coastersaurus", type: "ROLLER_COASTER", opened: 2011 },
      { slug: "the-great-lego-race", name: "The Great LEGO Race", type: "DARK_RIDE", opened: 2017 },
    ],
  },
];
