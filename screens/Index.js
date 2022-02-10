import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import React from "react";
import MainBottomNavigation from "../NavigationBar/MainBottomNavigation";
import { useSelector, useStore } from "react-redux";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#191919",
  },
};
function Index() {
  const [token, setToken] = React.useState(null);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);

  // const bottomTab = createBottomTabNavigator();

  useEffect(() => {
    AsyncStorage.getItem("@token").then((value) => {
      setToken(value);
    });
  }, [isLoggedIn]);

  return (
    <>
      {token !== null ? (
        <MainBottomNavigation />
      ) : (
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
              component={Login}
            />
            <Stack.Screen
              name="Register"
              options={{
                headerShown: false,
              }}
              component={Register}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

export default Index;
