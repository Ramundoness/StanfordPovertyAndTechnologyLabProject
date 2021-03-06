import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#D291BC"
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    paddingTop: 30,
    fontFamily: "montserrat"
  },
  titleFirstPage: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    paddingTop: 10,
    fontFamily: "montserrat",
    marginTop: 40
  },
  question: {
    fontSize: 20,
    fontFamily: "montserrat_bold",
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
    marginTop: 10,
    color: "#fff"
  },
  unselectedOption: {
    textAlign: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 40,
    fontFamily: "montserrat",
    fontSize: 18,
    marginVertical: 5,
    color: "#fff"
  },
  selectedOption: {
    backgroundColor: "#fff",
    textAlign: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 40,
    fontFamily: "montserrat",
    fontSize: 18,
    marginVertical: 5,
    color: "#D291BC"
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
    fontSize: 30
  },
  unselectedButton: {
    //position: "absolute",
    // bottom: 0.1,
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    fontFamily: "montserrat",
    fontSize: 18,
    //width: 200,
    flex: 0.4,
    height: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    color: "#fff"
  },
  selectedButton: {
    //position: "absolute",
    // bottom: 0.1,
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    fontFamily: "montserrat",
    fontSize: 18,
    //width: 200,
    flex: 0.4,
    height: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    color: "#D291BC"
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
