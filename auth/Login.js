import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { KeyboardAvoidingView, TextInput } from "react-native";
import { connect, useDispatch } from "react-redux";
import { login } from "../redux/actions";

const Login = ({ navigation }) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(login(userName, password));
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <>
      <KeyboardAvoidingView>
        <SafeAreaView style={styles.header}>
          <Text style={styles.pageTitle}>Login</Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.pageSubtitle}>Register</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={"white"}
            value={userName}
            autoCapitalize="none"
            onChangeText={(text) => setUserName(text)}
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={"white"}
            secureTextEntry={true}
            value={password}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </KeyboardAvoidingView>
      <View>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
        <Text style={styles.button}>Log In</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pageTitle: {
    alignContent: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
    color: "white",
  },
  pageSubtitle: {
    alignContent: "center",
    fontSize: 14,
    fontWeight: "bold",
    margin: 20,
    color: "white",
  },
  InputContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    padding: 16,
    backgroundColor: "#343a40",
    borderRadius: 10,
  },
  input: {
    fontWeight: "400",
    fontSize: 14,
    color: "#fff",
  },
  forgot: {
    marginTop: 10,
    marginLeft: 30,
    fontSize: 14,
    color: "white",
  },
  buttonContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    padding: 16,
    backgroundColor: "#0d1321",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
  },
  button: {
    fontWeight: "600",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});
