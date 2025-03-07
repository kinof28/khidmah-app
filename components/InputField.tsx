import { icons } from "@/constants";
import { useLanguageStore } from "@/store";
import { InputFieldProps } from "@/types/type";
import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  error,
  ...props
}: InputFieldProps) => {
  const { language } = useLanguageStore();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text
            className={`text-lg font-AlexandriaSemiBold mb-3 ${labelStyle} ${
              language === "ar" && "text-right"
            }`}
          >
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${
              error && "border-red-600"
            }  ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              className={`rounded-full p-4 font-AlexandriaSemiBold text-[15px] flex-1 ${inputStyle} text-left ${
                language === "ar" && "text-right"
              }`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
          {error && (
            <View
              className={`p-1 mx-2 flex ${
                language === "ar" ? "flex-row-reverse" : "flex-row"
              } gap-3`}
            >
              <Image source={icons.danger} className="w-6 h-6" />
              <Text className="text-orange-500 capitalize font-AlexandriaLight">
                {error}
              </Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
