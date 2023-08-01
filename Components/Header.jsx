import { Image, Text } from "react-native";
import Logo from "../assets/logo.png";
import headerStyle from "../Styles/headerStyle.style";

function Header() {
  return (
    <>
      <Image style={headerStyle.img} source={Logo} resizeMode="contain" />
      <Text style={headerStyle.txt}>Tu as probablement un truc à faire</Text>
    </>
  );
}

export default Header;
