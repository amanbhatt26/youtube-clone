import React from 'react'
import {MdHomeFilled, MdExplore, MdSubscriptions, MdVideoLibrary, MdHistory, MdWatchLater, MdThumbUp, MdLibraryMusic, MdOutlineSportsCricket,MdSportsEsports, MdLocalMovies} from 'react-icons/md'
class ListItem extends React.Component{
    render(){

        console.log(this.props.icon)
        return <div className='flex flex-row text-white align-middle p-2 hover:bg-slate-700'>
            
            <div className='my-auto mx-2'>{this.props.icon}</div>
            <div className='my-auto mr-5' >{this.props.title}</div>
        </div>
    }
}
class Menulist extends React.Component{
    render(){
        return (

            <div className='outline outline-offset-1 outline-1 outline-slate-500 text-white p-2'>
                {this.props.heading?<h1 className='mx-auto p-2 font-bold'>{this.props.heading}</h1>:""}
                
                {this.props.list.map(item=>{
                    return <ListItem icon={item.icon} title={item.title} key={item.title}/>
                })}
            </div>
        );
    }
}
class Sidebar extends React.Component{
    render(){

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
}

export default Sidebar