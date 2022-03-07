import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import ProgressCard from './ProgressCard';

const data = [
  { text: 'Calories', color: '#A3F7BF' },
  { text: 'Karbs', color: '#4FBDBA', percentage: 90 },
  { text: 'Proten', color: '#CE7BB0', percentage: 40 },
  // { text: 'Fat', color: '#FFC947', percentage: 20 },
  { text: 'Fat', color: '#FFC947', percentage: 20, state: 'NaN' },
];

const WeeklyProgress = () => {
  return (
    <>
      <Text style={styles.heading}>Weekly Progress</Text>
      <FlatList
        style={styles.cards}
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.color}
        renderItem={({ item }) => <ProgressCard {...item} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginBottom: 5,
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  proressContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    flexWrap: 'wrap',
  },
});

export default WeeklyProgress;
