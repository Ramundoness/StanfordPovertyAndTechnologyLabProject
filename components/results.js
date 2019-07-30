import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../stylesheets/question-styles";

class Results extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            componentMap: this.props.data,
        };
    }*/



    state = {};
  render() {
    return (
        <View>
            <Text>Pell: ${this.props.pResults}</Text>
            <Text>SNAP: ${this.props.sResults}</Text>
      </View>
    );
  }
}

export default Results;
