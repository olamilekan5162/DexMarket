import nft from '../assets/images/loko.jpg'

const Products = () => {
    return ( 
        <div className="container mt-10 px-6 flex flex-col ">
            <div className="flex flex-row justify-between items-center px-2 py-3 border-l-8 border-blue-700 h-fit ">
                <h1>Our Products</h1>
                <a className="hover:text-blue-700" href="/">view all &#8594;</a>
            </div>
            <div className="flex flex-row flex-wrap container items-center mt-6">
                <div className="flex flex-col space-y-2 h-fit w-[200px] rounded">
                    <div className="h-[200px] w-full bg-gray-200 rounded flex flex-col items-center space-y-2 p-6">
                        <div className="rounded p-1 w-12 bg-red-700 text-white text-xs self-start">-30%</div>
                        <img className="w-[100px] h-auto items-center" src={nft} alt="product" />
                    </div>
                    <p className='font-bold'> Oracle Nft</p>
                    <p className='text-blue-700'>$7000</p>

                </div>
            </div>
        </div>
     );
}
 
export default Products;