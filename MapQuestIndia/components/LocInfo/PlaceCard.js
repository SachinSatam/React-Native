import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlaceCard = ({ place }) => {
  // const distance = calculateDistance(place.location.latitude, place.location.longitude);
  console.log(place);

  return (
    <View style={styles.cardContainer}>
      {place.photos && place.photos.length > 0 && (
        <Image source={{ uri:"https://upload.wikimedia.org/wikipedia/commons/d/d4/Ahmednagar Fort Main Gate.jpg"  }} style={styles.cardImage} />
      )}
      <View style={styles.cardContent}>
        <Text style={styles.placeName}>{place.name}</Text>
        {/* <Text style={styles.distance}>{`${distance.toFixed(2)} meters away`}</Text> */}
        <Text style={styles.distance}>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  cardContent: {
    marginLeft: 10,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  distance: {
    color: 'gray',
  },
});

export default PlaceCard;
