import React, { useState } from "react";
import { View, Platform } from "react-native";
import {
  TextInput,
  Headline,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from "react-native-paper";
import axios from "axios";
import generalStyles from "../../styles";
import styles from "./styles";

const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [showError, setShowError] = useState(false);

  const saveClient = async () => {
    if (!name || !phone || !email || !job) {
      setShowError(true);
      return;
    }
    try {
      const URL =
        Platform.OS === "ios"
          ? "http://localhost:3000/clients"
          : "http://10.0.2.2:3000/clients";
      const client = { name, email, phone, job };
      const response = await axios.post(URL, client);
      console.log(URL);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={generalStyles.container}>
      <Headline style={generalStyles.title}>Añadir nuevo cliente</Headline>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)}
        label="Nombre"
        value={name}
        placeholder={Platform.OS === "ios" ? "Issac Nweton" : ""}
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setPhone(value)}
        label="Teléfono"
        value={phone}
        placeholder={Platform.OS === "ios" ? "+ 52 ..." : ""}
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
        label="Correo"
        value={email}
        placeholder={Platform.OS === "ios" ? "correo@correo.com" : ""}
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setJob(value)}
        label="Empresa"
        value={job}
        placeholder={Platform.OS === "ios" ? "Nombre empresa" : ""}
      />
      <Button icon="pencil-circle" mode="contained" onPress={saveClient}>
        Guardar
      </Button>
      <Portal>
        <Dialog visible={showError} onDismiss={() => setShowError(false)}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setShowError(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default App;
