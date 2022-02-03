import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Register = ({ navigation }) => {
  return (
    <KeyboardAvoidingView>
      <SafeAreaView style={styles.header}>
        <View>
          <Text style={styles.pageTitle}>Register</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.pageSubtitle}>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
});
