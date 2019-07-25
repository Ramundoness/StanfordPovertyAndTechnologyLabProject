import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../stylesheets/question-styles";

class Questionaire extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question_7_selectedYes: false,
            question_7_selectedNo: false,
        }
    }

    yesPressed() {
        this.setState({
            question_7_selectedYes: !this.state.question_7_selectedYes,
            question_7_selectedNo: false
        })
    }

    noPressed() {
        this.setState({
            question_7_selectedNo: !this.state.question_7_selectedNo,
            question_7_selectedYes: false
        })
    }

  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.title} >Let's think about what your income will look like in college</Text>
        {/* empty view for border line */}
        <View style={styles.border}></View>

            {/* Question #7 */}
            <Text style={styles.question}>7. Do you think your monthly household income will be more than $_____?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={this.state.question_7_selectedYes ? styles.selectedBinaryOption : styles.unselectedBinaryOption} onPress={this.yesPressed.bind(this)}>Yes</Text>
                <Text style={this.state.question_7_selectedNo ? styles.selectedBinaryOption : styles.unselectedBinaryOption} onPress={this.noPressed.bind(this)}>  No</Text>
            </View>
      </View>
    )
  }
} export default Question_7;