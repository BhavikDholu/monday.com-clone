import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Divider,
    Image,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
    Text,
    Flex
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import {ArrowForwardIcon} from "@chakra-ui/icons";
import React from 'react';
export default function GetStarted() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>

        <Button ref={btnRef} onClick={onOpen} colorScheme="blue" color="white" variant='solid' borderRadius={20}>Get Started <ArrowForwardIcon/></Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Sign up for free</DrawerHeader>
  
            <DrawerBody>
              <FormControl isRequired={true}>
              <FormLabel>Enter your Name</FormLabel>
                <Input placeholder='Full name' />
                <FormLabel>Enter your Email</FormLabel>
                <Input placeholder='Email address' />
               <FormLabel>Enter your password</FormLabel>
                <Input placeholder="password" type="password" />
               </FormControl>
            <Button colorScheme='blue' mt="10px" align="center" width="100%">Continue</Button>
             <Box mt="10px">
                <Flex gap={5}>
                    <Divider />
                    <Text>OR</Text>
                    <Divider />
                </Flex>
             </Box>
            <Button variant='outline' border="1px solid blue" mt="10px" align="center" width="100%">Sign up with <Image src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="icon" width="30px"/></Button>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }