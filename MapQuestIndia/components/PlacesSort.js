import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FortIcon from "../assets/SVGS/Fortsvg";
import SanctuaryIcon from "../assets/SVGS/Sanctuarysvg";
import HillStationIcon from "../assets/SVGS/HillStationsvg";
import UnescoIcon from "../assets/SVGS/Unescosvg";
import SeaBeachIcon from "../assets/SVGS/Seabeachsvg";
import CategoryWise from "../assets/SVGS/CategoryWisearrow";

const PlacesSort = ({ selectedState, navigation}) => {
  const handleMaharashtraFort=()=>{
    navigation.navigate('MaharashtraFortsScreen')
  }
  return (
    <View style={styles.placessortcontainer}>
      <Text
        style={{ color: "white", marginLeft: 17, marginTop: 10, fontSize: 15 }}
      >
        Category Wise
      </Text>
      <CategoryWise />
      <View style={styles.buttonRow}>
        <TouchableOpacity
        onPress={handleMaharashtraFort}>
          <View style={styles.Fortsbutton}>
            <Text style={styles.counter}>121</Text>
            <View style={styles.Fortscircle}>
              <FortIcon />
            </View>
            <Text style={styles.FortsbuttonText}>Forts</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Fortsbutton}>
            <Text style={styles.counter}>121</Text>
            <View style={styles.Sanctuarycircle}>
              <SanctuaryIcon />
            </View>
            <Text style={styles.SanctuarybuttonText}>Sanctuary</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow1}>
        <TouchableOpacity>
          <View style={styles.Fortsbutton}>
            <Text style={styles.counter}>121</Text>
            <View style={styles.HillStationcircle}>
              <HillStationIcon />
            </View>
            <Text style={styles.HillStationbuttonText}>Hill Station</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Fortsbutton}>
            <Text style={styles.counter}>121</Text>
            <View style={styles.Unescocircle}>
              <UnescoIcon />
            </View>
            <Text style={styles.UnescobuttonText}>UNESCO</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow2}>
        <TouchableOpacity>
          <View style={styles.Fortsbutton}>
            <Text style={styles.counter}>121</Text>
            <View style={styles.SeaBeachcircle}>
              <SeaBeachIcon />
            </View>
            <Text style={styles.SeabeachbuttonText}>Sea Beach</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  placessortcontainer: {
    width: "95%",
    height: 295,
    backgroundColor: "#242124",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  buttonRow1: {
    marginTop: -12,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  buttonRow2: {
    marginLeft: 8,
    marginTop: -12,
    flexDirection: "row",
    marginBottom: 10,
  },
  Fortsbutton: {
    width: 154,
    height: 65,
    backgroundColor: "#383838",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    flexDirection: "column",
  },
  FortsbuttonText: {
    fontWeight: "600",
    marginTop: 3,
    marginLeft: -85,
    color: "#C0C0C0",
    textAlign: "center",
  },
  Sancbutton: {
    width: 152,
    height: 62,
    backgroundColor: "#383838",
    marginLeft: 10,
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
    flexDirection: "column",
  },
  SanctuarybuttonText: {
    fontWeight: "600",
    marginTop: 3,
    marginLeft: -60,
    color: "#C0C0C0",
    textAlign: "center",
  },
  HillStationbuttonText: {
    fontWeight: "600",
    marginTop: 3,
    marginLeft: -50,
    color: "#C0C0C0",
    textAlign: "center",
  },
  UnescobuttonText: {
    fontWeight: "600",
    marginTop: 3,
    marginLeft: -65,
    color: "#C0C0C0",
    textAlign: "center",
  },
  SeabeachbuttonText: {
    fontWeight: "600",
    marginTop: 3,
    marginLeft: -57,
    color: "#C0C0C0",
    textAlign: "center",
  },
  Fortscircle: {
    marginTop: -18,
    marginLeft: -5,
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#964B00",
  },
  Sanctuarycircle: {
    marginTop: -18,
    marginLeft: -5,
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#007F00",
  },
  HillStationcircle: {
    marginTop: -18,
    marginLeft: -5,
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#FEBE10",
  },
  Unescocircle: {
    marginTop: -18,
    marginLeft: -5,
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#6CB4EE",
  },
  SeaBeachcircle: {
    marginTop: -18,
    marginLeft: -5,
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#0039A6",
  },
  counter: {
    height: 18,
    width: 25,
    color: "#fff",
    marginLeft: 100,
    marginTop: -10,
  },
});

export default PlacesSort;
