import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ImageBackground,
    TextInput,
    Animated,
    Dimensions,
    TouchableOpacity
} from "react-native";

import { Video, AnimatedRegion } from "expo";
import backgroundVideo from "./assets/final.mp4";

import { styles } from "./stylesheets/app-styles";

import Question_1 from "./components/question_1";
import Question_2 from "./components/question_2";


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
                        this.props.navigation.navigate("Questionaire");
                    }}
                >
                    <Text style={{ color: "white" }}>Begin</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            questionArray: [
                "Does anyone in your household currently receive any of the following benefits?",
                "Do you think your parents make more than $26,000 per year?",
                "Do you plan to attend college at least half-time?",
                "Please select all of the statements that might apply to you in your first year of college.",
                "Select the living situation that sounds most likely for you.",
                "How many people will live in your household and share meals together?",
                "Do you think your monthly household income will be more than $",
                "Do you have more than $2,250 in savings?"
            ],
            animation: new Animated.Value(0),
        }
    }

    handleAnswer = () => {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 400
        }).start(() => {
            this.setState((state) => {
                return {
                    index: state.index + 1
                }
            }, () => {
                this.state.animation.setValue(0)
            })
        });
    }

    render() {
        const { questionArray, index } = this.state;
        const { width } = Dimensions.get("window");

        const mainQuestionInterpolate =
            this.state.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -width]
            })

        const nextQuestionInterpolate =
            this.state.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [width, 0]
            })

        const mainQuestionStyle = {
            transform: [
                {
                    translateX: mainQuestionInterpolate
                }
            ]
        }
        const nextQuestionStyle = {
            transform: [
                {
                    translateX: nextQuestionInterpolate
                }
            ]
        }



        const question = questionArray[index];
        let nextQuestion;
        if (index + 1 < questionArray.length) {
            nextQuestion = questionArray[index + 1];
        }



        return (
            <View style={QuestionStyles.container}>
                <View style={[StyleSheet.absoluteFill, QuestionStyles.questionOverlay]}>
                    <Animated.Text style={[QuestionStyles.questionText, mainQuestionStyle]}>
                        {question}
                    </Animated.Text>
                    <Animated.Text style={[QuestionStyles.questionText, nextQuestionStyle]}>
                        {nextQuestion}
                    </Animated.Text>
                </View>



                <TouchableOpacity onPress={this.handleAnswer}
                    activeOpacity={0.7} style={QuestionStyles.nextButton}>
                    <Text style={QuestionStyles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const QuestionStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111111",
        alignItems: "center",
        justifyContent: "center"
    },
    nextButton: {
        position: "absolute",
        bottom: 0,
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
    buttonText: {
        color: "#FFF"
    },
    questionOverlay: {
        //position: "absolute",
        //top: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    questionText: {
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        fontSize: 30,
        color: "#FFF",
        textAlign: "center",

    },
});


export default App;

const AppSwitchNavigator = createStackNavigator(
    {
        Welcome: WelcomeScreen,
        Help: SplashScreen,
        Questionaire: Questions,

        //Results: Result
    },
    {
        initialRouteName: "Welcome"
    }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
