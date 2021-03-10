import { StyleSheet, Text, TouchableOpacity } from "react-native";

import React from "react";

const TodoItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.pressHandler(props.item.key)}>
      <Text style={styles.item}>{props.item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
export default TodoItem;
