import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useLanguageStore } from "@/store";
import { i18n } from "@/translations";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { language } = useLanguageStore();
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white ">
        <View className="w-full h-[250px]">
          <Image
            source={images.SignUpHeader}
            className="z-0 w-full h-[250px]"
          />
        </View>
        <Text
          className={`text-2xl text-black font-Alexandria m-3 ${
            language === "ar" && "text-right"
          }`}
        >
          {i18n.t("welcome")} 👋
        </Text>

        <View className="p-5">
          <InputField
            label={i18n.t("email")}
            placeholder={i18n.t("email-placeholder")}
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value: any) => setForm({ ...form, email: value })}
          />

          <InputField
            label={i18n.t("password")}
            placeholder={i18n.t("password-placeholder")}
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value: any) => setForm({ ...form, password: value })}
          />

          <TouchableOpacity className="bg-primary-500 p-3 rounded mt-10">
            <Text className="text-center font-Alexandria text-white text-2xl">
              {i18n.t("sign-in")}
            </Text>
          </TouchableOpacity>

          <Link
            href="/subscribe"
            className="text-lg text-center text-general-200 mt-10"
          >
            {i18n.t("don't-have-account") + " "}
            <Text className="text-primary-500">{i18n.t("sign-up")}</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
