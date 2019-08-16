import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../stylesheets/experimental-styles";

class Question_3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.titleFirstPage}>
          Let's jump ahead to your first year in college
        </Text> */}

        {/* empty view for border line */}
        {/* <View style={styles.border} /> */}

        {/* Question #3 */}
        <Text style={styles.question}>
          Do you plan to attend college at least half-time?
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
            //style={styles.selectedButton}
            // onPress={this.yesPressed.bind(this)}
            onPress={this.props.action.bind(this, 1)}
            // onPress={() => {
            //   //this.yesPressed.bind(this);
            //   this.props.action.bind(this, true);
            // }}
          >
            Yes
          </Text>
          <Text
            style={
              this.props.no ? styles.selectedButton : styles.unselectedButton
            }
            // onPress={this.noPressed.bind(this)}
            onPress={this.props.action.bind(this, 2)}
            // onPress={() => {
            //   //this.noPressed.bind(this);
            //   this.props.action.bind(this, false);
            // }}
          >
            No
          </Text>
        </View>
      </View>
    );
  }
}
export default Question_3;
