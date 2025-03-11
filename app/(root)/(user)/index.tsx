import MapComponent from "@/components/Map";
import SelectService from "@/components/SelectService";
import { useAuthStore, useLocationStore } from "@/store";
import { Text, View } from "react-native";
const UserScreen = () => {
  const { user, token, setUser } = useAuthStore();
  const { latitude, longitude } = useLocationStore();

  return (
    <View className="flex-1 justify-center items-center relative">
      <MapComponent />
      <View className="absolute bottom-0 w-full h-[40%] ">
        <SelectService />
      </View>
    </View>
  );
};
export default UserScreen;
