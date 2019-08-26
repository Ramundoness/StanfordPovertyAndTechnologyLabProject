import React from "react";

import { Text, View, TouchableOpacity, Image} from "react-native";

import { Video } from "expo";
import backgroundVideo from "./assets/final.mp4";

import { styles } from "./stylesheets/app-styles";
import { Dimensions } from "react-native";

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

import LoginScreen from "./AuthScreens/LoginScreen";
import DashboardScreen from "./AuthScreens/DashboardScreen";
import LoadingScreen from "./AuthScreens/LoadingScreen";


import * as Progress from "react-native-progress";
import { fromRight, fromLeft, fadeIn } from "react-navigation-transitions";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { Font } from "expo";


import firebase from "firebase";
import { firebaseConfig } from "./config";
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      montserrat: require("./assets/fonts/montserrat.ttf"),
      montserrat_bold: require("./assets/fonts/montserrat_bold.ttf")
    });
  }
  render() {
    //return <AppContainer />;
      return <AppAuthNavigator />;
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
          {/* <HomeScreen /> */}
          <Text
            style={{
              color: "#ffffff",
              fontSize: 32,
              textAlign: "center",
              marginTop: 80,
              marginBottom: 75,
              margin: 35,
              backgroundColor: "transparent",
              textShadowColor: "#000",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10
            }}
          >
            Stanford Lab on Poverty and Technology
          </Text>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => {
              this.props.navigation.navigate("Help");
            }}
          >
            <Image
              style={{ width: 25, height: 25, marginRight: 25 }}
              source={require("./assets/google.png")}
            />
            <Text style={{ color: "#333" }}>Sign in With Google</Text>
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
        <Text>Hello World!</Text>
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
  static navigationOptions = {
    headerStyle: { elevation: 0, backgroundColor: "#D291BC" },
    headerLeft: (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Progress.Bar
          style={{
            flex: 1,
            width: Math.round(Dimensions.get("window").width) - 80,
            marginHorizontal: 40,
            marginVertical: 25
          }}
          resizeMode="contain"
          progress={0.11}
          color={"#fff"}
          width={Math.round(Dimensions.get("window").width) - 80}
        />
      </View>
    )
  };

<<<<<<< HEAD
  getExistingData = async() => {
    var question_1_ref = firestoreDatabase.collection('raymondyao28@gmail.com');
    question_1_ref.get().then(function(doc) {
      if (doc.exists) {
        console.log("data is: " + doc.data()["response_one_medicaid"])
        this.state = {
          componentMap: new Map(),
          response_one_medicaid: doc.data()["response_one_medicaid"],
          response_one_ssi: doc.data()["response_one_ssi"],
          response_one_snap: doc.data()["response_one_snap"],
          response_one_reduced: doc.data()["response_one_reduced"],
          response_one_tanf: doc.data()["response_one_tanf"],
          response_one_wic: doc.data()["response_one_wic"]
          //componentMap: this.props.navigation.state.params.componentMap
        };
      } else {
          console.log("Document does not exist!");
        // return false;
      }
    }).catch(function (error) {
        console.log("Error getting document: ", error);
    });
  }

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.ref = firestoreDatabase.collection('raymondyao28@gmail.com')
    this.getExistingData()
    // var question_1_values = this.getExistingData();
    // console.log("returned array is: " + question_1_values)
    // console.log("med: " + question_1_values.response_one_medicaid)
    // console.log("med: " + question_1_values.response_one_ssi)
    // console.log("med: " + question_1_values.response_one_snap)

    // console.log("array is: " + Object.keys(question_1_values))
    // console.log("med: " + question_1_values["response_one_medicaid"])
    // this.state = {
    //   componentMap: new Map(),
    //   response_one_medicaid: question_1_values["response_one_medicaid"],
    //   response_one_ssi: question_1_values["response_one_ssi"],
    //   response_one_snap: question_1_values["response_one_snap"],
    //   response_one_reduced: question_1_values["response_one_reduced"],
    //   response_one_tanf: question_1_values["response_one_tanf"],
    //   response_one_wic: question_1_values["response_one_wic"]
    //   //componentMap: this.props.navigation.state.params.componentMap
    // };
