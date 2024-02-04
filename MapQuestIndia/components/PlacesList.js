import React, { useState, useContext, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  Button,
} from "react-native";
import data from "../assets/data.json";
// import maharashtraData from "../assets/Maharashtradata.json";
import mahadata from "../assets/MaharashtraCoordinates.json";
import gujdata from "../assets/GujaratCoordinates.json";
import PlusSign from "../assets/SVGS/PlusSign";
import MinusSign from "../assets/SVGS/MinusSign";
import Carousel from "react-native-snap-carousel";
import { TouchableOpacity } from "react-native-gesture-handler";
import Readmoreicon from "../assets/SVGS/ReadMore";
import ViewonMapicon from "../assets/SVGS/ViewOnMap";
import AddToLocInfo from "../assets/SVGS/addtoLocinfo";
import { useAppContext } from "./MainContext";

const images = [
  require("../assets/candolim.jpg"),
  require("../assets/Matheran-DE.jpg"),
  require("../assets/2631256.jpg"),
];
const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const PlacesList = ({ selectedState, navigation }) => {
  let dataToRender;
  const {
    userUID,
    selectedCategory,
    setCategory,
    ItemsViewedByuser,
    setItemsViewedByuser,
    ReadMoreItems,
    setReadMoreItems,
    LocInfoItem,
    setLocInfoItem
  } = useAppContext();
  const [expandedItem, setExpandedItem] = useState(null);
 

  const SendToLocInfo = (item) => {
    setLocInfoItem(item)
  };
  const handlePlusSignPress = (item) => {
    setExpandedItem((prevItem) => (prevItem === item ? null : item));
    setItemsViewedByuser((prevItems) => [...prevItems, item.name]);
  };

  const handleReadMore = (item) => {
    console.log(item);
    setReadMoreItems((prevItem) => [...prevItem, item.name]);
    navigation.navigate('PlacesScreen',{item})
  };

  const CustomImage = ({ source }) => (
    <Image source={source} style={styles.sliderImage} />
  );
  if (selectedState === "Maharashtra") {
    dataToRender = mahadata;
  } else if (selectedState === "Gujarat") {
    dataToRender = gujdata;
  } else {
    // Default data or handle other states
    dataToRender = [];
  }
  const { searchText } = useAppContext();
  console.log("In PlacesList", searchText);
  console.log(ReadMoreItems);
  console.log(selectedCategory);
 
  const filteredData = dataToRender.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (!selectedCategory.length || selectedCategory.includes(item.category))
  );
  const recieveddata = async (userUID) => {
    const url = `http://10.0.2.2:8000/recommendations/${userUID}`;

    try {
      let recresult = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (recresult.ok) {
        // If the response status is OK (200), parse the JSON data
        const data = await recresult.json();
        console.log("Recommendations data:", data);
        // Now you can use the data as needed
      } else {
        // If the response status is not OK, log an error message
        console.error(
          "Failed to fetch recommendations. Status:",
          recresult.status
        );
      }
    } catch (error) {
      // If an error occurs during the fetch operation, log the error
      console.error("Error fetching recommendations:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => handlePlusSignPress(item)}
        style={styles.plusSignContainer}
      >
        {expandedItem === item ? <MinusSign /> : <PlusSign />}
        <Text key={item.id} style={styles.placename}>
          {item.name}
        </Text>
      </TouchableOpacity>
      {expandedItem === item && (
        <View style={styles.expandedContent}>
          <Carousel
            layout={"default"}
            layoutCardOffset={18}
            data={images}
            renderItem={({ item }) => <CustomImage source={item} />}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={210}
          />
          <Text style={{ marginBottom: 1, marginTop: 5 }}>
              {item.description}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => SendToLocInfo(item)}>
            <AddToLocInfo/>
<Text style={styles.buttonText}>LocInfo</Text>
            
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleReadMore(item)}
            >
              <Readmoreicon />
              <Text style={styles.buttonText}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => recieveddata(userUID)}
            >
              <ViewonMapicon />
              <Text style={styles.buttonText}>View On Map</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.placeslistcontainer}>
      <ScrollView nestedScrollEnabled={true}>
        <FlatList
          data={filteredData}
          keyExtractor={(i) => String(i.id)}
          renderItem={renderItem}
          contentContainerStyle={{ flex: 1, flexGrow: 1 }}
          // snapToInterval={175}
          // pagingEnabled
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  placeslistcontainer: {
    width: "95%",
    height: 365,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  item: {
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: "#000",
    padding: 16,
  },
  expandedContent: {
    marginTop: 10,
  },
  placename: {
    fontWeight: "bold",
  },
  sliderImage: {
    height: 100,
    width: 200,
    borderRadius: 10,
    marginLeft: -60,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3498db",
    width: "95%",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default PlacesList;
