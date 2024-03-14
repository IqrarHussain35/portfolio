import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { HeroOptions } from '../utlis/constants';
import RESUME_URL from '../utlis/resume.pdf'
import { downloadFile } from '../utlis/constants';
const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 section" id='home'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center justify-between">
        <div className="w-full sm:w-2/3 pr-4 sm:pr-8">
          <h1 className="text-5xl sm:text-5xl font-extrabold leading-tight mb-4">
             Hi <span className="wave">👋</span>,<br />
          </h1>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
            <span> My Name is Muhammad Usman</span>
          </h1>
          <p className="text-lg mb-8">
            I will fast track your business in web <br />
            Available for new projects and 1:1 mentoring
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to={"learn-react"}
              className="inline-block bg-skyblue-500 text-white py-2 px-6 rounded-full text-lg font-semibold border-2 border-white transition duration-300 hover:bg-gray-700 hover:text-white hover:border-transparent hover:shadow-lg"
            >
              Learn React Under the Hood
            </Link>
            <button
             onClick={()=> downloadFile(RESUME_URL)}
              className="inline-block bg-skyblue-500 text-white py-2 px-6 rounded-full text-lg font-semibold border-2 border-white transition duration-300 hover:bg-gray-700 hover:text-white hover:border-transparent hover:shadow-lg"
            >
              Download Resume
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/3 mt-8 sm:mt-0 order-first sm:order-none">
          <div style={{ backgroundColor: 'transparent' }} className="animate-emoji">
            <Lottie options={HeroOptions} height={300} width={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
