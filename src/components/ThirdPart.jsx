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

export const ThirdPart = () =>{

    return(
        <Box>
 <Box
        w="1512px"
        h="980px"
        // backgroundImage={
        //   "https://s3-alpha-sig.figma.com/img/b6b9/0f7f/8e9b3d8d12c20152d7f3a9b31de44fe8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NCYtvR~628jEbUTFcpnz6ogAaDE3ysJ5D5cUi0Wq9Wz1QKJEabU4zd1DnR9LWwclo~hvPTUlIlF3tGRUnx5wrv01asgSn~y8Ye9ahEVu-5T~IJAkKokvfO9qN0VQQl-wllJe2c7A-jVHEAqGqL1k0VZ1diNOLmGKLE4kj1eKp-PT7aiOjEXIXgMYnr5s2Idt-rV~ZWIljgtjXbbtnRgKt3igmvC6OFIsUjxBN958KL2We91IfvNZtO5HUI5dmYdmY8y1vEfp1oYedenQnxSWuFpgq4-y5cj0QHi8~8wC4veprvWG98DC9mmlkSCgpSfm7TpiZu4mnynRLkAsOspuBQ__"
        // }
        // backgroundPosition={"center"}
        // backgroundSize={"cover"}
        backgroundColor={"black"}
      >
        <Text className="heading-text" textAlign={"center"} pt="80px">
          Participate in our IDO Event!
        </Text>
        <Flex>
          <Box width="550px" height="750px " ml="80px" >
            <Text
              color={"white"}
              fontFamily=" ZCOOL KuaiLe"
              fontSize="20px"
              fontWeight="400"
              pt="50px"
              pl="20px"
            >
              During our IDO event, you will gain early access to our
              revolutionary ecosystem, designed to empower everyone to share
              wealth and achieve success.
            </Text>
            <Box as="form" p={4} boxShadow="lg" maxW="sm" mx="auto">
              <Box
                as="fieldset"
                w="412px"
                h="382px"
                border="3px solid"
                borderColor="red"
                borderRadius="15px"
                p={2}
              >
                <legend
                  style={{
                    padding: "17px 45px 17px 45px",
                    backgroundColor: "red",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "300",
                    fontFamily: " Shojumaru",
                    borderRadius: "15px",
                    textAlign: "center",
                  }}
                >
                  TOKEN INFO
                </legend>

                <RadioGroup name="monster">
                  <FormControl as="fieldset" p="14px 25px 14px 30px ">
                    <FormLabel
                      htmlFor="kraken"
                      mb={0}
                      color={"white"}
                      fontFamily=" ZCOOL KuaiLe"
                      fontSize="20px"
                      fontWeight="400"
                      pt="10px"
                      pl="10px"
                    >
                      Total Token Supply <span className="span-p">20%</span>
                    </FormLabel>
                    <FormLabel
                      htmlFor="kraken"
                      mb={0}
                      color={"white"}
                      fontFamily=" ZCOOL KuaiLe"
                      fontSize="20px"
                      fontWeight="400"
                      pt="10px"
                      pl="10px"
                    >
                      Soft Cap{" "}
                      <span className="span-p" style={{ paddingLeft: "110px" }}>
                        200BNB
                      </span>
                    </FormLabel>
                    <FormLabel
                      htmlFor="kraken"
                      mb={0}
                      color={"white"}
                      fontFamily=" ZCOOL KuaiLe"
                      fontSize="20px"
                      fontWeight="400"
                      pt="10px"
                      pl="10px"
                    >
                      Initial exchange rate{" "}
                      <span className="span-p" style={{ paddingLeft: "20px" }}>
                        1BNB
                      </span>
                    </FormLabel>
                    <FormLabel
                      htmlFor="kraken"
                      mb={0}
                      color={"white"}
                      fontFamily=" ZCOOL KuaiLe"
                      fontSize="20px"
                      fontWeight="400"
                      pt="10px"
                      pl="10px"
                    >
                      Recommended Referral Commission
                    </FormLabel>

                    <FormLabel
                      htmlFor="kraken"
                      mb={0}
                      color={"white"}
                      fontFamily=" ZCOOL KuaiLe"
                      fontSize="20px"
                      fontWeight="400"
                      pt="10px"
                      pl="10px"
                    >
                      1st Generation
                      <span className="span-p" style={{ paddingLeft: "100px" }}>
                        5%
                      </span>
                    </FormLabel>
                    <FormLabel
                      htmlFor="kraken"
                      mb={0}
                      color={"white"}
                      fontFamily=" ZCOOL KuaiLe"
                      fontSize="20px"
                      fontWeight="400"
                      pt="10px"
                      pl="10px"
                    >
                      2nd Generation
                      <span className="span-p" style={{ paddingLeft: "100px" }}>
                        2%
                      </span>
                    </FormLabel>
                  </FormControl>
                </RadioGroup>
              </Box>
            </Box>
            <Button
              width="127px"
              height="38px"
              colorScheme="red"
              p="18px 40px 18px 40px"
              gap="6.18px"
              borderRadius="13px"
              fontSize="15px"
              opacity="0px"
              fontFamily=" ZCOOL KuaiLe"
              fontWeight="300"
              mt="18px"
              ml="40%"
            >
              Connect Wallet
            </Button>
            <Text
              className="heading-text"
              style={{ fontSize: "28px", padding: "20px", textAlign: "center" }}
            >
              Become an affiliate & Earn 7% as Commission!
            </Text>
            <InputGroup size="md">
              <Input
                // pr="4.5rem"
                border="1px solid red" 
                placeholder="Generate a unique referral link"
                ml= "50px" borderRadius="20px"  fontFamily=" ZCOOL KuaiLe"
              />
              <InputRightElement width="7.5rem">
                <Button colorScheme="red"
              p="18px 40px 18px 40px"
              gap="6.18px"
              borderRadius="20px"
              fontSize="15px"
              opacity="0px"
              fontFamily=" ZCOOL KuaiLe"
              fontWeight="300" >
                  Generate
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>


          <Box
           
          >
 <Box as="form" p={4} boxShadow="lg" maxW="sm" mx="auto">
              <Box
                as="fieldset"
                w="630px"
                h="700px"
                mt="40px"  mr="110px" ml="100px"
                border="3px solid"
                borderColor="red"
                borderRadius="15px"
                
              >
                <legend
                  style={{
                    padding: "10px 20px 10px 20px",
                   border:"3px solid red",
                    color: "white",
                    fontSize: "25px",
                    fontWeight: "300",
                    fontFamily: "Orbitron",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                 0 0 : 0 0
                </legend>

               <Text className="heading-text" textAlign={"center"} pt="15px">PRESALE 1</Text>
               <Text  textAlign={"center"}  fontFamily=" ZCOOL KuaiLe"
              fontWeight="300" color={"white"} fontSize="32px" pt="15px"
               >1 Saviour = 0.657 USDT</Text>
               <Text  textAlign={"center"}  fontFamily=" ZCOOL KuaiLe"
              fontWeight="300" color={"white"} fontSize="24px" pt="15px"
               > Next Stage Price = 0.723 USDT </Text>
               <Text  textAlign={"center"}  fontFamily=" ZCOOL KuaiLe"
              fontWeight="300" color={"white"} fontSize="24px" pt="15px"
               >Sold - $34,56,56,764/$50,00,00,000 </Text>
               <Text  textAlign={"center"}  fontFamily=" ZCOOL KuaiLe"
              fontWeight="300" color={"white"} fontSize="24px" pt="15px"
               >Raised - $34,56,56,764/$40,00,00,000 </Text>
              <Input
                // pr="4.5rem"
                width="467px"
                border="1px solid red" 
                placeholder="Enter the amount (BNB)"
                ml="80px" mt="35px" borderRadius="20px"  fontFamily=" ZCOOL KuaiLe" 
              />
              <Input
                // pr="4.5rem"
                width="467px"
                border="1px solid red" 
                placeholder="Minimum Quantity to Buy"
                ml="80px" mt="35px" borderRadius="20px"  fontFamily=" ZCOOL KuaiLe" 
              />
              <Input
                // pr="4.5rem"
                width="467px"
                border="1px solid red" 
                placeholder="Maximum Quantity of Tokens"
                ml="80px" mt="35px" borderRadius="20px"  fontFamily=" ZCOOL KuaiLe" 
              /> <br />
               <Button colorScheme="red"
              p="18px 25px 18px 25px"
              gap="6.18px"
              borderRadius="20px"
              fontSize="15px"
              opacity="0px"
              fontFamily=" ZCOOL KuaiLe"
              fontWeight="300" mt="30px" ml="30%" >
                  Buy
                </Button> <Button colorScheme="red"
              p="18px 25px 18px 25px"
              gap="6.18px"
              borderRadius="20px"
              fontSize="15px"
              opacity="0px"
              fontFamily=" ZCOOL KuaiLe"
              fontWeight="300" mt="30px" ml="5%">
                 Claim Drap
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
      {/* 3rd part  */}
        </Box>
    )
}