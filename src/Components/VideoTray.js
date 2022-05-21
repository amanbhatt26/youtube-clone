import React , {useContext} from 'react'
import { SidebarContext } from '../Contexts/SidebarContext'
import VideoCard from './VideoCard'

const  VideoTray = ()=>{

    const [sbVis] = useContext(SidebarContext)
   
    return (
        <>
        {sbVis && <div className='flex flex-row pt-14 fixed w-full z-[-1] h-full overflow-y-auto bg-black opacity-30 px-5 '></div>}
        <div className='flex flex-wrap pt-14 fixed w-full z-[-2] h-full overflow-y-auto  bg-darkGray text-white justify-around'>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
        </>
    )
    
}

export default VideoTray