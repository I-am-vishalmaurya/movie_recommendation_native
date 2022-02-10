import { View, Text, TouchableOpacity } from "react-native";
import { logout } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "../redux/actions";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions, Image } from "react-native";
const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  //get width of device
  const { width } = useWindowDimensions();
  useEffect(() => {
    dispatch(loadUser());
  });
  return (
    <SafeAreaView>
      <ScrollView scrollEventThrottle={16}>
        <View
          style={{
            flex: 1,
            paddingTop: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontWeight: "800" }}>
            <Text
              style={{
                color: "#52b788",
              }}
            >
              Watching{" "}
            </Text>{" "}
          </Text>
          <View>
            <View
              style={{
                flex: 1,
                width: width / 2,
                height: width / 2,
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                alignContent: "space-around",
                flexWrap: "wrap",
                paddingTop: 20,
              }}
            >
              <Image
                style={{
                  width: width / 2,
                  height: width / 2,
                  flex: 1,
                  resizeMode: "contain",
                }}
                source={{
                  uri: "http://image.tmdb.org/t/p/original/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
                }}
              />
              <Image
                style={{
                  flex: 1,
                  width: width / 2,
                  height: width / 2,
                  resizeMode: "contain",
                }}
                source={{
                  uri: "http://image.tmdb.org/t/p/original/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
