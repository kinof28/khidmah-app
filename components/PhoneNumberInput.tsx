import { useLanguageStore } from "@/store";
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { CountryPicker } from "react-native-country-codes-picker";

const PhoneNumberInput = () => {
  const [countryCode, setCountryCode] = useState("+968"); // Default country code
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [countryFlag, setCountryFlag] = useState("🇴🇲");
  const { language } = useLanguageStore();

  return (
    <View className="w-full px-1 my-2">
      <Text className={`text-lg font-AlexandriaSemiBold mb-3`}>
        Phone Number
      </Text>
      <View className="flex flex-row bg-neutral-100 rounded-full border border-neutral-100">
        {/* Country Selector */}
        <TouchableOpacity
          // style={styles.countrySelector}
          className="flex justify-center items-center p-3 border-r border-slate-400 "
          onPress={() => setCountryPickerVisible(true)}
        >
          <CountryPicker
            show={countryPickerVisible}
            lang={language}
            // when picker button press you will get the country object with dial code
            pickerButtonOnPress={(item) => {
              console.log("chosen item: ", item);
              setCountryCode(item.dial_code);
              setCountryFlag(item.flag);
              setCountryPickerVisible(false);
            }}
          />
          <Text className="text-lg font-AlexandriaSemiBold">
            {countryFlag} {countryCode}
          </Text>
        </TouchableOpacity>

        {/* Phone Number Input */}
        <TextInput
          // style={styles.phoneInput}
          className="rounded-full p-4 font-AlexandriaSemiBold text-[15px] flex-1 ${inputStyle} text-left"
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={15}
        />
      </View>
    </View>
  );
};

export default PhoneNumberInput;
