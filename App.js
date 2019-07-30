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
      'montserrat': require("./assets/fonts/montserrat.ttf"),
      'montserrat_bold': require("./assets/fonts/montserrat_bold.ttf")
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
      response_one_tanf: false,
      response_one_wic: false,
      //componentMap: this.props.navigation.state.params.componentMap
    };
  }
  handler(property) {
    switch (property) {
      case 1:
        this.setState({
          response_one_medicaid: !this.state.response_one_medicaid,
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
        this.setState({ response_one_tanf: !this.state.response_one_tanf });
        break;
      case 6:
        this.setState({ response_one_wic: !this.state.response_one_wic });
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_1
          action={this.handler}
          medicaid={this.state.response_one_medicaid}
          ssi={this.state.response_one_ssi}
          snap={this.state.response_one_snap}
          reduced={this.state.response_one_reduced}
          tanf={this.state.response_one_tanf}
          wic={this.state.response_one_wic} />
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
              "response_one_tanf",
              this.state.response_one_tanf
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
      response_two_yes: false,
      response_two_no: false,
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(result) {
    if (result) {
      this.setState(
        {
          response_two_yes: true,
          response_two_no: false
        },
        () => {
          console.log(this.state.response_two_yes);
          console.log(this.state.response_two_no);
        }
      );
    } else {
      this.setState(
        {
          response_two_yes: false,
          response_two_no: true
        },
        () => {
          console.log(this.state.response_two_yes);
          console.log(this.state.response_two_no);
        }
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_2
          action={this.handler}
          yes={this.state.response_two_yes}
          no={this.state.response_two_no}
        />

        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_two_yes",
              this.state.response_two_yes
            );
            this.state.componentMap.set(
              "response_two_no",
              this.state.response_two_no
            );
            if (
                (this.state.componentMap.get("response_one_medicaid") || 
                    this.state.componentMap.get("response_one_ssi") ||
                    this.state.componentMap.get("response_one_snap") ||
                    this.state.componentMap.get("response_one_reduced") ||
                    this.state.componentMap.get("response_one_tanf") ||
                    this.state.componentMap.get("response_one_wic")
                    )
                &&
              this.state.componentMap.get("response_two_no")
            ) {
              //MESSAGE FOR PELL ELIGIBILITY
              //console.log(this.state.componentMap.size);
              alert("Congrats you are eligible for $6,175 in Pell");
            } else {
              //MESSAGE ABOUT AVERAGE PELL AMOUNT AND INFO ABOUT OTHER CALCULATORS
              alert(
                "pop-up message about average pell amount and info about other calculators"
              );
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
      response_three_yes: false,
      response_three_no: false,
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(result) {
    if (result) {
      this.setState(
        {
          response_three_yes: true,
          response_three_no: false
        },
        () => {
          console.log(this.state.response_three_yes);
          console.log(this.state.response_three_no);
        }
      );
    } else {
      this.setState(
        {
          response_three_yes: false,
          response_three_no: true
        },
        () => {
          console.log(this.state.response_three_yes);
          console.log(this.state.response_three_no);
        }
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_3
          action={this.handler}
          yes={this.state.response_three_yes}
          no={this.state.response_three_no}
        />

        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_three_yes",
              this.state.response_three_yes
            );
            this.state.componentMap.set(
              "response_three_no",
              this.state.response_three_no
            );
            if (
              this.state.componentMap.size != 1 &&
              this.state.componentMap.get("response_three_yes")
            ) {
              //MESSAGE FOR PELL ELIGIBILITY
              console.log(this.state.componentMap.size);
              alert("Congrats you are eligible for $6,175 in Pell");
            } else {
              //MESSAGE ABOUT AVERAGE PELL AMOUNT AND INFO ABOUT OTHER CALCULATORS
              alert(
                "pop-up message about average pell amount and info about other calculators"
              );
            }

            this.props.navigation.navigate("QuestionFour", {
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

class Four extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      response_four_work_study: false,
      response_four_20_hours: false,
      response_four_vocational: false,
      response_four_child: false,
      response_four_none: false,
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(property) {
    switch (property) {
      case 1:
        this.setState({
          response_four_work_study: !this.state.response_four_work_study,
        });
        break;
      case 2:
        this.setState({ 
          response_four_20_hours: !this.state.response_four_20_hours 
        });
        break;
      case 3:
        this.setState({ 
          response_four_vocational: !this.state.response_four_vocational 
        });
        break;
      case 4:
        this.setState({
          response_four_child: !this.state.response_four_child
        });
        break;
      case 5:
        this.setState({ 
          response_four_none: !this.state.response_four_none 
        });
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_4 
          action={this.handler}
          work_study={this.state.response_four_work_study}
          work_20={this.state.response_four_20_hours}
          vocational={this.state.response_four_vocational}
          child={this.state.response_four_child}
          none={this.state.response_four_none}/>
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_four_work_study",
              this.state.response_four_work_study
            );
            this.state.componentMap.set(
              "response_four_20_hours",
              this.state.response_four_20_hours
            );
            this.state.componentMap.set(
              "response_four_vocational",
              this.state.response_four_vocational
            );
            this.state.componentMap.set(
              "response_four_child",
              this.state.response_four_child
            );
            this.state.componentMap.set(
              "response_four_none",
              this.state.response_four_none
            );
            if (this.state.componentMap.size != 1 && 
                this.state.componentMap.get("response_four_none")) {
              this.props.navigation.navigate("Results", {
                componentMap: this.state.componentMap
              });
            } else {
              //POP-UP MESSAGE ABOUT REQUIREMENT TO MEET ONE OF THE CRITERIA TO BE ELIGIBLE FOR SNAP
              alert(
                "Pop-up message about requirement to meet one of the criteria to be eligible for SNAP"
              );
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
      response_five_remain_home: false,
      response_five_on_campus: false,
      response_five_off_campus_own: false,
      response_five_off_campus_roommates:false,
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(property) {
    switch (property) {
      case 1:
        this.setState({
          response_five_remain_home: !this.state.response_five_remain_home,
          response_five_on_campus: false,
          response_five_off_campus_own: false,
          response_five_off_campus_roommates:false,
        });
        break;
      case 2:
        this.setState({ 
          response_five_on_campus: !this.state.response_five_on_campus,
          response_five_remain_home: false,
          response_five_off_campus_own: false,
          response_five_off_campus_roommates:false,
        });
        break;
      case 3:
        this.setState({ 
          response_five_off_campus_own: !this.state.response_five_off_campus_own,
          response_five_remain_home: false,
          response_five_on_campus: false,
          response_five_off_campus_roommates:false,
        });
        break;
      case 4:
        this.setState({
          response_five_off_campus_roommates: !this.state.response_five_off_campus_roommates,
          response_five_remain_home: false,
          response_five_on_campus: false,
          response_five_off_campus_own: false,
        });
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_5 
          action={this.handler} 
          home={this.state.response_five_remain_home}
          on_campus={this.state.response_five_on_campus}
          off_campus_own={this.state.response_five_off_campus_own}
          off_campus_roommates={this.state.response_five_off_campus_roommates}/>
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_five_remain_home",
              this.state.response_five_remain_home
            );
            this.state.componentMap.set(
              "response_five_on_campus",
              this.state.response_five_on_campus
            );
            this.state.componentMap.set(
              "response_five_off_campus_own",
              this.state.response_five_off_campus_own
            );
            this.state.componentMap.set(
              "response_five_off_campus_roommates",
              this.state.response_five_off_campus_roommates
            );
            
            // TODO: Check that all these conditions work
            if (
              this.state.componentMap.get("response_one_snap") &&
              this.state.response_five == 1
            ) {
              alert(
                "You will continue to be counted on existing SNAP case until age 22 if you continue to live at home"
              );
              this.props.navigation.navigate("Results", {
                componentMap: this.state.componentMap
              });
            } else if (this.state.componentMap.get("response_five_on_campus") == 2) {
              alert(
                "Some students with meal plans could be eligible for food assistance, but more information is required"
              );
              this.props.navigation.navigate("Results", {
                componentMap: this.state.componentMap
              });
            } else if (
              this.state.componentMap.get("response_five_off_campus_own") == 3 ||
              this.state.componentMap.get("response_five_off_campus_roommates") == 4
            ) {
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
      response_seven_yes: false,
      response_seven_no: false,
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(result) {
    if (result) {
      this.setState(
        {
          response_seven_yes: true,
          response_seven_no: false
        },
      );
    } else {
      this.setState(
        {
          response_seven_yes: false,
          response_seven_no: true
        },
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_7
          action={this.handler}
          yes={this.state.response_seven_yes}
          no={this.state.response_seven_no}
        />
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_seven_yes",
              this.state.response_seven_yes
            );
            this.state.componentMap.set(
              "response_seven_no",
              this.state.response_seven_no
            );
            if (!this.state.componentMap.get("response_seven_yes")) {
              this.props.navigation.navigate("QuestionEight", {
                componentMap: this.state.componentMap
              });
            } else {
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
      response_eight_yes: false,
      response_eight_no: false,
      componentMap: this.props.navigation.state.params.componentMap
    };
  }

  handler(result) {
    if (result) {
      this.setState(
        {
          response_eight_yes: true,
          response_eight_no: false
        },
      );
    } else {
      this.setState(
        {
          response_eight_yes: false,
          response_eight_no: true
        },
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_8 
          action={this.handler} 
          yes={this.state.response_eight_yes}
          no={this.state.response_eight_no}/>
        <TouchableOpacity
          style={styles.buttonContainerTwo}
          onPress={() => {
            this.state.componentMap.set(
              "response_eight_yes",
              this.state.response_eight_yes
            );
            this.state.componentMap.set(
              "response_eight_no",
              this.state.response_eight_no
            );
            this.props.navigation.navigate("Results", {
              componentMap: this.state.componentMap
            });
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
        componentMap: this.props.navigation.state.params.componentMap,
        pellResults: 0,
        snapResults: 0
    };
  }

    componentDidMount() {
        console.log("Result Screen Mounted Properly");
        //console.log(this.state.componentMap.size);
        if ((this.state.componentMap.get("response_one_medicaid") ||
            this.state.componentMap.get("response_one_ssi") ||
            this.state.componentMap.get("response_one_snap") ||
            this.state.componentMap.get("response_one_reduced") ||
            this.state.componentMap.get("response_one_tanf") ||
            this.state.componentMap.get("response_one_wic")) &&
            this.state.componentMap.get("response_two_no")) {

            this.setState({ pellResults: 6175 });
            this.state.componentMap.set("pellResults", this.state.pellResults);
        } else {

            this.setState({ pellResults: 6195 });
            this.state.componentMap.set("pellResults", this.state.pellResults);
        }

        if ((this.state.componentMap.get("response_three_yes")) &&
            (this.state.componentMap.get("response_four_work_study") ||
            this.state.componentMap.get("response_four_20_hours") ||
            this.state.componentMap.get("response_four_vocational") ||
            this.state.componentMap.get("response_four_child")) &&
            (this.state.componentMap.get("response_five_off_campus_own") ||
            this.state.componentMap.get("response_five_off_campus_roommates")) &&
            this.state.componentMap.get("response_seven_no")) {

            var householdNumb = this.state.componentMap.get("response_six");
            if (householdNumb == 1) {
                this.setState({ snapResults: 192 * 12 });
            }
            else if (householdNumb == 2) {
                this.setState({ snapResults: 352 * 12 });
            }
            else if (householdNumb == 3) {
                this.setState({ snapResults: 504 * 12 });
            }
            else if (householdNumb == 4) {
                this.setState({ snapResults: 640 * 12 });
            }
            else if (householdNumb == 5) {
                this.setState({ snapResults: 760 * 12 });
            }
            else if (householdNumb == 6) {
                this.setState({ snapResults: 913 * 12 });
            }
            else if (householdNumb == 7) {
                this.setState({ snapResults: 1009 * 12 });
            }
            else if (householdNumb == 8) {
                this.setState({ snapResults: 1153 * 12 });
            }
            else if (householdNumb > 8) {
                var total = 1153 * 12;
                householdNumb -= 8;
                total = total + householdNumb * 144;

                this.setState({ snapResults: total });
            }
        }









    }
  render() {
    for (var [key, value] of this.state.componentMap) {
      console.log(key + " = " + value);
    }

    return (
      <View style={styles.container}>
            {/*<Results data={this.state.componentMap} />*/}
            <Results pResults={this.state.pellResults}
                sResults={this.state.snapResults} />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.props.navigation.navigate("Welcome");
          }}
        >
          <Text style={{ color: "white" }}>Return Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;

const AppSwitchNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Help: SplashScreen,
    QuestionOne: One,
    QuestionTwo: Two,
    QuestionThree: Three,
    QuestionFour: Four,
    QuestionFive: Five,
    QuestionSix: Six,
    QuestionSeven: Seven,
    QuestionEight: Eight,
    Results: Result
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
