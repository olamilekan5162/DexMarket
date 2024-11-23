const Navbar = () => {
    return ( 
        <div className="contaier h-16 flex flex-row shadow-md px-6 items-center justify-between">
            <div className="text-blue-700 font-semibold">DEX<span className="text-black">MARKET</span></div>
            <form action="">
                <input type="text" name="search" id="search" placeholder="Search Product" />
            </form>
            <ul className="flex flex-row space-x-6 items-center ">
                <li className="hover:text-blue-700"><a href="/">Home</a></li>
                <li className="hover:text-blue-700"><a href="#">Products</a></li>
                <li><button className=" p-2 font-mediums border-blue-700 rounded-md hover:bg-blue-700 hover:text-white">Connect Wallet</button></li>
            </ul>

        </div>
     );
}
 
export default Navbar;
