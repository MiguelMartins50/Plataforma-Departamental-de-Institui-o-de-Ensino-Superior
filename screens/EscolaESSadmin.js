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
import imagemesa from "./assets/ess.jpeg";
import logo from "./assets/IPB-Branco.png";
import user from "./assets/user.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { OwnHeader } from "./shared/Header.js";

export default class EscolaESSadmin extends Component {
  ButtonAlert = () =>
    Alert.alert(
      "Alerta",
      "Deseja mesmo excluir esta escola?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <Text style={styles.baseText}>Escola Superior de Saúde</Text>
          <Image source={imagemesa} style={styles.imagemESS}></Image>
          <View style={{ margin: 20 }}>
            <Text
              style={{
                color: "#870B5A",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
                marginBottom: 50,
              }}
            >
              Diretor
            </Text>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <Image source={user} style={styles.user}></Image>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.informacoes}>Nome:</Text>
                <Text style={styles.informacoes}>Email:</Text>
              </View>
            </View>
            <Text style={styles.textesa}>
              A Escola Superior de Saúde de Bragança (ESSa) é uma das cinco
              Escolas integradas no Instituto Politécnico de Bragança. É uma
              instituição pública de formação de nível superior que tem como
              missão a formação de 1º e 2º ciclo, a formação pós-graduada, a
              investigação e a prestação de serviços à comunidade, no domínio da
              saúde. Tem procurado ao longo da sua existência conciliar uma
              estratégia de crescimento com o princípio fundamental da procura
              da qualidade formativa, cumprindo a sua função institucional, pelo
              que tem merecido o reconhecimento de outras instituições do
              ensino, da saúde e da comunidade em geral. Como instituição de
              ensino superior ocupa neste momento, um importante espaço
              formativo na área das ciências da saúde, constituindo-se como um
              pilar fundamental para o desenvolvimento da região.
            </Text>
          </View>
          <View style={styles.viewbuttoneditar}>
            <Button
              title="Editar"
              color="#870B5A"
              onPress={() => this.props.navigation.navigate("EditarESS")}
            ></Button>
          </View>
          <View style={styles.viewbuttonexcluir}>
            <Button
              title="Excluir"
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
  imagemESS: {
    flex: 1,
    marginTop: 20,
  },
  baseText: {
    fontWeight: "bold",
    color: "#870B5A",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  textesa: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "justify",
    backgroundColor: "transparent",
    marginBottom: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  logotipo: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
  },
  user: {
    resizeMode: "center",
    justifyContent: "flex-start",
    width: 80,
    height: 80,
  },
  informacoes: {
    color: "#870B5A",
    fontWeight: "normal",
    textAlign: "center",
    width: 50,
    height: 50,
    marginLeft: 50,
  },
  viewbuttoneditar: {
    alignSelf: "flex-end",
    width: 150,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginBottom: 20,
    justifyContent: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  viewbuttonexcluir: {
    alignSelf: "flex-end",
    width: 150,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginBottom: 5,
    justifyContent: "center",
    marginRight: 10,
  },
});
