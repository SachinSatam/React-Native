// App.js
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheetComponent from "./components/BottomSheet";
import { MapProvider } from "./components/MapProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SavedScreen from "./components/SavedScreen/SavedScreen";
import LocInfo from "./components/LocInfo/LocInfo";
import Trending from "./components/Trending/Trending";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { ColorSpace } from "react-native-reanimated";
import { AppProvider } from "./components/MainContext";
import LoginScreen from "./components/LoginScreen/Login";
import { onAuthStateChanged } from "firebase/auth";
import { FireBase_AUTH } from "./components/FireBaseConfig";
import AppNavigator from "./components/CategoryWiseNavigator";
import BottomSheetNavigator from "./Navigators/BottomSheetNavigation";
const TabBar = createBottomTabNavigator();

// const handleBottomSheetChange = (index, prevSnap, navigation) => {
//   console.log("Index value in App.js:", index, prevSnap);
//   console.log("navigation", navigation)
//   navigation.setOptions({
//     tabBarVisible: false,
//   });

//   // Use the index value to show/hide tab bar
//   if (index > prevSnap) {
//     navigation.setOptions({
//       tabBarVisible: false,
//     });
//   } else {
//     navigation.setOptions({
//       tabBarVisible: true,
//     });
//   }
// };
const screenOptions = () => {
  return {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      background: "#fff",
    },
    tabBarHideOnKeyboard: true,
  };
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FireBase_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        
        <AppProvider>
          {user ? (
            <TabBar.Navigator screenOptions={screenOptions}>
              <TabBar.Screen
                name="Explore"
                component={BottomSheetNavigator}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MaterialIcons
                          name="explore"
                          size={25}
                          color={focused ? "blue" : "#000"}
                        />
                        <Text style={{ fontSize: 12 }}>Explore</Text>
                      </View>
                    );
                  },
                }}
              />
              <TabBar.Screen
                name="Saved"
                component={SavedScreen}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AntDesign
                          name="save"
                          size={25}
                          color={focused ? "blue" : "#000"}
                        />
                        <Text style={{ fontSize: 12 }}>Saved</Text>
                      </View>
                    );
                  },
                }}
              />
              <TabBar.Screen
                name="LocInfo"
                component={LocInfo}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Foundation
                          name="map"
                          size={25}
                          color={focused ? "blue" : "#000"}
                        />
                        <Text style={{ fontSize: 12 }}>LocInfo</Text>
                      </View>
                    );
                  },
                }}
              />
              <TabBar.Screen
                name="Trending"
                component={AppNavigator}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MaterialIcons
                          name="recommend"
                          size={25}
                          color={focused ? "blue" : "#000"}
                        />
                        <Text style={{ fontSize: 12 }}>Featured</Text>
                      </View>
                    );
                  },
                }}
              />
            </TabBar.Navigator>
          ) : (
            <LoginScreen />
          )}
        </AppProvider>
      
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
  },
});
export default App;
