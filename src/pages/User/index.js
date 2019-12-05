import React from "react";
import { View } from "react-native";

// import { Container } from './styles';

export default function User({ navigation }) {
  console.tron.log(navigation.getParams("user"));

  return <View />;
}
