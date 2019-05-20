import React, { Component } from "react";
import DatePicker from 'react-native-datepicker'
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
} from "react-native";

class FamilyMembers extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>
          <Text>Add Family Members</Text>
        </Text>
        <Text>Include anyone living in your home for whom you are financially responsible
          (for instance, your children) and your spouse OR anyone in your home who is financially
          responsible for you (for instance, your parents, step-parents, caretaker relative, or other
          legal guardian) and their children. You may include family members who are temporarily absent
          from the home.</Text>
        <View style={styles.container}>
          <Text>Relation:</Text>
          <Picker
            selectedValue={null}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Spouse" value="spouse" />
            <Picker.Item label="Mother" value="mother" />
            <Picker.Item label="Father" value="father" />
            <Picker.Item label="Stepmother" value="stepmother" />
            <Picker.Item label="Stepfather" value="stepfather" />
            <Picker.Item label="Daughter" value="daughter" />
            <Picker.Item label="Son" value="son" />
          </Picker>
          <Text>Please enter this family member's age</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Age"
            maxLength={2}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text>Please enter this family member's monthly income:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={5}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Text>Please enter this family member's savings:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={10}
            keyboardType='numeric' // change keyboard input type
            onBlur={Keyboard.dismiss}
            onChangeText={this.handleNameChange}
          />
          <Button
            onPress={null}
            title="Add family member"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    )
  }
}

export default FamilyMembers;
const styles = StyleSheet.create({
  container: {
    flex: 7,
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
