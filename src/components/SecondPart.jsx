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

export const SecondPart = () =>{

    return (
        <Box>
 {/* 2nd part  */}
 <Box w="1518px" h="588px" bg={"black"}>
        <Flex >
          <Box w="750px" p="62px 0px 0px 207px" >
            <Text className="heading-text">Introduction</Text>
            <Text
              color={"white"}
              fontFamily=" ZCOOL KuaiLe"
              fontSize="24px"
              fontWeight="400"
              pt="20px"
            >
              We've all been in the mud once, and now we've decided to fight it
              out. Pay tribute to those pioneers of WEB3 and the warriors who
              dedicated their love to the blockchain. Save the lucky ones alive,
              join us to save the future! Our mission is to empower everyone to
              share wealth and succeed.
              <span className="span">read more...</span>
              <Button
                width="127px"
                height="38px"
                mt="54px"
                mr="88px"
                colorScheme="red"
                p="10px 16px 10px 16px"
                gap="6.18px"
                borderRadius="20px"
                fontSize="16px"
                opacity="0px"
                fontFamily=" ZCOOL KuaiLe"
                fontWeight="200"
              >
                Document
              </Button>
            </Text>
          </Box>
          <Box
            w="700px"
            h="600px"
            backgroundImage={
              "https://s3-alpha-sig.figma.com/img/72d9/2d64/713f95c34c945a62844515044f63fcd4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PH7-UOlccPF8t3q~uRPdjm-eXO6SvLELF6nO9w4LUU6BfSr6nbxJUS4VgrLNBE5kYPYre7L1iuNvZA~Ls2g3A7pJHrajP-wVdseuNITWEKfb9GHsGq9Z6RlqyutRBmEZ8yCUM-OrNElnieCQ3W6SMy4uYHUvnKEOwgjgFxtdw9NIuZ1NeGmkpzr8L8qoexAsa2BhvpJAmrgVJrtFJGvXMMKz3DZDEOhmaZQubI3H31OA9rOo-T5uVEsX4Q6yLvPvhR0yC2dB-IRVZ-U~9bMtl869PX2xvbXyMtYTGjvi7gnEr6fu3NEGmQk6MJIFWX2zS~dweCYm3~Hzo-AE-0EhBw__"
            }
            backgroundPosition={"center"}
            backgroundSize={"cover"}
          ></Box>
        </Flex>
      </Box>
      {/* 2nd part  */}
        </Box>
    )
}