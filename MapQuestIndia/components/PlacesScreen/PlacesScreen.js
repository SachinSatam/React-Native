import React from "react";
import { View, Text, Image } from "react-native";

const PlacesScreen = ({route}) => {
  const place=route.params
  console.log("inplacesscreen",place)
  return (
    <View>
      <View style={{marginBottom:10}}>
        <Image
          source={{
            uri: place.item.Image1
          }}
          height={"70%"}
          width={"100%"}
          borderBottomRightRadius={15}
          borderBottomLeftRadius={15}

        />
      </View>
      <View style={{marginTop:10}}>
        <Text>{place.item.name}</Text>
        <Text>{place.item.name}</Text>
        <Text>{place.item.description}</Text>
      </View>
    </View>
  );
};

export default PlacesScreen;