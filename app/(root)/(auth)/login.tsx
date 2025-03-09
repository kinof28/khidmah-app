import { HelloWave } from "@/components/HelloWave";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { LoginDto, loginSchema } from "@/schemas";
import { useAuthStore, useLanguageStore } from "@/store";
import { i18n } from "@/translations";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  const [form, setForm] = useState<LoginDto>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginDto>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const { setToken } = useAuthStore();
  const validateEmail = (): boolean => {
    try {
      loginSchema.shape.email.parse(form.email);
      return true;
    } catch (err) {
      return false;
    }
  };
  const validatePassword = (): boolean => {
    try {
      loginSchema.shape.password.parse(form.password);
      return true;
    } catch (err) {
      return false;
    }
  };
  const validateForm = (): boolean => {
    const passwordIsValid = validatePassword();
    const emailIsValid = validateEmail();
    const tmpErrors = {
      email: emailIsValid ? "" : i18n.t("invalid-email"),
      password: passwordIsValid ? "" : i18n.t("password-too-short"),
    };
    setErrors(tmpErrors);
    return emailIsValid && passwordIsValid;
  };
  const signIn = async () => {
    setWrongCredentials(false);
    if (!validateForm()) return;
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/auth/customer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: form.email, password: form.password }),
        }
      );
      if (!response.ok) {
        setWrongCredentials(true);
        setErrors({
          email: " ",
          password: " ",
        });
        setLoading(false);
        return;
      }
      const data = await response.json();

      // console.log("data: ", data.access_token);
      setToken(data.access_token);
      setLoading(false);
      router.replace("/(root)/(user)");
      // return data;
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };
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
        <View className="flex flex-row items-center">
          <Text
            className={`text-2xl text-black font-Alexandria m-3 ${
              language === "ar" && "text-right"
            }`}
          >
            {i18n.t("welcome")}
          </Text>
          <HelloWave />
        </View>

        <View className="p-5">
          <InputField
            label={i18n.t("email")}
            placeholder={i18n.t("email-placeholder")}
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            error={errors.email}
            type="email"
            onChangeText={(value: any) => {
              setForm({ ...form, email: value });
              setErrors({ ...errors, email: "" });
            }}
            onEndEditing={() => {
              if (!validateEmail())
                setErrors({ ...errors, email: i18n.t("invalid-email") });
            }}
          />

          <InputField
            label={i18n.t("password")}
            placeholder={i18n.t("password-placeholder")}
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            error={errors.password}
            onChangeText={(value: any) => {
              setForm({ ...form, password: value });
              setErrors({ ...errors, password: "" });
            }}
            onEndEditing={() => {
              if (!validatePassword())
                setErrors({
                  ...errors,
                  password: i18n.t("password-too-short"),
                });
            }}
          />

          {wrongCredentials && (
            <Text className="text-center text-red-500 my-4 text-xl font-Alexandria">
              {i18n.t("invalid-email-or-password")}
            </Text>
          )}

          <TouchableOpacity
            className={`bg-primary-500 p-3 rounded mt-8 ${
              errors.email !== "" || errors.password !== "" || loading
                ? "opacity-50"
                : ""
            }`}
            onPress={signIn}
            disabled={errors.email !== "" || errors.password !== ""}
          >
            <Text className="text-center font-Alexandria text-white text-2xl">
              {loading ? i18n.t("loading") : i18n.t("sign-in")}
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
