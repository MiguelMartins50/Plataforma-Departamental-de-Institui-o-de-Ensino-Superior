import React, { Component } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import imagem from "./assets/Fundo2.png";
import logo from "./assets/IPB-Branco.png";
import user from "./assets/user.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { OwnHeader } from "./shared/Header.js";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const Textopublicacoes = (
  <Text>
    Titulo: {"\n"}Data de finalização: {"\n"}Local de realização: {"\n"}Tipo:
    {"\n"}
  </Text>
);

const CONTENT = [
  {
    title: "Publicação 1",
    content: Textopublicacoes,
  },
  {
    title: "Publicação 2",
    content: Textopublicacoes,
  },
  {
    title: "Publicação 3",
    content: Textopublicacoes,
  },
  {
    title: "Publicação 4",
    content: Textopublicacoes,
  },
  {
    title: "Publicação 5",
    content: Textopublicacoes,
  },
  {
    title: "Publicação 6",
    content: Textopublicacoes,
  },
  {
    title: "Publicação 7",
    content: Textopublicacoes,
  },
  {
    title: "Publicação 8",
    content: Textopublicacoes,
  },
];

export default class Teste extends Component {
  ButtonAlert = () =>
    Alert.alert(
      "Alerta",
      "Deseja mesmo excluir esta publicação?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Excluir", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <View style={{ flexDirection: "row" }}>
          <Animatable.Text
            style={{ color: "white" }}
            animation={isActive ? "bounceIn" : undefined}
          >
            {section.content}
          </Animatable.Text>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 3,
              borderColor: "#ffff",
              backgroundColor: "#870B5A",
              width: 100,
              height: 40,
              marginLeft: 60,
              flexDirection: "column",
            }}
          >
            <Button title="Editar" color="#870B5A"></Button>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 3,
              borderColor: "#ffff",
              backgroundColor: "#870B5A",
              width: 100,
              height: 40,
              flexDirection: "column",
            }}
          >
            <Button title="Excluir" color="#870B5A"></Button>
          </View>
        </View>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <OwnHeader></OwnHeader>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.baseText}> Publicações </Text>
            <View
              style={{
                marginLeft: 150,
                backgroundColor: "#870B5A",
                height: 40,
                marginTop: 20,
              }}
            >
              <Button
                title="+"
                color="#870B5A"
                onPress={() =>
                  this.props.navigation.navigate("AdicionarProjeto")
                }
              ></Button>
            </View>
          </View>
          <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
            <Accordion
              activeSections={activeSections}
              sections={CONTENT}
              touchableComponent={TouchableOpacity}
              expandMultiple={multipleSelect}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={400}
              onChange={this.setSections}
            />
          </ScrollView>
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
  header: {
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  content: {
    padding: 20,
  },
  active: {
    backgroundColor: "#870B5A",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  inactive: {
    backgroundColor: "#870B5A",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },

  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  imageFundo: {
    flex: 1,
    resizeMode: "cover",
  },
  baseText: {
    fontWeight: "bold",
    color: "#870B5A",
    marginLeft: 50,
    fontSize: 30,
    marginTop: 20,
  },
});
