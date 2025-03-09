import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import { i18n } from "@/translations";
import { getLocales } from "expo-localization";
import { useAuthStore, useLanguageStore, useLocationStore } from "@/store";
import * as Location from "expo-location";
import * as SecureStore from "expo-secure-store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { setLanguage } = useLanguageStore();
  const { setEnabled } = useLocationStore();
  const { token, setToken } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [loaded] = useFonts({
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
  useEffect(() => {
    i18n.enableFallback = true;
    setLanguage(getLocales()[0].languageCode ?? "en");
    Location.getForegroundPermissionsAsync().then(async ({ status }) => {
      if (status === Location.PermissionStatus.GRANTED) {
        setEnabled(true);
      }
      if (!token) {
        const tokenFromStore = await SecureStore.getItemAsync("token");
        if (tokenFromStore) {
          setToken(tokenFromStore);
        }
      }
      setLoading(false);
    });
    if (loaded && !loading) {
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
