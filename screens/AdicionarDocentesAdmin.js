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

export default class AdicionarDocentesAdmin extends Component {
  ButtonAlert = () =>
    Alert.alert(
      "Alerta",
      "Deseja mesmo adicionar este docente?",
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
          <Text style={styles.baseText}> Adicionar Docente</Text>
          <View
            style={{
              flexDirection: "column",

              marginLeft: 62,
              justifyContent: "center",
              resizeMode: " center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Nome:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={() => {}}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Email:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={() => {}}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Palavra-Passe:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={() => {}}
              />
            </View>
          </View>
          <Text style={styles.baseText}> Função</Text>
          <DropDownPicker
            items={[
              {
                label: "Docente",
                value: "Docente",

                hidden: true,
              },
              {
                label: "DiretorESTIG",
                value: "DiretorESTIG",
              },
              {
                label: "DiretorESE",
                value: "DiretorESE",
              },
              {
                label: "DiretorESA",
                value: "DiretorESA",
              },
              {
                label: "DiretorESS",
                value: "DiretorESS",
              },
              {
                label: "Coordenador",
                value: "Coordenador",
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
          <Text style={styles.baseText}> Departamento</Text>
          <DropDownPicker
            items={[
              {
                label: "Departamento de informatica",
                value: "Departamento de informatica",

                hidden: true,
              },
              {
                label: "Departamento de finanças",
                value: "Departamento de finanças",
              },
              {
                label: "Departamento de administração",
                value: "Departamento de administração",
              },
              {
                label: "Departamento de publicidade",
                value: "Departamento de publicidade",
              },
              {
                label: "Sem departamento",
                value: "Sem departamento",
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
    marginTop: 20,
    marginBottom: 20,
  },
  user: {
    resizeMode: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },
  informacoes: {
    color: "#870B5A",
    fontWeight: "normal",
    textAlign: "center",
    width: 90,
    height: 50,
    marginLeft: 20,
    marginBottom: 15,
  },
  input: {
    width: 150,
    height: 30,
    fontSize: 20,
    borderRadius: 10,
    borderColor: "#870B5A",
    borderStyle: "solid",
    borderWidth: 2,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 25,
  },
  viewbutton: {
    alignSelf: "flex-end",
    width: 100,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginTop: 250,
    justifyContent: "center",
    marginRight: 20,
  },
});
