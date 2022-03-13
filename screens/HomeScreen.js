import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "../components/Home/MovieCard";
import TopMovies from "../components/Home/TopMovies";
import WatchingHistory from "../components/Home/WatchingHistory";

const topMovies = [
  {
      "id": 5085,
      "tmdb_id": 27205,
      "original_title": "Inception",
      "original_language": "en",
      "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
      "genres": "['Action', 'Thriller', 'Science Fiction', 'Mystery', 'Adventure']",
      "popularity": 29.108149,
      "poster_path": "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      "production_company": "[{'name': 'Legendary Pictures', 'id': 923}, {'name': 'Warner Bros.', 'id': 6194}, {'name': 'Syncopy', 'id': 9996}]",
      "vote_average": 8.1,
      "vote_count": 14075,
      "revenue": 825532764,
      "year": 2010,
      "adult": false,
      "budget": 160000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 148
  },
  {
      "id": 4247,
      "tmdb_id": 155,
      "original_title": "The Dark Knight",
      "original_language": "en",
      "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      "genres": "['Drama', 'Action', 'Crime', 'Thriller']",
      "popularity": 123.167259,
      "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "production_company": "[{'name': 'DC Comics', 'id': 429}, {'name': 'Legendary Pictures', 'id': 923}, {'name': 'Warner Bros.', 'id': 6194}, {'name': 'DC Entertainment', 'id': 9993}, {'name': 'Syncopy', 'id': 9996}]",
      "vote_average": 8.3,
      "vote_count": 12269,
      "revenue": 1004558444,
      "year": 2008,
      "adult": false,
      "budget": 185000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'zh', 'name': '普通话'}]",
      "status": "Released",
      "runtime": 152
  },
  {
      "id": 4877,
      "tmdb_id": 19995,
      "original_title": "Avatar",
      "original_language": "en",
      "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
      "genres": "['Action', 'Adventure', 'Fantasy', 'Science Fiction']",
      "popularity": 185.070892,
      "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
      "production_company": "[{'name': 'Ingenious Film Partners', 'id': 289}, {'name': 'Twentieth Century Fox Film Corporation', 'id': 306}, {'name': 'Dune Entertainment', 'id': 444}, {'name': 'Lightstorm Entertainment', 'id': 574}]",
      "vote_average": 7.2,
      "vote_count": 12114,
      "revenue": 2787965087,
      "year": 2009,
      "adult": false,
      "budget": 237000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}]",
      "status": "Released",
      "runtime": 162
  },
  {
      "id": 5535,
      "tmdb_id": 24428,
      "original_title": "The Avengers",
      "original_language": "en",
      "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
      "genres": "['Science Fiction', 'Action', 'Adventure']",
      "popularity": 89.887648,
      "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      "production_company": "[{'name': 'Paramount Pictures', 'id': 4}, {'name': 'Marvel Studios', 'id': 420}]",
      "vote_average": 7.4,
      "vote_count": 12000,
      "revenue": 1519557910,
      "year": 2012,
      "adult": false,
      "budget": 220000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 143
  },
  {
      "id": 7409,
      "tmdb_id": 293660,
      "original_title": "Deadpool",
      "original_language": "en",
      "overview": "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
      "genres": "['Action', 'Adventure', 'Comedy']",
      "popularity": 187.860492,
      "poster_path": "/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
      "production_company": "[{'name': 'Twentieth Century Fox Film Corporation', 'id': 306}, {'name': 'Marvel Entertainment', 'id': 7505}, {'name': \"The Donners' Company\", 'id': 11307}, {'name': 'TSG Entertainment', 'id': 22213}, {'name': 'Kinberg Genre', 'id': 78091}]",
      "vote_average": 7.4,
      "vote_count": 11444,
      "revenue": 783112979,
      "year": 2016,
      "adult": false,
      "budget": 58000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 108
  },
  {
      "id": 6725,
      "tmdb_id": 157336,
      "original_title": "Interstellar",
      "original_language": "en",
      "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      "genres": "['Adventure', 'Drama', 'Science Fiction']",
      "popularity": 32.213481,
      "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "production_company": "[{'name': 'Paramount Pictures', 'id': 4}, {'name': 'Legendary Pictures', 'id': 923}, {'name': 'Warner Bros.', 'id': 6194}, {'name': 'Syncopy', 'id': 9996}, {'name': 'Lynda Obst Productions', 'id': 13769}]",
      "vote_average": 8.1,
      "vote_count": 11187,
      "revenue": 675120017,
      "year": 2014,
      "adult": false,
      "budget": 165000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 169
  },
  {
      "id": 6115,
      "tmdb_id": 68718,
      "original_title": "Django Unchained",
      "original_language": "en",
      "overview": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
      "genres": "['Drama', 'Western']",
      "popularity": 19.785025,
      "poster_path": "/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
      "production_company": "[{'name': 'Columbia Pictures', 'id': 5}, {'name': 'The Weinstein Company', 'id': 308}]",
      "vote_average": 7.8,
      "vote_count": 10297,
      "revenue": 425368238,
      "year": 2012,
      "adult": false,
      "budget": 100000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Français'}, {'iso_639_1': 'de', 'name': 'Deutsch'}]",
      "status": "Released",
      "runtime": 165
  },
  {
      "id": 6933,
      "tmdb_id": 118340,
      "original_title": "Guardians of the Galaxy",
      "original_language": "en",
      "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
      "genres": "['Action', 'Science Fiction', 'Adventure']",
      "popularity": 53.291601,
      "poster_path": "/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      "production_company": "[{'name': 'Marvel Studios', 'id': 420}, {'name': 'Moving Picture Company (MPC)', 'id': 20478}, {'name': 'Bulletproof Cupid', 'id': 54850}, {'name': 'Revolution Sun Studios', 'id': 76043}]",
      "vote_average": 7.9,
      "vote_count": 10014,
      "revenue": 773328629,
      "year": 2014,
      "adult": false,
      "budget": 170000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 121
  },
  {
      "id": 1275,
      "tmdb_id": 550,
      "original_title": "Fight Club",
      "original_language": "en",
      "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      "genres": "['Drama']",
      "popularity": 63.869599,
      "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      "production_company": "[{'name': 'Twentieth Century Fox Film Corporation', 'id': 306}, {'name': 'Regency Enterprises', 'id': 508}, {'name': 'Fox 2000 Pictures', 'id': 711}, {'name': 'Taurus Film', 'id': 20555}, {'name': 'Linson Films', 'id': 54050}, {'name': 'Atman Entertainmen",
      "vote_average": 8.3,
      "vote_count": 9678,
      "revenue": 100853753,
      "year": 1999,
      "adult": false,
      "budget": 63000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 139
  },
  {
      "id": 5637,
      "tmdb_id": 70160,
      "original_title": "The Hunger Games",
      "original_language": "en",
      "overview": "Every year in the ruins of what was once North America, the nation of Panem forces each of its twelve districts to send a teenage boy and girl to compete in the Hunger Games.  Part twisted entertainment, part government intimidation tactic, the Hunger Games are a nationally televised event in which “Tributes” must fight with one another until one survivor remains.  Pitted against highly-trained Tributes who have prepared for these Games their entire lives, Katniss is forced to rely upon her sharp instincts as well as the mentorship of drunken former victor Haymitch Abernathy.  If she’s ever to return home to District 12, Katniss must make impossible choices in the arena that weigh survival against humanity and life against love. The world will be watching.",
      "genres": "['Science Fiction', 'Adventure', 'Fantasy']",
      "popularity": 20.031667,
      "poster_path": "/iQK0pkTQC60XR3Zlu2pp8kujoqW.jpg",
      "production_company": "[{'name': 'Lionsgate', 'id': 1632}, {'name': 'Color Force', 'id': 5420}]",
      "vote_average": 6.9,
      "vote_count": 9634,
      "revenue": 691210692,
      "year": 2012,
      "adult": false,
      "budget": 75000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 142
  }
]

const dummyData = [
  {
      "id": 2616,
      "tmdb_id": 10881,
      "original_title": "Avalon",
      "original_language": "pl",
      "overview": "In a future world, young people are increasingly becoming addicted to an illegal (and potentially deadly) battle simulation game called Avalon. When Ash, a star player, hears of rumors that a more advanced level of the game exists somewhere, she gives up her loner ways and joins a gang of explorers. Even if she finds the gateway to the next level, will she ever be able to come back to reality?",
      "genres": "['Action', 'Science Fiction']",
      "popularity": 5.019679,
      "poster_path": "/xm8byLTLqscSae3vFJDDggNeH1j.jpg",
      "production_company": "[{'name': 'Bandai Visual Company', 'id': 528}, {'name': 'Nippon Herald Films', 'id': 1598}, {'name': 'Dentsu Productions Ltd.', 'id': 3340}, {'name': 'Deiz Production', 'id': 5853}, {'name': 'Media Factory', 'id': 7967}]",
      "vote_average": 6.8,
      "vote_count": 93,
      "revenue": 8826094,
      "year": 2001,
      "adult": false,
      "budget": 8000000,
      "spoken_languages": "[{'iso_639_1': 'pl', 'name': 'Polski'}]",
      "status": "Released",
      "runtime": 107
  },
  {
      "id": 2792,
      "tmdb_id": 10677,
      "original_title": "Dirty Dancing: Havana Nights",
      "original_language": "en",
      "overview": "In pre-revolution Cuba, Katey Miller is about to defy everyone's expectations. Instead of a parent-approved suitor, Katey is drawn to the sexy waiter, Javier, who spends his nights dancing in Havana's nightclubs. As she secretly learns to dance with Javier, she learns the meanings of love, sensuality and independence.",
      "genres": "['Drama', 'Romance']",
      "popularity": 4.475359,
      "poster_path": "/fL0psQFnroOkBpj3RLqkWJrnO2X.jpg",
      "production_company": "[{'name': 'Miramax Films', 'id': 14}, {'name': 'Lions Gate Films', 'id': 35}, {'name': 'Artisan Entertainment', 'id': 2188}, {'name': 'Lawrence Bender Productions', 'id': 2253}, {'name': 'Havana Nights LLC', 'id': 22879}]",
      "vote_average": 6.0,
      "vote_count": 154,
      "revenue": 27685016,
      "year": 2004,
      "adult": false,
      "budget": 25000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}]",
      "status": "Released",
      "runtime": 86
  },
  {
      "id": 3155,
      "tmdb_id": 15024,
      "original_title": "The Mists of Avalon",
      "original_language": "en",
      "overview": "A unique re-working of the Arthurian epic, based on the novel by Marion Zimmer Bradley, The Mists of Avalon tells the familiar tale but with an important twist: The story is told through the eyes of the women who wielded power behind King Arthur's throne. Filmed on location in Prague, The Mists of Avalon follows the women of Avalon through the ultimate fulfillment of their destinies.",
      "genres": "['Drama', 'Fantasy']",
      "popularity": 9.594656,
      "poster_path": "[]",
      "production_company": "[{'name': 'Wolper Organization', 'id': 2428}, {'name': 'Turner Network Television (TNT)', 'id': 5730}, {'name': 'Constantin Film Produktion', 'id': 5755}, {'name': 'Warner Bros.', 'id': 6194}, {'name': 'Stillking Films', 'id': 11345}]",
      "vote_average": 6.4,
      "vote_count": 44,
      "revenue": 0,
      "year": 2001,
      "adult": false,
      "budget": 20000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 183
  },
  {
      "id": 3219,
      "tmdb_id": 40823,
      "original_title": "O Homem Que Copiava",
      "original_language": "pt",
      "overview": "André, 19, lives in Porto Alegre, Brazil, and works as a photocopier operator. He likes to see his neighbor Sílvia with a pair of binoculars. She works selling clothes. Becoming attracted to her, he tries to get nearer, and goes to her shop to buy something, but finds out that he can't afford it. So he puts the photocopier to other uses, and begins to envisage fishy schemes to earn some money.",
      "genres": "['Romance', 'Comedy', 'Drama']",
      "popularity": 3.954105,
      "poster_path": "/8si8hwcxLiqa9M3zUGuvgxNQNwC.jpg",
      "production_company": "[{'name': 'Globo Filmes', 'id': 13969}, {'name': 'Casa de Cinema de Porto Alegre', 'id': 17415}]",
      "vote_average": 7.0,
      "vote_count": 60,
      "revenue": 0,
      "year": 2003,
      "adult": false,
      "budget": 0,
      "spoken_languages": "[{'iso_639_1': 'pt', 'name': 'Português'}]",
      "status": "Released",
      "runtime": 123
  },
  {
      "id": 3367,
      "tmdb_id": 14199,
      "original_title": "The Adventures of Sharkboy and Lavagirl",
      "original_language": "en",
      "overview": "Everyone always knew that Max had a wild imagination, but no one believed that his wildest creations -- a boy raised by watchful great white sharks and a girl with the force of a volcano -- were real. Now, these two pint-sized action masters will show Max that even an ordinary kid has what it takes to be extraordinary.",
      "genres": "['Adventure', 'Family', 'Science Fiction']",
      "popularity": 6.477862,
      "poster_path": "/wyXPANZMYYbKh8Ic8qFLqMkolyV.jpg",
      "production_company": "[{'name': 'Troublemaker Studios', 'id': 10807}]",
      "vote_average": 4.4,
      "vote_count": 278,
      "revenue": 69425966,
      "year": 2005,
      "adult": false,
      "budget": 50000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 92
  },
  {
      "id": 4155,
      "tmdb_id": 8272,
      "original_title": "The Savages",
      "original_language": "en",
      "overview": "A sister and brother face the realities of familial responsibility as they begin to care for their ailing father.",
      "genres": "['Drama']",
      "popularity": 4.546164,
      "poster_path": "/nY54gSmTOmSXlQpWDB7DWp4u8a7.jpg",
      "production_company": "[{'name': 'Fox Searchlight Pictures', 'id': 43}, {'name': 'Ad Hominem Enterprises', 'id': 2361}, {'name': 'This Is That Productions', 'id': 10059}, {'name': 'Lone Star Film Group', 'id': 23105}, {'name': 'Savage Productions', 'id': 67504}]",
      "vote_average": 6.8,
      "vote_count": 112,
      "revenue": 0,
      "year": 2007,
      "adult": false,
      "budget": 0,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 114
  },
  {
      "id": 4306,
      "tmdb_id": 10822,
      "original_title": "Savage Grace",
      "original_language": "en",
      "overview": "This examination of a famous scandal from the 1970s explores the relationship between Barbara Baekeland and her only son, Antony. Barbara, a lonely social climber unhappily married to the wealthy but remote plastics heir Brooks Baekeland, dotes on Antony, who is homosexual. As Barbara tries to \"cure\" Antony of his sexuality -- sometimes by seducing him herself -- the groundwork is laid for a murderous tragedy.",
      "genres": "['Drama']",
      "popularity": 5.225054,
      "poster_path": "/z83ExVvReRTMuwxRqatzUaHwIYR.jpg",
      "production_company": "[{'name': 'Celluloid Dreams', 'id': 860}, {'name': 'Killer Films', 'id': 1422}, {'name': 'John Wells Productions', 'id': 1512}, {'name': 'Montfort Producciones', 'id': 2207}]",
      "vote_average": 5.7,
      "vote_count": 60,
      "revenue": 0,
      "year": 2007,
      "adult": false,
      "budget": 4600000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 97
  },
  {
      "id": 4797,
      "tmdb_id": 11156,
      "original_title": "Coco avant Chanel",
      "original_language": "fr",
      "overview": "2009 biopic about the early life of Coco Chanel. Several years after leaving the orphanage, to which her father never returned for her, Gabrielle Chanel finds herself working in a provincial bar both. She's both a seamstress for the performers and a singer, earning the nickname Coco from the song she sings nightly with her sister. A liaison with Baron Balsan gives her an entree into French society and a chance to develop her gift for designing.",
      "genres": "['Drama', 'History']",
      "popularity": 6.119818,
      "poster_path": "/e786zNMrFfAc3LEqJgj0FYFKHyL.jpg",
      "production_company": "[{'name': 'France 2 Cinéma', 'id': 83}, {'name': 'Haut et Court', 'id': 726}, {'name': 'SCOPE Invest', 'id': 2250}, {'name': 'Ciné@', 'id': 2564}, {'name': 'Canal+', 'id': 5358}, {'name': 'Warner Bros.', 'id': 6194}, {'name': 'CinéCinéma', 'id': 6301}, {'",
      "vote_average": 6.7,
      "vote_count": 254,
      "revenue": 0,
      "year": 2009,
      "adult": false,
      "budget": 0,
      "spoken_languages": "[{'iso_639_1': 'fr', 'name': 'Français'}, {'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 110
  },
  {
      "id": 4877,
      "tmdb_id": 19995,
      "original_title": "Avatar",
      "original_language": "en",
      "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
      "genres": "['Action', 'Adventure', 'Fantasy', 'Science Fiction']",
      "popularity": 185.070892,
      "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
      "production_company": "[{'name': 'Ingenious Film Partners', 'id': 289}, {'name': 'Twentieth Century Fox Film Corporation', 'id': 306}, {'name': 'Dune Entertainment', 'id': 444}, {'name': 'Lightstorm Entertainment', 'id': 574}]",
      "vote_average": 7.2,
      "vote_count": 12114,
      "revenue": 2787965087,
      "year": 2009,
      "adult": false,
      "budget": 237000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}]",
      "status": "Released",
      "runtime": 162
  },
  {
      "id": 5881,
      "tmdb_id": 82525,
      "original_title": "Savages",
      "original_language": "en",
      "overview": "Pot growers Ben and Chon face off against the Mexican drug cartel who kidnapped their shared girlfriend.",
      "genres": "['Crime', 'Drama', 'Thriller']",
      "popularity": 13.248022,
      "poster_path": "/5hVMR5dG2f2EgLETewzwXcRbKpD.jpg",
      "production_company": "[{'name': 'Ixtlan', 'id': 4198}, {'name': 'Relativity Media', 'id': 7295}, {'name': 'Onda Entertainment', 'id': 11802}]",
      "vote_average": 6.2,
      "vote_count": 784,
      "revenue": 82966152,
      "year": 2012,
      "adult": false,
      "budget": 45000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 131
  },
  {
      "id": 5883,
      "tmdb_id": 11680,
      "original_title": "L'Avare",
      "original_language": "fr",
      "overview": "Based on Molière's play. The children of Harpagon, Cléante and his sister Elise, are each in love but they still haven't spoken to their father yet. Harpagon is a miser who wants to choose the right man and the right woman for his children. When Cléante, at last, tries to speak to Harpagon, the old man informs the family that he wants to marry Marianne, the young girl loved by Cléante. Unaware of his son's sorrow, Harpagon doesn't understand why Cléante has become so angry with him.",
      "genres": "['Comedy']",
      "popularity": 4.662353,
      "poster_path": "/mwL2uf15AxzGaLAh91ZUS04weoK.jpg",
      "production_company": "[{'name': 'Les Films Christian Fechner', 'id': 461}]",
      "vote_average": 6.5,
      "vote_count": 73,
      "revenue": 0,
      "year": 1980,
      "adult": false,
      "budget": 0,
      "spoken_languages": "[{'iso_639_1': 'fr', 'name': 'Français'}]",
      "status": "Released",
      "runtime": 125
  },
  {
      "id": 6418,
      "tmdb_id": 113148,
      "original_title": "Prince Avalanche",
      "original_language": "en",
      "overview": "Two highway road workers spend the summer of 1988 away from their city lives. The isolated landscape becomes a place of misadventure as the men find themselves at odds with each other and the women they left behind.",
      "genres": "['Comedy', 'Drama']",
      "popularity": 6.57698,
      "poster_path": "/nQpSyYxDCtBZ1v4Kc8GFEiEcfpe.jpg",
      "production_company": "[{'name': 'Muskat Filmed Properties', 'id': 10989}, {'name': 'Dogfish Pictures', 'id': 12650}]",
      "vote_average": 6.0,
      "vote_count": 111,
      "revenue": 0,
      "year": 2013,
      "adult": false,
      "budget": 725000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 94
  },
  {
      "id": 7966,
      "tmdb_id": 51917,
      "original_title": "Tutta la vita davanti",
      "original_language": "it",
      "overview": "The vicissitudes of a newly graduated girl in the universe of the precarious work. Marta is a well- educated girl; she is curious and silent one, which finds work in the call center of a company that sells a futuristic appliance. So she finds out a new fantastic world formed by young telephone operator and fanatic seller, corporate jingle, motivational dance, prize giving, ovation and penance. A bittersweet picture of modern society narrated through the eyes of a funny young philosopher",
      "genres": "['Romance', 'Drama', 'Comedy']",
      "popularity": 3.372144,
      "poster_path": "/kmoSWKB2pgnUyN1E9RP5ETU0q20.jpg",
      "production_company": "[{'name': 'Medusa Film', 'id': 6246}, {'name': 'Motorino Amaranto', 'id': 50915}]",
      "vote_average": 6.5,
      "vote_count": 65,
      "revenue": 4250000,
      "year": 2008,
      "adult": false,
      "budget": 5940000,
      "spoken_languages": "[{'iso_639_1': 'it', 'name': 'Italiano'}]",
      "status": "Released",
      "runtime": 117
  },
  {
      "id": 8012,
      "tmdb_id": 294562,
      "original_title": "Lavalantula",
      "original_language": "en",
      "overview": "Giant lava breathing tarantulas – Lavalantulas – erupt out of ancient volcanos in the Santa Monica Mountains, raining death and destruction upon Los Angeles. With the City of Angels on the verge of incineration, only a washed up ‘90s action hero actor stands in the way of this monstrous swarm of bloodthirsty creatures who burn their victims alive.",
      "genres": "['Horror', 'Science Fiction', 'Thriller']",
      "popularity": 6.901559,
      "poster_path": "/fOcUwBJ2eOekwqBtJZncnrshtos.jpg",
      "production_company": "[{'name': 'Syfy', 'id': 6677}, {'name': 'Cinetel Films', 'id': 10399}]",
      "vote_average": 5.4,
      "vote_count": 43,
      "revenue": 0,
      "year": 2015,
      "adult": false,
      "budget": 0,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 83
  },
  {
      "id": 8051,
      "tmdb_id": 286192,
      "original_title": "Lava",
      "original_language": "en",
      "overview": "The story follows the love story of two volcanoes, Uku and Lele. It features a song, \"Lava\", which is written by Murphy and performed by Kuana Torres Kahele and Napua Greig, who voice the two volcanoes.",
      "genres": "['Animation', 'Family']",
      "popularity": 5.761878,
      "poster_path": "/blZSkXNN4CzRBxdxXnz3YpUjnJp.jpg",
      "production_company": "[{'name': 'Pixar Animation Studios', 'id': 3}]",
      "vote_average": 7.4,
      "vote_count": 405,
      "revenue": 0,
      "year": 2015,
      "adult": false,
      "budget": 0,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 7
  },
  {
      "id": 8074,
      "tmdb_id": 216580,
      "original_title": "Savaged",
      "original_language": "en",
      "overview": "After thugs brutalize a deaf-mute woman, the spirit of an Apache warrior takes over her lifeless body and sets out on a bloodthirsty quest for revenge.",
      "genres": "['Action', 'Drama', 'Horror', 'Thriller']",
      "popularity": 4.960171,
      "poster_path": "/g0TOpspnq4zgg8oVwXr4Z9A0I5E.jpg",
      "production_company": "[{'name': 'Raven Banner Entertainment', 'id': 25884}, {'name': 'Green Dog Films', 'id': 25885}, {'name': 'Cart Before The Horse Productions', 'id': 40495}]",
      "vote_average": 5.7,
      "vote_count": 47,
      "revenue": 0,
      "year": 2014,
      "adult": false,
      "budget": 0,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 91
  },
  {
      "id": 8249,
      "tmdb_id": 50479,
      "original_title": "Avalon High",
      "original_language": "en",
      "overview": "Disney Channel's production of Julie Sherman Wolfe's screenplay adaptation of the popular novel Avalon High by Meg Cabot. Elaine \"Ellie\" Harrison has just moved from Minnesota to Annapolis, Maryland while her parents take a year long sabbatical to continue their medieval studies in nearby DC. Her new high school, Avalon High, seems like a typical high school with the stereotypical students: Lance the jock, Jennifer the cheerleader, Marco, the bad boy/desperado, and Will, the senior class president, quarterback, and all around good guy. But not everyone at Avalon High is who they appear to be, not even Ellie herself. Eventually, it becomes apparent that Avalon High is a situation where the ancient Arthurian legend is repeating itself. Will, Jennifer, Lance, Marco, and Mr. Morton all correspond to King Arthur, Queen Guinevere, Knight Lancelot, Mordred, and Merlin, respectively.",
      "genres": "['Drama', 'Family', 'Fantasy']",
      "popularity": 4.96893,
      "poster_path": "/BhLdh2lOywpXyE61tEJ9jaJfz9.jpg",
      "production_company": "[{'name': 'Disney Channel', 'id': 3213}]",
      "vote_average": 5.8,
      "vote_count": 146,
      "revenue": 0,
      "year": 2010,
      "adult": false,
      "budget": 0,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 60
  },
  {
      "id": 8628,
      "tmdb_id": 364433,
      "original_title": "Lo chiamavano Jeeg Robot",
      "original_language": "it",
      "overview": "Enzo Ceccotti comes into contact with a radioactive substance, then accidently discovers he has superpowers. A touchy, navel-gazing introvert, he’s sure his new capabilities will do wonders for his life of crime, but that all changes when he meets Alessia, who’s convinced he’s the hero from the famous Japanese comic strip, Steel Jeeg Robot.",
      "genres": "['Action', 'Drama', 'Comedy', 'Thriller', 'Science Fiction']",
      "popularity": 10.649494,
      "poster_path": "/aJy4FR57OhbvsoSChneHMDdfFu0.jpg",
      "production_company": "[{'name': 'Rai Cinema', 'id': 2683}, {'name': 'Goon Films', 'id': 74686}]",
      "vote_average": 7.5,
      "vote_count": 575,
      "revenue": 0,
      "year": 2015,
      "adult": false,
      "budget": 1900000,
      "spoken_languages": "[{'iso_639_1': 'it', 'name': 'Italiano'}]",
      "status": "Released",
      "runtime": 112
  },
  {
      "id": 8632,
      "tmdb_id": 323665,
      "original_title": "Ava's Possessions",
      "original_language": "en",
      "overview": "Ava is recovering from demonic possession. With no memory of the past month, she must attend a Spirit Possessions Anonymous support group to figure out what happened. Ava's life was hijacked by a demon, now it's time to get it back.",
      "genres": "['Mystery', 'Thriller', 'Horror', 'Science Fiction']",
      "popularity": 2.769526,
      "poster_path": "/tmTlL0U3NMQFjB1KGnWj2NuAE3g.jpg",
      "production_company": "[{'name': 'Traction Media', 'id': 2294}, {'name': 'Off Hollywood Pictures', 'id': 3768}, {'name': 'Ravenous Films', 'id': 60583}]",
      "vote_average": 6.1,
      "vote_count": 41,
      "revenue": 0,
      "year": 2015,
      "adult": false,
      "budget": 0,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 89
  },
  {
      "id": 8950,
      "tmdb_id": 376453,
      "original_title": "Operation Avalanche",
      "original_language": "en",
      "overview": "In 1967, four undercover CIA agents were sent to NASA posing as a documentary film crew. What they discovered led to one of the biggest conspiracies in American history.",
      "genres": "['Thriller']",
      "popularity": 2.847833,
      "poster_path": "/3ngw7s1fa0eJL19fJ6Jw0bTQg3n.jpg",
      "production_company": "[{'name': 'XYZ Films', 'id': 12142}, {'name': 'Resolute Films and Entertainment', 'id': 24195}, {'name': 'Zapruder Films', 'id': 72063}]",
      "vote_average": 6.5,
      "vote_count": 58,
      "revenue": 0,
      "year": 2016,
      "adult": false,
      "budget": 1000000,
      "spoken_languages": "[{'iso_639_1': 'en', 'name': 'English'}]",
      "status": "Released",
      "runtime": 94
  }
]

