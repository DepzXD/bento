import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cards from '../components/Cards';
import WeeklyProgress from '../components/WeeklyProgress';

const Home = () => {
  return (
    <View style={styles.container}>
      <Cards />
      <WeeklyProgress />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
export default Home;
