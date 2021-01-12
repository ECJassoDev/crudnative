import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/views/Home";
import NewClient from "./src/views/NewClient";
import Details from "./src/views/Details";
import AppBar from "./src/components/AppBar";
import styles from "./src/generalStyles";
import { screenOptions } from "./src/theme";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation, route }) => ({
              headerLeft: (props) => (
                <AppBar {...props} navigation={navigation} route={route} />
              ),
            })}
          />
          <Stack.Screen
            name="NewClient"
            component={NewClient}
            options={{
              title: "Nuevo Cliente",
            }}
          />
          <Stack.Screen
            name="ClientDetails"
            component={Details}
            options={{ title: "Detalles de Cliente" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
