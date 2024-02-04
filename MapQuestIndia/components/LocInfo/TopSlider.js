import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import data from "../../assets/Sliderdata.json";
import { useNavigation } from "@react-navigation/native";
export const TopSlider = () => {
  const flatListRef = useRef(null);
  const navigation=useNavigation()
  const handlepress=(item)=>{
    navigation.navigate('PlacesScreen',{item:item})
  }

  const Cards = ({ item }) => {
    return (
      <View style={{ marginTop: 100 }}>
        <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: 600 }}>
          {item.name}
        </Text>
        <TouchableOpacity style={styles.card}
        onPress={()=>handlepress(item)}>
          <ImageBackground
            source={{
              uri: item.Image1,
            }}
            style={styles.backgroundImage}
          ></ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={Cards}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 130,
    width: 340,
    borderRadius: 15,
    justifyContent: "center",
    marginHorizontal: 8,
    marginTop: 5,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
});

export default TopSlider;
