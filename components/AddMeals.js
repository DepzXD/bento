import React, { useContext, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { MealPlanContext, ToggleMealContext } from '../context/mealPlan';
import Card from './Card';
import { typographyStyles } from './styles/Typography';

const meals = [
  {
    name: 'Raman',
    imageUrl:
      'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Sushi',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/5836771/pexels-photo-5836771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Rice Bowl',
  },
];

const AddMeals = ({}) => {
  const [mealPlan, setMealPlan] = useContext(MealPlanContext);
  const [toggleMeals, setToggleMeals] = useContext(ToggleMealContext);

  const handleAddMeal = useCallback(
    ({ name, imageUrl }, catagory) => {
      const tempList = [...mealPlan];
      const index = tempList.findIndex((obj) => obj.catagory === catagory);
      tempList[index] = { name, imageUrl, catagory, status: true };
      setMealPlan(tempList);
      setToggleMeals({ toggle: true, catagory: 'NaN' });
    },
    [mealPlan, setMealPlan, setToggleMeals],
  );

  return (
    <View style={{ display: `${toggleMeals.toggle ? 'none' : 'flex'}` }}>
      <Text style={typographyStyles.textSmall}>
        {toggleMeals.catagory} Recommendations
      </Text>
      <FlatList
        horizontal={true}
        style={styles.cards}
        data={meals}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleAddMeal(item, toggleMeals.catagory)}
          >
            <Card
              name={item.name}
              imageUrl={item.imageUrl}
              catagory={item.name}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'row',
  },
});

export default AddMeals;
