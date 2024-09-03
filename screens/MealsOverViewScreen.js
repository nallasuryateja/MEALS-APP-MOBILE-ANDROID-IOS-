import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItems";

function MealsOverviewScreen({ route }) {
  const navigation = useNavigation();
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function BackHandler() {
    navigation.navigate("Home");
  }

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={Styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
      <Button title="BACK" onPress={BackHandler} style={{ flex: 1 }} />
    </View>
  );
}

export default MealsOverviewScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});