import React, { useState, useContext, useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';
import AddMeals from './AddMeals';
import { MealPlanContext, ToggleMealContext } from '../context/mealPlan';

const Cards = () => {
  const [toggleMeals, setToggleMeals] = useState({
    toggle: true,
    catagory: 'NaN',
  });

  const [mealPlan, setMealPlan] = useContext(MealPlanContext);

  const handleSelectMeals = useCallback(
    (index) => {
      const tempList = [...mealPlan];
      tempList[index].status = 'Selected';
      setMealPlan(tempList);
    },
    [mealPlan, setMealPlan],
  );

  const handleDeselactMeals = useCallback(
    (name, index) => {
      const tempList = [...mealPlan];
      if (name !== false) {
        tempList[index].status = true;
      } else {
        tempList[index].status = false;
      }
      setMealPlan(tempList);
    },
    [mealPlan, setMealPlan],
  );
  return (
    <>
      <View style={{ marginBottom: 20 }}>
        <ToggleMealContext.Provider value={[toggleMeals, setToggleMeals]}>
          <Text style={styles.heading}>Today's Meal</Text>
          <FlatList
            horizontal={true}
            style={styles.cards}
            data={mealPlan}
            keyExtractor={(item) => item.catagory}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  if (
                    toggleMeals.toggle === true &&
                    toggleMeals.catagory === 'NaN'
                  ) {
                    setToggleMeals({ toggle: false, catagory: item.catagory });
                    handleSelectMeals(index);
                  }
                  if (
                    toggleMeals.toggle === false &&
                    toggleMeals.catagory === item.catagory
                  ) {
                    setToggleMeals({ toggle: true, catagory: 'NaN' });
                    handleDeselactMeals(item.name, index);
                  }
                }}
                style={{
                  order: `${toggleMeals.catagory === item.catagory && 0}`,
                }}
              >
                <Card
                  name={item.name}
                  imageUrl={item.imageUrl}
                  catagory={item.catagory}
                  status={item.status}
                />
              </TouchableOpacity>
            )}
          />
          <AddMeals style={styles.addMeals} />
        </ToggleMealContext.Provider>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginBottom: 8,
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 'bold',
  },
  cards: {
    flexDirection: 'row',
  },
});

export default Cards;
