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
    navigation.navigate("Home");
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
                color: "white",
              }}
            >
              Welcome{" "}
            </Text>{" "}
            <Text
              style={{
                color: "#52b788",
              }}
            >
              pythonicnerd{" "}
            </Text>{" "}
          </Text>
          <View style={{
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: 20,

          }}>
            <Text style={{
              color: "white",
              fontSize: 20,
              fontWeight: "600",

            }}>
              Name: Vishal Maurya
            </Text>
            <Text style={{
              color: "white",
              fontSize: 20,
              fontWeight: "600",
              marginTop: 20,

            }}>
              Email: vishalmaurya3112@gmail.com
            </Text>


          </View>
          <View>
            <TouchableOpacity onPress={onLogout} style={{
              padding: 20,
              backgroundColor: "#52b788",
              borderRadius: 10,
              marginTop: 20,
              width: width - 40,
              alignItems: "center",
            }}>
              <Text style={{ color: "white", fontSize: 16 }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
