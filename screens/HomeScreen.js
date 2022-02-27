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

const dummyData = [
  {
    id: 0,
    tmdb_id: 862,
    original_title: "Toy Story",
    original_language: "en",
    overview:
      "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    genres: "['Animation', 'Comedy', 'Family']",
    popularity: 21.946943,
    poster_path: "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    production_company: "[{'name': 'Pixar Animation Studios', 'id': 3}]",
    vote_average: 7.7,
    vote_count: 5415,
    revenue: 373554033,
    year: 1995,
    adult: false,
    budget: 30000000,
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
    status: "Released",
    runtime: 81,
  },
  {
    id: 950,
    tmdb_id: 11597,
    original_title: "Toys",
    original_language: "en",
    overview:
      "Leslie Zevo is a fun-loving inventor who must save his late father's toy factory from his evil uncle, Leland, a war-mongering general who rules the operation with an iron fist and builds weapons disguised as toys.",
    genres: "['Fantasy', 'Comedy', 'Science Fiction']",
    popularity: 5.923774,
    poster_path: "/l0YBVvOvOxoOkggTZ70tNGvGQo4.jpg",
    production_company:
      "[{'name': 'Twentieth Century Fox Film Corporation', 'id': 306}, {'name': 'Baltimore Pictures', 'id': 11407}]",
    vote_average: 5.0,
    vote_count: 173,
    revenue: 23278931,
    year: 1992,
    adult: false,
    budget: 0,
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
    status: "Released",
    runtime: 118,
  },
  {
    id: 1342,
    tmdb_id: 863,
    original_title: "Toy Story 2",
    original_language: "en",
    overview:
      "Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al's Toy Barn kidnaps Woody. Andy's toys mount a daring rescue mission, Buzz Lightyear meets his match and Woody has to decide where he and his heart truly belong.",
    genres: "['Animation', 'Comedy', 'Family']",
    popularity: 17.547693,
    poster_path: "/xVhEI1WCgNCCa5I86AqiwuZoog3.jpg",
    production_company: "[{'name': 'Pixar Animation Studios', 'id': 3}]",
    vote_average: 7.3,
    vote_count: 3914,
    revenue: 497366869,
    year: 1999,
    adult: false,
    budget: 90000000,
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
    status: "Released",
    runtime: 92,
  },
  {
    id: 2058,
    tmdb_id: 23805,
    original_title: "The Toy",
    original_language: "en",
    overview:
      "On one of his bratty son Eric's annual visits, the plutocrat U.S. Bates takes him to his department store and offers him anything in it as a gift. Eric chooses a black janitor who has made him laugh with his antics. At first the man suffers many indignities as Eric's \"toy\", but gradually teaches the lonely boy what it is like to have and to be a friend.",
    genres: "['Comedy', 'Family']",
    popularity: 6.269867,
    poster_path: "/yt7Z37Uo2zls64XikaYh8nCwTAv.jpg",
    production_company:
      "[{'name': 'Columbia Pictures', 'id': 5}, {'name': 'Delphi Films', 'id': 4267}, {'name': 'Rastar Films', 'id': 41539}]",
    vote_average: 5.7,
    vote_count: 64,
    revenue: 0,
    year: 1982,
    adult: false,
    budget: 0,
    spoken_languages:
      "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'de', 'name': 'Deutsch'}]",
    status: "Released",
    runtime: 102,
  },
  {
    id: 2365,
    tmdb_id: 10750,
    original_title: "Toy Soldiers",
    original_language: "en",
    overview:
      "After federal agents arrest a drug czar and put him on trial, the cartel leader's vicious son storms a prep school and takes its students hostage. They rebel against the armed intruders and try to take back their academy by any means necessary.",
    genres: "['Action', 'Adventure', 'Thriller']",
    popularity: 12.698468,
    poster_path: "/nL3ccvqU1Wq1j31feHWAydzpbr2.jpg",
    production_company:
      "[{'name': 'TriStar Pictures', 'id': 559}, {'name': 'Island World', 'id': 1595}]",
    vote_average: 6.2,
    vote_count: 94,
    revenue: 15073942,
    year: 1991,
    adult: false,
    budget: 0,
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
    status: "Released",
    runtime: 112,
  },
  {
    id: 5067,
    tmdb_id: 10193,
    original_title: "Toy Story 3",
    original_language: "en",
    overview:
      "Woody, Buzz, and the rest of Andy's toys haven't been played with in years. With Andy about to go to college, the gang find themselves accidentally left at a nefarious day care center. The toys must band together to escape and return home to Andy.",
    genres: "['Animation', 'Family', 'Comedy']",
    popularity: 16.96647,
    poster_path: "/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
    production_company:
      "[{'name': 'Walt Disney Pictures', 'id': 2}, {'name': 'Pixar Animation Studios', 'id': 3}]",
    vote_average: 7.6,
    vote_count: 4710,
    revenue: 1066969703,
    year: 2010,
    adult: false,
    budget: 200000000,
    spoken_languages:
      "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'es', 'name': 'Español'}]",
    status: "Released",
    runtime: 103,
  },
  {
    id: 5866,
    tmdb_id: 13927,
    original_title: "Tin Toy",
    original_language: "en",
    overview:
      "Babies are hardly monster-like, unless you're a toy. After escaping a drooling baby, Tinny realizes that he wants to be played with after all. But in the amount of time it takes him to discover this, the baby's attention moves on to other things only an infant could find interesting.",
    genres: "['Animation']",
    popularity: 6.058028,
    poster_path: "/yRjtvmRXgZoY8P9Ug28G9OITD9E.jpg",
    production_company: "[{'name': 'Pixar Animation Studios', 'id': 3}]",
    vote_average: 6.3,
    vote_count: 95,
    revenue: 0,
    year: 1988,
    adult: false,
    budget: 0,
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
    status: "Released",
    runtime: 5,
  },
  {
    id: 6528,
    tmdb_id: 213121,
    original_title: "Toy Story of Terror!",
    original_language: "en",
    overview:
      "What starts out as a fun road trip for the Toy Story gang takes an unexpected turn for the worse when the trip detours to a roadside motel. After one of the toys goes missing, the others find themselves caught up in a mysterious sequence of events that must be solved before they all suffer the same fate in this Toy Story of Terror.",
    genres: "['Animation', 'Comedy', 'Family']",
    popularity: 0.512025,
    poster_path: "/oPBEnNP4Fg4gv9c0KBhchmtoG4H.jpg",
    production_company:
      "[{'name': 'Walt Disney Pictures', 'id': 2}, {'name': 'Pixar Animation Studios', 'id': 3}]",
    vote_average: 7.3,
    vote_count: 246,
    revenue: 0,
    year: 2013,
    adult: false,
    budget: 0,
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
    status: "Released",
    runtime: 22,
  },
  {
    id: 7319,
    tmdb_id: 256835,
    original_title: "Toy Story That Time Forgot",
    original_language: "en",
    overview:
      "During a post-Christmas play date, the gang find themselves in uncharted territory when the coolest set of action figures ever turn out to be dangerously delusional. It's all up to Trixie, the triceratops, if the gang hopes to return to Bonnie's room in this Toy Story That Time Forgot.",
    genres: "['Animation', 'Family']",
    popularity: 8.609555,
    poster_path: "/pw1YgzcBw4GmwylrFlXMzLdELRo.jpg",
    production_company: "[{'name': 'Pixar Animation Studios', 'id': 3}]",
    vote_average: 6.8,
    vote_count: 249,
    revenue: 0,
    year: 2014,
    adult: false,
    budget: 0,
    spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
    status: "Released",
    runtime: 22,
  },
];

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
              {dummyData.map((movie) => (
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
