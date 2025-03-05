declare interface LocationStore {
  latitude: number | null;
  longitude: number | null;
  setLocation: (latitude: number, longitude: number) => void;
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
  setToken: (token: string) => void;
  user: User | null;
  setUser: (user: User) => void;
}
