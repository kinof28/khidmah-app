import { useAuthStore, useLanguageStore } from "@/store";
import { Image, Text, TextInput, View } from "react-native";
import { HelloWave } from "./HelloWave";
import { i18n } from "@/translations";
import { icons } from "@/constants";

const SelectService = () => {
  const { user } = useAuthStore();
  const { language } = useLanguageStore();
  return (
    <View className="flex-1 bg-blue-500 p-6">
      <View className="flex flex-row items-center">
        <HelloWave />
        <Text className="text-white text-3xl font-Alexandria mx-3 tracking-widest capitalize">
          {user?.name.split(" ")[0]}
        </Text>
      </View>
      <View className="mt-6">
        <Text
          className={`text-white text-xl font-AlexandriaBold ${
            language === "ar" && "text-right"
          }`}
        >
          {i18n.t("what-service")}
        </Text>
      </View>
      <View className="flex flex-row w-full relative mt-6">
        <Image
          source={icons.search}
          className={`w-10 h-10 absolute z-10 mt-1 ${
            language === "ar" ? "right-2" : "left-2"
          }`}
        />
        <TextInput
          className={`border-b-2 border-white w-full px-14 text-xl font-Alexandria placeholder:text-blue-200 ${
            language === "ar" && "text-right"
          }`}
          placeholder={i18n.t("choose-service")}
          editable={false}
        />
      </View>
    </View>
  );
};

export default SelectService;
