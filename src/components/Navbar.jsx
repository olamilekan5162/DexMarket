import search from '../assets/icons/icons8-search.svg'
import profile from '../assets/images/loko.jpg'
import menu from '../assets/icons/menu.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="overflow-hidden md:container h-24 flex flex-row shadow-md px-6 items-center justify-between bg-white">
            <div className="text-blue-700 font-semibold">DEX<span className="text-black">MARKET</span></div>
            <form action="/" className="border border-black justify-between rounded-md p-2 flex flex-row items-center">
                <input className='border-none outline-none' type="text" name="search" id="search" placeholder="Search Product" />
                <button type="submit"><img className='w-6 h-auto' src={search} alt="search-icon" /></button>
            </form>
            <ul className="flex flex-row space-x-6 items-center">
                <li className="hover:text-blue-700"><Link to="/">Home</Link></li>
                <li className="hover:text-blue-700"><Link to="/transactions">Transactions</Link></li>
                <li className='w-9 h-9 rounded-full overflow-hidden'><img className='w-9 h-9' src={profile} alt="profile" /></li>
                <li><button className="p-1 border border-blue-700 rounded-md hover:bg-blue-700 hover:text-white">Connect Wallet</button></li>
            </ul>
        </div>
     );
}
 
export default Navbar;
