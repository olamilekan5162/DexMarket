import search from '../assets/icons/icons8-search.svg'
import profile from '../assets/images/loko.jpg'
const Navbar = () => {
    return ( 
        <div className="contaier h-24 flex flex-row shadow-md px-6 items-center justify-between">
            <div className="text-blue-700 font-semibold">DEX<span className="text-black">MARKET</span></div>
            <form action="/" className="border border-black min-w-6 rounded-md p-2 flex items-center">
                <input className='border-none outline-none' type="text" name="search" id="search" placeholder="Search Product" />
                <button type="submit"><img className='w-6 h-auto' src={search} alt="search-icon" /></button>
            </form>
            <ul className="flex flex-row space-x-6 items-center ">
                <li className="hover:text-blue-700"><a href="/">Home</a></li>
                <li className="hover:text-blue-700"><a href="#">Products</a></li>
                <li className="hover:text-blue-700"><a href="">Transactions</a></li>
                <li className='w-9 h-9 rounded-full overflow-hidden'><img className='w-9 h-auto' src={profile} alt="profile" /></li>
                <li><button className="p-1 font-medium border border-blue-700 rounded-md hover:bg-blue-700 hover:text-white">Connect Wallet</button></li>
            </ul>

        </div>
     );
}
 
export default Navbar;
