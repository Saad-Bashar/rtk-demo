import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  FlatList,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
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
  const { data, isLoading, refetch, isFetching } = useGetAllTodosQuery();

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

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TodoView", { id: item.id });
        }}
        style={styles.card}
      >
        <View style={styles.cardContent}>
          <View style={styles.titleContainer}>
            <View style={item.completed ? styles.circleDone : styles.circle} />
            <Text style={item.completed ? styles.titleDone : styles.title}>
              {item.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => deleteTodo(item.id)}
            style={styles.deleteButton}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onRefresh={refetch}
        refreshing={isFetching}
      />
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
  card: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    marginVertical: 8,
    padding: 16,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 8,
  },
  circleDone: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "green",
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    color: "black",
  },
  titleDone: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "gray",
  },
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 14,
  },
});

export default TodoListScreen;
