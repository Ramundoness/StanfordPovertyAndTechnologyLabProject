import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../stylesheets/question-styles";

class Question_4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_work_study: false,
      selected_work_20: false,
      selected_vocational: false,
      selected_child: false,
      selected_none: false
    };
  }

  workStudyPressed() {
    this.setState({
      selectedWorkStudy: !this.state.selected_work_study
    });
  }

  work20Pressed() {
    this.setState({
      selectedWork20: !this.state.selected_work_20
    });
  }

  vocationalPressed() {
    this.setState({
      selectedVocational: !this.state.selected_vocational
    });
  }

  childPressed() {
    this.setState({
      selectedChild: !this.state.selected_child
    });
  }

  nonePressed() {
    this.setState({
      selectedNone: !this.state.selected_none
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Question #4 */}
        <Text style={styles.question}>
          4. Please select all of the statements that might apply to you in your
          first year of college.
        </Text>
        <Text
          style={
            this.state.selected_work_study
              ? styles.selectedOption
              : styles.unselectedOption
          }
          //onPress={this.workStudyPressed.bind(this)}
          onPress={this.props.action.bind(this, "a")}
        >
          a. I plan to participate in work study
        </Text>
        <Text
          style={
            this.state.selected_work_20
              ? styles.selectedOption
              : styles.unselectedOption
          }
          //onPress={this.work20Pressed.bind(this)}
          onPress={this.props.action.bind(this, "b")}
        >
          b. I plan to work at least 20 hours per week
        </Text>
        <Text
          style={
            this.state.selected_vocational
              ? styles.selectedOption
              : styles.unselectedOption
          }
          //onPress={this.vocationalPressed.bind(this)}
          onPress={this.props.action.bind(this, "c")}
        >
          c. I plan to be enrolled in a vocational training program
        </Text>
        <Text
          style={
            this.state.selected_child
              ? styles.selectedOption
              : styles.unselectedOption
          }
          //onPress={this.childPressed.bind(this)}
          onPress={this.props.action.bind(this, "d")}
        >
          I plan to support a child under 6 years old while I am in college
        </Text>
        <Text
          style={
            this.state.selected_none
              ? styles.selectedOption
              : styles.unselectedOption
          }
          //onPress={this.nonePressed.bind(this)}
          onPress={this.props.action.bind(this, "e")}
        >
          e. None apply
        </Text>
      </View>
    );
  }
}
export default Question_4;
