import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const ForthPart = () => {
  return (
    <Box w="1512px" h="700px" pt="80px" backgroundColor={"black"}>
      <Text className="heading-text" textAlign={"center"}>
        Tokenomics
      </Text>
      <Flex>
        <Box
          as="fieldset"
          w="412px"
          h="306px"
          border="3px solid"
          borderColor="red"
          borderRadius="15px"
          p={2}
          mt="100px"
          ml="80px"
        >
          <Box
            as="legend"
            p="17px 45px"
            backgroundColor="red"
            color="white"
            fontSize="16px"
            fontWeight="300"
            fontFamily="Shojumaru"
            borderRadius="15px"
            textAlign="center"
          >
            TOKEN DETAILS
          </Box>
          <Text
            color={"white"}
            fontFamily=" ZCOOL KuaiLe"
            fontSize="20px"
            fontWeight="400"
            pt="20px"
            ml="60px"
          >
            Name{" "}
            <span className="span-p" style={{ paddingLeft: "100px" }}>
              Saviour
            </span>
          </Text>
          <Text
            color={"white"}
            fontFamily=" ZCOOL KuaiLe"
            fontSize="20px"
            fontWeight="400"
            pt="20px"
            ml="60px"
          >
            Symbol{" "}
            <span className="span-p" style={{ paddingLeft: "90px" }}>
              SVR
            </span>
          </Text>
          <Text
            color={"white"}
            fontFamily=" ZCOOL KuaiLe"
            fontSize="20px"
            fontWeight="400"
            pt="20px"
            ml="60px"
          >
            Total Supply{" "}
            <span className="span-p" style={{ paddingLeft: "30px" }}>
              1000 Trillion
            </span>
          </Text>
          <Text
            color={"white"}
            fontFamily=" ZCOOL KuaiLe"
            fontSize="20px"
            fontWeight="400"
            pt="20px"
            ml="60px"
          >
            Desimals{" "}
            <span className="span-p" style={{ paddingLeft: "70px" }}>
              18
            </span>
          </Text>
        </Box>

        <Box
          width="940px"
          h="350px"
          
          ml="70px"
          mt="100px"
        >
             <Image
            width="278px" ml="38%"
            src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
          />
            
        </Box>
      </Flex>
    </Box>
  );
};
