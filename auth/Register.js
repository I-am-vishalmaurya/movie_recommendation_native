import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { Button, SafeAreaView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { register } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";

const Register = ({ navigation }) => {
  const [image, setImage] = React.useState(null);
  const [userData, setUserData] = React.useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const registerState = useSelector((state) => state.authReducer.registerState);
  console.log("registerState", registerState);
  const handleSubmit = () => {
    if (userData.password === userData.confirm_password) {
      setLoading(true);
      dispatch(
        register(
          userData.username,
          userData.email,
          userData.password,
          userData.confirm_password
        )
      );

      // console.log("Loading state is", loadingState);
    } else {
      Alert.alert("Password Mismatch", "Please check your password");
    }
  };

  return (
    <KeyboardAvoidingView>
      <SafeAreaView style={styles.header}>
        <Text style={styles.pageTitle}>Register</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.pageSubtitle}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.imageHolder} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.profileImage} />
          ) : (
            <Image
              source={require("../assets/profile_placeholder.png")}
              style={styles.profileImage}
            />
          )}

          <Text style={styles.imageText}>Upload Profile Image or Gif</Text>
        </TouchableOpacity>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={userData.username}
            onChangeText={(text) =>
              setUserData({ ...userData, username: text })
            }
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="white"
            value={userData.email}
            onChangeText={(text) => setUserData({ ...userData, email: text })}
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="white"
            secureTextEntry={true}
            value={userData.password}
            onChangeText={(text) =>
              setUserData({ ...userData, password: text })
            }
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            autoCapitalize="none"
            placeholderTextColor="white"
            secureTextEntry={true}
            value={userData.confirm_password}
            onChangeText={(text) =>
              setUserData({ ...userData, confirm_password: text })
            }
          />
        </View>
      </View>
      {loading ? (
        <ActivityIndicator
          animating={!registerState}
          size="small"
          color="#0000ff"
          style={styles.loading}
        />
      ) : (
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

export default Register;

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
  imageHolder: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  imageText: {
    color: "white",
    fontSize: 14,
    marginLeft: 30,
    marginRight: 30,
    textAlign: "center",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
  buttonContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 16,
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
  success: {
    color: "green",
    fontSize: 16,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 16,
    padding: 16,
    backgroundColor: "#0d1321",
    borderRadius: 10,
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
  loading: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 16,
    padding: 16,
    backgroundColor: "#0d1321",
    borderRadius: 10,
  },
});
