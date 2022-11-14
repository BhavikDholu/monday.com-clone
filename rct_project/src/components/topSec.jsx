import { Box, Image ,Text , Button, Flex, Heading } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import Services from "./services";
import Profile from "./profile"
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
        <Box>
        <Box bg="linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)" color='white'pt={60} >
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
            </Box>
            <Box marginTop={15}>
                <Text fontSize='xl'>Trusted by 152,000+ customers worldwide</Text>
                <Box width="90%" margin="auto" mt={10}>
                    <Flex justifyContent="space-around">
                        {
                            logo.map((e)=><Box key={e.url}>
                                <Image src={e.url} alt="logo" width="80px"/>
                            </Box>)
                        }
                    </Flex>
                </Box>
                <Box mt={20} textAlign="left">
                    <Flex justifyContent="space-evenly">
                        <Box width="45%">
                            <Text fontSize="4xl">
                            The Work OS that lets you
                            shape workflows,<b>your way</b> 
                            </Text>
                        </Box>
                        <Box width="45%">
                            <Text fontSize="2xl">Boost your team’s alignment, efficiency, and productivity by customizing any workflow to fit your needs.</Text>
                            <Button colorScheme="blue" color="white" variant='solid' borderRadius={20} mt={10}>Get Started  <ArrowForwardIcon/></Button>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box align="center">
            <video width="750" height="500" autoPlay loop muted >
      <source src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Dash.mp4" type="video/mp4"/>
     </video>
            </Box>
            <Box bg="linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)" color='white' p="10%" pt={50}>
                <Flex> 
                    <Box width="60%">
                        <Profile />
                        <Profile />
                        <Profile />
                    </Box>
                    <Box align="center">
                     <Image mb="200px" width="500px" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/support_globe.png" alt="im"/>
                     <video  width="300" height="300" preload="auto" autoPlay loop muted >
                    <source src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/MobileApp.mp4" type="video/mp4"/>
                    </video>
                    <Box mt="200px">
                    <video  width="750" height="500" preload="auto" autoPlay loop muted >
                    <source src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/goals_dashboard.mp4" type="video/mp4"/>
                    </video>
                    </Box>
                    
                   
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}