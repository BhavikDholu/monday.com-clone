import {Box, Flex , Image , Spacer } from "@chakra-ui/react";

import GetStarted from "./signUp";

export default function Navbar(){
  
    return(
        <Box w='100%' p={4} color='black' margin="auto" pos="fixed" bg="white" boxShadow='2xl' zIndex={10}>
            <Flex>
                <Box>
                    <Flex gap={4} align="center">
                    <Box>
                    <Image src="https://i.ibb.co/bNzqryd/new-Way-logo.png" width="160px" />
                    </Box>
                    <Spacer />
                    <Box>products</Box>
                    <Spacer />
                    <Box>Use cases</Box>
                    <Spacer />
                    <Box>Feature</Box>
                    <Spacer />
                    <Box>Resources</Box>
                    </Flex>              
                </Box>
                <Spacer />
                <Box>
                    <Flex gap={4} align="center">
                        <Box>Pricing</Box>
                        <Spacer />
                        <Box>Contact sales</Box>
                        <Spacer />
                        <Box>Log in</Box>
                        <Spacer /><Spacer />
                        <Box>
                            <GetStarted />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
