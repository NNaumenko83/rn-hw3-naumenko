import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  Keyboard,
} from "react-native";

import { useState, useEffect } from "react";

const backgroundImage = require("../../../assets/images/bg_new.png");

export default PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);

  console.log(route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.photo }}
              style={{ marginHorizontal: 20, height: 200 }}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "flex-end" },
  mainContainer: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
