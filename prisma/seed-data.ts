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
      { slug: "magic-carpets-of-aladdin", name: "The Magic Carpets of Aladdin", type: "FLAT_RIDE", opened: 2001 },
      { slug: "swiss-family-treehouse", name: "Swiss Family Treehouse", type: "OTHER", opened: 1971 },
      { slug: "enchanted-tiki-room", name: "Walt Disney's Enchanted Tiki Room", type: "SHOW", opened: 1971 },
      { slug: "country-bear-jamboree", name: "Country Bear Jamboree", type: "SHOW", opened: 1971 },
      { slug: "tom-sawyer-island", name: "Tom Sawyer Island", type: "OTHER", opened: 1973 },
      { slug: "liberty-square-riverboat", name: "Liberty Square Riverboat", type: "TRANSPORT", opened: 1971 },
      { slug: "hall-of-presidents", name: "The Hall of Presidents", type: "SHOW", opened: 1971 },
      { slug: "peter-pans-flight", name: "Peter Pan's Flight", type: "DARK_RIDE", opened: 1971 },
      { slug: "under-the-sea-little-mermaid", name: "Under the Sea: Journey of the Little Mermaid", type: "DARK_RIDE", opened: 2012 },
      { slug: "mickeys-philharmagic", name: "Mickey's PhilharMagic", type: "SHOW", opened: 2003 },
      { slug: "prince-charming-regal-carrousel", name: "Prince Charming Regal Carrousel", type: "FLAT_RIDE", opened: 1971 },
      { slug: "dumbo-the-flying-elephant", name: "Dumbo the Flying Elephant", type: "KIDDIE", opened: 1971 },
      { slug: "the-barnstormer", name: "The Barnstormer", type: "ROLLER_COASTER", opened: 1996 },
      { slug: "mad-tea-party", name: "Mad Tea Party", type: "FLAT_RIDE", opened: 1971 },
      { slug: "buzz-lightyear-space-ranger-spin", name: "Buzz Lightyear's Space Ranger Spin", type: "DARK_RIDE", opened: 1998 },
      { slug: "tomorrowland-speedway", name: "Tomorrowland Speedway", type: "TRANSPORT", opened: 1971 },
      { slug: "carousel-of-progress", name: "Walt Disney's Carousel of Progress", type: "SHOW", opened: 1975 },
      { slug: "astro-orbiter", name: "Astro Orbiter", type: "FLAT_RIDE", opened: 1974 },
      { slug: "tomorrowland-transit-authority", name: "Tomorrowland Transit Authority PeopleMover", type: "TRANSPORT", opened: 1975 },
      { slug: "walt-disney-world-railroad", name: "Walt Disney World Railroad", type: "TRANSPORT", opened: 1971 },
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
      { slug: "mission-space", name: "Mission: SPACE", type: "FLAT_RIDE", opened: 2003 },
      { slug: "journey-into-imagination", name: "Journey Into Imagination with Figment", type: "DARK_RIDE", opened: 1983 },
      { slug: "living-with-the-land", name: "Living with the Land", type: "DARK_RIDE", opened: 1982 },
      { slug: "seas-with-nemo-and-friends", name: "The Seas with Nemo & Friends", type: "DARK_RIDE", opened: 2007 },
      { slug: "turtle-talk-with-crush", name: "Turtle Talk with Crush", type: "SHOW", opened: 2004 },
      { slug: "remys-ratatouille-adventure", name: "Remy's Ratatouille Adventure", type: "DARK_RIDE", opened: 2021 },
      { slug: "gran-fiesta-tour", name: "Gran Fiesta Tour Starring The Three Caballeros", type: "DARK_RIDE", opened: 2007 },
      { slug: "reflections-of-china", name: "Reflections of China", type: "SHOW", opened: 1982 },
      { slug: "impressions-de-france", name: "Impressions de France", type: "SHOW", opened: 1982 },
      { slug: "american-adventure", name: "The American Adventure", type: "SHOW", opened: 1982 },
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
      { slug: "toy-story-mania", name: "Toy Story Mania!", type: "DARK_RIDE", opened: 2008 },
      { slug: "alien-swirling-saucers", name: "Alien Swirling Saucers", type: "FLAT_RIDE", opened: 2018 },
      { slug: "star-tours", name: "Star Tours – The Adventures Continue", type: "DARK_RIDE", opened: 1989 },
      { slug: "mickey-minnies-runaway-railway", name: "Mickey & Minnie's Runaway Railway", type: "DARK_RIDE", opened: 2020 },
      { slug: "muppet-vision-3d", name: "Muppet*Vision 3D", type: "SHOW", opened: 1991 },
      { slug: "indiana-jones-epic-stunt-spectacular", name: "Indiana Jones Epic Stunt Spectacular", type: "SHOW", opened: 1989 },
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
      { slug: "dinosaur", name: "DINOSAUR", type: "DARK_RIDE", opened: 1998 },
      { slug: "kali-river-rapids", name: "Kali River Rapids", type: "WATER_RIDE", opened: 1999 },
      { slug: "its-tough-to-be-a-bug", name: "It's Tough to be a Bug!", type: "SHOW", opened: 1998 },
      { slug: "festival-of-the-lion-king", name: "Festival of the Lion King", type: "SHOW", opened: 1998 },
      { slug: "finding-nemo-big-blue-and-beyond", name: "Finding Nemo: The Big Blue... and Beyond!", type: "SHOW", opened: 2017 },
      { slug: "wildlife-express-train", name: "Wildlife Express Train", type: "TRANSPORT", opened: 1998 },
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
      { slug: "jungle-cruise-dl", name: "Jungle Cruise", type: "DARK_RIDE", opened: 1955 },
      { slug: "tarzans-treehouse", name: "Tarzan's Treehouse", type: "OTHER", opened: 1962 },
      { slug: "enchanted-tiki-room-dl", name: "Walt Disney's Enchanted Tiki Room", type: "SHOW", opened: 1963 },
      { slug: "mark-twain-riverboat", name: "Mark Twain Riverboat", type: "TRANSPORT", opened: 1955 },
      { slug: "tianas-bayou-adventure-dl", name: "Tiana's Bayou Adventure", type: "WATER_RIDE", opened: 2024 },
      { slug: "winnie-the-pooh-dl", name: "The Many Adventures of Winnie the Pooh", type: "DARK_RIDE", opened: 2003 },
      { slug: "small-world-dl", name: "it's a small world", type: "DARK_RIDE", opened: 1966 },
      { slug: "peter-pans-flight-dl", name: "Peter Pan's Flight", type: "DARK_RIDE", opened: 1955 },
      { slug: "mr-toads-wild-ride", name: "Mr. Toad's Wild Ride", type: "DARK_RIDE", opened: 1955 },
      { slug: "snow-whites-enchanted-wish", name: "Snow White's Enchanted Wish", type: "DARK_RIDE", opened: 1955 },
      { slug: "alice-in-wonderland-dl", name: "Alice in Wonderland", type: "DARK_RIDE", opened: 1958 },
      { slug: "mad-tea-party-dl", name: "Mad Tea Party", type: "FLAT_RIDE", opened: 1955 },
      { slug: "king-arthur-carrousel", name: "King Arthur Carrousel", type: "FLAT_RIDE", opened: 1955 },
      { slug: "casey-jr-circus-train", name: "Casey Jr. Circus Train", type: "KIDDIE", opened: 1955 },
      { slug: "storybook-land-canal-boats", name: "Storybook Land Canal Boats", type: "DARK_RIDE", opened: 1955 },
      { slug: "dumbo-dl", name: "Dumbo the Flying Elephant", type: "KIDDIE", opened: 1955 },
      { slug: "pinocchios-daring-journey", name: "Pinocchio's Daring Journey", type: "DARK_RIDE", opened: 1983 },
      { slug: "roger-rabbits-car-toon-spin", name: "Roger Rabbit's Car Toon Spin", type: "DARK_RIDE", opened: 1994 },
      { slug: "autopia", name: "Autopia", type: "TRANSPORT", opened: 1955 },
      { slug: "buzz-lightyear-astro-blasters", name: "Buzz Lightyear Astro Blasters", type: "DARK_RIDE", opened: 2005 },
      { slug: "star-tours-dl", name: "Star Tours – The Adventures Continue", type: "DARK_RIDE", opened: 1987 },
      { slug: "finding-nemo-submarine-voyage", name: "Finding Nemo Submarine Voyage", type: "DARK_RIDE", opened: 1959 },
      { slug: "millennium-falcon-smugglers-run-dl", name: "Millennium Falcon: Smugglers Run", type: "DARK_RIDE", opened: 2019 },
      { slug: "disneyland-railroad", name: "Disneyland Railroad", type: "TRANSPORT", opened: 1955 },
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
      { slug: "soarin-around-the-world-dca", name: "Soarin' Around the World", type: "FLAT_RIDE", opened: 2001 },
      { slug: "toy-story-midway-mania", name: "Toy Story Midway Mania!", type: "DARK_RIDE", opened: 2008 },
      { slug: "grizzly-river-run", name: "Grizzly River Run", type: "WATER_RIDE", opened: 2001 },
      { slug: "goofys-sky-school", name: "Goofy's Sky School", type: "ROLLER_COASTER", opened: 2011 },
      { slug: "silly-symphony-swings", name: "Silly Symphony Swings", type: "FLAT_RIDE", opened: 2001 },
      { slug: "golden-zephyr", name: "Golden Zephyr", type: "FLAT_RIDE", opened: 2001 },
      { slug: "monsters-inc-mike-and-sulley", name: "Monsters, Inc. Mike & Sulley to the Rescue!", type: "DARK_RIDE", opened: 2006 },
      { slug: "luigis-rollickin-roadsters", name: "Luigi's Rollickin' Roadsters", type: "FLAT_RIDE", opened: 2016 },
      { slug: "maters-junkyard-jamboree", name: "Mater's Junkyard Jamboree", type: "FLAT_RIDE", opened: 2012 },
      { slug: "pixar-pal-a-round", name: "Pixar Pal-A-Round", type: "FLAT_RIDE", opened: 2001 },
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
      { slug: "et-adventure", name: "E.T. Adventure", type: "DARK_RIDE", opened: 1990 },
      { slug: "men-in-black-alien-attack", name: "MEN IN BLACK Alien Attack", type: "DARK_RIDE", opened: 1999 },
      { slug: "race-through-new-york", name: "Race Through New York Starring Jimmy Fallon", type: "DARK_RIDE", opened: 2017 },
      { slug: "fast-and-furious-supercharged", name: "Fast & Furious: Supercharged", type: "DARK_RIDE", opened: 2018 },
      { slug: "despicable-me-minion-mayhem", name: "Despicable Me Minion Mayhem", type: "DARK_RIDE", opened: 2012 },
      { slug: "fievels-playland", name: "Fievel's Playland", type: "KIDDIE", opened: 1990 },
      { slug: "woody-woodpeckers-nuthouse-coaster", name: "Woody Woodpecker's Nuthouse Coaster", type: "ROLLER_COASTER", opened: 1999 },
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
      { slug: "jurassic-park-river-adventure", name: "Jurassic Park River Adventure", type: "WATER_RIDE", opened: 1999 },
      { slug: "skull-island-reign-of-kong", name: "Skull Island: Reign of Kong", type: "DARK_RIDE", opened: 2016 },
      { slug: "doctor-dooms-fearfall", name: "Doctor Doom's Fearfall", type: "FLAT_RIDE", opened: 1999 },
      { slug: "amazing-adventures-of-spider-man", name: "The Amazing Adventures of Spider-Man", type: "DARK_RIDE", opened: 1999 },
      { slug: "dudley-do-rights-ripsaw-falls", name: "Dudley Do-Right's Ripsaw Falls", type: "WATER_RIDE", opened: 1999 },
      { slug: "popeye-and-blutos-bilge-rat-barges", name: "Popeye & Bluto's Bilge-Rat Barges", type: "WATER_RIDE", opened: 1999 },
      { slug: "flight-of-the-hippogriff", name: "Flight of the Hippogriff", type: "ROLLER_COASTER", opened: 2010 },
      { slug: "pteranodon-flyers", name: "Pteranodon Flyers", type: "KIDDIE", opened: 1999 },
      { slug: "caro-seuss-el", name: "Caro-Seuss-el", type: "FLAT_RIDE", opened: 1999 },
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
      { slug: "hiccups-wing-gliders", name: "Hiccup's Wing Gliders", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2025 },
      { slug: "fyre-drill", name: "Fyre Drill", type: "WATER_RIDE", opened: 2025 },
      { slug: "le-cirque-arcanus", name: "Le Cirque Arcanus", type: "SHOW", opened: 2025 },
      { slug: "curse-of-the-werewolf", name: "Curse of the Werewolf", type: "ROLLER_COASTER", opened: 2025 },
      { slug: "mario-kart-bowsers-challenge", name: "Mario Kart: Bowser's Challenge", type: "DARK_RIDE", opened: 2025 },
      { slug: "yoshis-adventure", name: "Yoshi's Adventure", type: "FLAT_RIDE", opened: 2025 },
      { slug: "mine-cart-madness", name: "Mine-Cart Madness", type: "ROLLER_COASTER", opened: 2025 },
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
      { slug: "transformers-the-ride-3d-usc", name: "Transformers: The Ride-3D", type: "DARK_RIDE", opened: 2012 },
      { slug: "mario-kart-bowsers-challenge-usc", name: "Mario Kart: Bowser's Challenge", type: "DARK_RIDE", opened: 2023 },
      { slug: "secret-life-of-pets-off-the-leash", name: "Secret Life of Pets: Off the Leash", type: "DARK_RIDE", opened: 2019 },
      { slug: "waterworld-usc", name: "WaterWorld", type: "SHOW", opened: 1995 },
      { slug: "fast-and-furious-hollywood-drift", name: "Fast & Furious: Hollywood Drift", type: "ROLLER_COASTER", opened: 2026 },
      { slug: "despicable-me-minion-mayhem-usc", name: "Despicable Me Minion Mayhem", type: "DARK_RIDE", opened: 2014 },
      { slug: "the-simpsons-ride", name: "The Simpsons Ride", type: "DARK_RIDE", opened: 2008 },
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
      { slug: "viper", name: "Viper", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1990 },
      { slug: "riddlers-revenge", name: "Riddler's Revenge", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1998 },
      { slug: "superman-escape-from-krypton", name: "Superman: Escape from Krypton", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 1997 },
      { slug: "batman-the-ride-sfmm", name: "Batman: The Ride", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1994 },
      { slug: "the-new-revolution", name: "The New Revolution", type: "ROLLER_COASTER", opened: 1976 },
      { slug: "wonder-woman-flight-of-courage", name: "Wonder Woman Flight of Courage", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2022 },
      { slug: "scream", name: "Scream!", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2003 },
      { slug: "apocalypse", name: "Apocalypse", type: "ROLLER_COASTER", opened: 2009 },
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
      { slug: "superman-ultimate-flight-sfga", name: "Superman: Ultimate Flight", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2003 },
      { slug: "batman-the-ride-sfga", name: "Batman: The Ride", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2001 },
      { slug: "green-lantern-sfga", name: "Green Lantern", type: "ROLLER_COASTER", opened: 2012 },
      { slug: "skull-mountain", name: "Skull Mountain", type: "ROLLER_COASTER", opened: 1996 },
      { slug: "runaway-mine-train", name: "Runaway Mine Train", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1974 },
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
      { slug: "georgia-scorcher", name: "Georgia Scorcher", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1998 },
      { slug: "mind-bender-sfog", name: "Mind Bender", type: "ROLLER_COASTER", opened: 1978 },
      { slug: "great-american-scream-machine-sfog", name: "Great American Scream Machine", type: "ROLLER_COASTER", opened: 1973 },
      { slug: "dahlonega-mine-train", name: "Dahlonega Mine Train", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1978 },
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
      { slug: "poltergeist-sfft", name: "Poltergeist", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2011 },
      { slug: "batman-the-ride-sfft", name: "Batman: The Ride", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2015 },
      { slug: "superman-krypton-coaster", name: "Superman Krypton Coaster", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2000 },
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
      { slug: "runaway-mountain", name: "Runaway Mountain", type: "ROLLER_COASTER", opened: 1997 },
      { slug: "batman-the-ride-sfot", name: "Batman: The Ride", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2020 },
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
      { slug: "american-eagle", name: "American Eagle", type: "ROLLER_COASTER", opened: 1981 },
      { slug: "viper-sfga", name: "Viper", type: "ROLLER_COASTER", opened: 1995 },
      { slug: "batman-the-ride-sfga", name: "Batman: The Ride", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1992 },
      { slug: "demon-sfga", name: "Demon", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1980 },
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
      { slug: "batman-the-ride-stl", name: "Batman: The Ride", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1995 },
      { slug: "screamin-eagle", name: "Screamin' Eagle", type: "ROLLER_COASTER", opened: 1976 },
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
      { slug: "gemini", name: "Gemini", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1978 },
      { slug: "corkscrew-cp", name: "Corkscrew", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1976 },
      { slug: "iron-dragon", name: "Iron Dragon", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1987 },
      { slug: "blue-streak-cp", name: "Blue Streak", type: "ROLLER_COASTER", opened: 1964 },
      { slug: "gatekeeper", name: "GateKeeper", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2013 },
      { slug: "valravn", name: "Valravn", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2016 },
      { slug: "rougarou", name: "Rougarou", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2015 },
      { slug: "cedar-creek-mine-ride", name: "Cedar Creek Mine Ride", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1969 },
      { slug: "power-tower", name: "Power Tower", type: "FLAT_RIDE", manufacturer: "S&S", opened: 1998 },
      { slug: "skyhawk", name: "Skyhawk", type: "FLAT_RIDE", manufacturer: "S&S", opened: 2003 },
      { slug: "maxair", name: "MaXair", type: "FLAT_RIDE", manufacturer: "HUSS", opened: 2005 },
      { slug: "windseeker-cp", name: "WindSeeker", type: "FLAT_RIDE", opened: 2012 },
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
      { slug: "racer", name: "Racer", type: "ROLLER_COASTER", opened: 1972 },
      { slug: "adventure-express", name: "Adventure Express", type: "ROLLER_COASTER", opened: 1991 },
      { slug: "banshee", name: "Banshee", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2014 },
      { slug: "flight-of-fear", name: "Flight of Fear", type: "ROLLER_COASTER", manufacturer: "Premier Rides", opened: 1996 },
      { slug: "the-bat", name: "The Bat", type: "ROLLER_COASTER", opened: 1981 },
      { slug: "windseeker-ki", name: "WindSeeker", type: "FLAT_RIDE", opened: 2013 },
      { slug: "delirium", name: "Delirium", type: "FLAT_RIDE", manufacturer: "HUSS", opened: 2010 },
      { slug: "drop-tower-scream-zone", name: "Drop Tower: Scream Zone", type: "FLAT_RIDE", manufacturer: "S&S", opened: 2011 },
      { slug: "backlot-stunt-coaster", name: "Backlot Stunt Coaster", type: "ROLLER_COASTER", manufacturer: "Premier Rides", opened: 2005 },
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
      { slug: "grizzly-kd", name: "Grizzly", type: "ROLLER_COASTER", opened: 1982 },
      { slug: "flight-of-fear-kd", name: "Flight of Fear", type: "ROLLER_COASTER", manufacturer: "Premier Rides", opened: 1996 },
      { slug: "anaconda", name: "Anaconda", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1991 },
      { slug: "racer-75", name: "Racer 75", type: "ROLLER_COASTER", opened: 1975 },
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
      { slug: "intimidator-carowinds", name: "Intimidator", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2010 },
      { slug: "afterburn", name: "Afterburn", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1999 },
      { slug: "nighthawk", name: "Nighthawk", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 2001 },
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
      { slug: "xcelerator", name: "Xcelerator", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2002 },
      { slug: "montezoomas-revenge", name: "Montezooma's Revenge", type: "ROLLER_COASTER", opened: 1978 },
      { slug: "jaguar", name: "Jaguar!", type: "ROLLER_COASTER", opened: 1995 },
      { slug: "sierra-sidewinder", name: "Sierra Sidewinder", type: "ROLLER_COASTER", opened: 2012 },
      { slug: "calico-river-rapids", name: "Calico River Rapids", type: "WATER_RIDE", opened: 1999 },
      { slug: "timber-mountain-log-ride", name: "Timber Mountain Log Ride", type: "WATER_RIDE", opened: 1969 },
      { slug: "supreme-scream", name: "Supreme Scream", type: "FLAT_RIDE", manufacturer: "S&S", opened: 2000 },
      { slug: "windseeker-knotts", name: "WindSeeker", type: "FLAT_RIDE", opened: 2013 },
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
      { slug: "patriot-cga", name: "Patriot", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2005 },
      { slug: "flight-deck", name: "Flight Deck", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 1993 },
      { slug: "grizzly-cga", name: "Grizzly", type: "ROLLER_COASTER", opened: 1986 },
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
      { slug: "steel-force", name: "Steel Force", type: "ROLLER_COASTER", manufacturer: "Morgan", opened: 1997 },
      { slug: "talon", name: "Talon", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2001 },
      { slug: "thunderhawk", name: "Thunderhawk", type: "ROLLER_COASTER", opened: 1923 },
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
      { slug: "renegade-valleyfair", name: "Renegade", type: "ROLLER_COASTER", opened: 1995 },
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
      { slug: "prowler", name: "Prowler", type: "ROLLER_COASTER", manufacturer: "GCI", opened: 2010 },
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
      { slug: "kumba", name: "Kumba", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1993 },
      { slug: "montu", name: "Montu", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1996 },
      { slug: "falcons-fury", name: "Falcon's Fury", type: "FLAT_RIDE", manufacturer: "S&S", opened: 2014 },
      { slug: "congo-river-rapids", name: "Congo River Rapids", type: "WATER_RIDE", opened: 1980 },
      { slug: "stanley-falls-flume", name: "Stanley Falls Flume", type: "WATER_RIDE", opened: 1979 },
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
      { slug: "alpengeist", name: "Alpengeist", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1997 },
      { slug: "griffon", name: "Griffon", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2007 },
      { slug: "loch-ness-monster", name: "Loch Ness Monster", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1978 },
      { slug: "tempesto", name: "Tempesto", type: "ROLLER_COASTER", manufacturer: "Premier Rides", opened: 2015 },
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
      { slug: "kraken", name: "Kraken", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2000 },
      { slug: "journey-to-atlantis-orlando", name: "Journey to Atlantis", type: "WATER_RIDE", opened: 1998 },
      { slug: "pipeline-the-surf-coaster", name: "Pipeline: The Surf Coaster", type: "ROLLER_COASTER", opened: 2023 },
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
      { slug: "journey-to-atlantis-sd", name: "Journey to Atlantis", type: "WATER_RIDE", opened: 2004 },
      { slug: "tidal-twister", name: "Tidal Twister", type: "ROLLER_COASTER", opened: 2021 },
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
      { slug: "tennessee-tornado", name: "Tennessee Tornado", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1999 },
      { slug: "thunderhead", name: "Thunderhead", type: "ROLLER_COASTER", manufacturer: "GCI", opened: 2004 },
      { slug: "firechaser-express", name: "FireChaser Express", type: "ROLLER_COASTER", opened: 2014 },
      { slug: "mystery-mine", name: "Mystery Mine", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2007 },
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
      { slug: "wildfire-sdc", name: "Wildfire", type: "ROLLER_COASTER", opened: 2001 },
      { slug: "thunderation", name: "Thunderation", type: "ROLLER_COASTER", opened: 1994 },
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
      { slug: "storm-runner", name: "Storm Runner", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2004 },
      { slug: "lightning-racer", name: "Lightning Racer", type: "ROLLER_COASTER", manufacturer: "GCI", opened: 2000 },
      { slug: "great-bear", name: "Great Bear", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 1998 },
      { slug: "sooperdooperlooper", name: "Sooperdooperlooper", type: "ROLLER_COASTER", opened: 1977 },
      { slug: "comet-hp", name: "Comet", type: "ROLLER_COASTER", opened: 1946 },
      { slug: "trailblazer", name: "Trailblazer", type: "ROLLER_COASTER", manufacturer: "Mack Rides", opened: 1974 },
      { slug: "laff-trakk", name: "Laff Trakk", type: "ROLLER_COASTER", manufacturer: "Maurer Söhne", opened: 2011 },
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
      { slug: "racer-kennywood", name: "Racer", type: "ROLLER_COASTER", opened: 1927 },
      { slug: "sky-rocket", name: "Sky Rocket", type: "ROLLER_COASTER", manufacturer: "Premier Rides", opened: 2010 },
      { slug: "exterminator", name: "Exterminator", type: "ROLLER_COASTER", opened: 1999 },
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
      { slug: "flying-turns", name: "Flying Turns", type: "ROLLER_COASTER", opened: 2013 },
      { slug: "black-diamond", name: "Black Diamond", type: "ROLLER_COASTER", opened: 2007 },
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
      { slug: "legend", name: "Legend", type: "ROLLER_COASTER", opened: 2000 },
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
      { slug: "stunt-pilot", name: "Stunt Pilot", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2021 },
      { slug: "aftershock", name: "Aftershock", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 2008 },
      { slug: "tremors", name: "Tremors", type: "ROLLER_COASTER", manufacturer: "CCI", opened: 1999 },
      { slug: "timber-terror", name: "Timber Terror", type: "ROLLER_COASTER", manufacturer: "CCI", opened: 1996 },
      { slug: "corkscrew-silverwood", name: "Corkscrew", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1975 },
      { slug: "panic-plunge", name: "Panic Plunge", type: "FLAT_RIDE" },
      { slug: "krazy-koaster", name: "Krazy Koaster", type: "KIDDIE" },
      { slug: "tiny-toot", name: "Tiny Toot", type: "KIDDIE" },
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
      { slug: "great-white", name: "Great White", type: "ROLLER_COASTER", manufacturer: "CCI", opened: 1996 },
      { slug: "gale-force", name: "Gale Force", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2018 },
      { slug: "great-noreaster", name: "The Great Nor'Easter", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 1995 },
      { slug: "sea-serpent-moreys", name: "Sea Serpent", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 1984 },
      { slug: "runaway-tram", name: "Runaway Tram", type: "ROLLER_COASTER", opened: 2000 },
      { slug: "rollies-coaster", name: "Rollie's Coaster", type: "ROLLER_COASTER" },
      { slug: "wild-whizzer", name: "The Wild Whizzer", type: "ROLLER_COASTER" },
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
      { slug: "untamed", name: "Untamed", type: "ROLLER_COASTER", manufacturer: "Gerstlauer", opened: 2011 },
      { slug: "boston-tea-party", name: "Boston Tea Party", type: "WATER_RIDE", opened: 1974 },
      { slug: "starblaster", name: "Starblaster", type: "FLAT_RIDE", manufacturer: "HUSS", opened: 2007 },
      { slug: "mine-of-lost-souls", name: "The Mine of Lost Souls", type: "DARK_RIDE", opened: 1985 },
      { slug: "psychodrome", name: "Psychodrome", type: "FLAT_RIDE" },
      { slug: "turkish-twist", name: "Turkish Twist", type: "FLAT_RIDE" },
      { slug: "antique-carousel-canobie", name: "Antique Carousel", type: "FLAT_RIDE" },
      { slug: "antique-cars-canobie", name: "Antique Cars", type: "TRANSPORT" },
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
      { slug: "batman-the-dark-knight-sfne", name: "Batman: The Dark Knight", type: "ROLLER_COASTER", manufacturer: "B&M", opened: 2021 },
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
      { slug: "twister-ii", name: "Twister III: Storm Chaser", type: "ROLLER_COASTER", opened: 1995 },
      { slug: "sidewinder", name: "Sidewinder", type: "ROLLER_COASTER", manufacturer: "Vekoma" },
      { slug: "mind-eraser-elitch", name: "Mind Eraser", type: "ROLLER_COASTER", manufacturer: "Vekoma" },
      { slug: "half-pipe-elitch", name: "Half Pipe", type: "ROLLER_COASTER", manufacturer: "Intamin" },
      { slug: "boomerang-elitch", name: "Boomerang", type: "ROLLER_COASTER", manufacturer: "Vekoma" },
      { slug: "flying-coaster-elitch", name: "Flying Coaster", type: "ROLLER_COASTER" },
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
      { slug: "corkscrew-mi-adventure", name: "Corkscrew", type: "ROLLER_COASTER", manufacturer: "Arrow Dynamics", opened: 1978 },
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

  // --- Batch 3: more independents + a SeaWorld family park -------------
  {
    slug: "adventureland-iowa",
    name: "Adventureland",
    chain: "INDEPENDENT",
    city: "Altoona",
    state: "IA",
    foundedYear: 1974,
    description:
      "Opened in 1974 near Des Moines, Adventureland grew around The Dragon, a wooden roller coaster added in 1978 that remains one of its signature rides.",
    rides: [
      { slug: "tornado", name: "Tornado", type: "ROLLER_COASTER", opened: 1978 },
      { slug: "monster-adventureland", name: "Monster", type: "ROLLER_COASTER", manufacturer: "Gerstlauer", opened: 2016 },
      { slug: "underground", name: "Underground", type: "ROLLER_COASTER", manufacturer: "CCI", opened: 1996 },
      { slug: "outlaw-adventureland", name: "Outlaw", type: "ROLLER_COASTER", opened: 1993 },
      { slug: "dragon-slayer", name: "Dragon Slayer", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2021 },
      { slug: "draken-falls", name: "Draken Falls", type: "WATER_RIDE" },
      { slug: "flying-viking", name: "Flying Viking", type: "ROLLER_COASTER" },
    ],
  },
  {
    slug: "indiana-beach",
    name: "Indiana Beach",
    chain: "INDEPENDENT",
    city: "Monticello",
    state: "IN",
    foundedYear: 1926,
    description:
      "Opened in 1926 on the shore of Lake Shafer, Indiana Beach combines a traditional boardwalk amusement park with lakefront resort cabins and a public beach.",
    rides: [
      { slug: "cornball-express", name: "Cornball Express", type: "ROLLER_COASTER", opened: 2001 },
      { slug: "steel-hawg", name: "Steel Hawg", type: "ROLLER_COASTER", manufacturer: "S&S", opened: 2008 },
      { slug: "hoosier-hurricane", name: "Hoosier Hurricane", type: "ROLLER_COASTER", opened: 1994 },
      { slug: "lost-coaster-superstition-mountain", name: "Lost Coaster of Superstition Mountain", type: "ROLLER_COASTER", opened: 2002 },
      { slug: "tigrr-coaster", name: "Tig'rr Coaster", type: "ROLLER_COASTER", manufacturer: "Anton Schwarzkopf", opened: 1984 },
      { slug: "all-american-triple-loop", name: "All American Triple Loop", type: "ROLLER_COASTER", opened: 2024 },
    ],
  },
  {
    slug: "quassy-amusement-park",
    name: "Quassy Amusement Park",
    chain: "INDEPENDENT",
    city: "Middlebury",
    state: "CT",
    foundedYear: 1908,
    description:
      "Opened in 1908 on the shore of Lake Quassapaug, Quassy is one of the oldest amusement parks in New England and remains family-owned.",
    rides: [
      { slug: "wooden-warrior", name: "Wooden Warrior", type: "ROLLER_COASTER", manufacturer: "GCI", opened: 2011 },
      { slug: "little-dipper-quassy", name: "Little Dipper", type: "KIDDIE" },
      { slug: "free-fall-quassy", name: "Free Fall", type: "FLAT_RIDE" },
      { slug: "grand-carousel-quassy", name: "Grand Carousel", type: "FLAT_RIDE" },
      { slug: "yo-yo-super-swing", name: "Yo-Yo Super Swing", type: "FLAT_RIDE" },
      { slug: "pirate-ship-quassy", name: "Pirate Ship", type: "FLAT_RIDE" },
      { slug: "bumper-cars-quassy", name: "Bumper Cars", type: "FLAT_RIDE" },
      { slug: "frog-hopper-quassy", name: "Frog Hopper", type: "KIDDIE" },
      { slug: "crazy-cups-quassy", name: "Crazy Cups", type: "FLAT_RIDE" },
      { slug: "quassy-train", name: "Quassy Train", type: "TRANSPORT" },
    ],
  },
  {
    slug: "kentucky-kingdom",
    name: "Kentucky Kingdom",
    chain: "INDEPENDENT",
    city: "Louisville",
    state: "KY",
    foundedYear: 1987,
    description:
      "Opened in 1987 on the Kentucky State Fairgrounds, the park closed in 2010 amid financial troubles and reopened in 2014 under new local ownership, headlined by the launch coaster Lightning Run.",
    rides: [
      { slug: "storm-chaser", name: "Storm Chaser", type: "ROLLER_COASTER", manufacturer: "RMC", opened: 2016 },
      { slug: "lightning-run", name: "Lightning Run", type: "ROLLER_COASTER", manufacturer: "Chance Rides", opened: 2014 },
      { slug: "thunder-run-kk", name: "Thunder Run", type: "ROLLER_COASTER", opened: 1990 },
      { slug: "kentucky-flyer", name: "Kentucky Flyer", type: "ROLLER_COASTER", manufacturer: "GCI", opened: 2019 },
      { slug: "roller-skater-kk", name: "Roller Skater", type: "KIDDIE" },
      { slug: "flying-fox-kk", name: "Flying Fox", type: "ROLLER_COASTER", opened: 2026 },
    ],
  },
  {
    slug: "conneaut-lake-park",
    name: "Conneaut Lake Park",
    chain: "INDEPENDENT",
    city: "Conneaut Lake",
    state: "PA",
    foundedYear: 1892,
    description:
      "Opened in 1892 on the shore of Pennsylvania's largest natural glacial lake, Conneaut Lake Park is one of the oldest amusement parks in the country and has weathered multiple financial crises to stay open.",
    rides: [
      { slug: "blue-streak", name: "Blue Streak", type: "ROLLER_COASTER", opened: 1938 },
    ],
  },
  {
    slug: "sesame-place",
    name: "Sesame Place",
    chain: "SEAWORLD",
    city: "Langhorne",
    state: "PA",
    foundedYear: 1980,
    description:
      "Opened in 1980 as the first theme park built entirely around a TV show, based on Sesame Street. SeaWorld Entertainment acquired it in 2019, and a second location opened near San Diego in 2022.",
    rides: [
      { slug: "vapor-trail", name: "Vapor Trail", type: "ROLLER_COASTER" },
      { slug: "big-birds-rambling-river", name: "Big Bird's Rambling River", type: "WATER_RIDE" },
    ],
  },

  // --- State batch: Alabama ---------------------------------------------
  {
    slug: "alabama-splash-adventure",
    name: "Alabama Splash Adventure",
    chain: "INDEPENDENT",
    city: "Bessemer",
    state: "AL",
    foundedYear: 1998,
    description:
      "Opened in 1998 as VisionLand near Birmingham, the park has changed hands and names several times since; it now pairs a water park with a small collection of rides including the wooden coaster Rampage.",
    rides: [
      { slug: "rampage", name: "Rampage", type: "ROLLER_COASTER", opened: 1998 },
      { slug: "galleon-asa", name: "Galleon", type: "FLAT_RIDE", opened: 2019 },
      { slug: "scrambler-asa", name: "Scrambler", type: "FLAT_RIDE", opened: 2018 },
      { slug: "yo-yo-asa", name: "Yo-Yo", type: "FLAT_RIDE", opened: 2018 },
    ],
  },

  // --- State batch: Arizona ----------------------------------------------
  {
    slug: "castles-n-coasters",
    name: "Castles N' Coasters",
    chain: "INDEPENDENT",
    city: "Phoenix",
    state: "AZ",
    foundedYear: 1978,
    description:
      "A family-owned park in Phoenix built around mini-golf castles and a small ride collection, headlined by the wooden coaster Desert Storm.",
    rides: [
      { slug: "desert-storm", name: "Desert Storm", type: "ROLLER_COASTER" },
      { slug: "patriot-cnc", name: "Patriot", type: "ROLLER_COASTER" },
      { slug: "splashdown", name: "Splashdown", type: "WATER_RIDE" },
      { slug: "magic-carpet-cnc", name: "Magic Carpet", type: "FLAT_RIDE" },
      { slug: "sea-dragon-cnc", name: "Sea Dragon", type: "FLAT_RIDE" },
      { slug: "sky-diver-cnc", name: "Sky Diver", type: "FLAT_RIDE" },
      { slug: "bumper-boats-cnc", name: "Bumper Boats", type: "WATER_RIDE" },
    ],
  },

  // --- State batch: Arkansas -----------------------------------------
  {
    slug: "magic-springs",
    name: "Magic Springs",
    chain: "INDEPENDENT",
    city: "Hot Springs",
    state: "AR",
    foundedYear: 1978,
    description:
      "Opened in 1978 as Magic Springs Family Fun Park near the resort town of Hot Springs, it remains Arkansas's only major theme park, paired with the Crystal Falls water park.",
    rides: [
      { slug: "arkansas-twister", name: "Arkansas Twister", type: "ROLLER_COASTER" },
      { slug: "big-bad-john", name: "Big Bad John", type: "ROLLER_COASTER", opened: 2002 },
      { slug: "x-coaster", name: "X-Coaster", type: "ROLLER_COASTER", manufacturer: "Maurer Söhne", opened: 2006 },
      { slug: "the-gauntlet", name: "The Gauntlet", type: "ROLLER_COASTER", opened: 2004 },
    ],
  },

  // --- State batch: Delaware -------------------------------------------
  {
    slug: "funland",
    name: "Funland",
    chain: "INDEPENDENT",
    city: "Rehoboth Beach",
    state: "DE",
    foundedYear: 1962,
    description:
      "A small, family-owned boardwalk amusement park in Rehoboth Beach, open every summer since 1962 with classic kiddie rides, an arcade, and a wooden Kiddie Coaster.",
    rides: [
      { slug: "kiddie-coaster", name: "Kiddie Coaster", type: "KIDDIE" },
      { slug: "haunted-mansion-funland", name: "Haunted Mansion", type: "DARK_RIDE" },
      { slug: "carousel-funland", name: "Carousel", type: "FLAT_RIDE" },
      { slug: "tilt-a-whirl-funland", name: "Tilt-A-Whirl", type: "FLAT_RIDE" },
      { slug: "scrambler-funland", name: "Scrambler", type: "FLAT_RIDE" },
      { slug: "bumper-cars-funland", name: "Bumper Cars", type: "FLAT_RIDE" },
      { slug: "ferris-wheel-funland", name: "Ferris Wheel", type: "FLAT_RIDE" },
    ],
  },

  // --- State batch: Louisiana --------------------------------------------
  {
    slug: "dixie-landin",
    name: "Dixie Landin'",
    chain: "INDEPENDENT",
    city: "Baton Rouge",
    state: "LA",
    foundedYear: 1996,
    description:
      "A family amusement park in Baton Rouge paired with the adjoining Blue Bayou water park, opened in the 1990s and now Louisiana's main operating theme park following the 2005 closure of Six Flags New Orleans.",
    rides: [
      { slug: "wildcat", name: "Wildcat", type: "ROLLER_COASTER" },
    ],
  },

  // --- State batch: Maine --------------------------------------------
  {
    slug: "funtown-splashtown-usa",
    name: "Funtown Splashtown USA",
    chain: "INDEPENDENT",
    city: "Saco",
    state: "ME",
    foundedYear: 1961,
    description:
      "Maine's largest amusement park, combining a dry ride park with an adjoining water park. Its Excalibur wooden coaster, added in 1998, is the state's tallest and fastest roller coaster.",
    rides: [
      { slug: "excalibur", name: "Excalibur", type: "ROLLER_COASTER", opened: 1998 },
      { slug: "dragons-descent", name: "Dragon's Descent", type: "FLAT_RIDE", manufacturer: "S&S" },
      { slug: "thunder-falls", name: "Thunder Falls", type: "WATER_RIDE" },
      { slug: "astrosphere", name: "Astrosphere", type: "FLAT_RIDE" },
      { slug: "grand-carousel-funtown", name: "Grand Carousel", type: "FLAT_RIDE" },
    ],
  },

  // --- State batch: Maryland -------------------------------------------
  {
    slug: "six-flags-america",
    name: "Six Flags America",
    chain: "SIX_FLAGS",
    city: "Upper Marlboro",
    state: "MD",
    foundedYear: 1991,
    description:
      "Opened in 1991 as Wild World, later Adventure World, before Premier Parks (soon renamed Six Flags) acquired it and rebranded it Six Flags America in 1999. CLOSED PERMANENTLY after the 2025 season (final day November 2, 2025) when Six Flags deemed it outside its long-term plans; listed here for historical ride tracking.",
    rides: [
      { slug: "superman-ride-of-steel", name: "Superman: Ride of Steel", type: "ROLLER_COASTER", manufacturer: "Intamin", opened: 2000 },
      { slug: "wild-one", name: "The Wild One", type: "ROLLER_COASTER", opened: 1917 },
      { slug: "jokers-jinx", name: "Joker's Jinx", type: "ROLLER_COASTER", manufacturer: "Premier Rides", opened: 1999 },
      { slug: "roar-sfa", name: "Roar", type: "ROLLER_COASTER", manufacturer: "GCI", opened: 1998 },
      { slug: "batwing-sfa", name: "Batwing", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 2001 },
      { slug: "firebird-sfa", name: "Firebird", type: "ROLLER_COASTER", manufacturer: "Vekoma", opened: 2019 },
      { slug: "ragin-cajun-sfa", name: "Ragin' Cajun", type: "ROLLER_COASTER" },
      { slug: "apocalypse-sfa", name: "Apocalypse", type: "ROLLER_COASTER" },
    ],
  },

  // --- State batch: Nevada -------------------------------------------
  {
    slug: "adventuredome",
    name: "Adventuredome",
    chain: "INDEPENDENT",
    city: "Las Vegas",
    state: "NV",
    foundedYear: 1993,
    description:
      "A five-acre indoor theme park under a pink glass dome at Circus Circus on the Las Vegas Strip, opened in 1993. Its Canyon Blaster is the only indoor double-loop, double-corkscrew roller coaster in the United States.",
    rides: [
      { slug: "canyon-blaster", name: "Canyon Blaster", type: "ROLLER_COASTER", opened: 1993 },
    ],
  },

  // --- State batch: New Mexico -----------------------------------------
  {
    slug: "cliffs-amusement-park",
    name: "Cliff's Amusement Park",
    chain: "INDEPENDENT",
    city: "Albuquerque",
    state: "NM",
    foundedYear: 1959,
    description:
      "Family-owned since it opened in 1959, Cliff's is Albuquerque's local amusement park, home to the wooden coaster New Mexico Rattler.",
    rides: [
      { slug: "new-mexico-rattler", name: "New Mexico Rattler", type: "ROLLER_COASTER", opened: 1997 },
    ],
  },

  // --- State batch: Oregon -------------------------------------------
  {
    slug: "oaks-amusement-park",
    name: "Oaks Amusement Park",
    chain: "INDEPENDENT",
    city: "Portland",
    state: "OR",
    foundedYear: 1905,
    description:
      "Opened in 1905 as a trolley park along the Willamette River, Oaks Park is one of the oldest continuously operating amusement parks in the country, still known for its historic carousel and roller skating rink.",
    rides: [
      { slug: "oaks-park-carousel", name: "Oaks Park Carousel", type: "FLAT_RIDE", opened: 1912 },
    ],
  },

  // --- State batch: South Carolina ---------------------------------------
  {
    slug: "family-kingdom-fun-park",
    name: "Family Kingdom Fun Park",
    chain: "INDEPENDENT",
    city: "Myrtle Beach",
    state: "SC",
    foundedYear: 1966,
    description:
      "An oceanfront amusement park on the Myrtle Beach boardwalk, home to the Swamp Fox, a wooden coaster that has run there since the park opened in the 1960s.",
    rides: [
      { slug: "swamp-fox", name: "Swamp Fox", type: "ROLLER_COASTER", opened: 1966 },
    ],
  },

  // --- State batch: Washington -----------------------------------------
  {
    slug: "wild-waves",
    name: "Wild Waves Theme & Water Park",
    chain: "INDEPENDENT",
    city: "Federal Way",
    state: "WA",
    foundedYear: 1977,
    description:
      "Opened in 1977 as Enchanted Village, a children's storybook-themed park south of Seattle, later expanded into a combined theme and water park under its current name.",
    rides: [
      { slug: "timberhawk", name: "Timberhawk", type: "ROLLER_COASTER" },
    ],
  },

  // --- State batch: West Virginia ----------------------------------------
  {
    slug: "camden-park",
    name: "Camden Park",
    chain: "INDEPENDENT",
    city: "Huntington",
    state: "WV",
    foundedYear: 1903,
    description:
      "West Virginia's only major amusement park, opened in 1903 as a trolley park and still family-owned. Its Big Dipper wooden coaster has run since 1958.",
    rides: [
      { slug: "big-dipper", name: "Big Dipper", type: "ROLLER_COASTER", opened: 1958 },
    ],
  },

  // --- State batch: Wisconsin ------------------------------------------
  {
    slug: "mt-olympus",
    name: "Mt. Olympus Water & Theme Park",
    chain: "INDEPENDENT",
    city: "Wisconsin Dells",
    state: "WI",
    foundedYear: 1998,
    description:
      "A Greek mythology-themed park in Wisconsin Dells, the self-proclaimed water park capital of the world, combining water slides with a handful of wooden and steel coasters.",
    rides: [
      { slug: "hades-360", name: "Hades 360", type: "ROLLER_COASTER", opened: 2013 },
    ],
  },
];
