import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Card from './Card';

const todaysPlan = [
  {
    name: 'nato',
    imageUrl:
      'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    catagory: 'Launch',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/2871756/pexels-photo-2871756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    catagory: 'Breakfast',
    name: 'ramen',
  },
  {
    name: false,
    imageUrl:
      'https://images.pexels.com/photos/3297367/pexels-photo-3297367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    catagory: 'Diner',
  },
];

const Cards = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Today's Meal</Text>
        <FlatList
          horizontal={true}
          style={styles.cards}
          data={todaysPlan}
          keyExtractor={(item) => item.catagory}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              imageUrl={item.imageUrl}
              catagory={item.catagory}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  heading: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: 'bold',
  },
  cards: {
    flexDirection: 'row',
  },
});

export default Cards;
