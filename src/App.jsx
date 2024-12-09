import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import AllProducts from "./pages/AllProducts";
import Transactions from './pages/Transactions';
import AddProduct from './pages/AddProduct';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import useConnectWallet from './hooks/useConnectWallet'

const App = () => {

  const { connectWallet, account, isConnected, disconnectWallet } = useConnectWallet();

  const router = createBrowserRouter(createRoutesFromElements(
    <>
  
    <Route path='/' element={
      <MainLayout
      connectWallet = {connectWallet}
      account = {account}
      isConnected = {isConnected}
      disconnectWallet = {disconnectWallet}
      />
      }>
      <Route index element={<Homepage isConnected = {isConnected} />} />
      <Route path='/allproducts' element={<AllProducts isConnected = {isConnected} />} />
      <Route path='/transactions' element={<Transactions />} />
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/search' element={<Search />} />
    </Route>
    <Route path='*' element={<NotFound />} />
  
    </>
  
  ));


  return ( 
    <>
      <RouterProvider router={router}/>
    </>
   );}
 
export default App;