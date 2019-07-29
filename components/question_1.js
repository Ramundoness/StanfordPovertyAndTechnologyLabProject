import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../stylesheets/question-styles";

class Question_1 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected_medicaid: false,
  //     selected_SSI: false,
  //     selected_SNAP: false,
  //     selected_reduced: false,
  //     selected_TANF: false,
  //     selected_WIC: false
  //   };
  // }

  // medicaidPressed() {
  //   this.setState({
  //     selected_medicaid: !this.state.selected_medicaid
  //   });
  // }

  // ssiPressed() {
  //   this.setState({
  //     selected_SSI: !this.state.selected_SSI
  //   });
  // }

  // snapPressed() {
  //   this.setState({
  //     selected_SNAP: !this.state.selected_SNAP
  //   });
  // }

  // reducedPressed() {
  //   this.setState({
  //     selected_reduced: !this.state.selected_reduced
  //   });
  // }

  // tanfPressed() {
  //   this.setState({
  //     selected_TANF: !this.state.selected_TANF
  //   });
  // }

  // wicPressed() {
  //   this.setState({
  //     selected_WIC: !this.state.selected_WIC
  //   });
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleFirstPage}>Let's talk about right now</Text>

        {/* empty view for border line */}
        <View style={styles.border} />

        {/* Question #1 */}
        <Text style={styles.question}>
          1. Does anyone in your household currently receive any of the
          following benefits?
        </Text>
        <Text
          style={
            this.props.medicaid
              ? styles.selectedOption
              : styles.unselectedOption
          }
          //onPress={this.medicaidPressed.bind(this)}
          onPress={this.props.action.bind(this, 1)}
        >
          a. Medicaid
        </Text>
        <Text
          style={
            this.props.ssi
              ? styles.selectedOption
              : styles.unselectedOption
          }
          // onPress={this.ssiPressed.bind(this)}
          onPress={this.props.action.bind(this, 2)}
        >
          b. SSI
        </Text>
        {/* {} => {console.log("hello")} */}
        <Text
          style={
            this.props.snap
              ? styles.selectedOption
              : styles.unselectedOption
          }
          // onPress={this.snapPressed.bind(this)}
          onPress={this.props.action.bind(this, 3)}
        >
          c. SNAP
        </Text>
        <Text
          style={
            this.props.reduced
              ? styles.selectedOption
              : styles.unselectedOption
          }
          //onPress={this.reducedPressed.bind(this)}
          onPress={this.props.action.bind(this, 4)}
        >
          d. Reduced or free lunch
        </Text>
        <Text
          style={
            this.props.tanf
              ? styles.selectedOption
              : styles.unselectedOption
          }
          //onPress={this.tanfPressed.bind(this)}
          onPress={this.props.action.bind(this, 5)}
        >
          e. TANF (cash assistance)
        </Text>
        <Text
          style={
            this.props.wic
              ? styles.selectedOption
              : styles.unselectedOption
          }
          //onPress={this.wicPressed.bind(this)}
          onPress={this.props.action.bind(this, 6)}
        >
          f. WIC
        </Text>
      </View>
    );
  }
}
export default Question_1;
