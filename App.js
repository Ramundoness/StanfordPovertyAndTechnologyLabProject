import React from "react";
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

import { Video } from "expo";
import backgroundVideo from "./assets/final.mp4";

import Questionaire from "./components/questionaire";
import FamilyMembers from "./components/familymembers";
import AdditionalIncome from "./components/additionalincome";

import { createBottomTabNavigator } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation";
import { Font } from 'expo';

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'montserrat': require('./assets/fonts/montserrat.ttf'),
    });
  }
  render() {
    return <AppContainer />;
  }
}

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Video
          source={backgroundVideo}
          resizeMode="cover"
          shouldPlay
          isLooping
          isMuted={true}
          style={{ width: 400, height: 700 }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
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
          <TextInput
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
          />
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => {
                this.props.navigation.navigate("Splash");
                console.log("hello!");
              }}
              title="Login"
              color="#FFFFFF"
              accessibilityLabel="Login"
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Dashboard");
              console.log("hello again!");
            }}
            title="Begin"
            color="#FFFFFF"
            accessibilityLabel="Begin"
          />
        </View>
      </View>
    );
  }
}

class Household extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Questionaire />
      </View>
    );
  }
}

class Family extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FamilyMembers />
      </View>
    );
  }
}

class Income extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AdditionalIncome />
      </View>
    );
  }
}

export default App;

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Household,
    Family,
    Income
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        showIcon: true,
        headerTitleContainerStyle: {
          backgroundColor: "#333333",
          margin: -1,
          padding: 0
        },
        headerTitleStyle: {
          color: "white"
        }
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Splash: { screen: SplashScreen },
  Dashboard: { screen: DashboardStackNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

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
