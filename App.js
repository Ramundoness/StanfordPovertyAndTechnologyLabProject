import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  TextInput
} from "react-native";
import Questionaire from "./components/questionaire";

import { createBottomTabNavigator } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation";

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

class WelcomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("./assets/welcome-background.jpg")}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 32,
            textShadowColor: "#000000",
            textShadowRadius: 10,
            textshadowOpacity: 0.25,
            textShadowOffset: { width: 0, height: 3 },
            textAlign: "center",
            marginBottom: 100,
            margin: 35
          }}
        >
          Stanford Center on Poverty and Inequality
        </Text>
        <TextInput
          style={{
            color: "#ffffff",
            fontSize: 16,
            marginBottom: 10,
            margin: 35,
            borderColor: "gray",
            borderWidth: 1
          }}
          placeholder="email"
          editable={true}
          maxLength={20}
          keyboardType="email-address"
        />
        <TextInput
          style={{
            color: "#ffffff",
            fontSize: 16,
            marginBottom: 50,
            margin: 35,
            borderColor: "gray",
            borderWidth: 1
          }}
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
      </ImageBackground>
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

class Survey extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Questionaire />
      </View>
    );
  }
}

class Results extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View />
      </View>
    );
  }
}

export default App;

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Survey,
    Results
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
    //backgroundColor: "#2E9298",
    backgroundColor: "#003366",
    borderRadius: 10,
    padding: 10,
    marginBottom: 50,
    width: 200,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
});
