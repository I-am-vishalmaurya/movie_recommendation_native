import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { api_URL } from "../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const navigation = useNavigation();
  const updateSearch = (search) => {
    setSearch(search);
    handleSearch(search);
    setTimeout(() => {
      console.log(search);
      setLoading(false);
    }, 2000);
  };
  const dummyData = [
    {
      id: 570,
      tmdb_id: 639,
      original_title: "When Harry Met Sally...",
      original_language: "en",
      overview:
        "During their travels from Chicago to New York, Harry and Sally Will debate whether or not sex ruins a perfect relationship between a man and a woman. Eleven years and later, they're still no closer to finding the answer.",
      genres: "['Comedy', 'Romance', 'Drama']",
      popularity: 8.34322,
      poster_path: "/3wkbKeowUp1Zpkw1KkBqMWbt0P9.jpg",
      production_company:
        "[{'name': 'Castle Rock Entertainment', 'id': 97}, {'name': 'Nelson Entertainment', 'id': 365}]",
      vote_average: 7.3,
      vote_count: 974,
      revenue: 92823546,
      year: 1989,
      adult: false,
      budget: 16000000,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 96,
    },
    {
      id: 727,
      tmdb_id: 2639,
      original_title: "Deconstructing Harry",
      original_language: "en",
      overview:
        "This film tells the story of a successful writer called Harry Block, played by Allen himself, who draws inspiration from people he knows in real-life, and from events that happened to him, sometimes causing these people to become alienated from him as a result.",
      genres: "['Comedy', 'Drama']",
      popularity: 6.280515,
      poster_path: "/i7Z5DdznqANJUjqWISEFu9bw6J7.jpg",
      production_company: "[{'name': 'Fine Line Features', 'id': 8}]",
      vote_average: 7.3,
      vote_count: 188,
      revenue: 10686841,
      year: 1997,
      adult: false,
      budget: 20000000,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 96,
    },
    {
      id: 1435,
      tmdb_id: 11718,
      original_title: "Who's Harry Crumb?",
      original_language: "en",
      overview:
        "Harry Crumb is a bumbling and inept private investigator who is hired to solve the kidnapping of a young heiress which he's not expected to solve because his employer is the mastermind behind the kidnapping.",
      genres: "['Comedy', 'Crime', 'Mystery']",
      popularity: 7.102963,
      poster_path: "/6cLX9c12I6X1Fmg8y7fN3AFwDWF.jpg",
      production_company:
        "[{'name': 'TriStar Pictures', 'id': 559}, {'name': 'Frostbacks', 'id': 1175}, {'name': 'NBC Productions', 'id': 5253}, {'name': 'Arnon Milchan Productions', 'id': 25087}]",
      vote_average: 5.5,
      vote_count: 77,
      revenue: 0,
      year: 1989,
      adult: false,
      budget: 0,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 94,
    },
    {
      id: 1436,
      tmdb_id: 8989,
      original_title: "Harry and the Hendersons",
      original_language: "en",
      overview:
        'Returning from a hunting trip in the forest, the Henderson family\'s car hits an animal in the road. At first they fear it was a man, but when they examine the "body" they find it\'s a "bigfoot". They think it\'s dead so they decide to take it home (there could be some money in this). As you guessed, it isn\'t dead. Far from being the ferocious monster they fear "Harry" to be, he\'s a friendly giant.',
      genres: "['Comedy', 'Family', 'Fantasy']",
      popularity: 9.296024,
      poster_path: "/5ZNWhOEsuNHIQ1gbtwdTGK7srCr.jpg",
      production_company:
        "[{'name': 'Universal Pictures', 'id': 33}, {'name': 'Amblin Entertainment', 'id': 56}]",
      vote_average: 5.6,
      vote_count: 157,
      revenue: 49998613,
      year: 1987,
      adult: false,
      budget: 0,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 110,
    },
    {
      id: 1711,
      tmdb_id: 47943,
      original_title: "Harry, un ami qui vous veut du bien",
      original_language: "fr",
      overview:
        "Harry knew Michel in high school; they meet again by accident, Harry inserts himself in Michel's life... and things take a sinister turn.",
      genres: "['Comedy']",
      popularity: 2.042116,
      poster_path: "/u6OzWGLlzGXDJJGGWbb6AWKxmoj.jpg",
      production_company:
        "[{'name': 'Diaphana Films', 'id': 744}, {'name': 'M6 Films', 'id': 1115}, {'name': 'Canal+', 'id': 5358}, {'name': 'CNC', 'id': 6962}, {'name': 'La Sofica Sofinergie 5', 'id': 24475}, {'name': 'MG Films', 'id': 24476}]",
      vote_average: 6.7,
      vote_count: 47,
      revenue: 3818452,
      year: 2000,
      adult: false,
      budget: 0,
      spoken_languages: "[{'iso_639_1': 'fr', 'name': 'Français'}]",
      status: "Released",
      runtime: 117,
    },
    {
      id: 2049,
      tmdb_id: 671,
      original_title: "Harry Potter and the Philosopher's Stone",
      original_language: "en",
      overview:
        "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
      genres: "['Adventure', 'Fantasy', 'Family']",
      popularity: 38.187238,
      poster_path: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      production_company:
        "[{'name': '1492 Pictures', 'id': 436}, {'name': 'Warner Bros.', 'id': 6194}, {'name': 'Heyday Films', 'id': 7364}]",
      vote_average: 7.5,
      vote_count: 7188,
      revenue: 976475550,
      year: 2001,
      adult: false,
      budget: 125000000,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 152,
    },
    {
      id: 2359,
      tmdb_id: 672,
      original_title: "Harry Potter and the Chamber of Secrets",
      original_language: "en",
      overview:
        "Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.",
      genres: "['Adventure', 'Fantasy', 'Family']",
      popularity: 29.741452,
      poster_path: "/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
      production_company:
        "[{'name': '1492 Pictures', 'id': 436}, {'name': 'Heyday films', 'id': 437}, {'name': 'Warner Bros.', 'id': 6194}]",
      vote_average: 7.4,
      vote_count: 5966,
      revenue: 876688482,
      year: 2002,
      adult: false,
      budget: 100000000,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 161,
    },
    {
      id: 2535,
      tmdb_id: 10152,
      original_title: "Dumb and Dumberer: When Harry Met Lloyd",
      original_language: "en",
      overview:
        "This wacky prequel to the 1994 blockbuster goes back to the lame-brained Harry and Lloyd's days as classmates at a Rhode Island high school, where the unprincipled principal puts the pair in remedial courses as part of a scheme to fleece the school.",
      genres: "['Comedy']",
      popularity: 9.280038,
      poster_path: "/cSe9Kg3OzQskQbBtjaUPAaqca5n.jpg",
      production_company: "[{'name': 'New Line Cinema', 'id': 12}]",
      vote_average: 4.1,
      vote_count: 211,
      revenue: 39267515,
      year: 2003,
      adult: false,
      budget: 19000000,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 85,
    },
    {
      id: 2912,
      tmdb_id: 673,
      original_title: "Harry Potter and the Prisoner of Azkaban",
      original_language: "en",
      overview:
        "Harry, Ron and Hermione return to Hogwarts for another magic-filled year. Harry comes face to face with danger yet again, this time in the form of escaped convict, Sirius Black – and turns to sympathetic Professor Lupin for help.",
      genres: "['Adventure', 'Fantasy', 'Family']",
      popularity: 28.460276,
      poster_path: "/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
      production_company:
        "[{'name': '1492 Pictures', 'id': 436}, {'name': 'Heyday films', 'id': 437}, {'name': 'Warner Bros.', 'id': 6194}]",
      vote_average: 7.7,
      vote_count: 6037,
      revenue: 789804554,
      year: 2004,
      adult: false,
      budget: 130000000,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 141,
    },
    {
      id: 3512,
      tmdb_id: 674,
      original_title: "Harry Potter and the Goblet of Fire",
      original_language: "en",
      overview:
        "Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure – but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for.",
      genres: "['Adventure', 'Fantasy', 'Family']",
      popularity: 24.903058,
      poster_path: "/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
      production_company:
        "[{'name': 'Patalex IV Productions Limited', 'id': 462}, {'name': 'Warner Bros.', 'id': 6194}, {'name': 'Heyday Films', 'id': 7364}]",
      vote_average: 7.5,
      vote_count: 5758,
      revenue: 895921036,
      year: 2005,
      adult: false,
      budget: 150000000,
      spoken_languages:
        "[{'iso_639_1': 'en', 'name': 'English'}, {'iso_639_1': 'fr', 'name': 'Français'}]",
      status: "Released",
      runtime: 157,
    },
    {
      id: 4017,
      tmdb_id: 675,
      original_title: "Harry Potter and the Order of the Phoenix",
      original_language: "en",
      overview:
        "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students – dubbed 'Dumbledore's Army' – to defend themselves against the dark arts.",
      genres: "['Adventure', 'Fantasy', 'Family', 'Mystery']",
      popularity: 21.3643,
      poster_path: "/tRoHysNFsXC2r0JiBL6iNHELut7.jpg",
      production_company:
        "[{'name': 'Warner Bros.', 'id': 6194}, {'name': 'Heyday Films', 'id': 7364}]",
      vote_average: 7.4,
      vote_count: 5633,
      revenue: 938212738,
      year: 2007,
      adult: false,
      budget: 150000000,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 138,
    },
    {
      id: 4697,
      tmdb_id: 767,
      original_title: "Harry Potter and the Half-Blood Prince",
      original_language: "en",
      overview:
        "As Harry begins his sixth year at Hogwarts, he discovers an old book marked as 'Property of the Half-Blood Prince', and begins to learn more about Lord Voldemort's dark past.",
      genres: "['Adventure', 'Fantasy', 'Family']",
      popularity: 19.083723,
      poster_path: "/o2j49x3HYJC2VH689rYxmswtSgS.jpg",
      production_company:
        "[{'name': 'Warner Bros.', 'id': 6194}, {'name': 'Heyday Films', 'id': 7364}]",
      vote_average: 7.4,
      vote_count: 5435,
      revenue: 933959197,
      year: 2009,
      adult: false,
      budget: 250000000,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 153,
    },
    {
      id: 4972,
      tmdb_id: 25941,
      original_title: "Harry Brown",
      original_language: "en",
      overview:
        "An elderly ex-serviceman and widower looks to avenge his best friend's murder by doling out his own form of justice.",
      genres: "['Thriller', 'Crime', 'Drama', 'Action']",
      popularity: 7.478206,
      poster_path: "/zthprdjuK7vN4ABBGQXo8RF7qYB.jpg",
      production_company:
        "[{'name': 'HanWay Films', 'id': 2395}, {'name': 'UK Film Council', 'id': 2452}, {'name': 'Marv Films', 'id': 5374}]",
      vote_average: 6.7,
      vote_count: 351,
      revenue: 10329747,
      year: 2009,
      adult: false,
      budget: 7300000,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 103,
    },
    {
      id: 5224,
      tmdb_id: 12444,
      original_title: "Harry Potter and the Deathly Hallows: Part 1",
      original_language: "en",
      overview:
        "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
      genres: "['Adventure', 'Fantasy', 'Family']",
      popularity: 23.300362,
      poster_path: "/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
      production_company:
        "[{'name': 'Warner Bros.', 'id': 6194}, {'name': 'Heyday Films', 'id': 7364}]",
      vote_average: 7.5,
      vote_count: 5708,
      revenue: 954305868,
      year: 2010,
      adult: false,
      budget: 250000000,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 146,
    },
    {
      id: 5449,
      tmdb_id: 12445,
      original_title: "Harry Potter and the Deathly Hallows: Part 2",
      original_language: "en",
      overview:
        "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
      genres: "['Family', 'Fantasy', 'Adventure']",
      popularity: 24.990737,
      poster_path: "/da22ZBmrDOXOCDRvr8Gic8ldhv4.jpg",
      production_company:
        "[{'name': 'Warner Bros.', 'id': 6194}, {'name': 'Heyday Films', 'id': 7364}]",
      vote_average: 7.9,
      vote_count: 6141,
      revenue: 1342000000,
      year: 2011,
      adult: false,
      budget: 125000000,
      spoken_languages: "[{'iso_639_1': 'en', 'name': 'English'}]",
      status: "Released",
      runtime: 130,
    },
  ];
  const handleSearch = async (search) => {
    setLoading(true);
    const token = await AsyncStorage.getItem("@token");
    console.log(token);
    // wait to stop typing
    setTimeout(() => {
      onSearch(search, token);
    }, 1000);
  };

  const onSearch = (search, token) => {
    let config = {
      method: "get",
      url: `${api_URL.API_URI}/movies/search_movies/${search}`,
      headers: {
        Authorization: `${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        setSearchResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <SearchBar
        placeholder="Search..."
        onChangeText={updateSearch}
        value={search}
        inputStyle={{
          color: "white",
        }}
        showLoading={loading}
      />

      <View>
        <FlatList
          data={searchResult}
          renderItem={({ item }) => (
            (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MovieDetail", {
                    movieDetails: item,
                  });
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: 5,
                    padding: 5,
                    backgroundColor: "#293241",
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "white",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      padding: 10,
                    }}
                  >
                    {item.original_title.substring(0, 30)}
                  </Text>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </TouchableOpacity>
            )
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
