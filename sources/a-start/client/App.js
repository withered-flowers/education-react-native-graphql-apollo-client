import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ColorsScreen from "./screens/ColorsScreen";
import TodosAddScreen from "./screens/TodosAddScreen";
import TodosScreen from "./screens/TodosScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TodosStackNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="TodosList"
				component={TodosScreen}
				options={{
					headerTitle: "Stack - Todos List",
				}}
			/>
			<Stack.Screen
				name="TodosAdd"
				component={TodosAddScreen}
				options={{
					headerTitle: "Stack - Todos Add",
				}}
			/>
		</Stack.Navigator>
	);
};

const MainNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "#e91e63",
			}}
		>
			<Tab.Screen
				name="TodosNavigation"
				component={TodosStackNavigation}
				options={{
					headerShown: false,
					headerTitle: "Tab - Todos",
					tabBarLabel: "Todos",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="checkbox-multiple-marked"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Colors"
				component={ColorsScreen}
				options={{
					headerTitle: "Tab - Colors",
					tabBarLabel: "Colors",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="format-color-fill"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<MainNavigation />
		</NavigationContainer>
	);
}
