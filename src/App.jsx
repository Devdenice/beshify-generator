import { Flex, HStack, Input, Stack, Text, useToast } from "@chakra-ui/react";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import ColorModeComponent from "./components/ColorModeComponent";
import CardComponent from "./components/CardComponent";
function App() {
  const [text, setText] = useState("");
  const toast = useToast();
  const inputref = useRef();

  // Trims the generated text with emoji of person catrtwheeling
  const generateText = () => {
    const trimmedText = text.trim();
    if (trimmedText.length > 0) {
      const replacedValue = trimmedText.replace(/\s+/g, " ");
      const newValue = replacedValue.replace(/\s/g, "🤸");
      setText(newValue);
      return newValue;
    } else {
      setText(trimmedText);
    }
  };

  // Copying the generared text
  const copyText = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // A pop-up modal or toast appears after successfully copying the text
    toast({
      title: "Beshify",
      description: "Text Copied Successfully",
      status: "success",
      duration: "3000",
      isClosable: "false",
    });
  };

  // Automatically focuses on the input after the page has loaded
  useEffect(() => {
    inputref.current.focus();
  }, []);

  return (
    <>
      <Flex
        height={"100vh"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack>
          <Text
            fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
            fontFamily={"Shrikhand, cursive"}
          >
            🤸 Beshify Generator 🤸
          </Text>
          <Stack>
            <HStack>
              <Input
                ref={inputref}
                placeholder="Enter text....."
                onChange={(event) => setText(event.target.value)}
                fontSize={"lg"}
                focusBorderColor="blue.300"
              />
              <ColorModeComponent />
            </HStack>

            {text.length > 0 && (
              <CardComponent
                text={text}
                generateText={generateText}
                copyText={copyText}
              />
            )}
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

export default App;
