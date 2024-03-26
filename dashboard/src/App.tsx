import './App.css'
import {BrowserRouter as Routers} from "react-router-dom";
import SideBar from './components/sidebar/SideBar';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <Routers>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <AllRoutes />
      </div>
    </Routers>
  )
}

export default App
