import React from 'react'

const VideoCard = ({thumb, chLogo, chName, title, source}) => {
  const baseCdnUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/" 

  return (
    <a href={source} className='flex-flex-col w-[350px] h-fit p-2 mx-2 hover:bg-black'> 
        <img src={baseCdnUrl + thumb} className='w-full h-[200px] object-cover'></img>

        <div className='flex flex-row items-center'>
        <img src={chLogo} className='w-10 h-10 bg-cover rounded-full m-2'></img>
        <div className='flex flex-col mx-5'>
        <p className='text-md'>{title}</p>
        <p className='text-xs'>{chName}</p>
        </div>
        
        </div>
    </a>
  )
}

export default VideoCard