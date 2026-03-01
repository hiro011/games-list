const sampleDataList = [
  {
    "id": 900,
    "imgPath": "images/steam.jpg",
    "name": "Steam",
    "link": "https://store.steampowered.com/",
    "category": "playing"
  },
  {
    "id": 901,
    "imgPath": "images/Enshrouded.webp",
    "name": "enshrouded",
    "link": "https://nexusgames.to/game/enshrouded-free-download/",
    "category": "plan-to"
  },
  {
    "id": 902,
    "imgPath": "images/manor lords.png",
    "name": "manor-lords",
    "link": "https://nexusgames.to/game/manor-lords-free-download/",
    "category": "plan-to"
  },
  {
    "id": 903,
    "imgPath": "images/Satisfactory.webp",
    "name": "satisfactory",
    "link": "https://nexusgames.to/game/1-satisfactory-update-8-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 904,
    "imgPath": "images/aloft.png",
    "name": "aloft",
    "link": "https://nexusgames.to/game/aloft-free-download/",
    "category": "plan-to"
  },
  {
    "id": 905,
    "imgPath": "images/soul mask 2.jpg",
    "name": "Soulmask",
    "link": "https://store.steampowered.com/app/2646460/Soulmask/",
    "category": "plan-to"
  },
  {
    "id": 906,
    "imgPath": "images/ark survival evolved.png",
    "name": "ARK Survival Evolved",
    "link": "https://store.steampowered.com/app/346110/ARK_Survival_Evolved/",
    "category": "plan-to"
  },
  {
    "id": 907,
    "imgPath": "images/still wakes deep.png",
    "name": "still-wakes-the-deep",
    "link": "https://nexusgames.to/game/still-wakes-the-deep-free-download/",
    "category": "plan-to"
  },
  {
    "id": 908,
    "imgPath": "images/plague tale innocence.png",
    "name": "a-plague-tale-innocence",
    "link": "https://nexusgames.to/game/1-a-plague-tale-innocence-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 909,
    "imgPath": "images/kena bridge of spirit.png",
    "name": "kena-bridge-of-spirits",
    "link": "https://nexusgames.to/game/kena-bridge-of-spirits-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 910,
    "imgPath": "images/dragon age.png",
    "name": "dragon-age-inquisition",
    "link": "https://nexusgames.to/game/pc2-dragon-age-inquisition-free-download/",
    "category": "plan-to"
  },
  {
    "id": 911,
    "imgPath": "images/Tales of morrow.jpeg",
    "name": "tales-of-morrow",
    "link": "https://nexusgames.to/game/tales-of-morrow-free-download/",
    "category": "plan-to"
  },
  {
    "id": 912,
    "imgPath": "images/Dawn-of-Defiance.webp",
    "name": "dawn-of-defiance",
    "link": "https://nexusgames.to/game/dawn-of-defiance-free-download/",
    "category": "plan-to"
  },
  {
    "id": 913,
    "imgPath": "images/Dragon quest.jpg",
    "name": "dragon-quest-xi",
    "link": "https://nexusgames.to/game/3-dragon-quest-xi-echoes-of-an-elusive-age-free-download/",
    "category": "plan-to"
  },
  {
    "id": 914,
    "imgPath": "images/Mars First Logistics.jpg",
    "name": "mars-first-logistics",
    "link": "https://nexusgames.to/game/mars-first-logistics-free-download-vpc/",
    "category": "on-hold"
  },
  {
    "id": 915,
    "imgPath": "images/OSRS (3).jpg",
    "name": "oldschool.runescape",
    "link": "https://oldschool.runescape.com/c=4Fa9M6e3vTk/",
    "category": "on-hold"
  },
  {
    "id": 916,
    "imgPath": "images/Runescape (21).png",
    "name": "runescape",
    "link": "https://play.runescape.com/runescape",
    "category": "on-hold"
  },
  {
    "id": 917,
    "imgPath": "images/default-game.jpeg",
    "name": "Dune: Awakening",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 918,
    "imgPath": "images/default-game.jpeg",
    "name": "Grand Theft Auto V Enhanced",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 919,
    "imgPath": "images/default-game.jpeg",
    "name": "The Elder Scrolls Online",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 920,
    "imgPath": "images/default-game.jpeg",
    "name": "Avowed",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 921,
    "imgPath": "images/mirthwood.jpeg",
    "name": "mirthwood",
    "link": "https://nexusgames.to/game/mirthwood-free-download/",
    "category": "maybe"
  },
  {
    "id": 922,
    "imgPath": "images/default-game.jpeg",
    "name": "Mycopunk",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 923,
    "imgPath": "images/default-game.jpeg",
    "name": "Tomb Raider",
    "link": "https://nexusgames.to/game/tomb-raider-definitive-edition-free-download/",
    "category": "maybe"
  },
  {
    "id": 924,
    "imgPath": "images/default-game.jpeg",
    "name": "Mafia: Definitive Edition",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 925,
    "imgPath": "images/default-game.jpeg",
    "name": "Lynked: Banner of the Spark",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 926,
    "imgPath": "images/default-game.jpeg",
    "name": "Tchia",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 927,
    "imgPath": "images/control.jpg",
    "name": "Control Ultimate Edition",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 928,
    "imgPath": "images/default-game.jpeg",
    "name": "Borderlands 2",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 929,
    "imgPath": "images/default-game.jpeg",
    "name": "BitCraft Online",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 930,
    "imgPath": "images/default-game.jpeg",
    "name": "Infinity Nikki",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 931,
    "imgPath": "images/default-game.jpeg",
    "name": "REMATCH",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 932,
    "imgPath": "images/default-game.jpeg",
    "name": "Baldur's Gate 3",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 933,
    "imgPath": "images/default-game.jpeg",
    "name": "Monster Hunter Wilds",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 934,
    "imgPath": "images/default-game.jpeg",
    "name": "Black Myth: Wukong",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 935,
    "imgPath": "images/default-game.jpeg",
    "name": "Horizon Forbidden West Complete Edition",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 936,
    "imgPath": "images/Backroom escape togather.jpeg",
    "name": "Backrooms: Escape Together",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 937,
    "imgPath": "images/steamrip.com.jpeg",
    "name": "Steam rip",
    "link": "https://steamrip.com/",
    "category": "playing"
  },
  {
    "id": 938,
    "imgPath": "images/nexus games.png",
    "name": "Nexus games",
    "link": "https://nexusgames.to/",
    "category": "playing"
  },
  {
    "id": 939,
    "imgPath": "images/Elder%20Scroll%20V%20Skyrim%20(1).jpg",
    "name": "Skyrim AE (GTX 470 1GB)",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "playing"
  },
  {
    "id": 940,
    "imgPath": "images/default-game.jpeg",
    "name": "DEATH STRANDING DIRECTOR'S CUT",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 941,
    "imgPath": "images/default-game.jpeg",
    "name": "Chivalry 2",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 942,
    "imgPath": "images/default-game.jpeg",
    "name": "Red Dead Redemption 2",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 943,
    "imgPath": "images/default-game.jpeg",
    "name": "Solarpunk",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 944,
    "imgPath": "images/Split Fiction (2).webp",
    "name": "split fiction",
    "link": "https://nexusgames.to/game/split-fiction-free-download/",
    "category": "completed"
  },
  {
    "id": 945,
    "imgPath": "images/The-Last-Campfire-Free.webp",
    "name": "the-last-campfire",
    "link": "https://nexusgames.to/game/the-last-campfire-free-download-vpc/",
    "category": "completed"
  },
  {
    "id": 946,
    "imgPath": "images/battlefield-3.jpg",
    "name": "Battlefield 3",
    "link": "https://store.steampowered.com",
    "category": "completed"
  },
  {
    "id": 947,
    "imgPath": "images/Dark%20Souls%20(1).jpg",
    "name": "Dark souls PTDE",
    "link": "https://store.steampowered.com/",
    "category": "completed"
  },
  {
    "id": 948,
    "imgPath": "images/default-game.jpeg",
    "name": "Green Hell",
    "link": "https://nexusgames.to/game/green-hell-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 949,
    "imgPath": "images/default-game.jpeg",
    "name": "No Mans Sky",
    "link": "https://nexusgames.to/game/1-no-mans-sky-free-download-pc-vpc/",
    "category": "plan-to"
  },
  {
    "id": 950,
    "imgPath": "images/Lens%20Island%20(1).jpg",
    "name": "Len's island",
    "link": "https://steamrip.com/lens-island-free-download-t1/",
    "category": "playing"
  },
  {
    "id": 951,
    "imgPath": "images/detroit become human.png",
    "name": "detroit-become-human",
    "link": "https://nexusgames.to/game/1-detroit-become-human-free-download-pc-vpc/",
    "category": "maybe"
  },
  {
    "id": 952,
    "imgPath": "images/inside.jpg",
    "name": "inside",
    "link": "https://store.steampowered.com/",
    "category": "completed"
  },
  {
    "id": 953,
    "imgPath": "images/Above snakes (2).jpg",
    "name": "Above Snakes",
    "link": "https://store.steampowered.com/app/1589120/Above_Snakes/",
    "category": "maybe"
  },
  {
    "id": 954,
    "imgPath": "images/Lethal Company (2).jpg",
    "name": "lethal-company",
    "link": "https://nexusgames.to/game/lethal-company-free-download-vpc/",
    "category": "completed"
  },
  {
    "id": 955,
    "imgPath": "images/default-game.jpeg",
    "name": "tainted grail: the fall of avalon",
    "link": "https://store.steampowered.com",
    "category": "plan-to"
  },
  {
    "id": 956,
    "imgPath": "images/default-game.jpeg",
    "name": "borderland?",
    "link": "https://store.steampowered.com",
    "category": "plan-to"
  },
  {
    "id": 957,
    "imgPath": "images/default-game.jpeg",
    "name": "crimson desert",
    "link": "https://store.steampowered.com",
    "category": "plan-to"
  },
  {
    "id": 958,
    "imgPath": "images/default-game.jpeg",
    "name": "hell is us",
    "link": "https://store.steampowered.com",
    "category": "plan-to"
  },
  {
    "id": 959,
    "imgPath": "images/default-game.jpeg",
    "name": "sones of the forest",
    "link": "https://nexusgames.to/game/1-sons-of-the-forest-free-download-vpc/",
    "category": "maybe"
  },
  {
    "id": 960,
    "imgPath": "images/repo.jpg",
    "name": "R.E.P.O.",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 961,
    "imgPath": "images/no place like home.png",
    "name": "no-place-like-home",
    "link": "https://nexus-games.net/game/1-no-place-like-home-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 962,
    "imgPath": "images/My%20Time%20at%20Portia%20(1).jpg",
    "name": "My time at portia (GTX 660)",
    "link": "https://store.steampowered.com/",
    "category": "completed"
  },
  {
    "id": 963,
    "imgPath": "images/Re poly (2).jpg",
    "name": "Re poly",
    "link": "https://store.steampowered.com",
    "category": "plan-to"
  },
  {
    "id": 964,
    "imgPath": "images/RuneScape Dragonwilds (3).jpg",
    "name": "Runescape dragonwilds",
    "link": "https://store.steampowered.com",
    "category": "maybe"
  },
  {
    "id": 965,
    "imgPath": "images/bloodline.jpg",
    "name": "The Bloodline",
    "link": "https://nexusgames.to/game/1-the-bloodline-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 966,
    "imgPath": "images/Limbo.jpg",
    "name": "LIMBO",
    "link": "https://nexusgames.to/game/limbo-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 967,
    "imgPath": "images/Bramble-The-Mountain-King.webp",
    "name": "bramble",
    "link": "https://nexusgames.to/game/bramble-the-mountain-king-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 968,
    "imgPath": "images/subnautica.jpg",
    "name": "Subnautica (Intel HD 4600)",
    "link": "https://store.steampowered.com/",
    "category": "completed"
  },
  {
    "id": 969,
    "imgPath": "images/Firewatch%20(1).jpg",
    "name": "firewatch (GeForce 450)",
    "link": "https://store.steampowered.com/",
    "category": "completed"
  },
  {
    "id": 970,
    "imgPath": "images/far%20cry%20primal.jpg",
    "name": "Far Cry Primal (GTX 460)",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "completed"
  },
  {
    "id": 971,
    "imgPath": "images/Journey%20To%20The%20Savage%20Planet.jpg",
    "name": "Journey To The Savage Planet (GTX 660)",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "completed"
  },
  {
    "id": 972,
    "imgPath": "images/default-game.jpeg",
    "name": "Wytchwood",
    "link": "https://store.steampowered.com",
    "category": "plan-to"
  },
  {
    "id": 973,
    "imgPath": "images/Hogwarts Legacy (1).jpg",
    "name": "Hogwarts Legacy",
    "link": "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
    "category": "completed"
  },
  {
    "id": 974,
    "imgPath": "images/Kenshi.jpg",
    "name": "kenshi",
    "link": "https://nexusgames.to/game/kenshi-free-download/",
    "category": "plan-to"
  },
  {
    "id": 975,
    "imgPath": "images/Planet-of-Lana.png",
    "name": "planet-of-lana",
    "link": "https://nexusgames.to/game/1-planet-of-lana-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 976,
    "imgPath": "images/lies-of-p-wallpaper.jpg",
    "name": "lies of p",
    "link": "https://nexusgames.to/",
    "category": "maybe"
  },
  {
    "id": 977,
    "imgPath": "images/Hollow knight.jpg",
    "name": "Hollow Knight",
    "link": "https://nexusgames.to/game/1-hollow-knight-free-download-pc-vpc/",
    "category": "completed"
  },
  {
    "id": 978,
    "imgPath": "images/pubg_game_660_141020121948.jpg",
    "name": "Pubg",
    "link": "https://store.steampowered.com",
    "category": "on-hold"
  },
  {
    "id": 979,
    "imgPath": "images/Kingdom-Come-Deliverance.webp",
    "name": "Kingdom Come: Deliverance II",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 980,
    "imgPath": "images/elden ring.png",
    "name": "ELDEN RING NIGHTREIGN",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 981,
    "imgPath": "images/Clair Obscur Expedition 33.jpg",
    "name": "Clair Obscur: Expedition 33",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 982,
    "imgPath": "images/god-of-war-ragnarok-button-1631231879154.jpg",
    "name": "God of War Ragnarök",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 983,
    "imgPath": "images/The last of us 1.jpg",
    "name": "The Last of Us Part I",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 984,
    "imgPath": "images/default-game.jpeg",
    "name": "kinstrife",
    "link": "https://nexusgames.to/",
    "category": "plan-to"
  },
  {
    "id": 985,
    "imgPath": "images/Endling-Extinction-is-Forever.webp",
    "name": "endling",
    "link": "https://nexusgames.to/game/endling-extinction-is-forever-free-download/",
    "category": "plan-to"
  },
  {
    "id": 986,
    "imgPath": "images/Naruto_Ultimate_Ninja_Storm_3_Full_Burst_Standard_Edition_Packshot__88947.jpg",
    "name": "Ultimate Ninja 3",
    "link": "https://nexusgames.to/",
    "category": "playing"
  },
  {
    "id": 987,
    "imgPath": "images/little nightmare.jpg",
    "name": "Little Nightmare",
    "link": "https://store.steampowered.com/",
    "category": "completed"
  },
  {
    "id": 988,
    "imgPath": "images/It-Takes-Two (2).webp",
    "name": "it-takes-two",
    "link": "https://nexusgames.to/game/14-it-takes-two-free-download-vpc/",
    "category": "completed"
  },
  {
    "id": 989,
    "imgPath": "images/default-game.jpeg",
    "name": "stardew valley",
    "link": "https://nexusgames.to",
    "category": "plan-to"
  },
  {
    "id": 990,
    "imgPath": "images/call of duty 4.jpg",
    "name": "Call of duty 4",
    "link": "https://store.steampowered.com",
    "category": "completed"
  },
  {
    "id": 991,
    "imgPath": "images/Outer-Wilds.webp",
    "name": "Outer Wilds",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "droped"
  },
  {
    "id": 992,
    "imgPath": "images/Teddys-Haven-A-Fantasy-Inspired-Shop-Simulator.webp",
    "name": "Teddy's Haven",
    "link": "https://nexusgames.to/game/teddys-haven-a-fantasy-inspired-shop-simulator-free-download/",
    "category": "droped"
  },
  {
    "id": 993,
    "imgPath": "images/stranded%20deep.jpg",
    "name": "stranded-deep",
    "link": "https://nexusgames.to/game/stranded-deep-free-download-pc1-vpc/",
    "category": "droped"
  },
  {
    "id": 994,
    "imgPath": "images/The forest.jpg",
    "name": "The Forest",
    "link": "https://nexusgames.to/game/the-forest-free-download/",
    "category": "droped"
  },
  {
    "id": 995,
    "imgPath": "images/12m-keyart-logo.jpg",
    "name": "Twelve-Minutes",
    "link": "https://nexusgames.to/game/1-twelve-minutes-free-download-vpc/",
    "category": "completed"
  },
  {
    "id": 996,
    "imgPath": "images/Ori-and-the-Blind-Forest-Definitive-Edition-Free-Download-By-Nexusgames.to-6-970x570.webp",
    "name": "Ori and the blind forest",
    "link": "https://nexusgames.to/",
    "category": "droped"
  },
  {
    "id": 997,
    "imgPath": "images/Medieval-Dynasty.webp",
    "name": "Medieval Dynasty",
    "link": "https://nexusgames.to/game/medieval-dynasty-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 998,
    "imgPath": "images/default-game.jpeg",
    "name": "mass-effect-2",
    "link": "https://nexusgames.to/game/1-mass-effect-2-digital-deluxe-edition-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 999,
    "imgPath": "images/default-game.jpeg",
    "name": "portal 2",
    "link": "https://nexusgames.to/game/portal-2-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 1000,
    "imgPath": "images/Henry stickmini.jpg",
    "name": "Henry Stickmin",
    "link": "https://nexusgames.to/",
    "category": "completed"
  },
  {
    "id": 1001,
    "imgPath": "images/default-game.jpeg",
    "name": "indika",
    "link": "https://nexusgames.to/game/indika-free-download/",
    "category": "plan-to"
  },
  {
    "id": 1002,
    "imgPath": "images/default-game.jpeg",
    "name": "Divinity: Original Sin Enhanced Edition",
    "link": "https://nexusgames.to/game/1-divinity-original-sin-enhanced-edition-free-download-vpc/",
    "category": "maybe"
  },
  {
    "id": 1003,
    "imgPath": "images/default-game.jpeg",
    "name": "slote and dagger",
    "link": "https://nexusgames.to",
    "category": "plan-to"
  },
  {
    "id": 1004,
    "imgPath": "images/default-game.jpeg",
    "name": "Where Winds Meet",
    "link": "https://store.steampowered.com/app/3564740/Where_Winds_Meet/",
    "category": "plan-to"
  },
  {
    "id": 1005,
    "imgPath": "images/Another%20Crabs%20Treasure.jpg",
    "name": "Another Crab's Treasure (GTX 970)",
    "link": "https://store.steampowered.com/app/1887840/Another_Crabs_Treasure/",
    "category": "completed"
  },
  {
    "id": 1006,
    "imgPath": "images/default-game.jpeg",
    "name": "sleeping-dogs",
    "link": "https://nexusgames.to/game/sleeping-dogs-free-download-vpc/",
    "category": "droped"
  },
  {
    "id": 1007,
    "imgPath": "images/fallout-new-vegas-season-2.jpg",
    "name": "Fallout: new vegas",
    "link": "https://nexusgames.to/",
    "category": "droped"
  },
  {
    "id": 1008,
    "imgPath": "images/default-game.jpeg",
    "name": "Fallout 4",
    "link": "https://steamrip.com/fallout-4-free-download-4x/",
    "category": "maybe"
  },
  {
    "id": 1009,
    "imgPath": "images/default-game.jpeg",
    "name": "Mount & Blade II: Bannerlord",
    "link": "https://nexusgames.to/game/mount-and-blade-ii-bannerlord-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 1010,
    "imgPath": "images/default-game.jpeg",
    "name": "dragons dogma 2",
    "link": "https://nexusgames.to",
    "category": "plan-to"
  },
  {
    "id": 1011,
    "imgPath": "images/default-game.jpeg",
    "name": "star citizen",
    "link": "https://nexusgames.to",
    "category": "maybe"
  },
  {
    "id": 1012,
    "imgPath": "images/stray.jpg",
    "name": "Stray (GTX 650)",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "maybe"
  },
  {
    "id": 1013,
    "imgPath": "images/default-game.jpeg",
    "name": "star field",
    "link": "https://nexusgames.to",
    "category": "maybe"
  },
  {
    "id": 1014,
    "imgPath": "images/default-game.jpeg",
    "name": "Craftopia",
    "link": "https://nexusgames.to/game/1-craftopia-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 1015,
    "imgPath": "images/Valheim%20(1).jpg",
    "name": "Valheim  2025",
    "link": "https://nexusgames.to/game/valheim-free-download-vpc/",
    "category": "playing"
  },
  {
    "id": 1016,
    "imgPath": "images/Dispatch_capsuleArt.webp",
    "name": "Dispatch",
    "link": "https://nexusgames.to/game/dispatch-free-download/",
    "category": "completed"
  },
  {
    "id": 1017,
    "imgPath": "images/COCOON.webp",
    "name": "cocoon",
    "link": "https://nexusgames.to/game/1-cocoon-free-download-vpc/",
    "category": "completed"
  },
  {
    "id": 1018,
    "imgPath": "images/default-game.jpeg",
    "name": "psychonauts 2",
    "link": "https://nexusgames.to",
    "category": "plan-to"
  },
  {
    "id": 1019,
    "imgPath": "images/default-game.jpeg",
    "name": "cuphead",
    "link": "https://nexusgames.to/game/cuphead-free-download-1/",
    "category": "playing"
  },
  {
    "id": 1020,
    "imgPath": "images/default-game.jpeg",
    "name": "Coral Island",
    "link": "https://nexusgames.to",
    "category": "plan-to"
  },
  {
    "id": 1021,
    "imgPath": "images/default-game.jpeg",
    "name": "forseken realms",
    "link": "https://nexusgames.to",
    "category": "maybe"
  },
  {
    "id": 1022,
    "imgPath": "images/default-game.jpeg",
    "name": "ride 2",
    "link": "https://nexusgames.to/game/1-ride-2-free-download-pc-vpc/",
    "category": "maybe"
  },
  {
    "id": 1023,
    "imgPath": "images/default-game.jpeg",
    "name": "grid 2",
    "link": "https://nexusgames.to/game/1-grid-2-reloaded-edition-free-download-vpc/",
    "category": "maybe"
  },
  {
    "id": 1024,
    "imgPath": "images/default-game.jpeg",
    "name": "banished",
    "link": "https://nexusgames.to/game/1-banished-free-download-vpc/",
    "category": "playing"
  },
  {
    "id": 1025,
    "imgPath": "images/default-game.jpeg",
    "name": "hello engineer",
    "link": "https://nexusgames.to/game/hello-engineer-scrap-machines-constructor-free-download-vpc/",
    "category": "playing"
  },
  {
    "id": 1026,
    "imgPath": "images/Hollow%20knight%20sillksong.jpg",
    "name": "Hollow Knight Silksong",
    "link": "https://nexusgames.to/game/hollow-knight-silksong-free-download/",
    "category": "maybe"
  },
  {
    "id": 1027,
    "imgPath": "images/default-game.jpeg",
    "name": "Deaths Door",
    "link": "https://nexusgames.to/game/1-deaths-door-free-download-vpc/",
    "category": "droped"
  },
  {
    "id": 1028,
    "imgPath": "images/default-game.jpeg",
    "name": "revenge of the savage planet",
    "link": "https://nexusgames.to",
    "category": "plan-to"
  },
  {
    "id": 1029,
    "imgPath": "images/default-game.jpeg",
    "name": "Dredge",
    "link": "https://nexusgames.to/game/dredge-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 1030,
    "imgPath": "images/default-game.jpeg",
    "name": "Hytale",
    "link": "https://nexusgames.to/game/hytale-free-download/",
    "category": "plan-to"
  },
  {
    "id": 1031,
    "imgPath": "images/default-game.jpeg",
    "name": "motorslice",
    "link": "https://nexusgames.to",
    "category": "playing"
  },
  {
    "id": 1032,
    "imgPath": "images/default-game.jpeg",
    "name": "The Witcher: Enhanced Edition",
    "link": "https://nexusgames.to/game/3-the-witcher-enhanced-edition-directors-cut-free-download-vpc/",
    "category": "playing"
  },
  {
    "id": 1033,
    "imgPath": "images/default-game.jpeg",
    "name": "little nightmares 3",
    "link": "https://nexusgames.to/game/little-nightmares-iii-free-downloadk/",
    "category": "plan-to"
  },
  {
    "id": 1034,
    "imgPath": "images/outward.png",
    "name": "outward (with mod)",
    "link": "https://nexusgames.to/game/outward-definitive-edition-free-download/",
    "category": "plan-to"
  },
  {
    "id": 1035,
    "imgPath": "images/DARK-SOULS-3.webp",
    "name": "dark-souls-3",
    "link": "https://nexusgames.to/game/8-dark-souls-3-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 1036,
    "imgPath": "images/elder-scrolls-iv-oblivion-remaster.jpg",
    "name": "The Elder Scrolls IV: Oblivion Remastered",
    "link": "https://store.steampowered.com/wishlist/profiles/76561198878789498/",
    "category": "plan-to"
  },
  {
    "id": 1037,
    "imgPath": "images/high on life.webp",
    "name": "high-on-life",
    "link": "https://nexusgames.to/game/1-high-on-life-free-download-vpc/",
    "category": "plan-to"
  },
  {
    "id": 1038,
    "imgPath": "images/Grounded.jpg",
    "name": "grounded",
    "link": "https://nexusgames.to/game/1-grounded-free-download-pc-vpc/",
    "category": "plan-to"
  },
  {
    "id": 1039,
    "imgPath": "images/Elden ring.jpg",
    "name": "Elden Ring",
    "link": "https://store.steampowered.com",
    "category": "plan-to"
  },
  {
    "id": 1040,
    "imgPath": "images/Palworld.webp",
    "name": "Palworld",
    "link": "https://store.steampowered.com",
    "category": "plan-to"
  },
  {
    "id": 1041,
    "imgPath": "images/default-game.jpeg",
    "name": "divinity 2 dragon saga",
    "link": "https://nexusgames.to",
    "category": "playing"
  },
  {
    "id": 1042,
    "imgPath": "images/default-game.jpeg",
    "name": "stray children",
    "link": "https://nexusgames.to",
    "category": "playing"
  },
  {
    "id": 1043,
    "imgPath": "images/default-game.jpeg",
    "name": "planet crafter",
    "link": "https://nexusgames.to",
    "category": "playing"
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const sampleBtn = document.getElementById('import-sample-btn');

    if (sampleBtn) {
        sampleBtn.addEventListener('click', () => {
            // Confirmation Alert
            const isConfirmed = confirm("Do you want to import sample list to your Local Storage?");

            if (isConfirmed) {
                let games = JSON.parse(localStorage.getItem('games')) || [];
                let addedCount = 0;

                sampleDataList.forEach((item) => {
                    // Check if ID already exists in LocalStorage to avoid duplicates
                    const exists = games.some(c => c.id === item.id);

                    if (!exists) {
                        games.push(item);
                        addedCount++;
                    }
                });

                if (addedCount > 0) {
                    // Save the updated list to LocalStorage
                    localStorage.setItem('games', JSON.stringify(games));

                    // Alert the user and refresh to show changes
                    alert(`Successfully added ${addedCount} sample games! The page will now refresh.`);
                    window.location.reload();
                } else {
                    alert("All samples are already in your list.");
                }
            }
        });
    }
});
