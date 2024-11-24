import { Link } from "react-router-dom";
const Footer = () => {
  return ( 
      <div className="min-h-[200px] mt-20 bg-blue-950 text-white grid grid-cols-4 p-10">
          <div className="text-left">
            <h1 className="text-xl font-bold">DexMarket</h1>
              <p>A first class and number one goto decentralized exchange market</p>
              <p className="font-bold">Created by Oracle &copy; 2024</p>
          </div>
          <div className="flex flex-col text-left items-center">
              <p className="font-bold">Quick Links</p>
              <ul>
                <li className="hover:text-blue-700"><Link to="/">Home</Link></li>
                <li className="hover:text-blue-700"><Link to="/allproducts">All Products</Link></li>
                <li className="hover:text-blue-700"><Link to="/solana">Solana</Link></li>
                <li className="hover:text-blue-700"><Link to="/metamask">MetaMask</Link></li>
              </ul>
          </div>
          <div className="text-left">
              <p className="font-bold ">Accounts</p>
              <ul>
                <li className="hover:text-blue-700"><Link to="/account">My account</Link></li>
                <li className="hover:text-blue-700"><Link to="/transactions">transactions</Link></li>
                
              </ul>
          </div>
          
          <div className="text-left">
              <p className="font-bold ">Contact Information</p>
              <p>contact me at Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, libero!</p>
              
          </div>

      </div>
   );
}

export default Footer;