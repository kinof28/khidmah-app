import { useLanguageStore, useLocationStore } from "@/store";
import { i18n } from "@/translations";
import { getLocales } from "expo-localization";
import { Link, Redirect } from "expo-router";
// import { Redirect } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Todo: check if user is logged in
const HomeScreen = () => {
  const { latitude, longitude } = useLocationStore();
  const { language, setLanguage } = useLanguageStore();
  if (latitude == null && longitude == null) {
    return <Redirect href="/ask-for-location" />;
  }
  const changeLanguage = () => {
    console.log("i18n.locale: ", i18n.locale);
    console.log("device local language: ", getLocales()[0].languageCode);
    setLanguage(language === "en" ? "ar" : "en");
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
      <Link href="/subscribe" className="p-4 text-2xl bg-slate-500 m-3 rounded">
        <Text className="text-white font-Alexandria">Subscribe</Text>
      </Link>
      <Link href="/login" className="p-4 text-2xl bg-green-500 m-3 rounded">
        <Text className="text-white font-Alexandria">login</Text>
      </Link>
    </SafeAreaView>
  );
};

export default HomeScreen;
