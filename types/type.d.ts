declare interface LocationStore {
  latitude: number | null;
  longitude: number | null;
  setLocation: (latitude: number, longitude: number) => void;
}
