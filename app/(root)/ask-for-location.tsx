import { Text, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";
import { useLocationStore } from "@/store";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

//Todo: fix the ui
const AskForLocation = () => {
  const { setLocation } = useLocationStore();
  const [granted, setGranted] = useState(false);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("permission not granted");
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    // console.log(location);
    setLocation(location.coords.latitude, location.coords.longitude);
    setGranted(true);
  };
  return !granted ? (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-600 text-3xl">Ask for location</Text>
      <TouchableOpacity
        className="p-4 text-xl bg-slate-500 mt-3 rounded"
        onPress={getLocation}
      >
        <Text className="text-white font-bold text-xl">Ask for location</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <Redirect href="/" />
  );
};
export default AskForLocation;
