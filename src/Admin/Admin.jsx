import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './Admin.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AdminHome from './AdminHome';
import AdminServices from './AdminServices';
import AdminAbout from './AdminAbout';
import AdminContacts from './AdminContacts';
import 'react-tabs/style/react-tabs.css';


const Admin = () => {

  const navigate = useNavigate();

  // const handleHome = () => {
  //   navigate('/admin-home')
  // }
  // const handleAbout = () => {
  //   navigate('/admin-about')
  // }
  // const handleServices = () => {
  //   navigate('/admin-services')
  // }
  // const handleContacts = () => {
  //   navigate('/admin-contacts')
  // }


  return (
    <div className='admin-wrapper'>
        <div className='admin-nav'>
            <h1 className='admin-nav-words'>GEEKS INNOVATIVE CONSULT</h1>
        </div>
          <Tabs>
             <TabList className='adminHome-tabs'>
               <Tab className='adminHome-tabs-li'>HOME</Tab>
               <Tab className='adminHome-tabs-li'>SERVICES</Tab>
               <Tab className='adminHome-tabs-li'>ABOUT</Tab>
               <Tab className='adminHome-tabs-li'>CONTACT</Tab>
             </TabList>
         
             <TabPanel><AdminHome /></TabPanel>
             <TabPanel><AdminServices /></TabPanel>
             <TabPanel><AdminAbout /></TabPanel>
             <TabPanel><AdminContacts /></TabPanel>
           </Tabs>

    </div>
  )
}

export default Admin