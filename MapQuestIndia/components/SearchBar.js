import React, { useRef, useCallback, useState, useEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/Feather";
import { useAppContext } from "./MainContext";
const Searchbar = ({}) => {
  const searchInputRef = useRef(null);
  const {
    selectedCategory,
    setSearchText,
    userUID,
    ItemsViewedByuser,
    ReadMoreItems,
  } = useAppContext();
  const handleSearchBarPress = useCallback(() => {
    searchInputRef.current.focus();
  }, []);

  const savedata = async () => {
    const url = "http://10.0.2.2:5000/your-endpoint";
    const timestamp = new Date().toISOString();
    let result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userUID, selectedCategory, ReadMoreItems, timestamp }),
    });
    result = await result.json();
    if (result) {
      console.warn("Data added");
    }
  };

  

  const handleTextChange = async (text) => {
    setSearchText(text);
    savedata();
  };
  useEffect(() => {
   
    savedata();
  }, [selectedCategory, userUID, ItemsViewedByuser, ReadMoreItems]);
  return (
    <TouchableOpacity style={styles.SearchBar} onPress={handleSearchBarPress}>
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
        ref={searchInputRef}
        placeholder="Search"
        style={styles.Input}
        placeholderTextColor={"rgba(60,60,67,0.6)"}
        onChangeText={handleTextChange}
      />
    </TouchableOpacity>
  );
};
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
    marginLeft: 10,
  },
});

export default Searchbar;
