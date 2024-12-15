import profile from '../assets/images/loko.jpg'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import {Menu, X, Search} from 'lucide-react'
import { useState } from 'react'

const Navbar = ( { connectWallet, account, isConnected, disconnectWallet } ) => {
  const [search, setSearch] = useState('')
  const [isMenu, setIsMenu] = useState(false)
  const navigate = useNavigate()
  
  const handleConnect = async () => {
    connectWallet()
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    navigate({
      pathname: '/search',
      search: `?query=${search}`
    })

  }

  const linkStyle = ({isActive}) => isActive ? 'bg-blue-700 rounded-md text-white py-2 px-4' : 'hover:text-blue-700'
  const smLinkStyle = 'hover:text-blue-700'
  
    return ( 
      <>
        <div className="w-full h-24 flex flex-row shadow-md px-6 items-center justify-between gap-2 bg-white fixed top-0 left-0">
            <div className="text-blue-700 font-semibold">DEX<span className="text-black">MARKET</span></div>
            <form  
              className="hidden border border-black min-w-6 justify-between rounded-md lg:flex flex-row items-center"
              onSubmit={handleSearch}>
                <input className='border-none outline-none p-2' value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="search" placeholder="Search Product" />
                <button type="submit">
                  <Search size={24} />
                </button>
            </form>

            <div className='lg:hidden'>
              <Search size={24} />
            </div>

            <ul className="hidden lg:flex flex-row gap-2 items-center">
                <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
                <li><NavLink to="/addproduct" className={linkStyle}>Add Product</NavLink></li>
                <li><NavLink to="/allproducts" className={linkStyle}>All Products</NavLink></li>
                <li><NavLink to="/transactions" className={linkStyle}>Transactions</NavLink></li>
            </ul>

            <div className='hidden w-9 h-9 rounded-full overflow-hidden lg:block'>
              <img className='w-9 h-9' src={profile} alt="profile" />
            </div>

            <div>
            <button className="p-1 border border-blue-700 rounded-md hover:bg-blue-700 hover:text-white" 
            onClick={isConnected ? disconnectWallet : handleConnect}>{
              isConnected ? `${account.slice(0,5)}...${account.slice(-5)}` : 'Connect Wallet'}
            </button>
            </div>

            <div className='lg:hidden' onClick={() => setIsMenu(!isMenu)}>
              {isMenu ? <X className='' size={24}/> :<Menu className='' size={24}/>}
            </div>

        </div>

        {/* menu bar for small screen */}

        {isMenu &&
        <div className='w-full h-24 mt-28 md-5 flex flex-col pl-2 gap-2 bg-white'
        onClick={() => setIsMenu(false)}>
        <ul className="flex flex-col gap-3">
          <li><Link to="/" className={smLinkStyle}>Home</Link></li>
          <li><Link to="" className={smLinkStyle}>Profile</Link></li>
          <li><Link to="/addproduct" className={smLinkStyle}>Add Product</Link></li>
          <li><Link to="/allproducts" className={smLinkStyle}>All Products</Link></li>
          <li><Link to="/transactions" className={smLinkStyle}>Transactions</Link></li>
        </ul>
        </div>
        }
      </>
     );
}
 
export default Navbar;
