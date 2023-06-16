import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import {
  todoApi,
  useGetTodoByIdQuery,
  useUpdateTodoMutation,
} from "../services/todo-api";
import { useDispatch } from "react-redux";

const TodoViewScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const { data: todo, isLoading, isFetching } = useGetTodoByIdQuery(id);
  const [updateTodo, { data, isLoading: isUpdating }] = useUpdateTodoMutation();
  const dispatch = useDispatch();

  console.log({ todo });

  if (isLoading || isUpdating || isFetching) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.status}>
        Status: {todo.completed ? "Completed" : "Not Completed"}
      </Text>
      <Button
        title="Edit"
        onPress={() =>
          navigation.navigate("TodoEdit", { id: todo.id, title: todo.title })
        }
      />
      <Button
        title={todo.completed ? "Mark as Not Completed" : "Mark as Completed"}
        onPress={() => {
          updateTodo({
            id: todo.id,
            title: todo.title,
            completed: !todo.completed,
          }).then(res => {
            console.log({ res });
            // dispatch(todoApi.util.invalidateTags([{ type: "Todos", id: id }])); // Invalidate cache
          });
        }}
      />
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
