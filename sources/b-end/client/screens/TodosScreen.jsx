import { View, Text, TouchableOpacity, FlatList } from "react-native";

// TODO: Import the Hooks needed to use the GQL (useQuery)
import { useQuery, useLazyQuery } from "@apollo/client";
// TODO: Import the GQL here
import { GET_TODOS, GET_TODO_BY_ID } from "../queries";

import styles from "../styles";

// TODO: Comment this, bye bye ~
// const todosDataInitial = [
//   {
//     id: "1",
//     name: "In veniam non porro aliquam repellendus quisquam quia minus.",
//     completed: false,
//   },
//   {
//     id: "2",
//     name: "Molestias corporis est voluptates commodi.",
//     completed: true,
//   },
//   {
//     id: "3",
//     name: "Provident reiciendis porro nisi ea iusto nesciunt totam nesciunt.",
//     completed: false,
//   },
// ];

const TodosCard = ({ item }) => {
  const [dispatch, { data }] = useLazyQuery(GET_TODO_BY_ID);

  const buttonOnPressHandler = () => {
    console.log("Stack - TodosList - Card - Detail Clicked");
    dispatch({ variables: { todoId: Number(item.id) } });
  };

  return (
    <View style={styles.containerCard}>
      <Text style={styles.containerCardHeader}>Todos Name:</Text>
      <Text style={styles.containerCardContent}>{item.name}</Text>
      <Text style={styles.containerCardHeader}>Todos Completed?</Text>
      <Text style={styles.containerCardContent}>
        {item.completed.toString()}
      </Text>
      <Text>{JSON.stringify(data)}</Text>
      <TouchableOpacity style={styles.button} onPress={buttonOnPressHandler}>
        <Text style={styles.buttonText}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

const TodosScreen = ({ navigation }) => {
  // TODO: Use the hooks here
  // useQuery will return an Object with some props included:
  // - data: the returned data from query
  // - loading: boolean, state whether the data is still being loaded or not?
  // - error: Object, whether an error existed or not
  //    - error.message: String, error message
  const { data, loading, error } = useQuery(GET_TODOS);

  const addTodosButtonOnPressHandler = () => {
    console.log("Stack - TodosList - Add Todo Clicked");
    navigation.navigate("TodosAdd");
  };

  if (loading) return <Text>Loading ...</Text>;
  if (error) return <Text>{error.message}</Text>;

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
      <View style={styles.container}>
        <Text style={styles.textHeader}>List Todos</Text>
        <FlatList
          data={data.todos}
          keyExtractor={(todo) => todo.id}
          renderItem={({ item }) => <TodosCard item={item} />}
        ></FlatList>
      </View>
    </>
  );
};

export default TodosScreen;
