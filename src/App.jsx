import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";



const App = () => {
  return ( 
    <div className="container flex-col text-center h-full bg-white">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
   );
}
 
export default App;