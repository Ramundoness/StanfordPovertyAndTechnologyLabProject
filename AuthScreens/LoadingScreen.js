import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from "react-native";
import { styles } from "../stylesheets/app-styles";
import * as Progress from "react-native-progress";
import firebase from "firebase";

class LoadingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isVisible: false
        };
      }
    
      componentDidMount() {
        requestAnimationFrame(() => {
          this.setState({
            isVisible: true
          });
        });
        this.checkIfLoggedIn();
      }
    
      checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.props.navigation.navigate("DashboardScreen");
          } else {
            this.props.navigation.navigate("LoginScreen");
          }
        });
      };
    
      render() {
        if (!this.state.isVisible) {
          return null;
        }
    
        return (
          <ImageBackground
            style={styles.imageBackgroundStyle}
            source={require("../assets/background_one.jpg")}

          >
            <View style={styles.filterBackgroundStyle}>
              <Progress.CircleSnail
                size={60}
                progress={0.5}
                unfilledColor="transparent"
                thickness={3}
                borderWidth={0}
                color="#fff"
              />
            </View>
          </ImageBackground>
        );
      }
}

export default LoadingScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });