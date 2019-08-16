import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../stylesheets/question-styles";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentMap: this.props.data,
      pellResults: 0,
      snapResults: 0
    };
  }

  componentDidMount() {
    if (
      (this.state.componentMap.get("response_one_medicaid") ||
        this.state.componentMap.get("response_one_ssi") ||
        this.state.componentMap.get("response_one_snap") ||
        this.state.componentMap.get("response_one_reduced") ||
        this.state.componentMap.get("response_one_tanf") ||
        this.state.componentMap.get("response_one_wic")) &&
      this.state.componentMap.get("response_two_no")
    ) {
      this.setState({ pellResults: 6175 });
      this.state.componentMap.set("pellResults", this.state.pellResults);
    } else {
      this.setState({ pellResults: 6195 });
      this.state.componentMap.set("pellResults", this.state.pellResults);
    }

    if (
      this.state.componentMap.get("response_three_yes") &&
      (this.state.componentMap.get("response_four_work_study") ||
        this.state.componentMap.get("response_four_20_hours") ||
        this.state.componentMap.get("response_four_vocational") ||
        this.state.componentMap.get("response_four_child")) &&
      (this.state.componentMap.get("response_five_off_campus_own") ||
        this.state.componentMap.get("response_five_off_campus_roommates")) &&
      this.state.componentMap.get("response_seven_no")
    ) {
      var householdNumb = this.state.componentMap.get("response_six");
      if (householdNumb == 1) {
        this.setState({ snapResults: 192 * 12 });
      } else if (householdNumb == 2) {
        this.setState({ snapResults: 352 * 12 });
      } else if (householdNumb == 3) {
        this.setState({ snapResults: 504 * 12 });
      } else if (householdNumb == 4) {
        this.setState({ snapResults: 640 * 12 });
      } else if (householdNumb == 5) {
        this.setState({ snapResults: 760 * 12 });
      } else if (householdNumb == 6) {
        this.setState({ snapResults: 913 * 12 });
      } else if (householdNumb == 7) {
        this.setState({ snapResults: 1009 * 12 });
      } else if (householdNumb == 8) {
        this.setState({ snapResults: 1153 * 12 });
      } else if (householdNumb > 8) {
        var total = 1153 * 12;
        householdNumb -= 8;
        total = total + householdNumb * 144;

        this.setState({ snapResults: total });
      }
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.resultsPageText}>
          Pell: ${this.state.pellResults}
        </Text>
        <Text style={styles.resultsPageText}>
          SNAP: ${this.state.snapResults}
        </Text>
      </View>
    );
  }
}

export default Results;
