import { Tabs, TabList, TabPanels, Tab, TabPanel ,Box , Text, Flex , Image} from '@chakra-ui/react'

let detail=[
  {
    url : "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/board_icon.svg",
    title : "Boards",
    text : "Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.",
    video : "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/7_status.mp4",
  },
  {
    url : "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/views_icon.svg",
    title : "Views",
    text : "Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.",
    video : "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/1_Views.mp4"
  },
  {
    url : "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/dashboard_icon.svg",
    title : "Dashboard",
    text : "Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.",
    video : "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/2_Dashboards.mp4"
  },
  {
    url : "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/integrations_icon.svg",
    title : "Integrations",
    text : "Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.",
    video : "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/4_Integrations.mp4"
  },
  {
    url : "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/automations_icon.svg",
    title : "Automations",
    text : "Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes",
    video : "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/3_Automations.mp4"
  },
  {
    url : "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/apps_icon.svg",
    title : "Apps",
    text : "Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more.",
    video : "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/5_Apps.mp4"
  },
  {
    url : "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/docs_icon.svg",
    title : "Docs",
    text : "Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.",
    video : "https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/final-videos-tabs/6_Docs.mp4"
  }
]
export default function WorkFlow(){

return <Box mt="100px">
  <Box>
    <Text fontSize='5xl'><b>Everything</b> you need for <b>any workflow</b></Text>
    <Text fontSize='2xl'>Easily build your ideal workflow with monday.com building blocks.</Text>
  </Box>
     <Tabs mt="60px">
<Box  boxShadow='lg' p='2' rounded='md' width="60%" margin="auto">
  <TabList justifyContent= "space-around">
    {
      detail.map((e)=><Tab key={e.title}>
        <Flex flexDirection="column" align="center">
            <Image src={e.url} alt="icon" width="40px"/>
            <Text fontSize='lg'>{e.title}</Text>
        </Flex> 
      </Tab>)
    }
  </TabList>
</Box>


<TabPanels mt="100px">
{
  detail.map((e=>  <TabPanel key={e.title}>
    <Box width="85%" margin="auto">
      <Flex justifyContent="space-between">
        <Box boxShadow='2xl' rounded='md'>
            <video width="850" height="500" autoPlay loop muted>
             <source src={e.video} type="video/mp4"/>
            </video>
        </Box>
        <Box width="40%" alignItems="center" p="10px" pt="10%">
          <Box>
            <Flex gap="5">
            <Image src={e.url} alt="icon" width="50px"/>
            <Text fontSize='3xl' color="blue">{e.title}</Text>
            </Flex>
          </Box>
          <Box mt="20px" textAlign="left">
            <Text fontSize='2xl'>{e.text}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  </TabPanel>))
}
</TabPanels>
</Tabs>    
</Box>

}