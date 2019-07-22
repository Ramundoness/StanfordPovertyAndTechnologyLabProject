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
import { ScrollView } from "react-native-gesture-handler";

class FamilyMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <View>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.title}>
          <Text>Add Family Members</Text>
        </Text>
        <Text style={styles.description}>
          <Text>
            Include anyone living in your home for whom you are financially
            responsible (for instance, your children) and your spouse OR anyone
            in your home who is financially responsible for you (for instance,
            your parents, step-parents, caretaker relative, or other legal
            guardian) and their children. You may include family members who are
            temporarily absent from the home.
          </Text>
        </Text>
        {/* <View style={styles.container}> */}
        <Text style={styles.question}>
          <Text>Relation:</Text>
        </Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Spouse" value="spouse" />
          <Picker.Item label="Mother" value="mother" />
          <Picker.Item label="Father" value="father" />
          <Picker.Item label="Stepmother" value="stepmother" />
          <Picker.Item label="Stepfather" value="stepfather" />
          <Picker.Item label="Daughter" value="daughter" />
          <Picker.Item label="Son" value="son" />
        </Picker>
        <Text style={styles.question}>
          <Text>Please enter this family member's age:</Text>
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Age"
          maxLength={2}
          keyboardType="numeric" // change keyboard input type
          onBlur={Keyboard.dismiss}
          onChangeText={this.handleNameChange}
        />
        <Text style={styles.question}>
          <Text>Please enter this family member's monthly income:</Text>
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Monthly income"
          maxLength={5}
          keyboardType="numeric" // change keyboard input type
          onBlur={Keyboard.dismiss}
          onChangeText={this.handleNameChange}
        />
        <Text style={styles.question}>
          <Text>Please enter this family member's savings:</Text>
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Savings"
          maxLength={10}
          keyboardType="numeric" // change keyboard input type
          onBlur={Keyboard.dismiss}
          onChangeText={this.handleNameChange}
        />
        <Text>{"\n"}</Text>
        <Button
          onPress={null}
          title="Add family member"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        {/* </View> */}
      </ScrollView>
      // </View>
    );
  }
}

export default FamilyMembers;
// const styles = StyleSheet.create({
//   container: {
//     flex: 7,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     padding: 10,
//     //justifyContent: 'center',
//   },
//   title: {
//     flex: 1,
//     backgroundColor: '#fff',
//     textAlign: 'center',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   description: {
//     textAlign: 'center',
//   }
// });
const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: "#fff",
    //alignItems: 'left',
    alignItems: "flex-start",
    marginLeft: 0,
    paddingLeft: 10,
    fontSize: 20
    //fontFamily: 'montserrat'

    //padding: 10,
    //justifyContent: 'center',
  },
  description: {
    textAlign: "center"
    //fontFamily: 'montserrat'
  },
  title: {
    flex: 1,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 10
    //fontFamily: 'montserrat'
  },
  question: {
    flex: 1,
    backgroundColor: "#fff",
    fontSize: 20,
    //fontFamily: 'montserrat',
    paddingTop: 10,
    marginLeft: 10
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "black",
    width: "95%",
    paddingLeft: 10,
    marginLeft: 5,
    marginTop: 10
  }
});
