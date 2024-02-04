import React, { createContext, useContext, useState, useEffect } from "react";
import { FireBase_AUTH } from "./FireBaseConfig";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [user, setUser] = useState(null);
  const [userUID, setUserUID] = useState(null);
  const [ItemsViewedByuser, setItemsViewedByuser] = useState([]);
  const [ReadMoreItems, setReadMoreItems]=useState([])
  const [LocInfoItem, setLocInfoItem]=useState(null)
  const [destinationlatitude, setDestinationlatitude]=useState(null)
  const [destinationlongitude, setDestinationlongitude]=useState(null)
  useEffect(() => {
    const unsubscribe = FireBase_AUTH.onAuthStateChanged((authUser) => {
      setUser(authUser);
      setUserUID(authUser ? authUser.uid : null);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue = {
    searchText,
    setSearchText,
    selectedCategory,
    setCategory: setSelectedCategory,
    user,
    userUID,
    ItemsViewedByuser,
    setItemsViewedByuser,
    ReadMoreItems,
    setReadMoreItems,
    LocInfoItem,
    setLocInfoItem,
    destinationlatitude,
    setDestinationlatitude,
    destinationlongitude,
    setDestinationlongitude
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
