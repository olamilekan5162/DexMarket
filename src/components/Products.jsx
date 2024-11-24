import FetchedProducts from './FetchedProducts'
const Products = () => {
    return ( 
        <div id="product" className="container mt-10 px-6 flex flex-col ">
            <div className="flex flex-row justify-between items-center px-2 py-3 border-l-8 border-blue-700 h-fit ">
                <h1>Our Products</h1>
                <a className="hover:text-blue-700" href="/allproducts">view all &#8594;</a>
            </div>
            <FetchedProducts isHome={true}/>
        </div>
     );
}
 
export default Products;