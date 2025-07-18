import Headers from '../components/Headers';
import HomePage from '../components/HomePage';
import SideBar from "../components/SideBar.jsx";

function Home() {
  return (
   <div className="min-h-screen bg-gray-100">
      <Headers />
       <HomePage />
       <SideBar/>
   </div>
  );
}

export default Home;