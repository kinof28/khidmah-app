import { useAuthStore, useLanguageStore } from "@/store";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InputField from "@/components/InputField";
import { i18n } from "@/translations";
import ChangeLanguageButton from "@/components/ChangeLanguageButton";

const ProfileScreen = () => {
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
    // };
    // fetchDataAsync();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="px-5"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="flex flex-row items-center justify-between">
          <Text className="text-2xl font-Alexandria my-5">
            {i18n.t("my-profile")}
          </Text>
          <ChangeLanguageButton />
        </View>

        <View className="flex items-center justify-center my-5">
          <Image
            source={{
              uri: user?.image || "https://via.placeholder.com/150",
            }}
            className="rounded-full h-[110px] w-[110px] border-2 border-slate-400 shadow-lg shadow-neutral-700"
          />
        </View>

        <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
          <View className="flex flex-col items-start justify-start w-full">
            <InputField
              label={i18n.t("name")}
              placeholder={user?.name || i18n.t("not-found")}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label={i18n.t("email")}
              placeholder={user?.email || i18n.t("not-found")}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label={i18n.t("phone-number")}
              placeholder={user?.phone || i18n.t("not-found")}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
