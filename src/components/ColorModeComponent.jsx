import { Flex, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ColorModeComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems={"center"}>
      <Icon
        color="yellow.500"
        boxSize={6}
        mr={2}
        as={colorMode === "light" ? FiMoon : FiSun}
      />
      <Switch
        id="color-mode"
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </Flex>
  );
};

export default ColorModeComponent;
