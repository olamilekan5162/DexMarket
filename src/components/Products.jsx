import FetchedProducts from './FetchedProducts'
import { Link } from 'react-router-dom'
const Products = ({isConnected}) => {
    return ( 
        <div className="w-full mt-6 px-6 flex flex-col gap-6 ">
            <div className="flex flex-row justify-between items-center px-2 py-3 border-l-8 border-blue-700 h-fit ">
                <h1>Our Products</h1>
                <Link className="hover:text-blue-700" to="/allproducts">view all &#8594;</Link>
            </div>
            <FetchedProducts isConnected={isConnected}/>
        </div>
     );
}
 
export default Products;