import React , {useContext} from 'react'
import { SidebarContext } from '../Contexts/SidebarContext'
import VideoCard from './VideoCard'
import data from '../videos.json'
const  VideoTray = ()=>{

    const [sbVis, setSbVis] = useContext(SidebarContext)
    const handleClick = (e)=>{
        setSbVis(false) 
    }

    
    return (
        <>
        {sbVis && <div className='flex flex-row pt-14 fixed w-full z-[-1] h-[100%] overflow-y-auto bg-black opacity-30 px-5 text-white ' onClick={handleClick}>
            </div>}
        <div className='flex flex-wrap pt-14 absolute w-full z-[-2] h-fit bg-darkGray text-white justify-around'>
            {videos.map(item=>{
                return <VideoCard title = {item.title} chName = {item.subtitle} chLogo = "https://cdn.anime-planet.com/characters/primary/kyoujurou-rengoku-1.jpg?t=1625891754" thumb = {item.thumb} source = {item.sources}/>
            })}
        </div>
        </>
    )
    
}

// list of videos to be displayed on the homepage
const videos = [...data.categories[0].videos,...data.categories[0].videos,...data.categories[0].videos,...data.categories[0].videos,...data.categories[0].videos,...data.categories[0].videos ,...data.categories[0].videos,...data.categories[0].videos,...data.categories[0].videos,...data.categories[0].videos,...data.categories[0].videos,...data.categories[0].videos,...data.categories[0].videos,...data.categories[0].videos] 

export default VideoTray