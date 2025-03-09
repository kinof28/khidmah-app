import * as SecureStore from "expo-secure-store";

import { i18n } from "@/translations";
import { create } from "zustand";
import { AuthStore, LanguageStore, LocationStore } from "@/types/type";

export const useLocationStore = create<LocationStore>((set) => ({
  latitude: null,
  longitude: null,
  isEnabled: false,
  setLocation: (latitude: number, longitude: number) =>
    set((state) => ({ ...state, latitude, longitude })),
  setEnabled: (isEnabled: boolean) => set((state) => ({ ...state, isEnabled })),
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
    set((state) => ({ ...state, token }));
  },
  logout: async () => {
    await SecureStore.deleteItemAsync("token");
    set({ token: null, user: null });
  },
  setUser: (user: any) => {
    set((state) => ({ ...state, user }));
  },
}));
