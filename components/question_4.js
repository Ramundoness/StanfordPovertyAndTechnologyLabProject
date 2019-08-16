import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../stylesheets/experimental-styles";

class Question_4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.titleFirstPage}>
          Let's jump ahead to your first year in college
        </Text> */}

        {/* empty view for border line */}
        {/* <View style={styles.border} /> */}

        {/* Question #4 */}
        <Text style={styles.question}>
          Please select all of the statements that might apply to you in your
          first year of college.
        </Text>
        <Text
          style={
            this.props.work_study
              ? styles.selectedOptionLong
              : styles.unselectedOptionLong
          }
          onPress={this.props.action.bind(this, 1)}
        >
          I plan to participate in work study
        </Text>
        <Text
          style={
            this.props.work_20
              ? styles.selectedOptionLong
              : styles.unselectedOptionLong
          }
          onPress={this.props.action.bind(this, 2)}
        >
          I plan to work at least 20 hours per week
        </Text>
        <Text
          style={
            this.props.vocational
              ? styles.selectedOptionLong
              : styles.unselectedOptionLong
          }
          onPress={this.props.action.bind(this, 3)}
        >
          I plan to be enrolled in a vocational training program
        </Text>
        <Text
          style={
            this.props.child
              ? styles.selectedOptionLong
              : styles.unselectedOptionLong
          }
          onPress={this.props.action.bind(this, 4)}
        >
          I plan to support a child under 6 years old while I am in college
        </Text>
        {/* <Text
          style={
            this.props.none ? styles.selectedOption : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 5)}
        >
          None apply
        </Text> */}
      </View>
    );
  }
}
export default Question_4;
