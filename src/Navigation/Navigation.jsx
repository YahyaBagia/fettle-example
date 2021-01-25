import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../Screens/HomeScreen";
import NavBar from "../Components/NavBar/NavBar";
import { IconButton } from "react-native-paper";
import { FettleColors } from "../Common/Const";
import LeaderBoardScreen from "../Screens/LeaderBoardScreen";
import MentionsScreen from "../Screens/MentionsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import SideMenu from "../Screens/SideMenu";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainDrawerNavigation />
    </NavigationContainer>
  );
};

const MainDrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <SideMenu {...props} />}
  >
    <Drawer.Screen name="MainTab" component={MainTabNavigation} />
  </Drawer.Navigator>
);

const MainTabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      tabStyle: { backgroundColor: "#2F2F2F" },
      style: { borderTopColor: "#2F2F2F" },
    }}
  >
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <IconButton
            icon={"shield-home"}
            color={focused ? FettleColors.secondary : "white"}
            size={27}
          />
        ),
      }}
    />

    <Tab.Screen
      name="LeaderBoardStack"
      component={LeaderBoardStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <IconButton
            icon={"trophy-variant-outline"}
            color={focused ? FettleColors.secondary : "white"}
            size={27}
          />
        ),
      }}
    />

    <Tab.Screen
      name="MentionsStack"
      component={MentionsStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <IconButton
            icon={"monitor-star"}
            color={focused ? FettleColors.secondary : "white"}
            size={27}
          />
        ),
      }}
    />

    <Tab.Screen
      name="ProfileStack"
      component={ProfileStack}
      options={{
        tabBarIcon: ({ focused }) => (
          <IconButton
            icon={"shield-account"}
            color={focused ? FettleColors.secondary : "white"}
            size={27}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const screenOptions = {
  animationEnabled: true,
  header: ({ navigation, scene, previous }) => (
    <NavBar navigation={navigation} scene={scene} previous={previous} />
  ),
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const HomeStack = () => (
  <Stack.Navigator headerMode={"screen"} screenOptions={screenOptions}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const LeaderBoardStack = () => (
  <Stack.Navigator headerMode={"screen"} screenOptions={screenOptions}>
    <Stack.Screen name="LeaderBoard" component={LeaderBoardScreen} />
  </Stack.Navigator>
);

const MentionsStack = () => (
  <Stack.Navigator headerMode={"screen"} screenOptions={screenOptions}>
    <Stack.Screen name="Mentions" component={MentionsScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator headerMode={"screen"} screenOptions={screenOptions}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default App;
