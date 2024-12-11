import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

// TODO: Import GQL and Hooks here
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_COLOR_BY_ID, GET_COLORS } from "../queries";

// TODO: Comment, not needed anyomore, bye ~
// const colorDataInitial = [
//   {
//     id: "1",
//     name: "turquoise",
//     year: 2012,
//     color: "#56ba1b",
//   },
//   {
//     id: "2",
//     name: "violet",
//     year: 2019,
//     color: "#ae0932",
//   },
//   {
//     id: "3",
//     name: "sky blue",
//     year: 2009,
//     color: "#7d15fb",
//   },
// ];

const ColorCard = ({ item }) => {
	// TODO: Consume hook here (useMutation)
	const [dispatch, _] = useMutation(DELETE_COLOR_BY_ID, {
		refetchQueries: [GET_COLORS],
	});

	const deleteButtonOnPressHandler = () => {
		console.log(`Tab - Colors - Delete Button Clicked: id ${item.id}`);
		dispatch({
			variables: {
				deleteColorId: Number(item.id),
			},
		});
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
	const { data, loading, error } = useQuery(GET_COLORS);

	if (loading) return <Text>Loading ...</Text>;
	if (error) return <Text>{error.message}</Text>;

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.textHeader}>List Colors</Text>
			</View>
			<View style={styles.container}>
				<FlatList
					data={data.colors}
					keyExtractor={(color) => color.id}
					renderItem={({ item }) => <ColorCard item={item} />}
				/>
			</View>
		</>
	);
};

export default ColorsScreen;
