import { Box, Image ,Text , Button, Flex } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import Services from "./services";

export default function TopSec(){
    return(
        <Box bg="linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)" color='white'pt={50}>
            <Box width="50%" margin="auto">
                <Text fontSize="70px" mb={1}>A platform built for a new way of working</Text>
            </Box>
            <Box>
                <Text fontSize={20}>What would you like to manage with newWay.com Work os?</Text>
            </Box>
            <Box width="90%" margin="auto" mt="30px">
                <Flex  gap="12px" justifyContent="center">
                    <Services/>
                    <Services/>
                    <Services/>
                    <Services/>
                    <Services/>
                    <Services/>
                    <Services/>
                    <Services/>
                    <Services/>
                </Flex>
            </Box>
            <Box pt={10}>
            <Button colorScheme="blue" color="white" variant='solid' borderRadius={20}>Get Started  <ArrowForwardIcon/></Button>
            <Text>No credit card needed   ✦   Unlimited time on Free plan</Text>
            </Box>
            <Box>
                <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/image.png" alt="image"/>
            </Box>
        </Box>
    )
}