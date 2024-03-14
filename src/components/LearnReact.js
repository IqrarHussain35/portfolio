import React from 'react'
import DocsHeader from './DocsHeader'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LeftSidebar from './LeftSidebar'
import MainContent from './MainContent'
import RightSidebar from './RightSidebar';
import { Route, Routes } from 'react-router-dom';
import ROverview from './ROverview';


const LearnReact = () => {
  return (
    <>
      <DocsHeader />
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/*Left Side bar*/}
          <Grid item xs={2} className=' h-screen hidden md:block' >
            <LeftSidebar />
          </Grid>
        <Grid item xs={8}>
        <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/overview" element={<ROverview />} />
              {/* Add more nested routes as needed */}
            </Routes>
        </Grid>
        <Grid item xs={2} className=' hidden xl:block'>
         <RightSidebar />
        </Grid>
       
      </Grid>
    </Box>


  </>
  )
}

export default LearnReact