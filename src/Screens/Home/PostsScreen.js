import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  Keyboard,
} from "react-native";

import { StatusBar } from "expo-status-bar";

const backgroundImage = require("../../../assets/images/bg_new.png");

export default PostsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>PostsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "flex-end" },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});