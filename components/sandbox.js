import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Sandbox = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "#333",
  },
  boxOne: {
    flex: 3,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 30,
  },
  boxFour: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 40,
  },
});
export default Sandbox;
