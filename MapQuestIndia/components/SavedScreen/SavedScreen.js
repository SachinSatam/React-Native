import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import data from "../../assets/Sliderdata.json";
import DropDownArrow from "../../assets/SVGS/DropDownArrow";
import DropDownPicker from "react-native-dropdown-picker";

export default function SavedScreen() {
  const [showstatesisOpen, setshowstatesIsOpen] = useState(false);
  const [showstatesValue, setshowstatesValue] = useState([]);
  const [categoryisOpen, setCategoryIsOpen] = useState(false);
  const [categoryValue, setCategoryValue] = useState([]);
  const [isRecentDropdownOpen, setIsRecentDropdownOpen] = useState(false);
  const [isRecentDropdownOpen1, setIsRecentDropdownOpen1] = useState(false);
  const [isRecentDropdownOpen2, setIsRecentDropdownOpen2] = useState(false);

  const handleDropdownToggle = (dropdownNumber) => {
    switch (dropdownNumber) {
      case 1:
        setIsRecentDropdownOpen1(!isRecentDropdownOpen1);
        setIsRecentDropdownOpen2(false);
        setIsRecentDropdownOpen(false);
        break;
      case 2:
        setIsRecentDropdownOpen2(!isRecentDropdownOpen2);
        setIsRecentDropdownOpen1(false);
        setIsRecentDropdownOpen(false);
        break;
      default:
        setIsRecentDropdownOpen(!isRecentDropdownOpen);
        setIsRecentDropdownOpen1(false);
        setIsRecentDropdownOpen2(false);
        break;
    }
    if (dropdownNumber === 1) {
      if (isRecentDropdownOpen1) {
        // Dropdown is open, apply styles accordingly
        styles.boxContainerOpen1 = {
          position: "absolute",
          top: 40,
          width: "100%",
          height: 10,
          backgroundColor: "#D9D9D9",
          padding: 10,
          marginLeft: 10,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          // Add any additional styling properties as needed
        };

        styles.itemsText = {
          fontWeight: "bold",
          marginLeft: 15,
          fontSize: 20, // or any other style you want to apply
          marginTop: 70,
        };
      } else {
        // Dropdown is closed, revert styles
        styles.boxContainerOpen1 = {
          position: "absolute",
          top: 40,
          width: "100%",
          height: 270,
          backgroundColor: "#D9D9D9",
          padding: 10,
          marginLeft: 10,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        };

        styles.itemsText = {
          fontWeight: "bold",
          marginLeft: 15,
          fontSize: 20,
          marginTop: 250,
        };
      }
    }
    if (dropdownNumber === 2) {
      if (isRecentDropdownOpen2) {
        // Dropdown is open, apply styles accordingly
        styles.boxContainerOpen2 = {
          position: "absolute",
          top: 40,
          width: "100%",
          height: 50,
          backgroundColor: "#D9D9D9",
          padding: 10,
          marginLeft: 10,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          // Add any additional styling properties as needed
        };

        styles.itemsText = {
          fontWeight: "bold",
          marginLeft: 15,
          fontSize: 20, // or any other style you want to apply
          marginTop: 70,
        };
      } else {
        // Dropdown is closed, revert styles
        styles.boxContainerOpen2 = {
          position: "absolute",
          top: 40,
          width: "100%",
          height: 270,
          backgroundColor: "#D9D9D9",
          padding: 10,
          marginLeft: 10,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        };

        styles.itemsText = {
          fontWeight: "bold",
          marginLeft: 15,
          fontSize: 20,
          marginTop: 250,
        };
      }
    }
  };
  const items = [
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Goa", value: "Goa" },
    { label: "Arunanchal Pradesh", value: "Arunanchal Pradesh" },
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Kerala", value: "Kerala" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Punjab", value: "Punjab" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Bihar", value: "Bihar" },
    { label: "Uttar Pradesh", value: "Uttar Pradesh" },
    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
  ];
  const items1 = [
    { label: "Forts", value: "Forts" },
    { label: "Sanctuaries", value: "Sanctuaries" },
    { label: "Hill Stations", value: "Hill Stations" },
    { label: "UNESCO", value: "UNESCO" },
    { label: "Sea Beaches", value: "Sea Beaches" },
  ];

  const renderItem = () => {
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
              Ahmednagar Fort
            </Text>
            <Text style={{ fontSize: 9, marginBottom: 15 }}>
              Ahmednagar, Maharashtra
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
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
          placeholder="Search in your saved items"
          style={styles.Input}
          placeholderTextColor={"rgba(60,60,67,0.6)"}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <TouchableOpacity
          style={{
            width: 90,
            height: isRecentDropdownOpen ? 30 : 22,
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            borderBottomRightRadius: isRecentDropdownOpen ? 0 : 20,
            borderBottomLeftRadius: isRecentDropdownOpen ? 0 : 20,
          }}
          onPress={() => handleDropdownToggle(0)}
        >
          <Text style={{ marginLeft: "13%", marginBottom: "2%" }}>Recent</Text>
          <DropDownArrow marginLeft={5} />
        </TouchableOpacity>
        {isRecentDropdownOpen ? (
          <View style={styles.boxContainerOpen}>
            <View style={styles.boxContent}>
              <Text>Box content goes here1</Text>
            </View>
          </View>
        ) : null}

        <TouchableOpacity
          style={{
            width: 120,
            height: isRecentDropdownOpen1 ? 30 : 22,
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            borderBottomRightRadius: isRecentDropdownOpen1 ? 0 : 20,
            borderBottomLeftRadius: isRecentDropdownOpen1 ? 0 : 20,
          }}
          onPress={() => handleDropdownToggle(1)}
        >
          <Text style={{ marginLeft: "13%", marginBottom: "2%" }}>
            Select State
          </Text>
          <DropDownArrow marginLeft={5} />
        </TouchableOpacity>
        {isRecentDropdownOpen1 ? (
          <View style={styles.boxContainerOpen1}>
            <DropDownPicker
              items={items}
              open={showstatesisOpen}
              setOpen={() => setshowstatesIsOpen(!showstatesisOpen)}
              value={showstatesValue}
              setValue={(val) => {
                setshowstatesValue(val);
              }}
              multiple
              min={1}
              max={12}
              mode="BADGE"
              placeholder="Select States"
            />
          </View>
        ) : null}

        <TouchableOpacity
          style={{
            width: 95,
            height: isRecentDropdownOpen2 ? 30 : 22,
            backgroundColor: "#D9D9D9",
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            borderBottomRightRadius: isRecentDropdownOpen2 ? 0 : 20,
            borderBottomLeftRadius: isRecentDropdownOpen2 ? 0 : 20,
          }}
          onPress={() => handleDropdownToggle(2)}
        >
          <Text style={{ marginLeft: "13%", marginBottom: "2%" }}>
            Category
          </Text>
          <DropDownArrow marginLeft={5} />
        </TouchableOpacity>
        {isRecentDropdownOpen2 ? (
          <View style={styles.boxContainerOpen2}>
            <DropDownPicker
              items={items1}
              open={categoryisOpen}
              setOpen={() => setCategoryIsOpen(!categoryisOpen)}
              value={categoryValue}
              setValue={(val) => {
                setCategoryValue(val);
              }}
              multiple
              min={1}
              max={5}
              mode="BADGE"
              placeholder="Select Category"
            />
          </View>
        ) : null}
      </View>

      <Text style={styles.itemsText}>Items</Text>
      <ScrollView nestedScrollEnabled={true}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </>
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
    marginTop: 50,
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
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
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
  backgroundImage: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  boxContainerOpen: {
    position: "absolute",
    top: 40,
    height: 80,
    width: "100%",
    backgroundColor: "#D9D9D9",
    padding: 10,
    marginLeft: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  boxContainerOpen1: {
    position: "absolute",
    top: 40,
    height: 80,
    width: "100%",
    backgroundColor: "#D9D9D9",
    padding: 10,
    marginLeft: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  boxContainerOpen2: {
    position: "absolute",
    top: 40,
    width: "100%",
    height: 70,
    backgroundColor: "#D9D9D9",
    padding: 10,
    marginLeft: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  boxContent: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  itemsText: {
    fontWeight: "bold",
    marginLeft: 15,
    fontSize: 20, // or any other style you want to apply
    marginTop: 70,
  },
});
