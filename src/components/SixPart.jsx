import { Box, Flex, Image ,Text} from "@chakra-ui/react";

export const SixPart = () => {
  return (
    <>
      {/* 6th part */}
      <Box backgroundColor="black" w="1518px" h="588px">
        <Box>
          <Flex>
            <Image
              width="503px"
              h="503px"
              src="https://s3-alpha-sig.figma.com/img/7624/956b/bb5893d955ab92e34ab86102a42d6d23?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b1~NO03ErsYsNkWmXnSA4~DC7Miz~9BKRyLhfzbi4ncI2EtBpBikP6Ab9oWmJVCnbuvL5M5KQsrgtlkmEBero7xZoJOf-Dsq9HdEoOFfY0rtiFaC11Gc8600aJ2ZvcdEpmBl8cgjjqe6TVxO0IoTRFQx~yiKw~39A0RKm0N8Wba4ea5hDFCHkW7BV16Y~VhWxYbmVNwdN9RDfRhcVhTLovmGIoF6f5EQsHvNQzYFMkeStp4P2jypS7Sp1oHkTSrbEsH-NPnAiEJmfZf-Otbo3k0SXA~O5loOObJ6PqmF9VjlpIIdyk1ABF42YExaEu5QDj~1qeCtmXC0XClPMX2WQg__"
            />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              ml="auto"
              mr="auto"
            >
              <Box
                w="119px"
                h="52px"
                color="rgba(237, 1, 55, 1)"
                fontFamily="Shojumaru"
                fontWeight="400"
                fontSize="44px"
                lineHeight="52.36px"
                textAlign="center"
              >
                FAQ
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                ml="87px"
              >
                <Box
                  w="640px"
                  h="77px"
                  mt="20px"
                  color="white"
                  textAlign="left"
                  fontSize="24px"
                  fontWeight="bold"
                  borderRadius="10px"
                  justifyContent="flex-start"
                  alignItems="center"
                  display="flex"
                  border="1px solid red"
                  paddingLeft="20px" // Add padding-left for space between the number and content
                >
                  1&nbsp;&nbsp;&nbsp;WHY CHOOSE "SAVIOR"{" "}
                  {/* Use HTML entity &nbsp; for space */}
                </Box>

                <Box
                  w="640px"
                  h="77px"
                  mt="20px"
                  color="white"
                  textAlign="left"
                  fontSize="24px"
                  fontWeight="bold"
                  borderRadius="10px"
                  justifyContent="flex-start"
                  alignItems="center"
                  display="flex"
                  border="1px solid red"
                  paddingLeft="20px" // Add padding-left for space between the number and content
                >
                  2&nbsp;&nbsp;&nbsp;WHY IS THE IDO DURATION SO LONG
                </Box>
                <Box
                  w="640px"
                  h="77px"
                  mt="20px"
                  color="white"
                  textAlign="left"
                  fontSize="24px"
                  fontWeight="bold"
                  borderRadius="10px"
                  justifyContent="flex-start"
                  alignItems="center"
                  display="flex"
                  border="1px solid red"
                  paddingLeft="20px" // Add padding-left for space between the number and content
                >
                  3&nbsp;&nbsp;&nbsp;WHEN WILL TRADING GO LIVE
                </Box>

                <Box
                  w="640px"
                  mt="20px"
                  color="white"
                  textAlign="left"
                  fontSize="24px"
                  fontWeight="bold"
                  border="1px solid red"
                  borderRadius="10px"
                  paddingLeft={"20px"}
                >
                  4&nbsp;&nbsp;&nbsp; WHEN WILL WE CLAIM THE TOKEN
                  <Text
                    mt="10px"
                    fontSize="20px"
                    fontWeight="normal"
                    background={"rgb(24,24,24)"}
                    marginLeft={"30px"}
                  >
                    After the IDO concludes, you can claim the tokens on our
                    official website.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
