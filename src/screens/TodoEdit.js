import React, { useState } from "react";
import { Button, TextInput, View, Alert } from "react-native";

const TodoEdit = () => {
  const [title, setTitle] = useState("");

  const onSubmit = () => {
    if (title === "") {
      Alert.alert("Error", "Please enter a title");
    } else {
      // Submit form (e.g., post to JSON server)
      // Remember to reset the form after successfully submitting
      console.log(`Submitted: ${title}`);
      setTitle("");
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Enter Todo Title"
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          padding: 10,
        }}
      />
      <Button title="Update" onPress={onSubmit} />
    </View>
  );
};

export default TodoEdit;
