import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { ForthPart } from "./components/forthPart";
import { FirstPart } from "./components/FirstPart";
import { SecondPart } from "./components/SecondPart";
import { ThirdPart } from "./components/ThirdPart";
import { FifthPart } from "./components/FifthPart";
import { SixPart } from "./components/SixPart";
import { SevenPart } from "./components/SevenPart";

export const FigmaDesign = () => {
  return (
    <Box>
      <FirstPart />
      <SecondPart />
      <ThirdPart />

      <ForthPart />
      <FifthPart/>
      <SixPart/>
      <SevenPart/>
    </Box>
  );
};
