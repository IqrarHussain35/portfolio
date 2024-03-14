import React from 'react'
import Lottie from 'react-lottie';
import { youtubeOptions, githubOptions, linkedInOptions, GITHUB_PROFILE_CDN, LINKEDIN_PROFILE_CDN, YOUTUBE_PROFILE_CDN } from '../utlis/constants';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
  return (
    <div className='bg-gray-800 p-3 flex items-center justify-between  border-t border-gray-500 drop-shadow-2xl'>
    <div className='mx-auto'>
      <span className='font-sans font-semibold text-slate-600'>Made with <FavoriteIcon sx={{color: 'red'}} />  in Pakistan</span>
    </div>
    <div className='flex gap-4'>
    <a href={GITHUB_PROFILE_CDN} target='_blank' rel="noreferrer">
    <Lottie options={githubOptions} height={26} width={26}  />
    </a>
    <a href={LINKEDIN_PROFILE_CDN} target='_blank' rel="noreferrer">
    <Lottie options={linkedInOptions} height={26} width={26} />
    </a>
    <a href={YOUTUBE_PROFILE_CDN} target='_blank' rel="noreferrer">
    <Lottie options={youtubeOptions} height={26} width={26} />
    </a>
    </div>
  </div>
  
  )
}

export default Footer