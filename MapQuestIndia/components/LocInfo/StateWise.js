import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { Component } from "react";
import CategoryWise from "../../assets/SVGS/CategoryWisearrow";
import { FlatList } from "react-native-gesture-handler";
import data from "../../assets/Sliderdata.json"
import { useNavigation } from "@react-navigation/native";
import MaharashtraFortsScreen from "../SavedScreen/MaharashtraFortsScreen";
export default function StateWise() {
 
  const navigation=useNavigation()
  const handlepress=()=>{
    navigation.navigate(MaharashtraFortsScreen)

  }
  const handleonPress=(item)=>{
    navigation.navigate('PlacesScreen',{item:item})
 
  }
  const Cards = ({item}) => {

    return (
      <TouchableOpacity style={{ ...styles.card }} onPress={()=> handleonPress(item)}>
        <ImageBackground
          source={{
            uri: item.Image1
          }}
          style={styles.backgroundImage}
        >
          <View
            style={{
              height: 30,
              width: 175,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              marginTop: 90,
              backgroundColor: "rgba(0, 0, 0, 0.40)",
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: 600,
                marginTop: 3,
              }}
            >
              {item.name}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text onPress={handlepress}style={{ marginTop: 35, marginLeft: 11, fontSize: 18 }}>
        Maharashtra
      </Text>
      <CategoryWise
        marginLeft={115}
        fill="black"
        marginTop={-20}
        stroke="#000"
      />
      <FlatList
        data={data}
        renderItem={Cards}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 175,
    borderRadius: 20,
    justifyContent: "center",
    marginHorizontal: 2,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
});
