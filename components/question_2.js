import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../stylesheets/experimental-styles";

class Question_2 extends Component {
  render() {
    console.log("render called");
    return (
      <View style={styles.container}>
        {/* <Text style={styles.titleFirstPage}>Let's talk about right now</Text> */}

        {/* empty view for border line */}
        {/* <View style={styles.border} /> */}
        <Text style={styles.question}>
          Do you think your parents make more than $26,000 per year?
        </Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Text
            style={
              this.props.yes ? styles.selectedButton : styles.unselectedButton
            }
            onPress={this.props.action.bind(this, true)}
          >
            Yes
          </Text>
          <Text
            style={
              this.props.no ? styles.selectedButton : styles.unselectedButton
            }
            onPress={this.props.action.bind(this, false)}
          >
            No
          </Text>
        </View>
      </View>
    );
  }
}
export default Question_2;
