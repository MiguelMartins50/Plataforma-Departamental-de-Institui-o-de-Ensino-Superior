import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Button,
} from "react-native";
import { input } from "react-native-elements";
import image from "./assets/imagemDesign.jpeg";
import logo from "./assets/IPB.jpeg";
import icone from "./assets/icon.jpeg";

const dados = [
  {
    nome: "Departamento 1",
  },
  {
    nome: "Departamento 2",
  },
  {
    nome: "Departamento 3",
  },
  {
    nome: "Departamento 4",
  },
];

export default class ListaDepartamentosAdm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.imageFundo}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <View style={{ height: 50, backgroundColor: "#870B5A" }}>
              <Image source={logo} style={styles.logotipo}></Image>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", marginBottom: 150, marginLeft: 80 }}
          >
            <Text style={styles.TextDepartamento}>Departamentos</Text>
            <View style={{ marginLeft: 50 }}>
              <Button color="#870B5A" height={40} title="+">
                {" "}
              </Button>
            </View>
          </View>
          <View
            style={{
              alignSelf: "flex-end",
              marginRight: 20,
              marginTop: 20,
              width: 90,
              borderWidth: 5,
              borderRadius: 2,
              borderColor: "white",
            }}
          ></View>

          <FlatList
            data={dados}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
              <View style={{}}>
                <View
                  style={styles.Button}
                  style={{ flexDirection: "row", marginLeft: 50 }}
                >
                  <View>
                    <Text style={styles.textoItem}>{item.nome}</Text>{" "}
                  </View>{" "}
                  <View style={{ marginRight: 30 }}>
                    <Button
                      color="#870B5A"
                      height={40}
                      title="Editar"
                      onPress={() => this.props.navigate("PaginaDocente")}
                    ></Button>
                  </View>{" "}
                  <Button
                    color="#870B5A"
                    height={40}
                    title="Excluir"
                    onPress={() => this.props.navigate("PaginaDocente")}
                  ></Button>
                </View>
              </View>
            )}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  imageFundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  TextDepartamento: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#870B5A",
    alignSelf: "center",
  },
  TextNome: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#870B5A",
    marginLeft: 50,
  },
  TextEmail: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#870B5A",
    marginLeft: 50,
    marginTop: 40,
  },
  logotipo: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
  },
  user: {
    resizeMode: "center",
    width: 80,
    height: 80,
  },
  textoItem: {
    fontSize: 25,
    color: "#870B5A",
    borderBottomWidth: 1,
    borderBottomColor: "#870B5A",
  },
  Button: {
    justifyContent: "flex-end",
    width: 100,
    borderWidth: 1,
    borderColor: "#870B5A",
    borderRadius: 4,
    backgroundColor: "#870B5A",
  },
});
