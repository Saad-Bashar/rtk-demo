import React from "react";
import {
  Button,
  Text,
  View,
  FlatList,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import { selectTheme } from "../slices/theme";
import { useGetAllTodosQuery } from "../services/todo-api";

const TodoListScreen = ({ navigation }) => {
  const {
    data: todos,
    isLoading,
    error,
    isSuccess,
    isFetching,
  } = useGetAllTodosQuery();

  if (isLoading || isFetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  const deleteTodo = id => {
    // Logic to delete todo
    console.log(`Deleting ${id}`);
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("TodoView", { id: item.id, title: item.title });
      }}
      style={styles.item}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Button title="Delete" onPress={() => deleteTodo(item.id)} />
    </Pressable>
  );

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Button title="Add Todo" onPress={() => navigation.navigate("TodoAdd")} />
      <Button
        title="Go to dummy"
        onPress={() => navigation.navigate("Dummy")}
      />
    </View>
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
