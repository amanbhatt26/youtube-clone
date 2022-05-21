import React, {useContext, useEffect, useState} from 'react'
import { SidebarContext } from '../Contexts/SidebarContext'
import {MdHomeFilled, MdExplore, MdSubscriptions, MdVideoLibrary, MdHistory, MdWatchLater, MdThumbUp, MdLibraryMusic, MdOutlineSportsCricket,MdSportsEsports, MdLocalMovies} from 'react-icons/md'
const ListItem = (props)=>{
    
    return <div className='flex flex-row text-white align-middle p-2 hover:bg-slate-700'>
        
        <div className='my-auto mx-2'>{props.icon}</div>
        <div className='my-auto mr-5' >{props.title}</div>
    </div>
    
}
const Menulist = (props)=>{
    
    return (

        <div className='outline outline-offset-1 outline-1 outline-slate-500 text-white p-2'>
             {props.heading && <h1 className='mx-auto p-2 font-bold'>{props.heading}</h1>}
            
            {props.list.map(item=>{
                return <ListItem icon={item.icon} title={item.title} key={item.title}/>
            })}
        </div>
    );
    
}
const Sidebar = ()=>{
    
    const [sbVis, setSbVis] = useContext(SidebarContext)
    var generallist = [{icon:<MdHomeFilled className='w-6 h-6'/>, title:"Home"}, 
    {icon:<MdExplore className='w-6 h-6'/>, title:"Explore"},
    {icon:<MdSubscriptions className='w-6 h-6'/>, title:"Subscriptions"},
    {icon:<MdVideoLibrary className='w-6 h-6'/>, title:'Library'},
    {icon:<MdHistory className='w-6 h-6'/>, title:'History'},
    {icon:<MdWatchLater className='w-6 h-6'/>, title:'Watch Later'}, 
    {icon:<MdThumbUp className='w-6 h-6'/>, title:'Liked Videos'}]

    var subslist = [{icon:<MdLibraryMusic className='w-6 h-6'/>, title:'Music'},
    {icon:<MdOutlineSportsCricket className='w-6 h-6'/>, title:'Sports'},
    {icon:<MdSportsEsports className='w-6 h-6'/>, title:'Gaming'},
    {icon:<MdLocalMovies className='w-6 h-6'/>, title:'Movies'}]

    return (
        <>
        { sbVis && 
        <div className='flex flex-col h-full z-100 bg-lightGray pt-14 fixed w-fit left-0 overflow-y-auto overflow-x-hidden'>
            
        <Menulist list={generallist}/>            
        <Menulist list={subslist} heading="SUBSCRIPTIONS"/>

        </div>}
        </>
    );
    
}

export default Sidebar