import React, { useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { FlatList } from "react-native-gesture-handler";
import data from "../../assets/Sliderdata.json";
import CategoryWise from "../../assets/SVGS/CategoryWisearrow";
import { useNavigation } from "@react-navigation/native";
export default function MaharashtraFortsScreen() {
  const sheetref = useRef(null);
  const navigation = useNavigation();
  const handlepress = (item) => {
    navigation.navigate("PlacesScreen", { item: item });
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ahmednagar_Fort_Main_Gate.jpg/375px-Ahmednagar_Fort_Main_Gate.jpg",
            }}
            style={{ height: 75, width: 75, borderRadius: 10, marginLeft: 12 }}
          />
          <View style={{ marginLeft: 6 }}>
            <Text style={{ fontSize: 12, marginBottom: 5, fontWeight: "bold" }}>
              Ahmednagar Fort
            </Text>
            <Text style={{ fontSize: 9, marginBottom: 15 }}>
              Ahmednagar, Maharashtra
            </Text>
          </View>
          <CategoryWise
            marginLeft={5}
            marginTop={4}
            fill="black"
            // marginTop={-20}
            stroke="#000"
          />
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem1 = ({ item }) => (
    <TouchableOpacity style={styles.card1} onPress={() => handlepress(item)}>
      <ImageBackground
        source={{ uri: item.Image1 }}
        style={styles.backgroundImage}
      />

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 30,
          width: 145,
          borderRadius: 10,
          marginLeft: 18,
          marginBottom: 7,
          backgroundColor: "rgba(245, 254, 253, 0.90)",
        }}
      >
        <Text style={{ textAlign: "center", marginTop: 5, fontWeight: 800 }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ marginTop: 50 }}>
      <TouchableOpacity style={styles.SearchBar}>
        <View style={styles.SearchIcon}>
          <Icon
            name="search"
            size={20}
            style={{
              color: "rgba(60,60,67,0.6)",
              marginTop: 5,
              marginLeft: 5,
            }}
          />
        </View>
        <TextInput
          placeholder="Where To ?"
          style={styles.Input}
          placeholderTextColor={"rgba(60,60,67,0.6)"}
          // onChangeText={handleTextChange}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>
        {" "}
        Must Visit{" "}
      </Text>
      <CategoryWise
        marginLeft={85}
        marginTop={-18}
        fill="black"
        // marginTop={-20}
        stroke="#000"
      />

      <View>
        <FlatList
          ref={sheetref}
          data={data}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <FlatList
        style={{ marginTop: 20 }}
        data={data} 
        renderItem={renderItem1}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  SearchIcon: {
    marginBottom: 5,
    marginLeft: 10,
    color: "rgba(118,118,128,0.6)",
  },
  SearchBar: {
    backgroundColor: "rgba(118,118,128,0.2)",
    width: "95%",
    height: 36,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  Input: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 18,
    marginTop: 5,
    textAlign: "left",
  },
  card: {
    height: 100,
    width: 230,
    borderRadius: 15,
    justifyContent: "center",
    marginHorizontal: 8,
    marginTop: 5,
    backgroundColor: "#E5E4E2",
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  card1: {
    height: 185,
    width: 180,
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: 6,
    marginTop: 5,
    overflow: "hidden",
  },
});
