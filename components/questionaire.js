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
} from "react-native";
import { KeyboardAvoidingView } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { Font } from 'expo';


class Questionaire extends Component {
  //state = {};
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      // <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flexGrow: 1, justifyContent: 'flex-start', backgroundColor: 'red' }}>

        <ScrollView style={{ flexGrow: 1 }}>
          {/* <Text style={styles.title}>
          <Text>Head of Household</Text>
        </Text> */}
          <Text style={styles.question}>
            <Text>What is your date of birth?</Text>
          </Text>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.date}//{new Date()} //{this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate={new Date()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
          />
          <Text style={styles.question}>
            <Text>What is your marital status?</Text>
          </Text>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Married" value="married" />
            <Picker.Item label="Single" value="single" />
            <Picker.Item label="Divorced" value="divorced" />
            <Picker.Item label="Separated" value="separated" />
          </Picker>
          <View style={{ flexGrow: 1, flexDirection: 'row', backgroundColor: 'blue' }}>
            <Text style={styles.question}>
              <Text>How many dependents do you have?</Text>
            </Text>
            <Tooltip width={400} popover={
              <Text style={styles.tooltip} >Dependents are defined as-{"\n"}
                - Any child of yours, including a biological or adopted child, who receives
                more than half of their support from you (the child does not have to live
              with you).{"\n"}
                - Also, any person other than your spouse, who lives with you and receives
                more than half of his or her support from you and will continue to in the future.
            </Text>}>
              <Image source={require('./img/tooltip_icon.png')}
                style={{ width: 20, height: 20 }} />
            </Tooltip>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="# of dependents"
            maxLength={2}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}

          />
          <View style={{ flexGrow: 1, flexDirection: 'row', backgroundColor: 'green' }}>
            <Text style={styles.question}>
              <Text>Please enter your monthly income:</Text>
            </Text>
            <Tooltip width={400} popover={
              <Text style={styles.tooltip}>Explain how much you usually earn each month. Include
                  only wages, salary, tips, and commission before taxes are taken out. If you are
                  self-employed (for instance, if you are a babysitter or own your own business)
                  include your earnings after expenses.
            </Text>}>
              <Image source={require('./img/tooltip_icon.png')}
                style={{ width: 20, height: 20 }} />
            </Tooltip>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Monthly income"
            maxLength={5}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <View style={{ flexGrow: 1, flexDirection: 'row', backgroundColor: 'yellow' }}>
            <Text style={styles.question}>
              <Text>Please enter your savings:</Text>
            </Text>
            <Tooltip width={400} popover={
              <Text style={styles.tooltip}> Enter the amount of money you have saved in a bank
                  account or at home. Examples of savings include money in checking accounts,
                  savings accounts, bonds, or other investments.
            </Text>}>
              <Image source={require('./img/tooltip_icon.png')}
                style={{ width: 20, height: 20 }} />
            </Tooltip>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Savings"
            maxLength={10}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <View style={{ flexGrow: 1, flexDirection: 'row', backgroundColor: 'orange' }}>
            <Text style={styles.question}>
              <Text>How much do you usually pay for rent each month?</Text>
            </Text>
            <Tooltip width={400} popover={
              <Text style={styles.tooltip}> Explain how much you usually earn each month. Include
                  only wages, salary, tips, and commission before taxes are taken out. If you are
                  self-employed (for instance, if you are a babysitter or own your own business)
                  include your earnings after expenses.
            </Text>}>
              <Image source={require('./img/tooltip_icon.png')}
                style={{ width: 20, height: 20 }} />
            </Tooltip>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Rent"
            maxLength={10}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
        </ScrollView>
       </View>


    )
  }
}

// put these in a separate styles page later using ./styles
export default Questionaire;
const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: '#fff',
    //alignItems: 'left',
    alignItems: 'flex-start',
    marginLeft: 0,
    paddingLeft: 10,
    fontSize: 20,
    fontFamily: 'montserrat'

    //padding: 10,
    //justifyContent: 'center',
  },
  title: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 10,
    fontFamily: 'montserrat'
  },
  question: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 20,
    fontFamily: 'montserrat',
    paddingTop: 10,
    marginLeft: 10,
    alignItems: 'flex-start'
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
    width: "95%",
    paddingLeft: 10,
    marginLeft: 5,
    marginTop: 10
  },
  tooltip: {
    fontSize: 20,
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    flex: 1
  }
});
