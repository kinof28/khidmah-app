import { useAuthStore } from "@/store";
import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { set } from "zod";
const UserScreen = () => {
  const { user, token, setUser } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const fetchUserData = async () => {
    try {
      const response = await fetch(
        process.env.EXPO_PUBLIC_API_URL + "/customer/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Request failed:", error);
    }
  };
  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchUserData();
      console.log("Fetched data:", data);
      setLoading(false);
      setUser(data);
    };
    fetchDataAsync();
  }, []);
  return (
    <View className="bg-white flex-1 justify-center items-center">
      <Text>User Screen</Text>
      <View className="m-3">
        {/* <Text className="text-lg">User:{JSON.stringify(user)}</Text> */}
        <Text className="text-lg m-3">
          Token from store: {JSON.stringify(token)}
        </Text>
        <Text className="text-lg m-3">
          {loading ? "Loading..." : `user: ${JSON.stringify(user)}`}
        </Text>
      </View>
    </View>
  );
};
export default UserScreen;
