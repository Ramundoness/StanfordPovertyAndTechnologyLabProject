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
import HomeScreen from "./components/homescreen";

import { createBottomTabNavigator } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation";
import { Font } from "expo";

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      montserrat: require("./assets/fonts/montserrat.ttf"),
      montserrat_bold: require("./assets/fonts/montserrat_bold.ttf")
    });
  }
  render() {
    return <AppContainer />;
  }
}

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Video
          source={backgroundVideo}
          resizeMode="cover"
          shouldPlay={true}
          isLooping={true}
          isMuted={true}
          style={{ width: 600, height: 1000 }}
        />
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <HomeScreen />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              this.props.navigation.navigate("Help");
            }}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.props.navigation.navigate("QuestionOne");
          }}
        >
          <Text style={{ color: "white" }}>Begin</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class One extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Questionaire />
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.props.navigation.navigate("QuestionTwo");
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Two extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>REPLACE ME WITH A COMPONENT FOR QUESTION TWO</Text>
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.props.navigation.navigate("QuestionThree");
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Three extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>REPLACE ME WITH A COMPONENT FOR QUESTION THREE</Text>
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.props.navigation.navigate("QuestionFour");
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Four extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>REPLACE ME WITH A COMPONENT FOR QUESTION FOUR</Text>
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.props.navigation.navigate("QuestionFive");
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Five extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>REPLACE ME WITH A COMPONENT FOR QUESTION FIVE</Text>
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.props.navigation.navigate("QuestionSix");
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Six extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>REPLACE ME WITH A COMPONENT FOR QUESTION SIX</Text>
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.props.navigation.navigate("QuestionSeven");
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Seven extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>REPLACE ME WITH A COMPONENT FOR QUESTION SEVEN</Text>
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.props.navigation.navigate("QuestionEight");
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Eight extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>REPLACE ME WITH A COMPONENT FOR QUESTION EIGHT</Text>
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.props.navigation.navigate("Results");
          }}
        >
          <Text style={{ color: "white" }}>Finish</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Result extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>REPLACE ME WITH A COMPONENT FOR THE RESULT</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.props.navigation.navigate("Welcome");
          }}
        >
          <Text style={{ color: "white" }}>Return</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;

const AppSwitchNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Help: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    },
    QuestionOne: {
      screen: One,
      navigationOptions: {
        header: null
      }
    },
    QuestionTwo: Two,
    QuestionThree: Three,
    QuestionFour: Four,
    QuestionFive: Five,
    QuestionSix: Six,
    QuestionSeven: Seven,
    QuestionEight: Eight,
    Results: {
      screen: Result,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Welcome"
  }
);

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
    height: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },

  buttonContainerTwo: {
    position: "absolute",
    bottom: 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003366",
    borderRadius: 10,
    padding: 10,
    marginBottom: 50,
    width: 300,
    height: 50,
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
