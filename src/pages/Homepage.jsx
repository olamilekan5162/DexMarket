import Hero from "../components/Hero";
import Products from "../components/Products";

const Homepage = ({ isConnected }) => {
  return (
    <div className="mt-28">
      <Hero />
      <Products isConnected = {isConnected}/>
    </div>
    )
}
export default Homepage