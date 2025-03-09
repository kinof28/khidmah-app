import InputField from "@/components/InputField";
import PhoneNumberInput from "@/components/PhoneNumberInput";
import { icons, images } from "@/constants";
import { useLanguageStore } from "@/store";
import { i18n } from "@/translations";
import { Link } from "expo-router";
import { useRef, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const SubscribeScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const { language } = useLanguageStore();

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="w-full h-[250px]">
          <Image
            source={images.SignUpHeader}
            className="z-0 w-full h-[250px]"
          />
        </View>
        <Text
          className={`text-2xl m-3 text-black font-Alexandria ${
            language === "ar" && "text-right"
          }`}
        >
          {i18n.t("create-account")}
        </Text>
        <View className="p-5">
          <InputField
            label={i18n.t("name")}
            placeholder={i18n.t("name-placeholder")}
            icon={icons.person}
            value={form.name}
            onChangeText={(value: any) => setForm({ ...form, name: value })}
          />
          <InputField
            label={i18n.t("email")}
            placeholder={i18n.t("email-placeholder")}
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value: any) => setForm({ ...form, email: value })}
          />

          {/* <PhoneInputField /> */}
          <PhoneNumberInput />

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
              {i18n.t("sign-up")}
            </Text>
          </TouchableOpacity>
          <Link
            href="/login"
            className="text-lg text-center text-general-200 mt-10"
          >
            {i18n.t("already-have-account") + " "}
            <Text className="text-primary-500">{i18n.t("login")}</Text>
          </Link>
        </View>
        {/* <ReactNativeModal
          isVisible={verification.state === "pending"}
          // onBackdropPress={() =>
          //   setVerification({ ...verification, state: "default" })
          // }
          onModalHide={() => {
            if (verification.state === "success") {
              setShowSuccessModal(true);
            }
          }}
        >
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="font-JakartaExtraBold text-2xl mb-2">
              Verification
            </Text>
            <Text className="font-Jakarta mb-5">
              We've sent a verification code to {form.email}.
            </Text>
            <InputField
              label={"Code"}
              icon={icons.lock}
              placeholder={"12345"}
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) =>
                setVerification({ ...verification, code })
              }
            />
            {verification.error && (
              <Text className="text-red-500 text-sm mt-1">
                {verification.error}
              </Text>
            )}
            <CustomButton
              title="Verify Email"
              onPress={onPressVerify}
              className="mt-5 bg-success-500"
            />
          </View>
        </ReactNativeModal>
        <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />
            <Text className="text-3xl font-JakartaBold text-center">
              Verified
            </Text>
            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              You have successfully verified your account.
            </Text>
            <CustomButton
              title="Browse Home"
              onPress={() => router.push(`/(root)/(tabs)/home`)}
              className="mt-5"
            />
          </View>
        </ReactNativeModal> */}
      </View>
    </ScrollView>
  );
};
export default SubscribeScreen;
