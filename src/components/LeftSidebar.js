// LeftSidebar.js

import React from 'react';
import Accordion from './Accordion';

const LeftSidebar = ({ isCollapsed }) => {
 

  return (
    <>
    <strong className='p-2 pt-10 text-gray-400'>Get Started</strong>
    <div className="w-1/6 p-4 bg-gray-800 text-white fixed h-full overflow-y-auto">
    <Accordion title="Introduction to React JS" items={
      [
        {subTitle:'What is React Js', id:'#what-react'}, 
        {subTitle:'Why we use React Js', id:'#why-react'}, 
        {subTitle:'When we use React Js', id:'#when-react'}
      ]
      } />
    {/* Add more accordion menus as needed */}
  </div>
  </>
  );
};

export default LeftSidebar;
