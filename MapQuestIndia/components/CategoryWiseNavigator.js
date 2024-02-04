import React from "react";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FortsScreen from "./LocInfo/FortsScreen";
import Trending from "./Trending/Trending";
import MaharashtraFortsScreen from "./SavedScreen/MaharashtraFortsScreen";
import PlacesScreen from "./PlacesScreen/PlacesScreen";
const Stack = createStackNavigator();

const AppNavigator = ({ route }) => {
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
      initialRouteName="Trending"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Trending" component={Trending} />
      <Stack.Screen
        name="FortsScreen"
        component={FortsScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="MaharashtraFortsScreen"
        component={MaharashtraFortsScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="PlacesScreen"
        component={PlacesScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
