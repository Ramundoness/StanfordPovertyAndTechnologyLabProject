import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "transparent"
  },
  container_one: {
    flexGrow: 1,
    backgroundColor: "transparent"
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
    marginTop: 75,
    color: "#fff"
  },
  unselectedOption: {
    textAlign: "center",
    justifyContent: "center",
    borderColor: "rgba(255, 255, 255, .6)",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 40,
    //height: 50,
    fontFamily: "montserrat",
    fontSize: 18,
    marginVertical: 5,
    zIndex: 1,
    color: "rgba(255, 255, 255, .6)"
  },
  selectedOption: {
    //backgroundColor: "#bbb",
    textAlign: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 2,
    //height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 40,
    fontFamily: "montserrat",
    fontSize: 18,
    marginVertical: 5,
    zIndex: 1,
    color: "#fff"
  },
  selectedText: {
    position: "absolute",
    bottom: 475,
    left: 200,
    textAlign: "center",
    justifyContent: "center",
    zIndex: 0,
    color: "transparent"
  },
  unselectedText: {
    position: "absolute",
    bottom: 475,
    left: 200,
    textAlign: "center",
    justifyContent: "center",
    zIndex: 0,
    color: "#fff"
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
    flex: 0.4,
    textAlign: "center",
    justifyContent: "center",
    borderColor: "rgba(255, 255, 255, .6)",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 8,
    fontFamily: "montserrat",
    fontSize: 18,
    marginVertical: 5,
    color: "rgba(255, 255, 255, .6)"
  },
  selectedButton: {
    flex: 0.4,
    textAlign: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 8,
    fontFamily: "montserrat",
    fontSize: 18,
    marginVertical: 5,
    color: "#fff"
  },
  // unselectedButton: {
  //   //position: "absolute",
  //   // bottom: 0.1,
  //   textAlign: "center",
  //   borderColor: "#fff",
  //   borderWidth: 2,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   padding: 10,
  //   margin: 10,
  //   fontFamily: "montserrat",
  //   fontSize: 18,
  //   //width: 200,
  //   flex: 0.4,
  //   height: 50,
  //   shadowColor: "#000000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 3
  //   },
  //   shadowRadius: 10,
  //   shadowOpacity: 0.25,
  //   color: "#fff"
  // },
  // selectedButton: {
  //   //position: "absolute",
  //   // bottom: 0.1,
  //   textAlign: "center",
  //   borderColor: "#fff",
  //   borderWidth: 2,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#fff",
  //   padding: 10,
  //   margin: 10,
  //   fontFamily: "montserrat",
  //   fontSize: 18,
  //   //width: 200,
  //   flex: 0.4,
  //   height: 50,
  //   shadowColor: "#000000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 3
  //   },
  //   shadowRadius: 10,
  //   shadowOpacity: 0.25,
  //   color: "#D291BC"
  // },
  numericInput: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
    fontFamily: "montserrat",
    fontSize: 18,
    marginHorizontal: 40,
    marginVertical: 5,
    color: "#fff"
  },
  unselectedOptionLong: {
    justifyContent: "center",
    borderColor: "rgba(255, 255, 255, .6)",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 40,
    fontFamily: "montserrat",
    fontSize: 18,
    marginVertical: 5,
    color: "rgba(255, 255, 255, .6)"
  },
  selectedOptionLong: {
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 40,
    fontFamily: "montserrat",
    fontSize: 18,
    marginVertical: 5,
    color: "#fff"
  }
});

export { styles };
