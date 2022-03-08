import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import ProgressCard from './ProgressCard';

const data = [
  { text: 'Calories', color: '#A3F7BF', state: 'NaN' },
  { text: 'Karbs', color: '#4FBDBA', percentage: 90, state: 'NaN' },
  { text: 'Proten', color: '#CE7BB0', percentage: 40, state: 'NaN' },
  { text: 'Fat', color: '#FFC947', percentage: 20, state: 'NaN' },
];

const WeeklyProgress = () => {
  return (
    <View>
      <Text style={styles.heading}>Weekly Progress</Text>
      <FlatList
        scrollEnabled={false}
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.color}
        renderItem={({ item }) => (
          <ProgressCard style={styles.proressContainer} {...item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginBottom: 8,
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  proressContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default WeeklyProgress;
