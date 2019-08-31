import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 32,
            textAlign: "center",
            marginTop: 80,
            marginBottom: 95,
            margin: 35,
            backgroundColor: "transparent",
            textShadowColor: "#000",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10
          }}
        >
          Stanford Center on Poverty and Inequality
        </Text>
        {/* <TextInput
          style={styles.input}
          placeholder="email"
          editable={true}
          maxLength={20}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          editable={true}
          maxLength={20}
          secureTextEntry={true}
          keyboardType="default"
        /> */}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            this.props.navigation.navigate("LoadingScreen")
          }}
        >
          <Image
            style={{ width: 25, height: 25, marginRight: 25 }}
            source={require("../assets/google.png")}
          />
          <Text style={{ color: "#333" }}>Sign in With Google</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003366",
    borderRadius: 10,
    padding: 10,
    marginBottom: 50,
    width: 300,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },

  input: {
    width: 300,
    borderRadius: 10,
    height: 50,
    backgroundColor: "#FFF",
    marginBottom: 15,
    paddingLeft: 15
  }
});
