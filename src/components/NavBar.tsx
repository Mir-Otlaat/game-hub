import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";

interface Props {
  onSearchNav: (searchText: string) => void;
}

const NavBar = ({ onSearchNav }: Props) => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <Searchinput onSearch={onSearchNav} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
