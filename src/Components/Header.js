import React from 'react'
import {MdNotificationsActive,MdMenu, MdOutlineSearch,MdVideoLibrary} from 'react-icons/md'
class Header extends React.Component{
    render(){
        return(
            <header className="z-50 transition duration-150 fixed w-full flex flex-row justify-between bg-black text-white p-2 ">
                <span className='flex flex-row '>
                    <button><MdMenu className='w-6 h-6 m-auto mx-2'/></button>
                    <button><img className='w-9 h-9 mx-2 align-middle' src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png" width="350" alt="Hd Youtube Logo Png Transparent Background" /></button>
                </span>
                
                <div className='flex flex-row justify-center'>
                <input type="text" className="bg-[#333333] outline outline-offset-1 outline-1 outline-slate-500 focus:outline-none focus:outline-1 focus:outline-blue-500 hidden sm:flex "></input>
                <button className='bg-[#555555] px-3 mx-1'><MdOutlineSearch className='w-6 h-6'/></button>
                
                </div>
                <span className='flex flex-row'><button><MdNotificationsActive className='w-6 h-6 m-auto mx-2'/></button>

                <button><img className='w-6 h-6 m-auto mx-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8v3CKAbYRcs-BDI6mCRj6HifI-bE7BWAT6g&usqp=CAU"/>
                </button>
                </span>
               
            </header>
        );
    }
}

export default Header