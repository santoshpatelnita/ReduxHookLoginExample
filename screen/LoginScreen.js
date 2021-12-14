import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";


const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  renderHeader = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.headingStyle}>Login</Text>
      </View>
    );
  };

  renderFromInput = () => {
    return (
      <View>
        <Text style={styles.headingInputBox}>Email</Text>
        <View style={styles.inputBoxStyle}>
          <TextInput
            value={email}
            // onChangeText = {(e)=>setEmail(e)}
            placeholder="Please Enter Email"
            style={styles.inputBoxTextStyle}
          />
        </View>
        <Text style={styles.headingInputBox}>Password</Text>
        <View style={styles.inputBoxStyle}>
          <TextInput
            value={password}
            // onChangeText = {(e)=>setPassword(e)}
            placeholder="Please Enter Password"
            style={styles.inputBoxTextStyle}
          />
        </View>
      </View>
    );
  };

  renderSubmitButton = () => {
    return (
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={{ color: "#FFF", fontWeight: "700" }}>Submit</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {renderHeader()}
      {renderFromInput()}
      {renderSubmitButton()}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },

  headingStyle: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 70,
  },

  headingInputBox: {
    marginTop: 20,
    fontWeight: "700",
  },

  inputBoxStyle: {
    flex:1,
    height: 54,
    borderRadius: 17,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#000000",
  },

  inputBoxTextStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginLeft: 20,
    width: 270,
    fontSize: 15,
    fontWeight: "700",
  },

  buttonStyle: {
    width: 120,
    height: 40,
    backgroundColor: "#146edb",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    alignSelf: "center",
  },
});

export default LoginScreen;
