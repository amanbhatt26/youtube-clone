import React, {useContext} from 'react'
import { SidebarContext } from '../Contexts/SidebarContext'
import {MdHomeFilled, MdExplore, MdSubscriptions, MdVideoLibrary, MdHistory, MdWatchLater, MdThumbUp, MdLibraryMusic, MdOutlineSportsCricket,MdSportsEsports, MdLocalMovies} from 'react-icons/md'
const ListItem = (props)=>{
    
    const [sbVis] = useContext(SidebarContext);
    console.log(sbVis)
    // console.log(props.icon)
    return <div className='flex flex-row text-white align-middle p-2 hover:bg-slate-700'>
        
        <div className='my-auto mx-2'>{props.icon}</div>
        {sbVis && <div className='my-auto mr-5' >{props.title}</div>}
    </div>
    
}
const Menulist = (props)=>{
    const [sbVis] = useContext(SidebarContext)
    return (

        <div className='outline outline-offset-1 outline-1 outline-slate-500 text-white p-2'>
             {sbVis && props.heading && <h1 className='mx-auto p-2 font-bold'>{props.heading}</h1>}
            
            {props.list.map(item=>{
                return <ListItem icon={item.icon} title={item.title} key={item.title}/>
            })}
        </div>
    );
    
}
const Sidebar = ()=>{
    
    
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
        <div className='flex flex-col h-full bg-lightgray pt-14 fixed left-0 overflow-y-auto overflow-x-hidden'>
            
        <Menulist list={generallist}/>            
        <Menulist list={subslist} heading="SUBSCRIPTIONS"/>

        </div>
    );
    
}

export default Sidebar