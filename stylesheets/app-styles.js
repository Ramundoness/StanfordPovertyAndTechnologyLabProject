import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  buttonContainerExp: {
    position: "absolute",
    bottom: 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ab6c95",
    borderRadius: 10,
    padding: 10,
    //marginHorizontal: 35,
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
    backgroundColor: "#fff",
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
