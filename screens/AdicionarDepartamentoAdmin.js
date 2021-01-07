import { HeaderHeightContext } from "@react-navigation/stack";
import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { color } from "react-native-reanimated";
import imagem from "./assets/fundoescolas.png";
import imagemestig from "./assets/estig.jpg";
import logo from "./assets/IPB-Branco.png";
import user from "./assets/user.png";
import Icon from "react-native-vector-icons/Feather";
import { OwnHeader } from "./shared/Header.js";
import { TextInput } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";

export default class AdicionarDepartamentoAdmin extends Component {
  ButtonAlert = () =>
    Alert.alert(
      "Alerta",
      "Deseja mesmo adicionar este departamento?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Adicionar", onPress: () => console.log("Adicionar Pressed") },
      ],
      { cancelable: false }
    );
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <Text style={styles.baseText}> Nome do departamento</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <Text style={styles.baseText}> Escola</Text>
          <DropDownPicker
            items={[
              {
                label: "ESTIG",
                value: "ESTIG",

                hidden: true,
              },
              {
                label: "ESE",
                value: "ESE",
              },
              {
                label: "ESA",
                value: "ESA",
              },
              {
                label: "ESS",
                value: "ESS",
              },
            ]}
            containerStyle={{ height: 40 }}
            style={{
              backgroundColor: "white",
              borderRadius: 2,
              borderColor: "#870B5A",
              width: 300,
              alignSelf: "center",
            }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{
              backgroundColor: "#870B5A",
              width: 300,
              alignSelf: "center",
            }}
            onChangeItem={(item) =>
              this.setState({
                country: item.value,
              })
            }
          />
          <View style={styles.viewbutton}>
            <Button
              title="Salvar"
              color="#870B5A"
              onPress={this.ButtonAlert}
            ></Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageFundo: {
    flex: 1,
    resizeMode: "cover",
  },
  imagemEstig: {
    flex: 1,
    resizeMode: "center",
    marginTop: 20,
    width: 440,
  },
  baseText: {
    fontWeight: "bold",
    color: "#870B5A",
    textAlign: "center",
    fontSize: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  user: {
    resizeMode: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },
  informacoes: {
    color: "white",
    fontWeight: "normal",
    textAlign: "center",
    width: 50,
    height: 50,
    marginLeft: 20,
    marginBottom: 15,
  },
  input: {
    width: 300,
    height: 30,
    fontSize: 20,
    borderRadius: 10,
    borderColor: "#870B5A",
    borderStyle: "solid",
    borderWidth: 2,
    marginTop: 15,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 50,
  },
  viewbutton: {
    alignSelf: "flex-end",
    width: 200,
    height: 40,
    borderWidth: 2,
    borderColor: "#870B5A",
    borderRadius: 4,
    marginTop: 100,
    justifyContent: "center",
    marginRight: 20,
  },
});
