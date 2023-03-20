import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  Keyboard,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";

import { Camera } from "expo-camera";

import { StatusBar } from "expo-status-bar";

const backgroundImage = require("../../../assets/images/bg_new.png");

export default CreatePostsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Camera style={styles.camera}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={null}>
            {/* <Text style={styles.text}>Flip Camera</Text> */}
            <Fontisto name="camera" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  text: { color: "#FFFFFF" },
  button: {
    borderWidth: 1,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },

  camera: {
    height: 240,
    marginTop: 32,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
