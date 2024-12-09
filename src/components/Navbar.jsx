import searchIcon from '../assets/icons/icons8-search.svg'
import profile from '../assets/images/loko.jpg'
// import useConnectWallet from '../hooks/useConnectWallet'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ( { connectWallet, account, isConnected, disconnectWallet } ) => {
  // const { connectWallet, account, isConnected, disconnectWallet} = useConnectWallet();

  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  
  const handleConnect = async () => {
    connectWallet()
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    navigate('/search')

  }

  const linkStyle = ({isActive}) => isActive ? 'bg-blue-700 rounded-md text-white py-2 px-4 p1' : 'hover:text-blue-700'
  
    return ( 
        <div className="w-full h-24 flex flex-row shadow-md px-6 items-center justify-between bg-white fixed top-0 left-0">
            <div className="text-blue-700 font-semibold">DEX<span className="text-black">MARKET</span></div>
            <form  
              className="border border-black justify-between rounded-md p-2 flex flex-row items-center"
              onSubmit={handleSearch}>
                <input className='border-none outline-none' value={search} onChange={(e) => setSearch(e.value)} type="text" name="search" id="search" placeholder="Search Product" />
                <button type="submit"><img className='w-6 h-auto' src={searchIcon} alt="search-icon" /></button>
            </form>
            <ul className="flex flex-row space-x-6 items-center">
                <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
                <li><NavLink to="/addproduct" className={linkStyle}>Add Product</NavLink></li>
                <li><NavLink to="/allproducts" className={linkStyle}>All Products</NavLink></li>
                <li><NavLink to="/transactions" className={linkStyle}>Transactions</NavLink></li>
                <li className='w-9 h-9 rounded-full overflow-hidden'><img className='w-9 h-9' src={profile} alt="profile" /></li>
                <li><button className="p-1 border border-blue-700 rounded-md hover:bg-blue-700 hover:text-white" onClick={isConnected ? disconnectWallet : handleConnect}>{isConnected ? `${account.slice(0,5)}...${account.slice(-5)}` : 'Connect Wallet'}</button></li>
            </ul>
        </div>
     );
}
 
export default Navbar;
