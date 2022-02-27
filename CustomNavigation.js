import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import MovieDetailStackScreen from "./screens/NestedScreen";
import { Button } from "react-native-paper";

const Stack = createNativeStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <>
    <Stack.Navigator>
      <Stack.Screen
        name="Home2"
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
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailStackScreen}
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
          headerShown: true,
        }}
      />
    </Stack.Navigator>
   
  </>
  );
};

export const SearchScreenNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Search2"
      component={SearchScreen}
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
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetailStackScreen}
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
        headerShown: true,
      }}
    />
  </Stack.Navigator>
  )
}

export { HomeScreenNavigator };
