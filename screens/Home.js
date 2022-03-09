import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { typographyStyles } from '../components/styles/Typography';
import { darkScheme } from '../components/styles/Colors';
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
        <Text style={typographyStyles.heading1}>Hi {user}</Text>
        <Text style={typographyStyles.text}>Welcome back!</Text>
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
    backgroundColor: darkScheme.PrimaryBackgound,
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
  profile: {
    borderColor: darkScheme.SecondaryBackgound,
    borderRadius: 80,
    borderWidth: 3.3,
    height: 70,
    width: 70,
  },
});
export default Home;
