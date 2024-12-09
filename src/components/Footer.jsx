import { Link } from "react-router-dom";
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import twitter from '../assets/icons/twitter.svg'



const Footer = () => {
  return ( 
      <div className="min-h-[200px] mt-10 bg-blue-950 text-white text-sm grid grid-cols-4 gap-3 p-4">
          <div className="flex flex-col text-left gap-1">
            <h1 className="text-xl font-bold">DexMarket</h1>
              <p>A first class and number one goto decentralized exchange market</p>
              <p className="font-bold">Created by Oracle &copy; 2024</p>
          </div>
          <div className="flex flex-col text-left gap-1">
              <p className="font-bold">Quick Links</p>
              <ul>
                <li className="hover:text-blue-700"><Link to="/">Home</Link></li>
                <li className="hover:text-blue-700"><Link to="/allproducts">All Products</Link></li>
                <li className="hover:text-blue-700"><Link to="/solana">Solana</Link></li>
                <li className="hover:text-blue-700"><Link to="/metamask">MetaMask</Link></li>
              </ul>
          </div>
          <div className="flex flex-col text-left gap-1">
              <p className="font-bold ">Accounts</p>
              <ul>
                <li className="hover:text-blue-700"><Link to="/account">My account</Link></li>
                <li className="hover:text-blue-700"><Link to="/transactions">transactions</Link></li>
                
              </ul>
          </div>
          
          <div className="flex flex-col text-left gap-1">
              <p className="font-bold ">Contact Information</p>
              <p>contact me and follow on the following platform</p>
              <div className="flex flex-row items-center gap-2">
                <Link to="https://github.com/olamilekan5162"><img src={github} alt="oracle github" className="w-8 h-auto filter invert hover:fill-blue-700" /></Link>
                <Link to="https://www.linkedin.com/in/opeyemi-olalekan-10864523a"><img src={linkedin} alt="oracle linkedin" className="w-8 h-auto filter invert" /></Link>
                <Link to="https://x.com/olamilekan5162"><img src={twitter} alt="oracle linkedin" className="w-8 h-auto filter invert" /></Link>

              </div>
              
          </div>

      </div>
   );
}

export default Footer;