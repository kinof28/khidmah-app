import { TextInputProps } from "react-native";

declare interface LocationStore {
  latitude: number | null;
  longitude: number | null;
  isEnabled: boolean;
  setLocation: (latitude: number, longitude: number) => void;
  setEnabled: (isEnabled: boolean) => void;
}

declare interface LanguageStore {
  language: string;
  setLanguage: (language: string) => void;
}
declare interface User {
  id: string;
  name: string;
  email: string;
  image: string?;
}
declare interface AuthStore {
  token: string | null;
  user: User | null;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

// declare interface ButtonProps extends TouchableOpacityProps {
//   title: string;
//   bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
//   textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
//   IconLeft?: React.ComponentType<any>;
//   IconRight?: React.ComponentType<any>;
//   className?: string;
// }

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
  error?: string;
  type?: "email" | "text" | "tel" | "numeric" | undefined;
}
