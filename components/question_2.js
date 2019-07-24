import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../stylesheets/question-styles";

class Question_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_yes: false,
      selected_no: false
    };
  }

  yesPressed() {
    this.setState({
      selectedYes: !this.state.selected_yes,
      selectedNo: false
    });
  }

  noPressed() {
    this.setState({
      selectedNo: !this.state.selected_no,
      selectedYes: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Question #2 */}
        <Text style={styles.question}>
          2. Do you think your parents make more than $26,000 per year?
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text
            style={
              this.state.selected_yes
                ? styles.selectedBinaryOption
                : styles.unselectedBinaryOption
            }
            onPress={this.yesPressed.bind(this)}
          >
            Yes
          </Text>
          <Text
            style={
              this.state.selected_no
                ? styles.selectedBinaryOption
                : styles.unselectedBinaryOption
            }
            onPress={this.noPressed.bind(this)}
          >
            {" "}
            No
          </Text>
        </View>
      </View>
    );
  }
}
export default Question_2;
