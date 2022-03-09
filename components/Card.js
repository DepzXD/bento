import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { typographyStyles } from './styles/Typography';
import { darkScheme } from './styles/Colors';

const Card = ({ imageUrl, catagory, status }) => {
  if (status === false) {
    return (
      <View style={[styles.cardEmpty, styles.card]}>
        <Text style={styles.addBtn}>+</Text>
        <Text style={[typographyStyles.textSmall, styles.textBlock]}>
          {catagory}
        </Text>
      </View>
    );
  }
  if (status === 'Selected') {
    return (
      <View style={[styles.cardEmpty, styles.card]}>
        <Text
          style={[
            styles.addBtn,
            typographyStyles.heading3,
            { color: darkScheme.PrimaryBackgound },
          ]}
        >
          {catagory}
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={styles.overlay} />
      <Text style={[typographyStyles.textSmall, styles.textBlock]}>
        {catagory}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    width: 120,
    height: 120,
    marginVertical: 12,
    borderRadius: 8,
    marginRight: 20,
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 20,
      height: 24,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(46,163,228,0.4)',
  },
  textBlock: {
    backgroundColor: darkScheme.SecondaryBackgound,
    textAlign: 'center',
    padding: 13,
  },
  cardEmpty: {
    backgroundColor: darkScheme.Secondary,
  },
  addBtn: {
    flex: 1,
    fontSize: 50,
    alignSelf: 'center',
    textAlignVertical: 'center',
    color: darkScheme.PrimaryBackgound,
  },
  image: {
    flex: 1,
  },
});

export default Card;
