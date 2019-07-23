import React, { Component } from "react";
import DatePicker from 'react-native-datepicker'
//import { styles } from './component/styles'
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  TextInput,
  Keyboard,
  Picker,
  Button,
  ScrollView,
  ListView,
  Alert,
} from "react-native";
import { CheckBox } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { Font } from 'expo';

class Questionaire extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMedicaid: false,
      selectedSSI: false,
      selectedSNAP: false,
      selectedReduced: false,
      selectedTANF: false,
      selectedWIC: false,
      selectedYes: false,
      selectedNo: false
    }
  }

  medicaidPressed() {
    this.setState({
      selectedMedicaid: !this.state.selectedMedicaid
    })
  }

  ssiPressed() {
    this.setState({
      selectedSSI: !this.state.selectedSSI
    })
  }

  snapPressed() {
    this.setState({
      selectedSNAP: !this.state.selectedSNAP
    })
  }

  reducedPressed() {
    this.setState({
      selectedReduced: !this.state.selectedReduced
    })
  }

  tanfPressed() {
    this.setState({
      selectedTANF: !this.state.selectedTANF
    })
  }

  wicPressed() {
    this.setState({
      selectedWIC: !this.state.selectedWIC
    })
  }

  yesPressed() {
    this.setState({
      selectedYes: !this.state.selectedYes,
      selectedNo: false
    })
  }

  noPressed() {
    this.setState({
      selectedNo: !this.state.selectedNo,
      selectedYes: false
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >Let's talk about right now</Text>
        {/* empty view for border line */}
        <View style={styles.border}></View>

        {/* Question #1 */}
        <Text style={styles.question}>1. Does anyone in your household currently receive any of the following benefits?</Text>
        <Text style={this.state.selectedMedicaid ? styles.selectedOption : styles.unselectedOption} onPress={this.medicaidPressed.bind(this)}>a. Medicaid</Text>
        <Text style={this.state.selectedSSI ? styles.selectedOption : styles.unselectedOption} onPress={this.ssiPressed.bind(this)}>b. SSI</Text>
        <Text style={this.state.selectedSNAP ? styles.selectedOption : styles.unselectedOption} onPress={this.snapPressed.bind(this)}>c. SNAP</Text>
        <Text style={this.state.selectedReduced ? styles.selectedOption : styles.unselectedOption} onPress={this.reducedPressed.bind(this)}>d. Reduced or free lunch</Text>
        <Text style={this.state.selectedTANF ? styles.selectedOption : styles.unselectedOption} onPress={this.tanfPressed.bind(this)}>e. TANF (cash assistance)</Text>
        <Text style={this.state.selectedWIC ? styles.selectedOption : styles.unselectedOption} onPress={this.wicPressed.bind(this)}>f. WIC</Text>

        {/* Question #2 */}
        <Text style={styles.question}>2. Do you think your parents make more than $26,000 per year?</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={this.state.selectedYes ? styles.selectedBinaryOption : styles.unselectedBinaryOption} onPress={this.yesPressed.bind(this)}>Yes</Text>
          <Text style={this.state.selectedNo ? styles.selectedBinaryOption : styles.unselectedBinaryOption} onPress={this.noPressed.bind(this)}>  No</Text>
        </View>
      </View>
    )
  }
}
export default Questionaire;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    //justifyContent: 'flex-start'
  },
  title: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingTop: 10,
    fontFamily: 'montserrat',
  },
  question: {
    backgroundColor: '#fff',
    fontSize: 20,
    fontFamily: 'montserrat',
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 10,
    color: 'blue'
  },
  unselectedOption: {
    marginLeft: 20,
    fontFamily: 'montserrat',
    fontSize: 18,
    marginBottom: 5
  },
  selectedOption: {
    fontFamily: 'montserrat_bold',
    marginLeft: 20,
    fontSize: 20,
    marginBottom: 5,
  },
  selectedBinaryOption: {
    fontFamily: 'montserrat_bold',
    fontSize: 20,
    marginBottom: 5,
    marginRight: 5
  },
  unselectedBinaryOption: {
    fontFamily: 'montserrat',
    fontSize: 18,
    marginBottom: 5,
    
  },
  border: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  }
})