import { useAuthStore } from "@/store";
import { Redirect, router, Stack } from "expo-router";

const AuthLayout = () => {
  const { token } = useAuthStore();
  if (token) {
    return <Redirect href="/(root)/(user)" />;
  }
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="subscribe" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
