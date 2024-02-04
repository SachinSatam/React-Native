import React from "react";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomSheetComponent from "../components/BottomSheet";
import PlacesScreen from "../components/PlacesScreen/PlacesScreen";
// import FortsScreen from "./LocInfo/FortsScreen";
// import Trending from "./Trending/Trending";
import MaharashtraFortsScreen from "../components/SavedScreen/MaharashtraFortsScreen";
const Stack = createStackNavigator();

const BottomSheetNavigator = ({ route }) => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log(routeName);
    if (routeName === "FortsScreen") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      initialRouteName="BottomSheet"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="BottomSheet" component={BottomSheetComponent} /> */}
      <Stack.Screen
        name="BottomSheet"
        component={BottomSheetComponent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlacesScreen"
        component={PlacesScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
      name="MaharashtraFortsScreen"
      component={MaharashtraFortsScreen}
      options={{headerShown:true}}/>
    </Stack.Navigator>
  );
};

export default BottomSheetNavigator;
