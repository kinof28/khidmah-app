import { images } from "@/constants";
import { useAuthStore, useLanguageStore } from "@/store";
import { i18n } from "@/translations";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MessagesScreen = () => {
  const { user, token } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const { language, setLanguage } = useLanguageStore();
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
    // const fetchDataAsync = async () => {
    //   const data = await fetchUserData();
    //   console.log("Fetched data:", data);
    //   setLoading(false);
    //   setUser(data);
    // };
    // fetchDataAsync();
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text className="text-2xl font-Alexandria">{i18n.t("messages")}</Text>
        <View className="flex-1 h-fit flex justify-center items-center">
          <Image
            source={images.message}
            alt="message"
            className="w-full h-40"
            resizeMode="contain"
          />
          <Text className="text-3xl font-Alexandria mt-3">
            {i18n.t("no-messages")}
          </Text>
          <Text className="text-base mt-2 text-center px-7">
            Start a conversation with your friends and family
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessagesScreen;
