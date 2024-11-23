const Products = () => {
    return ( 
        <div className="container mt-10 px-6 flex flex-col ">
            <div className="flex flex-row justify-between items-center px-2 py-3 border-l-8 border-blue-700 h-fit ">
                <h1>Our Products</h1>
                <a className="hover:text-blue-700" href="/">view all &#8594;</a>
            </div>
            <div className="flex flex-row flex-wrap container mt-6">
                <div className="flex flex-col space-y-2 h-fit w-[200px] rounded">
                    <div className="h-[200px] w-full bg-gray-300 rounded flex flex-col space-y-6">
                        <div className="rounded p-1 w-12 my-6 ml-6 bg-red-700 text-white text-xs">-30%</div>

                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Products;