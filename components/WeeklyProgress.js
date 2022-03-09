import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import ProgressCard from './ProgressCard';
import { typographyStyles } from './styles/Typography';
import { darkScheme } from './styles/Colors';
const data = [
  { text: 'Calories', color: darkScheme.green, state: 'NaN' },
  { text: 'Karbs', color: darkScheme.blue, percentage: 90, state: 'NaN' },
  { text: 'Proten', color: darkScheme.pink, percentage: 40, state: 'NaN' },
  { text: 'Fat', color: darkScheme.yellow, percentage: 20, state: 'NaN' },
];

const WeeklyProgress = () => {
  return (
    <View>
      <Text style={[typographyStyles.heading2, typographyStyles.bold]}>
        Weekly Progress
      </Text>
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
  proressContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default WeeklyProgress;
