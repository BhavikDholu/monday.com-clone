import {Box , Text , Flex , Image , Heading} from "@chakra-ui/react";
export default function Profile(){


    return <Box align="left" width="80%" p="10px" mt="150px">
        <Box>
            <Text fontSize="5xl">Streamline your work for <b>maximum productivity</b></Text>
            <Text fontSize="xl" mt="20px">Centralize all your work, processes, tools, and files into one Work OS. Connect teams, bridge silos, and maintain one source of truth across your organization.</Text>
        </Box>
        <Box mt="150px">
            <Flex>
                <Box pt="10px">
                    <Image src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/jane.jpeg" width='100px'/>
                </Box>
                <Box ml="40px">
                    <Text fontSize="lg">“We use monday.com for a plethora of use cases, the opportunities this platform provides are limitless.”</Text>
                    <Heading size="sm" mt="10px">Jane Tham | VP of Collaboration Technologies</Heading>
                    <Text fontSize="sm">Universal Music Group</Text>
                </Box>
            </Flex>
        </Box>
    </Box>
}