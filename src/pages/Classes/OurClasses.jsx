import { Helmet } from "react-helmet-async";
import ClassesPageBanner from "../../components/ClassesPageBanner/ClassesPageBanner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCourse from "../../hooks/useCourse";
import ClassesTab from "./ClassesTab/ClassesTab";


const OurClasses = () => {
    
    const[tabIndex, setTabIndex] = useState(0)
    const[course] = useCourse()
    
    const dynamic_athletics = course.filter(item => item.category === 'dynamic_athletics');
    const precision_striking = course.filter(item => item.category === 'precision_striking');
    const court_dominance = course.filter(item => item.category === 'court_dominance');
    const endurance_challenge = course.filter(item => item.category === 'endurance_challenge');

  return (
    <div>
      <Helmet>
        <title>SportifyCamp | Classes</title>
      </Helmet>

      <ClassesPageBanner />
      <SectionTitle subHeading="Sports" heading="In Categories"></SectionTitle>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Dynamic Athletics</Tab>
          <Tab>Precision Striking</Tab>
          <Tab>Court Dominance</Tab>
          <Tab>Endurance Challenge</Tab>
        </TabList>

        <TabPanel>
            <ClassesTab items={dynamic_athletics}></ClassesTab>
        </TabPanel>

        <TabPanel>
            <ClassesTab items={precision_striking}></ClassesTab>
        </TabPanel>

        <TabPanel>
             <ClassesTab items={court_dominance}></ClassesTab>
        </TabPanel>

        <TabPanel>
               <ClassesTab items={endurance_challenge}></ClassesTab>
        </TabPanel>
      </Tabs>




    </div>
  );
};

export default OurClasses;
