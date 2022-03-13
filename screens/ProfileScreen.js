import { View, Text, TouchableOpacity } from "react-native";
import { logout } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { auth_URL } from "../config/env";
import { useState } from "react";
const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    navigation.navigate("Home");
  };

  const getUserDetails = async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      const res = await axios.get(`${auth_URL.AUTH_URI}/users/me/`, config);
      if (res.status === 200) {
        setUserData(res.data);
      }
    } catch (e) {
      console.log(e.response);
      alert("Something went wrong!")
      AsyncStorage.removeItem("@token");
    }
  }
  const { width } = useWindowDimensions();
  
  useEffect(() => {
    getUserDetails();
  }, [onLogout]);
  


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
              {userData.username}{" "}
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
              Name: {userData.first_name} {userData.last_name}
            </Text>
            <Text style={{
              color: "white",
              fontSize: 20,
              fontWeight: "600",
              marginTop: 20,

            }}>
              Email: {userData.email}
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
