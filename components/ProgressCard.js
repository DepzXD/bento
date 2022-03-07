import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgressBar from './CircularProgressBar';

const ProgressCard = (props) => {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.cardText}>{props.text}</Text>
        <CircularProgressBar {...props} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardText: {
    padding: 8,
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  card: {
    width: 145,
    height: 165,
    alignItems: 'center',
    backgroundColor: '#435055',
    marginHorizontal: 10,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 16,
    },
    elevation: 6,
  },
});
export default ProgressCard;
