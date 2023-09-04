import { Card, CardBody, CardHeader, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RxCopy } from "react-icons/rx";

const CardComponent = ({ text, generateText, copyText }) => {
  return (
    <Card>
      <CardHeader bg={"#4a5568"} color={"white"}>
        <Flex height={2} alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={"sm"}>Generated Text</Text>
          <RxCopy onClick={() => copyText()} />
        </Flex>
      </CardHeader>
      <CardBody maxW={{ base: "340px", md: "450px", lg: "600px" }}>
        <Text>{generateText()}</Text>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
