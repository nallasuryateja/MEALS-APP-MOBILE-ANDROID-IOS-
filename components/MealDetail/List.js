import { View, Text, StyleSheet, Pressable } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <Pressable
      key={dataPoint}
      style={styles.listItem}
      android_ripple={{ color: "gray" }}
    >
      <Text style={styles.itemText}>{dataPoint}</Text>
    </Pressable>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 4,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
