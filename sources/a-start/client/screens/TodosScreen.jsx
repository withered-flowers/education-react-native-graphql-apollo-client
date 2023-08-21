import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "../styles";

const todosDataInitial = [
  {
    id: "1",
    name: "In veniam non porro aliquam repellendus quisquam quia minus.",
    completed: false,
  },
  {
    id: "2",
    name: "Molestias corporis est voluptates commodi.",
    completed: true,
  },
  {
    id: "3",
    name: "Provident reiciendis porro nisi ea iusto nesciunt totam nesciunt.",
    completed: false,
  },
];

const TodosCard = ({ item }) => {
  return (
    <View style={styles.containerCard}>
      <Text style={styles.containerCardHeader}>Todos Name:</Text>
      <Text style={styles.containerCardContent}>{item.name}</Text>
      <Text style={styles.containerCardHeader}>Todos Completed?</Text>
      <Text style={styles.containerCardContent}>
        {item.completed.toString()}
      </Text>
      <TouchableOpacity style={styles.button} onPress={buttonOnPressHandler}>
        <Text style={styles.buttonText}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

const TodosScreen = ({ navigation }) => {
  const addTodosButtonOnPressHandler = () => {
    console.log("Stack - TodosList - Add Todo Clicked");
    navigation.navigate("TodosAdd");
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={addTodosButtonOnPressHandler}
        >
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerFlatList}>
        <Text style={styles.textHeader}>List Todos</Text>
        <FlatList
          data={todosDataInitial}
          horizontal={false}
          keyExtractor={(todo) => todo.id}
          numColumns={2}
          renderItem={TodosCard}
          style={styles.flatList}
        ></FlatList>
      </View>
    </>
  );
};

export default TodosScreen;
