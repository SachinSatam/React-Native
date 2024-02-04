import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import placessortbox from "../assets/Placessortboxes.json";
import { useAppContext } from './MainContext';
export default function PlacesSortBoxes(){
    const [selectedItems, setSelectedItems] = useState([]);

    const { selectedCategory, setCategory } = useAppContext();

    const onItemClick = (itemId,itemLabel) => {

        
        const isItemSelected = selectedItems.includes(itemId);
        setCategory((prevCategories) =>
        isItemSelected
          ? prevCategories.filter((category) => category !== itemLabel)
          : [...prevCategories, itemLabel]
      );
        setSelectedItems((prevSelectedItems) =>
          isItemSelected
            ? prevSelectedItems.filter((item) => item !== itemId)
            : [...prevSelectedItems, itemId] 
        );
       
      };
      
    const rendersortItem = ({ item }) => (
        <TouchableOpacity
          onPress={() => onItemClick(item.id,item.label)}
          style={styles.boxContainer}
        >
          <View style={[styles.box,selectedItems.includes(item.id) && { backgroundColor: 'blue' }]}>
            <Text style={[styles.boxText,selectedItems.includes(item.id) && { color: 'white' }]}>{item.label}</Text>
          </View>
        </TouchableOpacity>
      );
  return ( 
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={placessortbox}
    keyExtractor={(i) => String(i.id)}
    renderItem={rendersortItem}
    contentContainerStyle={styles.listContent}
    // snapToInterval={50}
  />
    )
  }

  const styles = StyleSheet.create({
  listContent: {
    //backgroundColor: "yellow",
    height: 50,
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
  boxContainer: {
    marginHorizontal: -3,
  },
})