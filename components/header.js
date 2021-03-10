import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My todo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
export default Header;
