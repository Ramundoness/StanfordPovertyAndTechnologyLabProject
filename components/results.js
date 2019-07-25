import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  Keyboard,
  Picker,
  Button,
  StatusBar
} from "react-native";

class Results extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>Pell: $</Text>
        <Text>SNAP: $</Text>
      </View>
    );
  }
}

export default Results;
