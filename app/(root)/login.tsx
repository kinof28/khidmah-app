import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="w-full h-[250px]">
          <Image
            source={images.SignUpHeader}
            className="z-0 w-full h-[250px]"
          />
        </View>
        <Text className="text-2xl text-black font-Alexandria m-3">
          Welcome 👋
        </Text>

        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <TouchableOpacity className="bg-primary-500 p-3 rounded mt-10">
            <Text className="text-center font-Alexandria text-white text-2xl">
              Sign In
            </Text>
          </TouchableOpacity>

          <Link
            href="/subscribe"
            className="text-lg text-center text-general-200 mt-10"
          >
            Don't have an account?{" "}
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
