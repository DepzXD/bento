import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Cards from '../components/Cards';
import WeeklyProgress from '../components/WeeklyProgress';
import { MealPlanContext } from '../context/mealPlan';

const todaysPlan = [
  {
    name: 'nato',
    imageUrl:
      'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    catagory: 'Launch',
    status: 'true',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/2871756/pexels-photo-2871756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    catagory: 'Breakfast',
    name: 'ramen',
    status: true,
  },
  {
    name: false,
    imageUrl:
      'https://images.pexels.com/photos/3297367/pexels-photo-3297367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    catagory: 'Diner',
    status: false,
  },
];

const Home = () => {
  const [mealPlan, setMealPlan] = useState(todaysPlan);
  return (
    <View style={styles.container}>
      <MealPlanContext.Provider value={[mealPlan, setMealPlan]}>
        <Cards />
        <WeeklyProgress />
      </MealPlanContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
export default Home;