=======
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
      response_one_wic: false
      //componentMap: this.props.navigation.state.params.componentMap
    };
>>>>>>> parent of 317f902... Write to cloud firestore database
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
          wic={this.state.response_one_wic}
        />
        <TouchableOpacity
          style={styles.buttonContainerExp}
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
<<<<<<< HEAD
            var question_1_ref = firestoreDatabase.collection('raymondyao28@gmail.com').doc('question_1')
            for (const [key, value] of (this.state.componentMap).entries()) {
              question_1_ref.set({ [key]: value }, { merge: true });
            }
=======
>>>>>>> parent of 317f902... Write to cloud firestore database
          }}
        >
          <Text
            style={{ color: "white", fontFamily: "montserrat", fontSize: 18 }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Two extends React.Component {
  static navigationOptions = {
    headerStyle: { elevation: 0, backgroundColor: "#D291BC" },
    headerLeft: (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Progress.Bar
          style={{
            flex: 1,
            width: Math.round(Dimensions.get("window").width) - 80,
            marginHorizontal: 40,
            marginVertical: 25
          }}
          resizeMode="contain"
          progress={0.22}
          color={"#fff"}
          width={Math.round(Dimensions.get("window").width) - 80}
        />
      </View>
    )
  };

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
          style={styles.buttonContainerExp}
          onPress={() => {
            this.state.componentMap.set(
              "response_two_yes",
              this.state.response_two_yes
            );
            this.state.componentMap.set(
              "response_two_no",
              this.state.response_two_no
            );
            // console.log("size is " + this.state.componentMap.size + 
            //   this.state.componentMap.get("response_one_medicaid") + this.state.componentMap.get("response_one_ssi") + this.state.componentMap.get("response_one_snap") + this.state.componentMap.get("response_one_reduced") + this.state.componentMap.get("response_one_tanf") + this.state.componentMap.get("response_one_wic") + this.state.componentMap.get("response_two_yes") + this.state.componentMap.get("response_two_no"));
            if (
              (this.state.componentMap.get("response_one_medicaid") ||
                this.state.componentMap.get("response_one_ssi") ||
                this.state.componentMap.get("response_one_snap") ||
                this.state.componentMap.get("response_one_reduced") ||
                this.state.componentMap.get("response_one_tanf") ||
                this.state.componentMap.get("response_one_wic")) &&
              this.state.componentMap.get("response_two_no")
            ) {
              //MESSAGE FOR PELL ELIGIBILITY
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
          <Text
            style={{ color: "white", fontFamily: "montserrat", fontSize: 18 }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Three extends React.Component {
  static navigationOptions = {
    headerStyle: { elevation: 0 },
    headerRight: (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Progress.Bar
          style={{ flex: 1, width: 200, margin: 25 }}
          resizeMode="contain"
          progress={0.33}
          width={200}
        />
      </View>
    )
  };

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
              this.state.componentMap.get("response_three_no")
            ) {
              this.props.navigation.navigate("Results", {
                componentMap: this.state.componentMap
              });
              //MESSAGE ABOUT MUST BE AT LEAST HALF TIME FOR FOOD ASSISTANCE
              alert(
                "pop-up message about students must attending college for at least half time to be eligible for food assistance"
              );
            } else {
              this.props.navigation.navigate("QuestionFour", {
                componentMap: this.state.componentMap
              });
            }
<<<<<<< HEAD
=======

            this.props.navigation.navigate("QuestionFour", {
              componentMap: this.state.componentMap
            });
>>>>>>> parent of 317f902... Write to cloud firestore database
          }}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Four extends React.Component {
  static navigationOptions = {
    headerStyle: { elevation: 0 },
    headerRight: (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Progress.Bar
          style={{ flex: 1, width: 200, margin: 25 }}
          resizeMode="contain"
          progress={0.44}
          width={200}
        />
      </View>
    )
  };

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
          response_four_work_study: !this.state.response_four_work_study
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
          response_four_none: !this.state.response_four_none,
          response_four_work_study: false,
          response_four_20_hours: false,
          response_four_vocational: false,
          response_four_child: false
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
          none={this.state.response_four_none}
        />
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
            if (
              this.state.componentMap.size != 1 &&
              this.state.componentMap.get("response_four_none")
            ) {
              this.props.navigation.navigate("Results", {
                componentMap: this.state.componentMap
              });
              //POP-UP MESSAGE ABOUT REQUIREMENT TO MEET ONE OF THE CRITERIA TO BE ELIGIBLE FOR SNAP
              alert(
                "Pop-up message about requirement to meet one of the criteria to be eligible for SNAP"
              );
            } else {
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
  static navigationOptions = {
    headerStyle: { elevation: 0 },
    headerRight: (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Progress.Bar
          style={{ flex: 1, width: 200, margin: 25 }}
          resizeMode="contain"
          progress={0.55}
          width={200}
        />
      </View>
    )
  };
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      response_five_remain_home: false,
      response_five_on_campus: false,
      response_five_off_campus_own: false,
      response_five_off_campus_roommates: false,
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
          response_five_off_campus_roommates: false
        });
        break;
      case 2:
        this.setState({
          response_five_on_campus: !this.state.response_five_on_campus,
          response_five_remain_home: false,
          response_five_off_campus_own: false,
          response_five_off_campus_roommates: false
        });
        break;
      case 3:
        this.setState({
          response_five_off_campus_own: !this.state
            .response_five_off_campus_own,
          response_five_remain_home: false,
          response_five_on_campus: false,
          response_five_off_campus_roommates: false
        });
        break;
      case 4:
        this.setState({
          response_five_off_campus_roommates: !this.state
            .response_five_off_campus_roommates,
          response_five_remain_home: false,
          response_five_on_campus: false,
          response_five_off_campus_own: false
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
          off_campus_roommates={this.state.response_five_off_campus_roommates}
        />
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
              this.state.componentMap.get("response_five_remain_home")
            ) {
              alert(
                "You will continue to be counted on existing SNAP case until age 22 if you continue to live at home"
              );
              this.props.navigation.navigate("Results", {
                componentMap: this.state.componentMap
              });
            } else if (
              this.state.componentMap.get("response_five_on_campus")
            ) {
              alert(
                "Some students with meal plans could be eligible for food assistance, but more information is required"
              );
              this.props.navigation.navigate("Results", {
                componentMap: this.state.componentMap
              });
            } else if (
<<<<<<< HEAD
              this.state.componentMap.get("response_five_off_campus_own") ||
              this.state.componentMap.get("response_five_off_campus_roommates")
=======
              this.state.componentMap.get("response_five_off_campus_own") ==
                3 ||
              this.state.componentMap.get(
                "response_five_off_campus_roommates"
              ) == 4
>>>>>>> parent of 317f902... Write to cloud firestore database
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
  static navigationOptions = {
    headerStyle: { elevation: 0 },
    headerRight: (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Progress.Bar
          style={{ flex: 1, width: 200, margin: 25 }}
          resizeMode="contain"
          progress={0.66}
          width={200}
        />
      </View>
    )
  };

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
            if (number > 0) {
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
<<<<<<< HEAD
=======

>>>>>>> parent of 317f902... Write to cloud firestore database
              this.props.navigation.navigate("QuestionSeven", {
                componentMap: this.state.componentMap
              });
            } else {
              alert("You must enter a valid number of household members");
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
  static navigationOptions = {
    headerStyle: { elevation: 0 },
    headerRight: (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Progress.Bar
          style={{ flex: 1, width: 200, margin: 25 }}
          resizeMode="contain"
          progress={0.77}
          width={200}
        />
      </View>
    )
  };

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
      this.setState({
        response_seven_yes: true,
        response_seven_no: false
      });
    } else {
      this.setState({
        response_seven_yes: false,
        response_seven_no: true
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_7
          action={this.handler}
          data={this.state.componentMap.get("fill_seven")}
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
<<<<<<< HEAD
            if (this.state.componentMap.get("response_seven_no")) {
=======
            if (!this.state.componentMap.get("response_seven_yes")) {
>>>>>>> parent of 317f902... Write to cloud firestore database
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
  static navigationOptions = {
    headerStyle: { elevation: 0 },
    headerRight: (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Progress.Bar
          style={{ flex: 1, width: 200, margin: 25 }}
          resizeMode="contain"
          progress={0.88}
          width={200}
        />
      </View>
    )
  };

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
      this.setState({
        response_eight_yes: true,
        response_eight_no: false
      });
    } else {
      this.setState({
        response_eight_yes: false,
        response_eight_no: true
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Question_8
          action={this.handler}
          yes={this.state.response_eight_yes}
          no={this.state.response_eight_no}
        />
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
    if (
      (this.state.componentMap.get("response_one_medicaid") ||
        this.state.componentMap.get("response_one_ssi") ||
        this.state.componentMap.get("response_one_snap") ||
        this.state.componentMap.get("response_one_reduced") ||
        this.state.componentMap.get("response_one_tanf") ||
        this.state.componentMap.get("response_one_wic")) &&
      this.state.componentMap.get("response_two_no")
    ) {
      this.setState({ pellResults: 6175 });
      this.state.componentMap.set("pellResults", this.state.pellResults);
    } else {
      this.setState({ pellResults: 6195 });
      this.state.componentMap.set("pellResults", this.state.pellResults);
    }

    if (
      this.state.componentMap.get("response_three_yes") &&
      (this.state.componentMap.get("response_four_work_study") ||
        this.state.componentMap.get("response_four_20_hours") ||
        this.state.componentMap.get("response_four_vocational") ||
        this.state.componentMap.get("response_four_child")) &&
      (this.state.componentMap.get("response_five_off_campus_own") ||
        this.state.componentMap.get("response_five_off_campus_roommates")) &&
      this.state.componentMap.get("response_seven_no")
    ) {
      var householdNumb = this.state.componentMap.get("response_six");
      if (householdNumb == 1) {
        this.setState({ snapResults: 192 * 12 });
      } else if (householdNumb == 2) {
        this.setState({ snapResults: 352 * 12 });
      } else if (householdNumb == 3) {
        this.setState({ snapResults: 504 * 12 });
      } else if (householdNumb == 4) {
        this.setState({ snapResults: 640 * 12 });
      } else if (householdNumb == 5) {
        this.setState({ snapResults: 760 * 12 });
      } else if (householdNumb == 6) {
        this.setState({ snapResults: 913 * 12 });
      } else if (householdNumb == 7) {
        this.setState({ snapResults: 1009 * 12 });
      } else if (householdNumb == 8) {
        this.setState({ snapResults: 1153 * 12 });
      } else if (householdNumb > 8) {
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
        <Results
          pResults={this.state.pellResults}
          sResults={this.state.snapResults}
        />
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

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions go there
  if (
    prevScene &&
    prevScene.route.routeName === "Loading" &&
    nextScene.route.routeName === "Help"
  ) {
    return fadeIn();
  } else if (
    prevScene &&
    prevScene.route.routeName === "Loading" &&
    nextScene.route.routeName === "Welcome"
  ) {
    return fadeIn();
  } else if (
    prevScene &&
    prevScene.route.routeName === "Results" &&
    nextScene.route.routeName === "Welcome"
  ) {
    return fromLeft();
  }
  return fromRight();
};



const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    DashboardScreen: DashboardScreen,

    QuestionOne: One,
    QuestionTwo: Two,
    QuestionThree: Three,
    QuestionFour: Four,
    QuestionFive: Five,
    QuestionSix: Six,
    QuestionSeven: Seven,
    QuestionEight: Eight,
    Results: { screen: Result, navigationOptions: { header: null } }
});

const AppAuthNavigator = createAppContainer(AppSwitchNavigator);

/*
const AppSwitchNavigator = createStackNavigator(
  {
    Loading: { screen: LoadingScreen, navigationOptions: { header: null } },
    Welcome: { screen: WelcomeScreen, navigationOptions: { header: null } },
    Help: { screen: SplashScreen, navigationOptions: { header: null } },
    QuestionOne: One,
    QuestionTwo: Two,
    QuestionThree: Three,
    QuestionFour: Four,
    QuestionFive: Five,
    QuestionSix: Six,
    QuestionSeven: Seven,
    QuestionEight: Eight,
    Results: { screen: Result, navigationOptions: { header: null } }
  },
  {
    initialRouteName: "Loading",
    headerMode: "float",
    transitionConfig: nav => handleCustomTransition(nav)
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
*/
