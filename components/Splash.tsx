import { images } from "@/constants";
import { Image, View } from "react-native";

const Splash = () => {
  return (
    <View className="flex-1 items-center justify-center bg-primary-400">
      <Image className="h-52 w-72" source={images.logo} />
    </View>
  );
};
export default Splash;
