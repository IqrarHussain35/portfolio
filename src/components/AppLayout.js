import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LearnReact from './LearnReact';
import Lottie from 'react-lottie';
import { loaderOptions } from '../utlis/constants';
import Portfolio from './Portfolio';
import ROverview from './ROverview';
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
const AppLayout = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          await new Promise(resolve => setTimeout(resolve, 2000));
          setLoading(false);
        };
        fetchData();
      }, []);
  return (
    <>
    {loading ? (
       <div className='flex items-center justify-center h-screen'>
       <Lottie options={loaderOptions} height={300} width={300} />
     </div>
        ):(
            <BrowserRouter>
              <Routes>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/learn-react/*" element={<LearnReact />} />
              </Routes>
           
            </BrowserRouter>
        )
    }
    </>
    )
}

export default AppLayout