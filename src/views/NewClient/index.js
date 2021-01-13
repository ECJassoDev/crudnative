import React, { useState } from "react";
import { View, Platform } from "react-native";
import { TextInput, Headline, Button } from "react-native-paper";
import generalStyles from "../../styles";
import styles from "./styles";

const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");

  const onChangeText = () => console.log("escribiendo");
  return (
    <View style={generalStyles.container}>
      <Headline style={generalStyles.title}>Añadir nuevo cliente</Headline>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        label="Nombre"
        placeholder={Platform.OS === "ios" ? "Issac Nweton" : ""}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        label="Teléfono"
        placeholder={Platform.OS === "ios" ? "+ 52 ..." : ""}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        label="Correo"
        placeholder={Platform.OS === "ios" ? "correo@correo.com" : ""}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        label="Empresa"
        placeholder={Platform.OS === "ios" ? "Nombre empresa" : ""}
      />
    </View>
  );
};

export default App;
