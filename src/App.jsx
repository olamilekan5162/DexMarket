import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {

  return ( 
    <div className="container flex-col text-center h-full bg-white mb-16">
      <Navbar />
      <Hero />
      <Products />

    </div>
   );
}
 
export default App;