import { View, Text } from "react-native";
import React from "react";
import { useGetAllTodosQuery } from "../services/todo-api";

export default function DummyScreen() {
  const { data: todos, isLoading, error, isSuccess } = useGetAllTodosQuery();
  console.log({ isLoading, todos });

  return (
    <View>
      <Text>DummyScreen</Text>
    </View>
  );
}
