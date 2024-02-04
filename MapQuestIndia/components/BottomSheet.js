import React, {
  useCallback,
  useRef,
  useMemo,
  useState,
  useEffect,
} from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  PanResponder,
} from "react-native";
import BottomSheet, { TouchableOpacity } from "@gorhom/bottom-sheet";
import MainMap from "./MainMap";
import data from "../assets/data.json";
import placessortbox from "../assets/Placessortboxes.json";
import PlacesList from "./PlacesList";
import PlacesSort from "./PlacesSort";
import Searchbar from "./SearchBar";
import { AppProvider } from "./MainContext";
import PlacesSortBoxes from "./PlacesSortBoxes";
const BottomSheetComponent = ({ onSheetChange, searchText, navigation }) => {
  const sheetRef = useRef(null);
  const searchInputRef = useRef(null);
  const [currentSnap, setCurrentSnap] = useState(0);
  const snapPoints = useMemo(() => ["25%", "50%", "84.5%"], []);
  const flatList3Ref = useRef(null);
  const [isFlatList3Focused, setFlatList3Focused] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  const handleScrollViewClick = useCallback(() => {
    if (flatList3Ref.current && isFlatList3Focused) {
      flatList3Ref.current.focus();
    }
  }, [isFlatList3Focused]);

  const handleSheetChange = useCallback(
    (index) => {
      setCurrentSnap((prevSnap) => {
        console.log("handleSheetChange", index, "Previous Snap:", prevSnap);

        // Call the provided onSheetChange function
        onSheetChange && onSheetChange(index, prevSnap);

        return index;
      });
    },
    [onSheetChange]
  );

  useEffect(() => {
    console.log("Current Snap after update:", currentSnap);
  }, [currentSnap]);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current.close();
  }, []);

  const handleSearchBarPress = useCallback(() => {
    searchInputRef.current.focus();
  }, []);

  const [flatListFocused, setFlatListFocused] = useState(false);

  // Callback when FlatList gains focus
  const handleFlatListFocus = useCallback(() => {
    setFlatListFocused(true);
  }, []);

  // Callback when FlatList loses focus
  const handleFlatListBlur = useCallback(() => {
    setFlatListFocused(false);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
      <View style={styles.Actualcard} key={item.id}>
        <View style={styles.card}></View>

        <Text style={styles.cardText}>{item.stateName}</Text>
      </View>
    </TouchableOpacity>
  );
  const handleCardPress = useCallback((item) => {
    setSelectedState(item.stateName); // Update selected state when card is pressed
    //sheetRef.current.snapToIndex(1); // Snap to the middle position
    console.log(item.stateName);
  }, []);
  const handleRegionChange = useCallback(
    (region) => {
      if (currentSnap === 1 && region.latitudeDelta < 8) {
        setCurrentSnap(0);
      }
    },
    [currentSnap]
  );

  const handleScroll = useCallback(
    (event) => {
      const offsetY = event.nativeEvent.contentOffset.y;
      const windowHeight = Dimensions.get("window").height;

      if (currentSnap === 1 && offsetY < windowHeight * 0.9) {
        handleSnapPress(2);
      } else if (currentSnap === 2 && offsetY > windowHeight * 0.9) {
        handleSnapPress(1);
      }
    },
    [currentSnap, handleSnapPress]
  );

  return (
    <View style={styles.container}>
      <MainMap />

      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        enableContentPanningGesture={false}
        onClick={handleScrollViewClick}
      >
        <ScrollView
          style={{ flex: 1, height: Dimensions.get("window").height }}
          contentContainerStyle={styles.scrollViewContent}
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topSpacer} />

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(i) => String(i.id)}
            renderItem={renderItem}
            contentContainerStyle={styles.flatListContent}
            // snapToOffsets={snapOffsets}
            // pagingEnabled
          />
          {/* <View style={styles.spacer}></View> */}
          <Text style={styles.StateNameHeading}>{selectedState}</Text>
          <Searchbar />

          <PlacesSortBoxes />
          <PlacesList selectedState={selectedState} navigation={navigation} />

          <PlacesSort navigation={navigation}/>
          <View style={{ height: 100 }}></View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Actualcard: {
    width: 168,
    height: 110,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  card: {
    backgroundColor: "#000",
    borderRadius: 10,
    width: 168,
    height: 94,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  cardText: {
    color: "black",
  },

  scrollViewContent: {
    flexGrow: 1,
  },

  flatListContent: {
    //backgroundColor: "pink",
    height: 120,
  },
  flatListContent1: {
    flex: 1,
    height: Dimensions.get("window").height,
  },
  mapcontainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  StateNameHeading: {
    textAlign: "center",
    fontSize: 20,
  },
  spacer: {
    height: 100,
  },

  cardTextContainer: {
    marginTop: 80,
    alignItems: "center",
  },
});

export default BottomSheetComponent;
