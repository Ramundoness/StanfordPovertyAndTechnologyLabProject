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

class AdditionalIncome extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>
          <Text>Additional Income as a Family Unit</Text>
        </Text>
        <Text>Include anyone living in your home for whom you are financially responsible
          (for instance, your children) and your spouse OR anyone in your home who is financially
          responsible for you (for instance, your parents, step-parents, caretaker relative, or
          other legal guardian) and their children. You may include family members who are temporarily
          absent from the home.</Text>
        <View style={styles.container}>
          <Text>Please enter any other income:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={5}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text>Please enter monthly child support received:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={5}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text>Please enter any one-time payments you have received:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={5}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text>Are you or is a family member currently pregnant:</Text>
          <Picker
            selectedValue={null}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>
          <Text>How many students in your family are in college? (Including yourself)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={2}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Button
            onPress={null}
            title="Let's Apply!"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    )
  }
}

export default AdditionalIncome;
const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    //justifyContent: 'center',
  },
  title: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }
});