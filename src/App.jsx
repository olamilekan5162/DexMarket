import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import AllProducts from "./pages/AllProducts";
import Transactions from './pages/Transactions';
import AddProduct from './pages/AddProduct';
import SingleProduct from './pages/SingleProduct';


const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<MainLayout />}>
    <Route index element={<Homepage />} />
    <Route path='/allproducts' element={<AllProducts />} />
    <Route path='/transactions' element={<Transactions />} />
    <Route path='/addProduct' element={<AddProduct />} />
    <Route path='/singleProduct' element={<SingleProduct />} />
  </Route>

));

const App = () => {
  return ( 
    <div className="container flex-col text-center h-full bg-white">
      <RouterProvider router={router}/>
    </div>
   );
}
 
export default App;