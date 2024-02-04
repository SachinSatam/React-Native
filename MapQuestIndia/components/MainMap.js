import { Text, View, Image, Button } from "react-native";
import WebView from "react-native-webview";
import React, { Component, useRef, useState, useEffect } from "react";
import { Svg, Path } from "react-native-svg";
import fortlogo from "../assets/SVGRepo_iconCarrier.png";
import MapView, {
  Geojson,
  Marker,
  PROVIDER_GOOGLE,
  Animated,
  Callout,
} from "react-native-maps";
import customMapStyle from "../assets/customMap.json";
// import CustomPin from "./Custompin";
import { useMapContext } from "./MapProvider";
import maha from "../assets/Maharashtra";
import data from "../assets/MaharashtraCoordinates.json";
import FortsAnchor from "../assets/SVGS/FortsAnchor";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useAppContext } from "./MainContext";
import { collection } from "firebase/firestore";
import { Firestore_DB } from "./FireBaseConfig";
export default function MainMap() {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 21.7679,
    longitude: 78.8718,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const MyCustomCallout = ({ marker }) => (
    <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5 }}>
      <Text style={{ fontWeight: "bold" }}>{marker.name}</Text>
      <Image source={{ uri: marker.image }} style={{ width: 50, height: 50 }} />
      <Text>{marker.description}</Text>
    </View>
  );
  const [currentZoomLevel, setCurrentZoomLevel] = useState(null);
  const { selectedCategory, setCategory } = useAppContext();

  const handleRegionChangeComplete = (region) => {
    const zoomLevel = calculateZoomLevel(
      initialRegion.latitudeDelta,
      region.latitudeDelta
    );
    console.log(zoomLevel);
    setCurrentZoomLevel(zoomLevel);
  };

  const calculateZoomLevel = (initialDelta, currentDelta) => {
    // Formula to calculate zoom level based on delta values
    return Math.log2(initialDelta / currentDelta);
  };
  const renderMarkers = () => {
    if (currentZoomLevel !== null) {
      const filteredMarkers = data
        .filter((marker) => currentZoomLevel >= marker.zoomLevel)
        .filter((marker) => {
          if (!selectedCategory || selectedCategory.length === 0) {
            return true; // No selected categories, include all markers
          }
          return selectedCategory.includes(marker.category);
        });

      return filteredMarkers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          image={fortlogo}
        >
          <Callout>
            <View>
              <Text>{marker.name}</Text>
              <View>
                <WebView
                  source={{ uri: marker.content }}
                  style={{ width: 100, height: 100 }}
                />
              </View>
            </View>
          </Callout>
        </Marker>
      ));
    }
    return null;
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 21.7679,
        longitude: 78.8718,
        latitudeDelta: 8,
        longitudeDelta: 8,
      }}
      customMapStyle={customMapStyle}
      onRegionChangeComplete={handleRegionChangeComplete}
    >
      <Geojson geojson={maha} strokeColor="white" strokeWidth={1} />
      {renderMarkers()}
    </MapView>
  );
}
