import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
const MapComponent = () => {
  return (
    <MapView
      style={{ height: "100%", width: "100%" }}
      provider={PROVIDER_DEFAULT}
    ></MapView>
  );
};
export default MapComponent;
