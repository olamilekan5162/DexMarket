import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import AllProducts from "./pages/AllProducts";
import Transactions from './pages/Transactions';
import AddProduct from './pages/AddProduct';
import NotFound from './pages/NotFound';


const router = createBrowserRouter(createRoutesFromElements(
  <>

  <Route path='/' element={<MainLayout />}>
    <Route index element={<Homepage />} />
    <Route path='/allproducts' element={<AllProducts />} />
    <Route path='/transactions' element={<Transactions />} />
    <Route path='/addProduct' element={<AddProduct />} />
  </Route>
  <Route path='*' element={<NotFound />} />

  </>

));

const App = () => {
  return ( 
    <>
      <RouterProvider router={router}/>
    </>
   );}
 
export default App;