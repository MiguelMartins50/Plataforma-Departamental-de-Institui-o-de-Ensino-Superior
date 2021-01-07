import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import { input } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import image from "./assets/imagemLogin.jpeg";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.imageFundo}>
          <View>
            <Text style={styles.LoginText}>Login</Text>
          </View>
          <View>
            <Text style={styles.Text}>Utilizador</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={() => {}}
            />
            <Text style={styles.Text}>Palavra-Passe</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View style={styles.ViewButton}>
            <Button
              title="Login"
              color="#870B5A"
              onPress={() => this.props.navigation.navigate("Escolha")}
            ></Button>
          </View>
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
  },
  imageFundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  input: {
    width: 300,
    marginBottom: 15,
    fontSize: 20,
    borderRadius: 10,
    borderColor: "#870B5A",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 8,
    alignSelf: "center",
  },
  Text: {
    fontSize: 16,
    color: "#870B5A",
    marginLeft: 60,
  },
  LoginText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#870B5A",
    marginBottom: 20,
    marginTop: 300,
    marginLeft: 20,
  },
  ViewButton: {
    justifyContent: "flex-end",
    width: 100,
    height: 40,
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 4,
    marginTop: 100,
    marginLeft: 280,
    marginBottom: 20,
  },
});
