import React, { createContext, useContext, useState } from "react";

const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [currentSnap, setCurrentSnap] = useState(0);

  const handleRegionChange = (region) => {
    // console.log('Current Snap:', currentSnap);
    // console.log('Region:', region);
    if (currentSnap === 0 && region.longitudeDelta < 8) {
      setCurrentSnap(0);
    }
  };

  return (
    <MapContext.Provider value={{ currentSnap, handleRegionChange }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
};
