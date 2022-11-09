import {Box,Image,Checkbox,Text,Center} from "@chakra-ui/react";

export default function Services(){
    

    return (
        <Box border="1px solid gray" borderRadius={10} p="10px" width="9%">
            <Box align="left">
            <Checkbox size='lg' colorScheme='orange' Checked></Checkbox>
            </Box>
            <Box>
                <Center>
                <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/design_icon.png"
                alt="icon" width="50px"/>
                </Center>
                <Text>Creative & Design</Text>
            </Box>
        </Box>
    )
}