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
  Image,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";

import { Camera, CameraType } from "expo-camera";

export default CreatePostsScreen = ({ navigation }) => {
  // const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const cameraStatus = await Camera.requestCameraPermissionsAsync();
  //     setHasCameraPermission(cameraStatus.status === "granted");
  //   })();
  // }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    navigation.navigate("Posts", { photo });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          type={CameraType.back}
          ref={(ref) => setCamera(ref)}
        >
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{ height: 200, width: 200 }}
              />
            </View>
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
              {/* <Text style={styles.text}>Flip Camera</Text> */}
              <Fontisto name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonSend}
        onPress={sendPhoto}
      >
        <Text style={styles.btnTitle}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  cameraContainer: {
    borderRadius: 10,
    backgroundColor: "blue",
    height: 240,
    marginTop: 32,
    marginHorizontal: 16,
    overflow: "hidden",
  },

  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSend: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginHorizontal: 16,
    marginTop: 43,
    marginBottom: 20,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
  },
  btnTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#FFFFFF",
  },

  camera: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,

    height: 90,
    width: 90,

    borderColor: "yellow",
    borderWidth: 2,

    borderRadius: 5,
  },
});
