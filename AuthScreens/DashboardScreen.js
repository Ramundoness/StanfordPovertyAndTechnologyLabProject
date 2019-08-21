import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
 

class DashboardScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Dashboard Screen</Text>
                <Button title="Begin Test" onPress={() => {
                    this.props.navigation.navigate("QuestionOne");
                }}/>
            </View>

        );
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});