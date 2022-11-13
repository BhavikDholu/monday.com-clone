import {Box,Image,Checkbox,Text,Center} from "@chakra-ui/react";

export default function Services(props){
    const {title,logo,color} = props;

    return (
        <Box border="1px solid gray" borderRadius={10} p="10px" width="10%">
            <Box align="left">
            <Checkbox size='lg' colorScheme={color} checked></Checkbox>
            </Box>
            <Box>
                <Center>
                <Image src={logo}
                alt="icon" width="50px"/>
                </Center>
                <Text>{title}</Text>
            </Box>
        </Box>
    )
}