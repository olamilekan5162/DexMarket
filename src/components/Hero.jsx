const Hero = () => {
    return ( 
        <div className="flex flex-col w-full mt-[120px] items-center px-16">
            <h1 className="font-bold text-4xl lg:text-6xl">YOUR NUMBER ONE DECENTRALIZED EXCHANGE MARKET</h1>
            <h1 className="font-bold mt-4 text-4xl text-blue-700 lg:text-6xl">DEXMARKET</h1>
            <div className="flex flex-row space-x-5 mt-6">
                <a className="bg-blue-700 p-2 rounded text-white hover:bg-blue-800" href="/addproduct">Add Product</a>
                <a className="border border-blue-700 p-2 rounded hover:bg-blue-700 hover:text-white" href="#product">Shop Now &#8594;</a>
            </div>
            

        </div>
     );
}
 
export default Hero;