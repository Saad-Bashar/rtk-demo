import React, { useState } from "react";
import { Button, TextInput, View, Alert } from "react-native";
import { todoApi, useUpdateTodoMutation } from "../services/todo-api";
import { useDispatch } from "react-redux";

const TodoEdit = ({ route }) => {
  const [title, setTitle] = useState(route.params.title);
  const id = route.params.id;
  const [updateTodo, { data, isLoading: isUpdating }] = useUpdateTodoMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (title === "") {
      Alert.alert("Error", "Please enter a title");
    } else {
      // Submit form (e.g., post to JSON server)
      // Remember to reset the form after successfully submitting
      updateTodo({
        id,
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        defaultValue={title}
        onChangeText={text => setTitle(text)}
        placeholder="Enter Todo Title"
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
        }}
      />
      <Button title="Edit Todo" onPress={onSubmit} />
    </View>
  );
};

export default TodoEdit;
