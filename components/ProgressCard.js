import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgressBar from './CircularProgressBar';
import { typographyStyles } from './styles/Typography';
import { darkScheme } from './styles/Colors';
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
    textAlign: 'center',
    ...typographyStyles.textSmall,
  },
  card: {
    width: 145,
    height: 165,
    alignItems: 'center',
    backgroundColor: darkScheme.SecondaryBackgound,
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
