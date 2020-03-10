import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Box, 
    Flex, 
    Heading
  } from "@chakra-ui/core";
  import React from 'react';

  export default function NavBar({children}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="veryPaleOrange"
      color="menge"
    >
      <Flex align="center" mr={5}>
        <Heading fontFamily="logo" as="h1" size="lg" letterSpacing={".1rem"}>
          FastApp
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "block" }} onClick={onOpen}>
        <svg
          fill="menge"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

    </Flex>
    {children}
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            bg="veryPaleOrange"
            color="menge"
          >
            <DrawerCloseButton />
          </DrawerContent>
        </Drawer>
      </>
    );
  }