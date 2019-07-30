import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../stylesheets/question-styles";

class Question_8 extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Question #8 */}
        <Text style={styles.question}>
          8. Do you have more than $2,250 in savings?
        </Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            style={
              this.props.yes ? styles.selectedButton : styles.unselectedButton
            }
            onPress={this.props.action.bind(this, true)}
          >
            <Text style={{ color: "white" }}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.props.no ? styles.selectedButton : styles.unselectedButton
            }
            onPress={this.props.action.bind(this, false)}
          >
            <Text style={{ color: "white" }}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Question_8;
