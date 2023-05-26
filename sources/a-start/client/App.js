import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//--- File: pages/TodosScreen.jsx
const TodosScreen = ({ navigation }) => {
  const addTodosButtonOnPressHandler = () => {
    navigation.navigate("TodosAdd");
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={addTodosButtonOnPressHandler}
        >
          <Text style={styles.buttonText}>Add Todos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.textHeader}>List Todos</Text>
        <FlatList></FlatList>
      </View>
    </>
  );
};
//--- End Of File: pages/TodosScreen.jsx

//--- File: pages/TodosAddScreen.jsx
const TodosAddScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Todos Add</Text>
      </View>
    </>
  );
};
//--- End Of File: pages/TodosAddScreen.jsx

//--- File: pages/ColorsScreen.jsx
const ColorsScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textHeader}>List Colors</Text>
      </View>
      <View style={styles.container}>
        <FlatList></FlatList>
      </View>
    </>
  );
};
//--- End Of File: pages/ColorsScreen.jsx

const TodosStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TodosList"
        component={TodosScreen}
        options={{
          headerTitle: "Stack - Todos List",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="TodosAdd"
        component={TodosAddScreen}
        options={{
          headerTitle: "Stack - Todos Add",
        }}
      ></Stack.Screen>
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
      ></Tab.Screen>
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
      ></Tab.Screen>
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

const styles = StyleSheet.create({
  container: {
    padding: 16.0,
  },
  textHeader: {
    fontSize: 24.0,
  },
  button: {
    backgroundColor: "#e91e63",
    paddingHorizontal: 12.0,
    paddingVertical: 8.0,
    borderRadius: 16.0,
    width: 128.0,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
