import AsyncStorage from "@react-native-async-storage/async-storage";

export default function authHeader() {
  const token = AsyncStorage.getItem("@token");
  if (token !== null) {
    return {
      Authorization: `Token ${token}`,
    };
  } else {
    return {};
  }
}
