import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="subscribe" options={{ headerShown: false }} />
      {/* <Stack.Screen name="reset-password" options={{ headerShown: false }} /> */}
      <Stack.Screen name="ask-for-location" options={{ headerShown: false }} />
    </Stack>
  );
}
