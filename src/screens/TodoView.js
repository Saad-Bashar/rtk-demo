import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TodoViewScreen = ({ navigation }) => {
  // Dummy data
  const todo = {
    id: "1",
    title: "Buy groceries",
    completed: false,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.status}>
        Status: {todo.completed ? "Completed" : "Not Completed"}
      </Text>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Edit"
          onPress={() => {
            navigation.navigate("TodoEdit", {
              id: todo.id,
              title: todo.title,
            });
          }}
        />
        <Button title="Mark as completed" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  status: {
    fontSize: 18,
    color: "gray",
  },
});

export default TodoViewScreen;
