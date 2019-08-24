import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  filterBackgroundStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .3)",
    flex: 1,
    width: "100%",
    height: "100%"
  },
  nextButtonTextStyle: {
    color: "white",
    fontFamily: "montserrat",
    fontSize: 18
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003366",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
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
  nextButtonContainerStyle: {
    position: "absolute",
    bottom: 0.1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "#ab6c95",
    backgroundColor: "rgba(255, 255, 255, .3)",
    borderRadius: 10,
    padding: 10,
    //marginHorizontal: 35,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 50,
    width: 334,
    height: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  container: {
    flex: 1,
    backgroundColor: "#D291BC",
    alignItems: "center",
    justifyContent: "center"
  },
  signInButton: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#003366",
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: 300,
    height: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
});

export { styles };
