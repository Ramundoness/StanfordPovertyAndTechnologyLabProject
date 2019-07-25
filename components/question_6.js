import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../stylesheets/question-styles";

class Question_6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question_6_amount: -1
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Question #6 */}
        <Text style={styles.question}>
          6. How many people will live in your household and share meals
          together?
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {/*<Text style={this.state.question_8_selectedYes ? styles.selectedBinaryOption : styles.unselectedBinaryOption} onPress={this.yesPressed.bind(this)}>Yes</Text>
                    <Text style={this.state.question_8_selectedNo ? styles.selectedBinaryOption : styles.unselectedBinaryOption} onPress={this.noPressed.bind(this)}>  No</Text>*/}
          <TextInput
            style={styles.input}
            placeholder="Enter number here"
            editable={true}
            maxLength={20}
            keyboardType="default"
            onChange={event => {
              this.props.action(event.nativeEvent.text);
            }}
            // onChangeText={answ => {
            //   //console.log(answ);
            //   let response = answ;
            //   this.props.action.bind(this, response);
            // }}
          />
        </View>
      </View>
    );
  }
}
export default Question_6;
