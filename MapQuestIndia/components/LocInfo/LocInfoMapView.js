import React, { useRef, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from "react-native-maps";
import { useAppContext } from "../MainContext";
import MapViewDirections from "react-native-maps-directions"
import { PermissionsAndroid, Platform } from 'react-native';
import {GOOGLE_MAPS_APIKEY} from "@env"

export default function LocInfoMapView({ radius, markersData }) {
  const initialLocation = {
    latitude: 19.0444796160777, // Specify the desired latitude
    longitude: 72.87487103453746, // Specify the desired longitude73.46174995371484
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421,
    radius:2000
  };
  const mapRef=useRef(null)
  const { LocInfoItem, destinationlatitude, destinationlongitude } = useAppContext();
  useEffect(() => {
    console.log('Destination Latitude:', destinationlatitude);
    console.log('Destination Longitude:', destinationlongitude);
  }, [destinationlatitude, destinationlongitude]);
  useEffect(() => {
    console.log("LocInfoItem changed:", LocInfoItem);

    // Use mapRef.current to access the map instance and animate to the new region
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: LocInfoItem.latitude,
        longitude: LocInfoItem.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.0421,
      });
    }
  }, [LocInfoItem]);

 

  return (
      <MapView
      ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={{flex:1}}
        initialRegion={{
          latitude: LocInfoItem.latitude,
          longitude: LocInfoItem.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
     
      >
         <Circle
          center={{
            latitude: LocInfoItem.latitude,
            longitude: LocInfoItem.longitude,
          }}
          radius={radius}// Radius in meters
          strokeColor="rgba(0, 0, 255, 0.2)" // Blue with 30% transparency
          fillColor="rgba(0, 0, 255, 0.2)" // Blue with 30% transparency
        />
        <MapViewDirections
        origin={{latitude:LocInfoItem.latitude,longitude:LocInfoItem.longitude}}
        destination={{latitude:destinationlatitude, longitude:destinationlongitude}}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        />

        {markersData &&
          markersData.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.location.latitude,
                longitude: marker.location.longitude,
              }}
              title={marker.name}
              description={marker.types.join(", ")}
            />
          ))}
      </MapView>
  );
}

const styles = StyleSheet.create({

  listContent: {
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
});
