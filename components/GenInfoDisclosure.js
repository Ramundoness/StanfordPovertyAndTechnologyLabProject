import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView } from "react-native";
import { styles } from "../stylesheets/app-styles";
import { Font } from "expo";

class GenInfoDisclosure extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Font.loadAsync({
            montserrat: require("../assets/fonts/montserrat.ttf"),
            montserrat_bold: require("../assets/fonts/montserrat_bold.ttf")
        });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return (
            <ImageBackground
                style={styles.imageBackgroundStyle}
                source={require("../assets/background_one.jpg")}
            >
                <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled>

                    <View style={styles.filterBackgroundStyle}>
                        <Text
                            style={{
                                color: "white",
                                fontFamily: "montserrat",
                                fontSize: 18,
                                justifyContent: "center",
                                alignItems: "center",
                                marginHorizontal: 40,
                                textAlign: "center",
                                marginTop: -60,
                                paddingBottom: 15,
                            }}
                        >
                            The government provides 30 billion in grants to students every year.
                             We need to ask you some questions to help you determine how much money could be available for you.
                             We will not share your personal information.
                             Enter your phone number and email below and we will send you a summary of all the money you could get to pay for college.
                             We can also remind about important deadlines for financial aid and other benefits.
                    </Text>
                        <TextInput
                            style={styles.numericInput}
                            editable={true}
                            placeholder="Email"
                            selectionColor="#fff"
                            keyboardType="email-address"
                        // onChange={event => {
                        //     this.props.action(event.nativeEvent.text);
                        // }}
                        />

                        <TextInput
                            style={styles.numericInput}
                            editable={true}
                            placeholder="Phone Number"
                            selectionColor="#fff"
                            keyboardType="phone-pad"
                            maxLength={12}
                        // onChange={event => {
                        //     this.props.action(event.nativeEvent.text);
                        // }}
                        />

                    </View>
                </KeyboardAvoidingView>
                
                <TouchableOpacity // took Touchable Opacity out of the above View container because KeyboardAvoidingView overlayed the button
                                  // on top of text
                    style={styles.nextButtonContainerStyle}
                    onPress={() => {
                        this.props.navigation.navigate("HomeScreen");
                    }}
                >
                    <Text
                        style={{ color: "white", fontFamily: "montserrat", fontSize: 18 }}
                    >
                        Let's Get Started!
                            </Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}
export default GenInfoDisclosure;