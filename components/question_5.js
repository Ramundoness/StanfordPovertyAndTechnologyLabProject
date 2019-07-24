import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../stylesheets/question-styles";

class Question_5 extends Component {
  constructor(props) {
      super(props);
      this.state = {
          question_5_selectedHome: false,
          question_5_selectedOncampus: false,
          question_5_selectedOffcampusOwn: false,
          question_5_selectedOffcampus: false
      };
  }

    homePressed() {
        this.setState({
            question_5_selectedHome: true,
            question_5_selectedOncampus: false,
            question_5_selectedOffcampusOwn: false,
            question_5_selectedOffcampus: false
        });
    }

    oncampusPressed() {
        this.setState({
            question_5_selectedHome: false,
            question_5_selectedOncampus: true,
            question_5_selectedOffcampusOwn: false,
            question_5_selectedOffcampus: false
        });
    }
    offcampusownPressed() {
        this.setState({
            question_5_selectedHome: false,
            question_5_selectedOncampus: false,
            question_5_selectedOffcampusOwn: true,
            question_5_selectedOffcampus: false
        });
    }
    offcampusPressed() {
        this.setState({
            question_5_selectedHome: false,
            question_5_selectedOncampus: false,
            question_5_selectedOffcampusOwn: false,
            question_5_selectedOffcampus: true
        });
    }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >Let's think about what your household will look like in college</Text>
        {/* empty view for border line */}
        <View style={styles.border}></View>

        {/* Question #5*/}
        <Text style={styles.question}>5. Select the living situation that sounds most likely for you.</Text>
        <Text style={this.state.question_5_selectedHome ? styles.selectedOption : styles.unselectedOption} onPress={this.homePressed.bind(this)}>a. Remain at home with my family</Text>
            <Text style={this.state.question_5_selectedOncampus ? styles.selectedOption : styles.unselectedOption} onPress={this.oncampusPressed.bind(this)}>b. On-campus in college housing with a meal plan</Text>
            <Text style={this.state.question_5_selectedOffcampusOwn ? styles.selectedOption : styles.unselectedOption} onPress={this.offcampusownPressed.bind(this)}>c. Off-campus on my own</Text>
            <Text style={this.state.question_5_selectedOffcampus ? styles.selectedOption : styles.unselectedOption} onPress={this.offcampusPressed.bind(this)}>d. Off-campus with roommates (not parents/legal guardians)</Text>
      </View>
    )
  }
}
export default Question_5;