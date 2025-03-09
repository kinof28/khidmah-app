import { useAuthStore, useLanguageStore, useLocationStore } from "@/store";
import { i18n } from "@/translations";
import { Link, Redirect } from "expo-router";
// import { Redirect } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Todo: check if user is logged in
const HomeScreen = () => {
  const { latitude, longitude, isEnabled } = useLocationStore();
  const { language, setLanguage } = useLanguageStore();
  const { user, token, logout } = useAuthStore();
  if (!isEnabled) {
    return <Redirect href="/ask-for-location" />;
  }
  if (!token) {
    return <Redirect href="/login" />;
  }

  const changeLanguage = () => {
    // console.log("i18n.locale: ", i18n.locale);
    // console.log("device local language: ", getLocales()[0].languageCode);
    setLanguage(language === "en" ? "ar" : "en");
  };
  const clearStorage = async () => {
    await logout();
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <TouchableOpacity
        className="p-4 text-xl bg-slate-500 m-3 rounded"
        onPress={changeLanguage}
      >
        <Text>change language</Text>
      </TouchableOpacity>
      <Text className="text-red-600 text-3xl">{i18n.t("home")}</Text>
      <Text>
        Latitude:{latitude} Longitude:{longitude}
      </Text>
      <View className="m-3">
        <Text className="text-lg">User:{JSON.stringify(user)}</Text>
        <Text className="text-lg">Token:{JSON.stringify(token)}</Text>
      </View>
      <TouchableOpacity
        className="p-4 text-2xl bg-red-500 m-3 rounded"
        onPress={clearStorage}
      >
        <Text className="text-white font-Alexandria">clear store</Text>
      </TouchableOpacity>
      <Link
        href="/(root)/(auth)/subscribe"
        className="p-4 text-2xl bg-slate-500 m-3 rounded"
      >
        <Text className="text-white font-Alexandria">Subscribe</Text>
      </Link>
      <Link
        href="/(root)/(auth)/login"
        className="p-4 text-2xl bg-green-500 m-3 rounded"
      >
        <Text className="text-white font-Alexandria">login</Text>
      </Link>
    </SafeAreaView>
  );
};

export default HomeScreen;
