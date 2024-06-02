
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { FaEnvelope, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export const SevenPart = () => {
  return (
    <>
{/* 
          7th part  */}
     
          <Box backgroundColor="black" w="1518px" h="428px" position="relative">
          <Text
            w="114px"
            h="26px"
            fontFamily="Poppins"
            fontWeight="700"
            fontSize="24px"
            color="rgba(255, 0, 42, 1)"
            position="absolute"
            left="699px"
            top="50%"
            transform="translateY(-50%)"
          >
            SITEMAP
          </Text>
          <Image
            src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
            w="200px"
            h="221px"
            position="absolute"
            top="40%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
          <Box
            height="20px"
            w="618px"
            top="302px"
            left="447px"
            position="absolute"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
             <Text color="white" fontFamily={"Poppins"} fontWeight={"600"} fontSize={"12.82px"}>Home</Text>
            <Text color="white" fontFamily={"Poppins"} fontWeight={"600"} fontSize={"12.82px"}>IDO</Text>
            <Text color="white" fontFamily={"Poppins"} fontWeight={"600"} fontSize={"12.82px"}>Takenomics</Text>
            <Text color="white" fontFamily={"Poppins"} fontWeight={"600"} fontSize={"12.82px"}>Road Map</Text>
            <Text color="white" fontFamily={"Poppins"} fontWeight={"600"} fontSize={"12.82px"}>Whitepaper</Text>
            <Text color="white" fontFamily={"Poppins"} fontWeight={"600"} fontSize={"12.82px"}>Pledge</Text>
            <Text color="white" fontFamily={"Poppins"} fontWeight={"600"} fontSize={"12.82px"}>NFT</Text>
            <Text color="white" fontFamily={"Poppins"} fontWeight={"600"} fontSize={"12.82px"}>Games</Text>
          </Box>
          <Flex
  width="100%"
  justifyContent="center"
  position="absolute"
  bottom="50px"
>
  <Box mx="20px">
    <FaTwitter color="red" />
  </Box>
  <Box mx="20px">
    <FaTelegramPlane color="red" />
  </Box>
  <Box mx="20px">
    <FaEnvelope color="red" />
  </Box>
</Flex>

        </Box>
    </>
  )
}