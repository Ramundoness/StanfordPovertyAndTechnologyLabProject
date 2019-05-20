import React, { Component } from "react";
import DatePicker from "react-native-datepicker";
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
  Button
} from "react-native";

class Questionaire extends Component {
  //state = {};
  constructor(props) {
    super(props);
    this.state = { date: "2016-05-15" };
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>
          <Text>Head of Household</Text>
        </Text>
        <View style={styles.container}>
          <Text>What is your date of birth?</Text>
          <DatePicker
            style={{ width: 200 }}
            date={new Date()} //{this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate={new Date()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              this.setState({ date: date });
            }}
          />
          <Text>What is your marital status?</Text>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Married" value="married" />
            <Picker.Item label="Single" value="single" />
            <Picker.Item label="Divorced" value="divorced" />
            <Picker.Item label="Separated" value="separated" />
          </Picker>
          <Text>How many dependents do you have?</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={2}
            keyboardType="numeric" // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text>Please enter your monthly income:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={10}
            keyboardType="numeric" // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text>Please enter your savings:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={10}
            keyboardType="numeric" // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text>How much do you usually pay for rent each month?</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={10}
            keyboardType="numeric" // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
        </View>
      </View>
    );
  }
}

export default Questionaire;
const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10
    //justifyContent: 'center',
  },
  title: {
    flex: 1,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
