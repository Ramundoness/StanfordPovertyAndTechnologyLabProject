import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "../stylesheets/app-styles";

class DashboardScreen extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.imageBackgroundStyle}
                source={require("../assets/background_one.jpg")}
            >
                <View style={styles.filterBackgroundStyle}>
                    <Text
                        style={{
                            color: "white",
                            fontFamily: "montserrat",
                            fontSize: 18,
                            justifyContent: "center",
                            alignItems: "center",
                            marginHorizontal: 40,
                            textAlign: "center"
                        }}
                    >
                        This survey will help you figure out what benefits and aid you're
                        eligible for from the Federal Government!
              </Text>
                    <TouchableOpacity
                        style={styles.nextButtonContainerStyle}
                        onPress={() => {
                            this.props.navigation.navigate("QuestionOne");
                        }}
                    >
                        <Text
                            style={{ color: "white", fontFamily: "montserrat", fontSize: 18 }}
                        >
                            Begin
                </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default DashboardScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });