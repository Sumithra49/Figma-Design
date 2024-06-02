import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  Spacer
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const FirstPart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Box backgroundColor={"black"}>
        <Box
          w="100%"
          h={{ base: "auto", md: "588px" }}
          backgroundImage={
            "https://s3-alpha-sig.figma.com/img/894b/df6e/56b90bbef82ad188765f40d12a46caef?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBniJIIabUM5Sz2MptOUCZcISt5SJUkYa~32yo4k4uKIZOnsv2UPfRCUlYo-w2quEcv9rqDuuafokBaRla7zZMxJf6ILz1UBaSYRjEtjO9Is-QiWLUdkXnOgDQSf2oZEvHTyyPZkokWIVlUlyVkawK~OaqKGqcoGccfLpefDMbC4Gzb9p8Ta~8QmdfAVadD~0KfT8IvJYgefdHWYAyFSSAUkE35Ne4jTu0pXAH61KDcvPipctfKO-Pkq3j3Q9ADYxg-c8H2970mBZ8c7Ap8dDwtCB3Nx7ZseV8CNB-SnNW4TjDWGB9wVYeRtEnABJmkKot4pxdnjs04l5mKHfXR4VA__"
          }
          backgroundPosition={"center"}
          backgroundSize={"cover"}
        >
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Box mt={{ base: "20px", md: "20px" }} ml={{ base: "20px", md: "20px" }}>
              <Flex align="center">
                <Box
                  className="logo"
                  w="106px"
                  h="117px"
                  backgroundImage={
                    "https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
                  }
                  backgroundPosition={"center"}
                  backgroundSize={"cover"}
                />
                <Text
                  fontFamily="ZCOOL KuaiLe"
                  sans-serif
                  fontWeight={400}
                  fontSize="32px"
                  color={"white"}
                  textAlign={"center"}
                  mt={{ base: "0", md: "56px" }}
                  ml={{ base: "10px", md: "20px" }}
                >
                  Saviour
                </Text>
              </Flex>
            </Box>
            <Spacer />

            <Box
              width={{ base: "100%", md: "583px" }}
              height="52px"
              mt={{ base: "20px", md: "6px" }}
              p="16px 24px"
              gap="24px"
              borderRadius="20px"
              bg={"black"}
              color={"white"}
              fontFamily="ZCOOL KuaiLe"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <IconButton
                icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                variant="ghost"
                aria-label="Toggle Navigation"
                display={{ base: "block", md: "none" }}
                onClick={toggleMenu}
              />
              <Flex
                direction={{ base: "column", md: "row" }}
                alignItems="center"
                display={{ base: isOpen ? "flex" : "none", md: "flex" }}
              >
                <Text>HOME</Text>
                <Text ml={{ base: "0", md: "24px" }}>IDO</Text>
                <Text ml={{ base: "0", md: "24px" }}>TACKNOMICS</Text>
                <Text ml={{ base: "0", md: "24px" }}>ROADMAP</Text>
                <Text ml={{ base: "0", md: "24px" }}>COMING SOON</Text>
              </Flex>
            </Box>
            <Spacer />
            <Box>
              <Button
                width="127px"
                height="38px"
                mt={{ base: "20px", md: "54px" }}
                mr={{ base: "20px", md: "88px" }}
                colorScheme="red"
                p="10px 16px"
                gap="6.18px"
                borderRadius="16px"
                fontSize="14px"
              >
                Connect Wallet
              </Button>
            </Box>
          </Flex>
          <Box
            width={{ base: "90%", md: "1262px" }}
            height="108px"
            mt={{ base: "40px", md: "116px" }}
            ml={{ base: "5%", md: "123px" }}
            fontSize={{ base: "24px", md: "45px" }}
            textAlign={"center"}
            color={"white"}
            fontFamily="Shojumaru"
          >
            <Text>
              Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