const HomeScreen = () => {
  // screen width
  const width = Dimensions.get("window").width;
  return (
    <SafeAreaView>
      <ScrollView scrollEventThrottle={16}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 400,
              marginBottom: 20,
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {topMovies.map((movie) => (
                <Image
                  key={movie.id}
                  style={{
                    width: width,
                    height: null,
                  }}
                  resizeMode="cover"
                  source={{
                    uri:
                      "http://image.tmdb.org/t/p/original/" + movie.poster_path,
                  }}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: "#fff",
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "800",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "#52b788",
              }}
            >
              CONTINUE{" "}
            </Text>{" "}
            <Text
              style={{
                color: "white",
              }}
            >
              WATCHING
            </Text>
          </Text>
          <View
            style={{
              height: 200,
              marginTop: 20,
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {dummyData.map((movie) => (
                <MovieCard
                  movie_id={movie.id}
                  poster_path={movie.poster_path}
                  key={movie.id}
                  original_title={movie.original_title}
                  overview={movie.overview}
                  genres={movie.genres}
                  popularity={movie.popularity}
                  year={movie.year}
                  status={movie.status}
                  runtime={movie.runtime}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        {/* WEEKLY TOP */}
        <TopMovies />
        {/* YOUR WATCHLIST */}
        <WatchingHistory />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
