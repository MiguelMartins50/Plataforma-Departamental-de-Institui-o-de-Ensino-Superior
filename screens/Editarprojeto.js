import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import imagem from "./assets/imagemDesign.jpeg";

export default class Editarprojeto extends Component {
  ButtonAlert = () =>
    Alert.alert(
      "Alerta",
      "Deseja mesmo salvar estas alterações?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Salvar", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text style={styles.informacoes}>Titulo:</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text style={styles.informacoes}>Data Inicio:</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text style={styles.informacoes}>Data Fim:</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text style={styles.informacoes}>Local de Realizaçao:</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text style={styles.informacoes}>Valor Financiado:</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.viewbutton}>
            <Button title="Editar" color="#870B5A" onPress={this.ButtonAlert} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "column",
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageFundo: {
    flex: 1,
    resizeMode: "cover",
  },
  informacoes: {
    color: "#870B5A",
    fontWeight: "normal",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  viewbutton: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
    borderWidth: 2,
    borderColor: "#870B5A",
    backgroundColor: "#870B5A",
    borderRadius: 4,
    justifyContent: "center",
    marginRight: 20,
  },
});
