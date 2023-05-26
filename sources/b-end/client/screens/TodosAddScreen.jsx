import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";

// TODO: import Hooks needed
import { useMutation } from "@apollo/client";
// TODO: import GQL needed
import { ADD_TODOS, GET_TODOS } from "../queries";

const TodosAddScreen = ({ navigation }) => {
  const [newTodoName, setNewTodoName] = useState("");
  // TODO: use the hooks here
  // useMutation return tuple
  const [dispatch, _] = useMutation(ADD_TODOS, {
    refetchQueries: [GET_TODOS],
  });

  const addTodoButtonOnPressHandler = () => {
    console.log("Stack - TodosAdd - Add Todo Clicked");

    dispatch({
      variables: {
        name: newTodoName,
      },
    });

    navigation.navigate("TodosList");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Todos Add</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textInputLabel}>Todo Name?</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNewTodoName}
          value={newTodoName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={addTodoButtonOnPressHandler}
        >
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TodosAddScreen;
