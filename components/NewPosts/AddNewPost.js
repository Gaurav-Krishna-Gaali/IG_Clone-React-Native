import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const Header = () => (
  <View style={styles.HeaderContainer}>
    <TouchableOpacity>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
        }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headertext}>NEW POST</Text>
    <Text></Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  headertext: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 25,
  },
});

export default AddNewPost;
