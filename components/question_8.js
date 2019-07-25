import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../stylesheets/question-styles";

class Question_8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question_8_selectedYes: false,
      question_8_selectedNo: false
    };
  }

  yesPressed() {
    this.setState({
      question_8_selectedYes: !this.state.question_8_selectedYes,
      question_8_selectedNo: false
    });
  }

  noPressed() {
    this.setState({
      question_8_selectedNo: !this.state.question_8_selectedNo,
      question_8_selectedYes: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Question #8 */}
        <Text style={styles.question}>
          8. Do you have more than $2,250 in savings?
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text
            style={
              this.state.question_8_selectedYes
                ? styles.selectedBinaryOption
                : styles.unselectedBinaryOption
            }
            //onPress={this.yesPressed.bind(this)}
            onPress={this.props.action.bind(this, true)}
          >
            Yes
          </Text>
          <Text
            style={
              this.state.question_8_selectedNo
                ? styles.selectedBinaryOption
                : styles.unselectedBinaryOption
            }
            //onPress={this.noPressed.bind(this)}
            onPress={this.props.action.bind(this, false)}
          >
            {" "}
            No
          </Text>
        </View>
      </View>
    );
  }
}
export default Question_8;
