import { HeaderTitle } from "@react-navigation/stack";
import React, { Component } from "react";
import { Alert, Image } from "react-native";
import { Header } from "react-native-elements";
import { imageheader } from "./imageheader.js";

export const OwnHeader = (props) => (
  <Header
    placement="left"
    leftComponent={{
      icon: "menu",
      color: "#fff",
      onPress: () => {
        props.navigation.toggleDrawer();
      },
    }}
    backgroundColor="#870B5A"
    rightComponent={{
      icon: "info",
      color: "#fff",
      onPress: () =>
        Alert.alert(
          "Clicked on Info",
          "<message here>",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ],
          { cancelable: false }
        ),
    }}
  />
);
