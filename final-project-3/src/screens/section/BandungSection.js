import { View } from "react-native";
import ListHotel from "../../components/ListHotel";

const BandungSection = () => {
  return (
    <View>
      <ListHotel cityId={5000464611} city="Bandung" />
    </View>
  );
};

export default BandungSection;
