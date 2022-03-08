import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MealPlanContext } from '../context/mealPlan';
import WeeklyProgress from '../components/WeeklyProgress';
import Cards from '../components/Cards';

const todaysPlan = [
  {
    name: false,
    catagory: 'Launch',
    status: false,
  },
  {
    name: false,
    catagory: 'Breakfast',
    status: false,
  },
  {
    name: false,
    catagory: 'Diner',
    status: false,
  },
];

const Header = ({ navigation, user = 'User' }) => {
  return (
    <View style={styles.headerStyles}>
      <View>
        <Text style={styles.heading}>Hi {user}</Text>
        <Text style={styles.tagLine}>Welcome back!</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={{ alignSelf: 'center', justifyContent: 'center' }}
      >
        <Image
          style={styles.profile}
          source={require('../assets/defaultProfile.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

const Home = ({ navigation }) => {
  const [mealPlan, setMealPlan] = useState(todaysPlan);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <MealPlanContext.Provider value={[mealPlan, setMealPlan]}>
        <Cards />
        <WeeklyProgress />
      </MealPlanContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#27323A',
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
  headerStyles: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  heading: {
    fontSize: 34,
    letterSpacing: 0.25,
    color: '#fff',
  },
  tagLine: {
    fontSize: 16,
    letterSpacing: 0.5,
    color: '#C4C4C4',
  },
  profile: {
    borderRadius: 80,
    borderWidth: 3.3,
    borderColor: '#435055',
    height: 70,
    width: 70,
  },
});
export default Home;
