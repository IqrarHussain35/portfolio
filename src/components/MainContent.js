// MainContent.js
import React from 'react';
import { LearnReactData } from '../utlis/LearnReact';

const MainContent = () => {
  const {Topics} = LearnReactData[0]
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="flex flex-col justify-between h-full">
        {/* Your dummy page content goes here */}
        <div className="bg-gray-700 p-6 rounded-md mb-4">
          <h1 className="text-white font-bold text-2xl">{LearnReactData[0].title}</h1>
          <p className="text-white text-slate-200 py-2 text-justify">{LearnReactData[0].Discription}</p>
          <span className="text-slate-200 font-bold text-lg">
            {" "}
            You will learn
          </span>
          <ul className="text-slate-200 list-disc ml-20 cursor-pointer">
            {Topics.map(Topics=><li><a href={Topics.id}>{Topics.subTitle}</a> </li>)}
          </ul>
        </div>
        <div id="what-react">
          <h2 className="text-white font-bold text-xl">{Topics[0].subTitle}</h2>
          <p className="text-white text-slate-200 text-justify py-2">{Topics[0].content}</p>
        </div>
        <div id="why-react">
          <h2 className="text-white font-bold text-xl">{Topics[1].subTitle}</h2>
          <div className="text-white text-slate-200 text-justify py-2">
          <div dangerouslySetInnerHTML={{ __html: Topics[1].content }} />
          </div>
        </div>
        <div id='when-react'>
        <h2 className="text-white font-bold text-xl">When to use React JS</h2>
        <p className="text-white text-slate-200 text-justify py-2">
          Now you have a enough knowledge of React JS to understand when to use
          React JS. so how you know when to use React js in your next web
          development project. Hers are some considration given below
          <ul className="list-disc pl-6">
            <li>
              <span className="font-bold">Complex User Interface:</span>
              React is great for making websites that do tricky things. If your
              website needs to show changing information or cool graphics that
              move around, React can make it work really well. It helps you
              create a website where everything happens smoothly and quickly for
              the people using it.
            </li>
            <li>
              <span className="font-bold">Large Scale Applications:</span>
              With React, you can build your website in a smart way. It helps
              you make small, reusable pieces of code that can grow with your
              website. This is useful when your website gets bigger because
              React makes it easy to manage, expand, and change things.
            </li>
            <li>
              <span className="font-bold">Cross Plateform Applications:</span>
              React is really good at showing lots of things on your website
              without making it slow. It uses smart ways to display a bunch of
              information and make your website work fast, even if there's a lot
              happening.
            </li>
            <li>
              <span className="font-bold">Heigh Performance Applications:</span>
              You can use React to create websites, mobile apps, and computer
              programs. It's a flexible tool that works for different types of
              projects. If you want to make a mobile app, you can use React
              Native. If you're making a computer program, React Desktop lets
              you do it using web technology.
            </li>
          </ul>
        </p>
        </div>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default MainContent;
