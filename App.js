import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverViewScreen.js";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CategoriesScreen} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <>
    //   <StatusBar style="light" />
    //   <View>
    //     <CategoriesScreen />
    //   </View>
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
