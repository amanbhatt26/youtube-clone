import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import VideoTray from './Components/VideoTray';
import { SidebarContextProvider } from './Contexts/SidebarContext';
const  App = ()=>{
  
  return (
    <div className='App'>
      <SidebarContextProvider>

        <Header/>
        <Sidebar/>
        <VideoTray/>
        
      </SidebarContextProvider>
    </div>
  );
}

export default App;
