import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../stylesheets/question-styles";

class Question_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_medicaid: false,
      selected_SSI: false,
      selected_SNAP: false,
      selected_reduced: false,
      selected_TANF: false,
      selected_WIC: false
    };
  }

  medicaidPressed() {
    this.setState({
      selectedMedicaid: !this.state.selected_medicaid
    });
  }

  ssiPressed() {
    this.setState({
      selectedSSI: !this.state.selected_SSI
    });
  }

  snapPressed() {
    this.setState({
      selectedSNAP: !this.state.selected_SNAP
    });
  }

  reducedPressed() {
    this.setState({
      selectedReduced: !this.state.selected_reduced
    });
  }

  tanfPressed() {
    this.setState({
      selectedTANF: !this.state.selected_TANF
    });
  }

  wicPressed() {
    this.setState({
      selectedWIC: !this.state.selected_WIC
    });
  }

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
            this.state.selected_medicaid
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
            this.state.selected_SSI
              ? styles.selectedOption
              : styles.unselectedOption
          }
          //onPress={this.ssiPressed.bind(this)}
          onPress={this.props.action.bind(this, 2)}
        >
          b. SSI
        </Text>
        <Text
          style={
            this.state.selected_SNAP
              ? styles.selectedOption
              : styles.unselectedOption
          }
          //onPress={this.snapPressed.bind(this)}
          onPress={this.props.action.bind(this, 3)}
        >
          c. SNAP
        </Text>
        <Text
          style={
            this.state.selected_reduced
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
            this.state.selected_TANF
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
            this.state.selected_WIC
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
