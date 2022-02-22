import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import NestedScreen from "./screens/NestedScreen";

const Stack = createNativeStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
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
      />
      <Stack.Screen
        name="MovieDetail"
        component={NestedScreen}
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
    </Stack.Navigator>
  );
};

export { HomeScreenNavigator };
