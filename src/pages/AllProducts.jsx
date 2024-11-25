import { Link } from "react-router-dom";
import FetchedProducts from '../components/FetchedProducts'
const AllProducts = () => {
    return ( 
        <div className="w-full mt-28 px-6 flex flex-col text-center gap-6 ">
            <h1 className="font-bold text-blue-700 text-xl">All Exclusive Products</h1>
            <div className="flex flex-row justify-between items-center px-2 py-3 border-l-8 border-blue-700 h-fit">
                <h1>All Products</h1>
                <Link className="hover:text-blue-700" to="/">&#8592; back home</Link>
              </div>
              <FetchedProducts isHome={false}/>
        </div>
     );
}
 
export default AllProducts;