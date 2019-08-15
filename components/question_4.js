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
          4. Please select all of the statements that might apply to you in your
          first year of college.
        </Text>
        <Text
          style={
            this.props.work_study
              ? styles.selectedOption
              : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 1)}
        >
          a. I plan to participate in work study
        </Text>
        <Text
          style={
            this.props.work_20 ? styles.selectedOption : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 2)}
        >
          b. I plan to work at least 20 hours per week
        </Text>
        <Text
          style={
            this.props.vocational
              ? styles.selectedOption
              : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 3)}
        >
          c. I plan to be enrolled in a vocational training program
        </Text>
        <Text
          style={
            this.props.child ? styles.selectedOption : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 4)}
        >
          I plan to support a child under 6 years old while I am in college
        </Text>
        <Text
          style={
            this.props.none ? styles.selectedOption : styles.unselectedOption
          }
          onPress={this.props.action.bind(this, 5)}
        >
          e. None apply
        </Text>
      </View>
    );
  }
}
export default Question_4;
