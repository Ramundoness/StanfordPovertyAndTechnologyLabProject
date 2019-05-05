import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
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
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Dashboard");
              console.log("hello!");
            }}
            title="Login"
            color="#FFFFFF"
            accessibilityLabel="Login"
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
    backgroundColor: "#2E9298",
    borderRadius: 10,
    padding: 10,
    marginBottom: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
});
