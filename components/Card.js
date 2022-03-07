import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Card = ({ imageUrl, catagory, name }) => {
  if (name === false) {
    return (
      <TouchableOpacity style={[styles.cardEmpty, styles.card]}>
        <Text style={styles.addBtn}>+</Text>
        <Text style={styles.text}>{catagory}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={styles.overlay} />
      <Text style={styles.text}>{catagory}</Text>
    </TouchableOpacity>
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
  text: {
    color: '#fff',
    backgroundColor: '#435055',
    textAlign: 'center',
    padding: 13,
    letterSpacing: 0.25,
    fontSize: 13,
  },
  cardEmpty: {
    backgroundColor: '#A3F7BF',
  },
  addBtn: {
    color: '#27323A',
    alignSelf: 'center',
    textAlignVertical: 'center',
    flex: 1,
    fontSize: 50,
  },
  image: {
    flex: 1,
  },
});

export default Card;
