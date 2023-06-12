import React from "react";
import {
  Button,
  Text,
  View,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";

const TodoListScreen = ({ navigation }) => {
  const todos = [
    { id: "1", title: "Buy groceries" },
    { id: "2", title: "Read a book" },
    // Add more todos as needed
  ];

  const deleteTodo = id => {
    // Logic to delete todo
    console.log(`Deleting ${id}`);
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("TodoView", {
          id: item.id,
          title: item.title,
        });
      }}
      style={styles.item}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Button title="Delete" onPress={() => deleteTodo(item.id)} />
    </Pressable>
  );

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListFooterComponent={() => {
        return (
          <View style={{ marginTop: 20 }}>
            <Button
              title="Add a new todo"
              onPress={() => navigation.navigate("TodoAdd")}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
  },
});

export default TodoListScreen;
