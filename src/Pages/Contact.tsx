import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import React from "react";
import { useState, useEffect } from "react";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import axios from "axios";

export default function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const url = import.meta.env.VITE_API_URL;

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const postData = async () => {
    const data = {
      name,
      email,
      message,
    };

    const res = await axios.post(`${url}/contact`, data);
    console.log(res);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    console.log(data);
    postData();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Navbar />
      <FormControl>
        <Container
          bg="white"
          maxW="full"
          mt={0}
          centerContent
          overflow="hidden"
        >
          <Flex>
            <Box
              border="2px solid #00adb5"
              bg="##00adb5"
              color="white"
              borderRadius="lg"
              m={{ sm: 4, md: 16, lg: 10 }}
              p={{ sm: 5, md: 5, lg: 16 }}
            >
              <Box p={4}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      <Heading color="black">Contact</Heading>
                      <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                        Fill up the form below to contact
                      </Text>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack
                          pl={0}
                          spacing={3}
                          alignItems="flex-start"
                        ></VStack>
                      </Box>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems="flex-start"
                      ></HStack>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box bg="white" borderRadius="lg">
                      <Box m={8} color="#0B0E3F">
                        <VStack spacing={5}>
                          <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input
                                value={name}
                                onChange={handleName}
                                type="text"
                                size="md"
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                              />
                              <Input
                                value={email}
                                onChange={handleEmail}
                                type="text"
                                size="md"
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              value={message}
                              onChange={handleMessage}
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: "gray.300",
                              }}
                              placeholder="message"
                            />
                          </FormControl>
                          <FormControl id="name" float="right">
                            <Button
                              onClick={handleSubmit}
                              variant="solid"
                              bg="#0D74FF"
                              color="white"
                              _hover={{}}
                            >
                              Send Message
                            </Button>
                          </FormControl>
                        </VStack>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      </FormControl>
      <Footer />
    </>
  );
}
