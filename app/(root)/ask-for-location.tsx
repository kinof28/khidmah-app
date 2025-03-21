import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";
import { useLanguageStore, useLocationStore } from "@/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { i18n } from "@/translations";
import { icons } from "@/constants";
import { router } from "expo-router";
import ChangeLanguageButton from "@/components/ChangeLanguageButton";

const AskForLocation = () => {
  const { setLocation, setEnabled } = useLocationStore();
  const { language } = useLanguageStore();
  // console.log("language: ", language);
  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("permission not granted");
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords.latitude, location.coords.longitude);
    setEnabled(true);
    router.replace("/");
  };
  return (
    <SafeAreaView className="flex-1 justify-start bg-primary-400 py-20">
      <View className="flex-row items-center justify-end px-8">
        <ChangeLanguageButton />
      </View>
      <View className="flex-1 items-center justify-center">
        <Text className="text-black-700 font-Alexandria text-4xl uppercase ">
          {i18n.t("turn-on-location")}
        </Text>
        <Text className="m-4 p-8 text-lg/8 font-AlexandriaRegular text-center ">
          {i18n.t("turn-on-location-text")}
        </Text>
      </View>
      <View className="flex-1/2 justify-center items-center">
        <Image
          className="h-40 w-40 "
          source={icons.LocationSVG}
          height={100}
          width={100}
        />
      </View>
      <View className="w-full  p-8">
        <TouchableOpacity
          className="mt-8 rounded bg-black w-full  py-5 items-center justify-center"
          onPress={getLocation}
        >
          <Text className="text-2xl font-AlexandriaBold capitalize text-white">
            {i18n.t("continue")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default AskForLocation;
