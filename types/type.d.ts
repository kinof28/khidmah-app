declare interface LocationStore {
  latitude: number | null;
  longitude: number | null;
  setLocation: (latitude: number, longitude: number) => void;
}

declare interface LanguageStore {
  language: string;
  setLanguage: (language: string) => void;
}
