import { useAuthStore, useLanguageStore } from "@/store";
import { i18n } from "@/translations";
import { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HistoryScreen = () => {
  const { user, token } = useAuthStore();

  const { language } = useLanguageStore();
  //   const { history, setHistory } = useHistoryStore();
  const fetchHistory = async () => {
    try {
      const response = await fetch(
        process.env.EXPO_PUBLIC_API_URL + "/customer/history",
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
    //   const data = await fetchHistory();
    //   console.log("Fetched data:", data);
    //   //   setHistory(data);
    // };
    // fetchDataAsync();
  }, []);
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-600 text-3xl">{i18n.t("history")}</Text>
    </SafeAreaView>
  );
};

export default HistoryScreen;
