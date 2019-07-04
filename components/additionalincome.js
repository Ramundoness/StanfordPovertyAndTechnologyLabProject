import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  Keyboard,
  Picker,
  Button,
  StatusBar,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


class AdditionalIncome extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView style = {{flex: 1}}>
        <Text style={styles.title}>
          <Text>Additional Income as a Family Unit</Text>
        </Text>
        <Text style={styles.description}>
          <Text>Include anyone living in your home for whom you are financially responsible
            (for instance, your children) and your spouse OR anyone in your home who is financially
            responsible for you (for instance, your parents, step-parents, caretaker relative, or
            other legal guardian) and their children. You may include family members who are temporarily
          absent from the home.</Text>
        </Text>

        <View style={styles.container}>
          <Text style={styles.question}>
            <Text>Please enter any other income:</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Other income"
            maxLength={5}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text style={styles.question}>
            <Text>Please enter monthly child support received:</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Monthly child support"
            maxLength={5}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text style={styles.question}>
            <Text>Please enter any one-time payments you have received:</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Payments"
            maxLength={5}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text style={styles.question}>
            <Text>Are you or is a family member currently pregnant:</Text>
          </Text>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>
          <Text style={styles.question}>
            <Text>How many students in your family are in college? (Including yourself)</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="# of students in college"
            maxLength={2}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text>{"\n"}</Text>
          <Button style={styles.buttonStyle}
            onPress={null}
            title="Let's Apply!"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </ScrollView>
    )
  }
}

export default AdditionalIncome;
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
    description: {
    textAlign: 'center',
    fontFamily: 'montserrat'
  },
  title: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 25,
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
    marginLeft: 2
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
    width: "95%",
    paddingLeft: 10,
    marginLeft: 2,
    marginTop: 10
  },
  buttonStyle: {
    alignSelf: 'center'
  }
});