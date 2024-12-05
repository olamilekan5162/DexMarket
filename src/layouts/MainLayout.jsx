import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ connectWallet, account, isConnected, disconnectWallet }) => {
  return (
    <>
      <Navbar 
      connectWallet = {connectWallet}
      account = {account}
      isConnected = {isConnected}
      disconnectWallet = {disconnectWallet}
      />
      <Outlet />
      <Footer />
    </>
    )
}
export default MainLayout