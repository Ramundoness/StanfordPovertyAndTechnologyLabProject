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

import { styles } from "./stylesheets/app-styles";

import Question_1 from "./components/question_1";
import Question_2 from "./components/question_2";
import Question_3 from "./components/question_3";
import Question_4 from "./components/question_4";
import Question_5 from "./components/question_5";
import Question_6 from "./components/question_6";
import Question_7 from "./components/question_7";
import Question_8 from "./components/question_8";
import Results from "./components/results";

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
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      componentMap: new Map(),
      response_one_medicaid: false,
      response_one_ssi: false,
      response_one_snap: false,
      response_one_reduced: false,
      response_one_tnaf: false,
      response_one_wic: false
    };
  }
  handler(property) {
    switch (property) {
      case 1:
        this.setState({
          response_one_medicaid: !this.state.response_one_medicaid
        });
        break;
      case 2:
        this.setState({ response_one_ssi: !this.state.response_one_ssi });
        break;
      case 3:
        this.setState({ response_one_snap: !this.state.response_one_snap });
        break;
      case 4:
        this.setState({
          response_one_reduced: !this.state.response_one_reduced
        });
        break;
      case 5:
        this.setState({ response_one_tnaf: !this.state.response_one_tnaf });
        break;
      case 6:
        this.setState({ response_one_wic: !this.state.response_one_wic });
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_1 action={this.handler} />
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_one_medicaid",
              this.state.response_one_medicaid
            );
            this.state.componentMap.set(
              "response_one_ssi",
              this.state.response_one_ssi
            );
            this.state.componentMap.set(
              "response_one_snap",
              this.state.response_one_snap
            );
            this.state.componentMap.set(
              "response_one_reduced",
              this.state.response_one_reduced
            );
            this.state.componentMap.set(
              "response_one_tnaf",
              this.state.response_one_tnaf
            );
            this.state.componentMap.set(
              "response_one_wic",
              this.state.response_one_wic
            );
            this.props.navigation.navigate("QuestionTwo", {
              componentMap: this.state.componentMap
            });
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Two extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      response_two: false,
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(result) {
    this.setState({
      response_two: result
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_2 action={this.handler} />

        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_two",
              this.state.response_two
              );
              if (this.state.componentMap.size != 1 &&
                  this.state.componentMap.get("response_two")) {
                  //MESSAGE FOR PELL ELIGIBILITY
                  console.log(this.state.componentMap.size);
                  alert("Congrats you are eligible for $6,175 in Pell");
              }
              else {
                  //MESSAGE ABOUT AVERAGE PELL AMOUNT AND INFO ABOUT OTHER CALCULATORS
                  alert("pop-up message about average pell amount and info about other calculators")
              }

            this.props.navigation.navigate("QuestionThree", {
              componentMap: this.state.componentMap
            });
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Three extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      response_three: false,
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(result) {
    this.setState({
      response_three: result
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_3 action={this.handler} />
            
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_three",
              this.state.response_three
            );
            if (this.state.response_three) {
              this.props.navigation.navigate("QuestionFour", {
                componentMap: this.state.componentMap
              });
            }
            else {
                alert("Students must attend college at least half time to be eligible for food assistance");
              this.props.navigation.navigate("Results", {
                componentMap: this.state.componentMap
              });
            }
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Four extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      response_four: "",
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(result) {
    this.setState({
      response_four: result
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_4 action={this.handler} />
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_four",
              this.state.response_four
            );
            if (this.state.response_four == "e") {
              this.props.navigation.navigate("Results", {
                componentMap: this.state.componentMap
              });
            } else {
                //POP-UP MESSAGE ABOUT REQUIREMENT TO MEET ONE OF THE CRITERIA TO BE ELIGIBLE FOR SNAP
                alert("Pop-up message about requirement to meet one of the criteria to be eligible for SNAP");
              this.props.navigation.navigate("QuestionFive", {
                componentMap: this.state.componentMap
              });
            }
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Five extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      response_five: "",
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(result) {
    this.setState({
      response_five: result
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_5 action={this.handler} />
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_five",
              this.state.response_five
            );

            // for (var [key, value] of this.state.componentMap) {
            //   console.log(key + " = " + value);
            // }

              if (
                  this.state.componentMap.get("response_one_snap") &&
                  this.state.response_five == "a") {

                  alert("You will continue to be counted on existing SNAP case until age 22 if you continue to live at home");
                  this.props.navigation.navigate("QuestionSix", {
                      componentMap: this.state.componentMap
                  });
              } else if (this.state.componentMap.get(response_five) == "b") {
                  alert("Some students with meal plans could be eligible for food assistance, but more information is required");
                  this.props.navigation.navigate("QuestionSix", {
                      componentMap: this.state.componentMap
                  });
              } else if (this.state.componentMap.get(response_five) == "c" || this.state.componentMap.get(response_five) == "d"){
                  this.props.navigation.navigate("QuestionSix", {
                      componentMap: this.state.componentMap
                  });
              } else {
                  //CHECK WITH MATT/DENISE: CASES FOR NON "C" FOR #1 AND "A" FOR #5 GO TO RESULTS?
              this.props.navigation.navigate("QuestionSix", {
                componentMap: this.state.componentMap
              });
            }
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Six extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      response_six: "nothing yet",
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(result) {
    this.setState({
      response_six: result
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_6 action={this.handler} />
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            let number = parseInt(this.state.response_six, 10);
            // console.log(parseInt(this.state.response_six, 10) - 2);
            // console.log((parseInt(this.state.response_six, 10) - 2) * 468);
            // console.log((parseInt(this.state.response_six, 10) - 2) * 468 + 1784);
            console.log(number - 2);
            console.log((number - 2) * 468);
            console.log((number - 2) * 468 + 1784);

            if (
              this.state.response_six != "" &&
              this.state.response_six != "0"
            ) {
              switch (number) {
                case 1:
                  this.state.componentMap.set("fill_seven", 1326);
                  break;
                case 2:
                  this.state.componentMap.set("fill_seven", 1784);
                  break;
                default:
                  this.state.componentMap.set(
                    "fill_seven",
                    (number - 2) * 468 + 1784
                  );
                  break;
              }

              this.state.componentMap.set(
                "response_six",
                this.state.response_six
              );

              this.props.navigation.navigate("QuestionSeven", {
                componentMap: this.state.componentMap
              });
                //ERASE LATER
              console.log(this.state.componentMap.get("fill_seven"));
            } else {
              //ADD POPUP MESSAGE HERE
                alert("You must enter a valid number of household members");
                //ERASE LATER
              console.log(this.state.response_six);
            }
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Seven extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      response_seven: false,
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(result) {
    this.setState({
      response_seven: result
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_7
          action={this.handler}
          data={this.state.componentMap.get("fill_seven")}
        />
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_seven",
              this.state.response_seven
            );

              if (!this.state.componentMap.get("response_seven")) {

                  this.props.navigation.navigate("QuestionEight", {
                      componentMap: this.state.componentMap
                  });
              }
              else {
                  this.props.navigation.navigate("Results", {
                      componentMap: this.state.componentMap
                  });
              }
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Eight extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      response_eight: false,
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(result) {
    this.setState({
      response_eight: result
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_8 action={this.handler} />
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_eight",
              this.state.response_eight
            );

            this.props.navigation.navigate("Results", {
              componentMap: this.state.componentMap
            });

            // for (var [key, value] of this.state.componentMap) {
            //   console.log(key + " = " + value);
            // }
          }}
        >
          <Text style={{ color: "white" }}>Finish</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  render() {
    for (var [key, value] of this.state.componentMap) {
      console.log(key + " = " + value);
    }

    return (
      <View style={styles.container}>
        <Results data={this.state.componentMap} />
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
      screen: WelcomeScreen
      // navigationOptions: {
      //   header: null
      // }
    },
    Help: {
      screen: SplashScreen
      // navigationOptions: {
      //   header: null
      // }
    },
    QuestionOne: {
      screen: One
      // navigationOptions: {
      //   header: null
      // }
    },
    QuestionTwo: Two,
    QuestionThree: Three,
    QuestionFour: Four,
    QuestionFive: Five,
    QuestionSix: Six,
    QuestionSeven: Seven,
    QuestionEight: Eight,
    Results: {
      screen: Result
      // navigationOptions: {
      //   header: null
      // }
    }
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
