import React from 'react'

const VideoCard = () => {
  return (
    <div className='flex-flex-col w-[350px] h-fit p-2 mx-2'> 
        <img src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg' className='w-full h-[200px] object-cover'></img>

        <div className='flex flex-row items-center'>
        <img src='https://cdn.anime-planet.com/characters/primary/kyoujurou-rengoku-1.jpg?t=1625891754' className='w-10 h-10 bg-cover rounded-full m-2'></img>
        <div className='flex flex-col items-center mx-5'>
        <p className='text-md'>Big Buck Bunny</p>
        <p className='text-xs'>By Blender Foundation</p>
        </div>
        
        </div>
    </div>
  )
}

export default VideoCard