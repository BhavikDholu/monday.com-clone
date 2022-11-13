import { Box ,Grid,Image,Text} from "@chakra-ui/react";
import BoxComp from "./boxComp";

let data=[
    {
        url: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/wm_main_logo.png",
        logoText : "For professionals and teams managing tasks & workflows",
        detailText : "Manage tasks and workflows to fuel team collaboration and productivity at scale.",
        color : "blue.500"
    },
    {
        url: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/marketer_main_logo.png",
        logoText : "For marketing and creative professionals and teams",
        detailText : "Manage and collaborate on marketing and creative projects to launch campaigns.",
        color : "pink.600"
    },
    {
        url: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/crm_main_logo.png",
        logoText : "For sales professionals and customer-facing teams",
        detailText : "Track and manage all aspects of your sales cycle, customer data, and more in one place.",
        color : "teal.500"
    },
    {
        url: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/projects_main_logo.png",
        logoText : "For PMO teams and project manager professionals",
        detailText : "Plan, collaborate, and execute on every project and portfolio to reach your goals, faster.",
        color : "yellow.500"
    },
    {
        url: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/dev_main_logo.png",
        logoText : "For product and development professionals and teams",
        detailText : "Build agile workflows to drive impact across your product, design, and R&D teams.",
        color : "green.500"
    }
]
export default function BottomSec(){
    

    return (
        <Box mt="80px">
            <Box align="center">
                <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/monday_products_small.svg" alt="logo"/>
                <Box>
                <Text fontSize="4xl"><b>End-to-end products</b> to run the core of your business</Text>
                <Text fontSize="2xl">Tailored products designed for every aspect of your teams' needs.</Text>
                </Box>
            </Box>
            <Box width="90%" m="auto" textAlign="left" mt="40px">
                <Grid templateColumns='repeat(5, 1fr)' gap={6} >
                    {
                        data.map((e)=><BoxComp key={e.logoText} url={e.url} logoText={e.logoText} detailText={e.detailText}color={e.color}/>)
                    }
                </Grid>
            </Box>
            <Box width="100%" bg="linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%)" mt="40px" pt="80px" pb="80px" align="center">
            <video width="100%" height="1000" autoPlay loop muted >
           <source src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/products_video.mp4" type="video/mp4"/>
           </video>
            </Box>
        </Box>
    )
}