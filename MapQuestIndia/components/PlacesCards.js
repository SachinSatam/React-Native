import React from "react";
import { Text, View, FlatList } from "react-native";
import placesdata from "../assets/data.json";

export default function Cards() {
  return (
    <View>
      <FlatList
        data={placesdata}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "#000", padding: 10, margin: 5 }}>
            <Text style={{ color: "#fff" }}>{item.stateName}</Text>
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
