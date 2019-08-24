import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "../stylesheets/experimental-styles";

class Question_1 extends Component {
  render() {
    return (
      <View
        //source={require("../assets/background_one.jpg")}
        style={styles.container_one}
      >
        {/* <Text style={styles.titleFirstPage}>Let's talk about right now</Text> */}

        {/* empty view for border line */}
        {/* <View style={styles.border} /> */}

        {/* Question #1 */}
        <Text style={styles.question}>
          Does anyone in your household currently receive any of the following
          benefits?
        </Text>
        <Text
          style={
            this.props.medicaid
              ? styles.selectedOption
              : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 1)}
        >
          Medicaid
        </Text>
        {/* <Text
          style={
            this.props.medicaid ? styles.selectedText : styles.unselectedText
          }
          onPress={this.props.action.bind(this, 1)}
        >
          Medicaid
        </Text> */}
        <Text
          style={
            this.props.ssi ? styles.selectedOption : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 2)}
        >
          SSI
        </Text>
        <Text
          style={
            this.props.snap ? styles.selectedOption : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 3)}
        >
          SNAP
        </Text>
        <Text
          style={
            this.props.reduced ? styles.selectedOption : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 4)}
        >
          Reduced or free lunch
        </Text>
        <Text
          style={
            this.props.tanf ? styles.selectedOption : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 5)}
        >
          TANF (cash assistance)
        </Text>
        <Text
          style={
            this.props.wic ? styles.selectedOption : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 6)}
        >
          WIC
        </Text>
      </View>
    );
  }
}
export default Question_1;
