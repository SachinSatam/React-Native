import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import React, { useRef } from "react";
import placessortboxes from "../../assets/Placessortboxes.json";
import { TouchableOpacity } from "react-native-gesture-handler";
import SortBoxFortIcon from "../../assets/SVGS/PlacesSortBoxesSvgs/Forts";
import SearchBoxHillStationsIcon from "../../assets/SVGS/PlacesSortBoxesSvgs/HillStations";
import SortBoxesSanctuariesIcon from "../../assets/SVGS/PlacesSortBoxesSvgs/Sanctuaries";
import SortBosexUnescoIcon from "../../assets/SVGS/PlacesSortBoxesSvgs/Unesco";
import SortBoxSeaBeaches from "../../assets/SVGS/PlacesSortBoxesSvgs/SeaBeaches";
import CategoryWise from "../../assets/SVGS/CategoryWisearrow";
import { FireBase_AUTH } from "../FireBaseConfig";
import { useNavigation } from "@react-navigation/native";
import FortsScreen from "../LocInfo/FortsScreen";
export default function Trending() {
  const sheetref = useRef(null);
  const navigation=useNavigation()

  const renderItem = ({ item, index }) => {
    const isSanctuary = item.label === "Sanctuaries";
    const isHillStation = item.label === "Hill Stations";
    const isSeaBeach = item.label === "Sea Beaches";
    const isUnesco = item.label === "UNESCO";

    const labelContainerStyle = isSanctuary
      ? styles.sanctuaryLabelContainer
      : isHillStation
      ? styles.hillStationLabelContainer
      : isSeaBeach
      ? styles.seaBeachLabelContainer
      : isUnesco
      ? styles.UnescoLabelContainer
      : styles.labelContainer;

    let iconComponent = null;

    if (isHillStation) {
      iconComponent = <SearchBoxHillStationsIcon />;
    } else if (isSeaBeach) {
      iconComponent = <SortBoxSeaBeaches />;
    } else if (isSanctuary) {
      iconComponent = <SortBoxesSanctuariesIcon />;
    } else if (isUnesco) {
      iconComponent = <SortBosexUnescoIcon />;
    } else {
      iconComponent = <SortBoxFortIcon />;
    }
    const handlepress=()=>{
      if(item.label==="Forts"){
        navigation.navigate(FortsScreen)
      }

    }
    return (
      <TouchableOpacity onPress={handlepress}style={{ ...styles.card, backgroundColor: item.color }}>
        {iconComponent}
        <View style={labelContainerStyle}>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderRecommendItem = (item) => {
    return (
      <TouchableOpacity
        style={{
          height: 146,
          width: 143,
          borderRadius: 5,
          justifyContent: "center",
          backgroundColor: "red",
          marginHorizontal: 10,
          marginTop: 30,
        }}
      >
        <View>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{ ...styles.container }}>
      <View style={styles.content} />

      <View>
        <Text style={styles.Browse}>Browse By Category</Text>
        <CategoryWise
          marginLeft={135}
          fill="black"
          marginTop={-18}
          stroke="#000"
        />
        <FlatList
          ref={sheetref}
          // pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          data={placessortboxes}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View>
        <Text style={{ marginLeft: 11, marginTop: 30 }}>Recently Viewed</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity>
            <View style={styles.RecentlyViewedCards}></View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.RecentlyViewedCards}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity>
            <View style={styles.RecentlyViewedCards}></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.RecentlyViewedCards}></View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{ marginLeft: 11, marginTop: 30 }}>Recommended</Text>
        <FlatList
          ref={sheetref}
          // pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderRecommendItem}
          data={placessortboxes}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Button onPress={() => FireBase_AUTH.signOut()} title="Logout"></Button>
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
  },
  card: {
    height: 146,
    width: 113,
    borderRadius: 5,
    justifyContent: "center",

    marginHorizontal: 10,
    marginTop: 30,
  },
  labelContainer: {
    flex: 1, // Take up available space
    justifyContent: "flex-end", // Align the text to the bottom
    marginBottom: 40,
    marginRight: 40,
  },
  label: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  sanctuaryLabelContainer: {
    flex: 1, // Take up available space
    justifyContent: "flex-end", // Align the text to the bottom
    marginBottom: 40,
    marginRight: 10,
  },
  hillStationLabelContainer: {
    flex: 1, // Take up available space
    justifyContent: "flex-end", // Align the text to the bottom
    marginBottom: 40,
    marginRight: 5,
  },
  seaBeachLabelContainer: {
    flex: 1, // Take up available space
    justifyContent: "flex-end", // Align the text to the bottom
    marginBottom: 40,
    marginRight: 5,
  },
  UnescoLabelContainer: {
    flex: 1, // Take up available space
    justifyContent: "flex-end", // Align the text to the bottom
    marginBottom: 40,
    marginRight: 20,
  },
  Browse: {
    marginTop: 90,
    marginLeft: 11,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },

  RecentlyViewedCards: {
    width: 154,
    height: 85,
    backgroundColor: "#383838",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    flexDirection: "column",
  },
});
