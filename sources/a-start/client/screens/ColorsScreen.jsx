import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles";

const colorDataInitial = [
  {
    id: "1",
    name: "turquoise",
    year: 2012,
    color: "#56ba1b",
  },
  {
    id: "2",
    name: "violet",
    year: 2019,
    color: "#ae0932",
  },
  {
    id: "3",
    name: "sky blue",
    year: 2009,
    color: "#7d15fb",
  },
];

const ColorCard = ({ item }) => {
  const deleteButtonOnPressHandler = () => {
    console.log(`Tab - Colors - Delete Button Clicked: id ${item.id}`);
  };

  return (
    <View style={styles.containerCard}>
      <Text style={styles.containerCardContent}>{item.name}</Text>
      <Text style={styles.containerCardContent}>{item.year}</Text>
      <Text style={styles.containerCardContent}>{item.color}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={deleteButtonOnPressHandler}
      >
        <Text style={styles.buttonText}>Delete Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const ColorsScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textHeader}>List Colors</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={colorDataInitial}
          keyExtractor={(color) => color.id}
          renderItem={ColorCard}
        ></FlatList>
      </View>
    </>
  );
};

export default ColorsScreen;
