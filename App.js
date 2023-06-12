import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoList from "./src/screens/TodoList";
import TodoAdd from "./src/screens/TodoAdd";
import TodoEdit from "./src/screens/TodoEdit";
import TodoViewScreen from "./src/screens/TodoView";
import { Provider } from "react-redux";
import { store } from "./src/store";

// Create the stack navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TodoList">
          <Stack.Screen name="TodoList" component={TodoList} />
          <Stack.Screen name="TodoAdd" component={TodoAdd} />
          <Stack.Screen name="TodoEdit" component={TodoEdit} />
          <Stack.Screen name="TodoView" component={TodoViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
