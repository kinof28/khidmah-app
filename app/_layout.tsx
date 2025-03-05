import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import { i18n } from "@/translations";
import { getLocales } from "expo-localization";
import { useLanguageStore } from "@/store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Alexandria-Black": require("../assets/fonts/Alexandria-Black.ttf"),
    "Alexandria-Bold": require("../assets/fonts/Alexandria-Bold.ttf"),
    "Alexandria-ExtraBold": require("../assets/fonts/Alexandria-ExtraBold.ttf"),
    "Alexandria-ExtraLight": require("../assets/fonts/Alexandria-ExtraLight.ttf"),
    "Alexandria-Light": require("../assets/fonts/Alexandria-Light.ttf"),
    "Alexandria-Medium": require("../assets/fonts/Alexandria-Medium.ttf"),
    "Alexandria-Regular": require("../assets/fonts/Alexandria-Regular.ttf"),
    "Alexandria-SemiBold": require("../assets/fonts/Alexandria-SemiBold.ttf"),
    "Alexandria-Thin": require("../assets/fonts/Alexandria-Thin.ttf"),
  });
  const { language, setLanguage } = useLanguageStore();
  useEffect(() => {
    i18n.enableFallback = true;
    setLanguage(getLocales()[0].languageCode ?? "en");
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
