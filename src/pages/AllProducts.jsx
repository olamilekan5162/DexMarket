const AllProducts = () => {
    return ( 
        <div className="container mt-10 px-6 flex flex-col ">
            <div className="flex flex-row justify-between items-center px-2 py-3 border-l-8 border-blue-700 h-fit ">
                <h1>All Products</h1>
                <a className="hover:text-blue-700" href="/">&#8592; back home</a>
              </div>
            <div className="flex flex-row flex-wrap container items-center mt-6 px-2">
                <div className="flex flex-col space-y-2 h-fit w-[200px] rounded pb-6 border hover:shadow-md">
                    <div className="h-[200px] w-full bg-gray-200 rounded flex flex-col items-center space-y-3 p-6">
                        <div className="rounded p-1 w-12 bg-red-700 text-white text-xs self-start">-30%</div>
                        <img className="w-[80px] h-auto items-center" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="product" />
                    </div>
                    <p className='font-bold'> Men T Shirt</p>
                    <p>
                        <span className='line-through text-red-700'>$-2100</span> 
                        <span className='text-blue-700'> $7000</span>
                    </p>
                    <p className="font-xs">rating: 60%</p>

                </div>
            </div>
        </div>
     );
}
 
export default AllProducts;