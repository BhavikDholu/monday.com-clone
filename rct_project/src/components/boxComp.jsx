import { Box ,Text ,Image, Flex} from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons";


export default function BoxComp(props){
    const {url,logoText,detailText,color} = props
    
    return <Box p="20px" boxShadow='2xl' rounded='md'>
        <Box >
            <Image src={url} alt="logo" width="200px"/>
            <Text>{logoText}</Text>
        </Box>
        <Box>
            <Text fontSize="xl" mt="20px">{detailText}</Text>
        </Box>
        
        <Box mt="20px">
            <Text fontSize='md'>Top use cases:</Text>
            <Box>
               <Flex gap="10px">
                <CheckIcon color={color}/><Text>Task management</Text>
               </Flex>
               <Flex gap="10px">
                <CheckIcon color={color}/><Text>Project management</Text>
               </Flex>
               <Flex gap="10px">
                <CheckIcon color={color}/><Text>Automated workflows</Text>
               </Flex>
               <Flex align="center" gap="10px">
                <CheckIcon color={color}/><Text>Build your own</Text>
               </Flex>
            </Box>
        </Box>
    </Box>
}
