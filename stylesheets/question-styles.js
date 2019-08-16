import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  title: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    paddingTop: 30,
    fontFamily: "montserrat"
  },
  titleFirstPage: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    paddingTop: 10,
    fontFamily: "montserrat",
    marginTop: 40
  },
  question: {
    backgroundColor: "#fff",
    fontSize: 20,
    fontFamily: "montserrat",
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 10,
    color: "blue"
  },
  unselectedOption: {
    marginLeft: 20,
    fontFamily: "montserrat",
    fontSize: 18,
    marginBottom: 5
  },
  selectedOption: {
    fontFamily: "montserrat_bold",
    marginLeft: 20,
    fontSize: 20,
    marginBottom: 5
  },
  selectedBinaryOption: {
    fontFamily: "montserrat_bold",
    fontSize: 20,
    marginBottom: 5,
    marginRight: 5
  },
  unselectedBinaryOption: {
    fontFamily: "montserrat",
    fontSize: 18,
    marginBottom: 5
  },
  border: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  resultsPageText: {
    fontFamily: "montserrat",
    fontSize: 30,
    color: "white",
    margin: 10
  },
  unselectedButton: {
    //position: "absolute",
    // bottom: 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bbbbbb",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    //width: 200,
    flex: 0.4,
    height: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  selectedButton: {
    //position: "absolute",
    // bottom: 0.1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#777777",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    //width: 200,
    flex: 0.4,
    height: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  numericInput: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "montserrat",
    fontSize: 30,
    width: 400
  }
});

export { styles };
