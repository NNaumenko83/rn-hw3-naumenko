// import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import LoginScreen from "./src/Screens/auth/LoginScreen/LoginScreen";
import RegistrationScreen from "./src/Screens/auth/RegistrationScreen/RegistrationScreen";
import Home from "./src/Screens/Home/Home";
import MapScreen from "./src/Screens/MapScreen/MapScreen";
import PostsScreen from "./src/Screens/PostsScreen/PostsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen/ProfileScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen/CreatePostsScreen";
import CommentsScreen from "./src/Screens/CommentsScreen/CommentsScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

// const backgroundImage = require("./assets/images/bg_new.png");

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Inter-VariableFont": require("./assets/fonts/Inter-VariableFont.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//   },
//   image: {
//     flex: 1,
//     justifyContent: "flex-end",
//     width: "100%",
//   },
// });
