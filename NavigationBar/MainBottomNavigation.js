import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
const BottomTab = createBottomTabNavigator();

export default function BottomNavigation() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#191919",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <BottomTab.Navigator
        screenOptions={{
          tabBarOptions: {
            activeTintColor: "#ffffff",
            inactiveTintColor: "#ffffff",
          },

          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#14213d",

            // justifyContent: "space-around",
            // alignItems: "center",
            opacity: 0.8,
            position: "absolute",
            bottom: 35,
            marginHorizontal: 30,
            // Min Height of TabBar
            height: 50,
            borderRadius: 10,
            // Shadow
            shadowColor: "#000",
            shadowOffset: {
              width: 10,
              height: 10,
            },
            shadowOpacity: 0.05,
          },
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.bottomNavMenu}>
                <FontAwesome5
                  name="home"
                  size={15}
                  color={focused ? "#fca311" : "#ffffff"}
                  // align center
                  alignItems="center"
                />
              </View>
            ),
            headerShown: false,
          }}
        ></BottomTab.Screen>
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.bottomNavMenu}>
                <FontAwesome5
                  name="user-alt"
                  size={15}
                  color={focused ? "#fca311" : "#ffffff"}
                  // align center
                  alignItems="center"
                />
              </View>
            ),
            headerShown: false,
          }}
        ></BottomTab.Screen>
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.bottomNavMenu}>
                <FontAwesome5
                  name="search"
                  size={15}
                  color={focused ? "#fca311" : "#ffffff"}
                  // align center
                  alignItems="center"
                />
              </View>
            ),
            headerShown: false,
          }}
        ></BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavMenu: {
    position: "absolute",
    top: "80%",
  },
});
