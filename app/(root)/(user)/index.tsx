import MapComponent from "@/components/Map";
import SelectService from "@/components/SelectService";
import { useAuthStore, useLocationStore } from "@/store";
import { useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
const UserScreen = () => {
  const { user, token, setUser } = useAuthStore();
  const { latitude, longitude } = useLocationStore();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View className="flex-1 justify-center items-center">
      <MapComponent />
      <Pressable className="w-full h-[40%]" onPress={() => setIsVisible(true)}>
        <SelectService />
      </Pressable>
      <View>
        <Modal
          animationType="slide"
          visible={isVisible}
          transparent={true}
          collapsable={true}
        >
          <View className="bg-white flex flex-1 flex-row justify-center items-center">
            <TouchableOpacity
              className="bg-green-600 p-16 rounded-full absolute z-50 flex justify-center items-center"
              onPress={() => setIsVisible(false)}
            >
              <Text className="text-black text-7xl font-AlexandriaBold">X</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};
export default UserScreen;
