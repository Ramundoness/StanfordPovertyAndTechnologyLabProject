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
          3. Do you plan to attend college at least half-time?
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
            //style={styles.selectedButton}
            // onPress={this.yesPressed.bind(this)}
            onPress={this.props.action.bind(this, true)}
            // onPress={() => {
            //   //this.yesPressed.bind(this);
            //   this.props.action.bind(this, true);
            // }}
          >
            <Text style={{ color: "white" }}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.props.no ? styles.selectedButton : styles.unselectedButton
            }
            // onPress={this.noPressed.bind(this)}
            onPress={this.props.action.bind(this, false)}
            // onPress={() => {
            //   //this.noPressed.bind(this);
            //   this.props.action.bind(this, false);
            // }}
          >
            <Text style={{ color: "white" }}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Question_3;
