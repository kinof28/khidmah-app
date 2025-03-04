import { useLocationStore } from "@/store";
import { Redirect } from "expo-router";
// import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Todo: check if user is logged in
const HomeScreen = () => {
  const { latitude, longitude } = useLocationStore();
  if (latitude == null && longitude == null) {
    return <Redirect href="/ask-for-location" />;
  }
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-600 text-3xl">Home Screen</Text>
      <Text>
        Latitude:{latitude} Longitude:{longitude}
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
