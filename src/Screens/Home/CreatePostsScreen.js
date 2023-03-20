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

export default CreatePostsScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  return (
    <View style={styles.mainContainer}>
      <Camera style={styles.camera} ref={(ref) => setCamera(ref)}>
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
  takePhotoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderColor: "#ffffff",
    borderWidth: 1,
    height: 70,
    width: 70,
  },
});
