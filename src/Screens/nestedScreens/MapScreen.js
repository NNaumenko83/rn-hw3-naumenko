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

import MapView, { Marker } from "react-native-maps";

import { StatusBar } from "expo-status-bar";

export default MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: "",
          longitude: "",
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{ latitude: "", longitude: "" }}
          title="travel photo"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
