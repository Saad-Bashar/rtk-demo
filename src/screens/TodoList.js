import React, { useState } from "react";
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
import {
  useDeleteTodoMutation,
  useGetAllTodosQuery,
} from "../services/todo-api";
import { SafeAreaView } from "react-native-safe-area-context";
import useInfiniteScroll from "./useInifinteScroll";

const TodoListScreen = ({ navigation }) => {
  const { data, isLoading } = useGetAllTodosQuery();

  const [deleteItem, { isLoading: isDeleting }] = useDeleteTodoMutation();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  const deleteTodo = id => {
    // Logic to delete todo
    console.log(`Deleting ${id}`);
    deleteItem(id);
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("TodoView", { id: item.id, title: item.title });
      }}
      style={styles.item}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.completed ? "DONE" : "NOT DONE"}</Text>
      </View>

      <Button title="Delete" onPress={() => deleteTodo(item.id)} />
    </Pressable>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={{ paddingTop: 200 }}></View>
      <Button title="Add Todo" onPress={() => navigation.navigate("TodoAdd")} />
    </SafeAreaView>
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
