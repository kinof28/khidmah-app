import { create } from "zustand";

export const useLocationStore = create<LocationStore>((set) => ({
  latitude: null,
  longitude: null,
  setLocation: (latitude: number, longitude: number) =>
    set({ latitude, longitude }),
}));
