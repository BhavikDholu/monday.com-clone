import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


export default function WorkFlow(){

return <Tabs>
<TabList>
  <Tab>One</Tab>
  <Tab>Two</Tab>
  <Tab>Three</Tab>
</TabList>

<TabPanels>
  <TabPanel>
    <p>one!</p>
  </TabPanel>
  <TabPanel>
    <p>two!</p>
  </TabPanel>
  <TabPanel>
    <p>three!</p>
  </TabPanel>
</TabPanels>
</Tabs>    
}