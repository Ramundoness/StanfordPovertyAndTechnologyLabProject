import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../stylesheets/experimental-styles";

class Question_5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>
          Let's think about what your household will look like in college
        </Text> */}
        {/* empty view for border line */}
        {/* <View style={styles.border} /> */}

        {/* Question #5*/}
        <Text style={styles.question}>
          Select the living situation that sounds most likely for you.
        </Text>
        <Text
          style={
            this.props.home
              ? styles.selectedOptionLong
              : styles.unselectedOptionLong
          }
          onPress={this.props.action.bind(this, 1)}
        >
          Remain at home with my family
        </Text>
        <Text
          style={
            this.props.on_campus
              ? styles.selectedOptionLong
              : styles.unselectedOptionLong
          }
          onPress={this.props.action.bind(this, 2)}
        >
          On-campus in college housing with a meal plan
        </Text>
        <Text
          style={
            this.props.off_campus_own
              ? styles.selectedOptionLong
              : styles.unselectedOptionLong
          }
          onPress={this.props.action.bind(this, 3)}
        >
          Off-campus on my own
        </Text>
        <Text
          style={
            this.props.off_campus_roommates
              ? styles.selectedOptionLong
              : styles.unselectedOptionLong
          }
          onPress={this.props.action.bind(this, 4)}
        >
          Off-campus with roommates (not parents/legal guardians)
        </Text>
      </View>
    );
  }
}
export default Question_5;
