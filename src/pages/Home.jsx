import Headers from '../components/Headers';
import HomePage from '../components/HomePage';
import VideoCard from "../components/VideoCard.jsx";

function Home() {
  return (
   <div className="min-h-screen bg-gray-100">
      <Headers />
       <HomePage />
   </div>
  );
}

export default Home;