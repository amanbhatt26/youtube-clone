import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { SidebarContextProvider } from './Contexts/SidebarContext';
const  App = ()=>{
  return (
    <div className='App'>
      <SidebarContextProvider>
        <Header/>
        <Sidebar/>
      </SidebarContextProvider>
    </div>
  );
}

export default App;
