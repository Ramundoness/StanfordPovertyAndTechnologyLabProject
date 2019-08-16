import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../stylesheets/experimental-styles";

class Question_7 extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>
          Let's think about what your income will look like in college
        </Text> */}
        {/* empty view for border line */}
        {/* <View style={styles.border} /> */}

        {/* Question #7 */}
        <Text style={styles.question}>
          Do you think your monthly household income will be more than $
          {this.props.data}?
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
export default Question_7;
