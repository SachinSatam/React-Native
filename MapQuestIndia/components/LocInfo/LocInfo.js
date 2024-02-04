import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import LocInfoMapView from "./LocInfoMapView";
import { Marker } from "react-native-maps";
import GasPump from "../../assets/SVGS/GasPump";
import Medicals from "../../assets/SVGS/Medicals";
import Park from "../../assets/SVGS/Parks";
import Lodging from "../../assets/SVGS/Lodging";
import placessortbox from "../../assets/locinfosliderdata.json";
import LocationLogo from "../../assets/SVGS/Locationlogo";
import PlaceCard from "./PlaceCard";
import { useAppContext } from "../MainContext";
import Slider from "@react-native-community/slider";
import {GOOGLE_MAPS_APIKEY} from "@env"

const LocInfo = () => {
  const {
    LocInfoItem,
    setDestinationlatitude,
    destinationlatitude,
    setDestinationlongitude,
    destinationlongitude,
  } = useAppContext();
  console.log("In Locinfo", LocInfoItem);
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%", "84.5%"], []);
  const step = 300;
  const threshold = 1000;
  const [markersData, setMarkersData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [sliding, setSliding] = useState(null);
  const [range, setRange] = useState(700);

  const makeGoodData = (results) => {
    let realResults = results.map((item) => {
      return {
        name: item.name,
        types: item.types, // Assuming you want the types of the place
        location: {
          latitude: item.geometry.location.lat,
          longitude: item.geometry.location.lng,
        },
        photos: item.photos,
      };
    });
    return realResults;
  };

  const fetchNearbyPlaces = async (latitude, longitude, radius, query) => {
    try {
      

      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${query}&key=${GOOGLE_MAPS_APIKEY}`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      const gooddata = makeGoodData(data.results);
      setMarkersData(gooddata);
    } catch (error) {
      console.error("Error fetching nearby places:", error);
    }
  };

  useEffect(() => {
    // Fetch nearby places only if an option is selected
    if (selectedOption) {
      const query = optionToQueryMap[selectedOption];
      if (query) {
        fetchNearbyPlaces(
          LocInfoItem.latitude,
          LocInfoItem.longitude,
          range,
          query.toLowerCase()
        );
      }
    }
  }, [selectedOption, LocInfoItem, range]);
  const getSVGComponent = (category) => {
    switch (category) {
      case "Petrol Pump":
        return <GasPump width={24} height={24} fill="black" />;
      case "Medicals":
        return <Medicals width={24} height={24} fill="black" />;
      case "Park":
        return <Park width={24} height={24} fill="black" />;
      case "Lodging":
        return <Lodging width={24} height={24} fill="black" />;
      default:
        return null; // You can provide a default SVG component or handle it differently
    }
  };
  const optionToQueryMap = {
    "Petrol Pump": "gas_station",
    Medicals: "hospital",
    Park: "park",
    Lodging: "lodging",
  };

  const handleOptionSelect = (option) => {
    // Set the selected option and reset markersData
    setSelectedOption(option);
    setMarkersData(null);

    // Fetch nearby places only if an option is selected
    if (optionToQueryMap[option]) {
      fetchNearbyPlaces(
        LocInfoItem.latitude,
        LocInfoItem.longitude,
        1000,
        optionToQueryMap[option]
      );
    }
  };
  const renderItem = ({ item }) => {
    const svgComponent = getSVGComponent(item.label);
    return (
      <TouchableOpacity
        onPress={() => handleOptionSelect(item.label)}
        style={styles.boxContainer}
      >
        <View style={styles.box}>
          <View style={styles.rowContainer}>
            {svgComponent}
            <Text style={styles.boxText}>{item.label}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const handleValueChange = (value) => {
    const roundedValue = Math.round(value / step) * step;
    setRange(roundedValue);
  };
  const formatRange = (value) => {
    if (value < threshold) {
      return `${value} m`;
    } else {
      const kmValue = (value / 1000).toFixed(1);
      return `${kmValue} km`;
    }
  };
  const renderPlaceCard = ({ item }) => {
    const handlePress = () => {
      setDestinationlatitude(item.location.latitude);
      setDestinationlongitude(item.location.longitude);
      console.log(destinationlatitude, destinationlongitude);
    };
    return (
      <TouchableOpacity style={styles.card}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ahmednagar_Fort_Main_Gate.jpg/375px-Ahmednagar_Fort_Main_Gate.jpg",
            }}
            style={{
              height: 85,
              width: "35%",
              borderRadius: 10,
              marginLeft: 12,
            }}
          />
          <View style={{ marginLeft: 6 }}>
            <Text style={{ fontSize: 12, marginBottom: 5, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 9, marginBottom: 15 }}>
              {item.types[0]}
            </Text>
          </View>
          <TouchableOpacity
            style={{ height: 10, width: 10, backgroundColor: "green" }}
            onPress={handlePress}
          ></TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <LocInfoMapView markersData={markersData} radius={range} />
      <BottomSheet snapPoints={snapPoints} enableContentPanningGesture={false}>
        <View style={{ flexDirection: "row" }}>
          <LocationLogo marginLeft={10} />
          <Text
            style={{
              marginLeft: 2,
              marginTop: 4,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {LocInfoItem.name}
          </Text>
        </View>
        <Text style={{ marginLeft: 20, marginTop: 15 }}>
          Selected Search Radius : {formatRange(range)}
        </Text>
        <Slider
          minimumValue={500}
          maximumValue={5000}
          value={300}
          minimumTrackTintColor="tomato"
          onSlidingStart={() => setSliding("Sliding")}
          onValueChange={handleValueChange}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={placessortbox}
          keyExtractor={(i) => String(i.id)}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />

        <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
          Now Showing:{selectedOption}
        </Text>
        <ScrollView nestedScrollEnabled={true}>
          {markersData ? (
            <FlatList
              data={markersData}
              keyExtractor={(item) => item.name}
              renderItem={renderPlaceCard}
              contentContainerStyle={
                markersData && markersData.length <= 2
                  ? { marginTop: 1 } // Set marginTop to 0 if there are only a few items
                  : null // Otherwise, let it be null
              }
            />
          ) : (
            <Text>Loading...</Text>
          )}
          <View style={{ height: 110 }}></View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  listContent: {
    marginTop: 30,
    height: 70,
  },
  box: {
    backgroundColor: "transparent",
    marginBottom: 10,
    borderRadius: 20,
    marginLeft: 14,
    marginRight: 14,
    borderWidth: 1,
    borderColor: "green",
  },
  boxText: {
    color: "black",
    fontWeight: "bold",
    padding: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  card: {
    height: 100,
    width: "95%",
    borderRadius: 15,
    justifyContent: "center",
    marginHorizontal: 8,
    marginTop: 5,
    backgroundColor: "#E5E4E2",
    marginLeft: "3%",
    marginRight: "3%",
  },
});
export default LocInfo;