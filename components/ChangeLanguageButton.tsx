import { images } from "@/constants";
import { useLanguageStore } from "@/store";
import { Image, TouchableOpacity } from "react-native";

const ChangeLanguageButton = () => {
  const { language, setLanguage } = useLanguageStore();
  const handleLanguageChange = async () => {
    setLanguage(language === "en" ? "ar" : "en");
  };
  return (
    <TouchableOpacity className="rounded" onPress={handleLanguageChange}>
      {language === "en" ? (
        <Image source={images.englishFlag} className="w-16 h-12" />
      ) : (
        <Image source={images.arabicFlag} className="w-16 h-12" />
      )}
    </TouchableOpacity>
  );
};
export default ChangeLanguageButton;
