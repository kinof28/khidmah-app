import * as SecureStore from "expo-secure-store";

import { i18n } from "@/translations";
import { create } from "zustand";

export const useLocationStore = create<LocationStore>((set) => ({
  latitude: null,
  longitude: null,
  setLocation: (latitude: number, longitude: number) =>
    set({ latitude, longitude }),
}));

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "en",
  setLanguage: (language: string) => {
    i18n.locale = language;
    set({ language });
  },
}));

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  user: null,
  setToken: async (token: string) => {
    await SecureStore.setItemAsync("token", token);
    set({ token });
  },
  setUser: (user: any) => {
    set({ user });
  },
}));
