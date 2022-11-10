import { Box, Image ,Text , Button, Flex } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import Services from "./services";
const logo=[
    {
        url : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png"
    },
    {
        url : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png"
    },
    {
        url : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png"
    },
    {
        url : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png"
    },
    {
        url : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png"
    },
    {
        url : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png"
    },
    {
        url : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png"
    },
    {
        url : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png"
    },
    {
        url : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png"
    }
]
const serviceData=[
    {
        logo : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/design_icon.png",
        title : "Creative & Design",
        color : "pink"
    },
    {
        logo : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/dev_icon.png",
        title : "Software development",
        color : "green"
    },
    {
        logo : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/marketing_icon.png",
        title : "Marketing",
        color : "pink"
    },
    {
        logo : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/pmo_icon.png",
        title : "Project management",
        color : "yellow"
    },
    {
        logo : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/crm_icon.png",
        title : "Sales & CRM",
        color : "blue"
    },
    {
        logo : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/task_icon.png",
        title : "Task management",
        color : "blue"
    },
    {
        logo : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/hr_icon.png",
        title : "HR",
        color : "red"
    },
    {
        logo : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/operations_icon.png",
        title : "Operations",
        color : "blue"
    },
    {
        logo : "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/workflows_icon.png",
        title : "More Workflows",
        color : "blue"
    }
]
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
                    {
                        serviceData.map((e)=><Services title={e.title} logo={e.logo} color={e.color} key={e.title}/>)
                    }
                </Flex>
            </Box>
            <Box pt={10}>
            <Button colorScheme="blue" color="white" variant='solid' borderRadius={20}>Get Started  <ArrowForwardIcon/></Button>
            <Text>No credit card needed   ✦   Unlimited time on Free plan</Text>
            </Box>
            <Box>
                <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/image.png" alt="image"/>
            </Box>
            <Box>
                <Text>Trusted by 152,000+ customers worldwide</Text>
                <Box>
                    <Flex justifyContent="center">
                        {
                            logo.map((e)=><Box>
                                <Image src={e.url} alt="logo"/>
                            </Box>)
                        }
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}