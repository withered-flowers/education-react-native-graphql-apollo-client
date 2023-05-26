import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";

const TodosAddScreen = ({ navigation }) => {
  const [newTodoName, setNewTodoName] = useState("");

  const addTodoButtonOnPressHandler = () => {
    console.log("Stack - TodosAdd - Add Todo Clicked");
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
