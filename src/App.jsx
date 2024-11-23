import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {

  return ( 
    <div className="container flex-col text-center h-full bg-white">
      <Navbar />
      <Hero />

    </div>
   );
}
 
export default App;