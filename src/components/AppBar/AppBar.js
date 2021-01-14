import React from "react";
import { Button } from "react-native-paper";

const App = ({ navigation, route }) => {
  const handlePress = () => navigation.navigate("NewClient");
  return (
    <>
      <Button onPress={handlePress} color="#FFF" icon="plus">
        Cliente
      </Button>
    </>
  );
};

export default App;
