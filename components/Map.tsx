import { useLocationStore } from "@/store";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
const MapComponent = () => {
  const { latitude, longitude } = useLocationStore();
  console.log("latitude: ", latitude);
  console.log("longitude: ", longitude);
  return (
    <MapView
      style={{ height: "65%", width: "100%" }}
      provider={PROVIDER_DEFAULT}
      region={{
        latitude: Number(latitude),
        longitude: Number(longitude),
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}
      showsUserLocation={true}
      followsUserLocation={true}
      userLocationAnnotationTitle="You are here"
    ></MapView>
  );
};
export default MapComponent;
