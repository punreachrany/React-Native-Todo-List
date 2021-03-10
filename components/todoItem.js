import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

// import CheckBox from "@react-native-community/checkbox";

// import Checkbox from "expo-checkbox";

const TodoItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.pressHandler(props.item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.itemText}>{props.item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,

    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    // width: "100%",
    marginTop: 16,
  },
  itemText: {
    marginLeft: 10,
  },
});
export default TodoItem;
