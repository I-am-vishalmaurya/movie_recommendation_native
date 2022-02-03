import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { KeyboardAvoidingView, TextInput } from "react-native";
import { api_URL, auth_URL } from "../config/env";
import axios from "axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({ status: false, message: "" });
  const handleLogin = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({
      username: email,
      password: password,
    });
    const res = axios.post(`${auth_URL.AUTH_URI}/token/login/`, body, config);
    res
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.auth_token);
          setError({
            status: false,
            message: "",
          });
        }
      })
      .catch((err) => {
        if (err.response) {
          setError({
            status: true,
            message: err.response.data.non_field_errors[0],
          });
        } else {
          setError({
            status: true,
            message: "Something went wrong",
          });
        }
      });
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };
  console.log("Just checking");
  return (
    <>
      <KeyboardAvoidingView>
        <SafeAreaView style={styles.header}>
          <Text style={styles.pageTitle}>Login</Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.pageSubtitle}>Register</Text>
          </TouchableOpacity>
        </SafeAreaView>

        {error.status && <Text style={styles.error}>{error.message}</Text>}
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={"white"}
            keyboardType="email-address"
            value={email}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
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
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
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
