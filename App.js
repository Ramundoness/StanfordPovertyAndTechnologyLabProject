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
import Question_8 from "./components/question_8";

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
                this.setState({ response_one_medicaid: !this.state.response_one_medicaid });
                break;
            case 2:
                this.setState({ response_one_ssi: !this.state.response_one_ssi });
                break;
            case 3:
                this.setState({ response_one_snap: !this.state.response_one_snap });
                break;
            case 4:
                this.setState({ response_one_reduced: !this.state.response_one_reduced });
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
                        this.state.componentMap.set("response_one_medicaid", this.state.response_one_medicaid);
                        this.state.componentMap.set("response_one_ssi", this.state.response_one_ssi);
                        this.state.componentMap.set("response_one_snap", this.state.response_one_snap);
                        this.state.componentMap.set("response_one_reduced", this.state.response_one_reduced);
                        this.state.componentMap.set("response_one_tnaf", this.state.response_one_tnaf);
                        this.state.componentMap.set("response_one_wic", this.state.response_one_wic);
                        this.props.navigation.navigate("QuestionTwo", { componentMap: this.state.componentMap });
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
        componentMap: this.props.navigation.state.params.componentMap,
        //arrayMap: this.props.navigation.state.params.componentMap.entries().next().value
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
            {/*remove this
            <Text>{this.state.arrayMap[0]}</Text>
            */}
      <TouchableOpacity
          style={styles.buttonContainerTwo}
                onPress={() => {
                    //console.log(this.componentMap.get("response_one_medicaid"));
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
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      response_three: false
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
            if (this.state.response_three) {
              this.props.navigation.navigate("QuestionFour");
            } else {
              this.props.navigation.navigate("Results");
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
      response_four: ""
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
            if (this.state.response_four === "e") {
              this.props.navigation.navigate("Results");
            } else {
              this.props.navigation.navigate("QuestionFive");
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
  render() {
    return (
      <View style={styles.container}>
        <Question_5 />
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
        {/*<Question_6 />*/}
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
        {/*<Question_7 />*/}
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
        <Question_8 />
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
