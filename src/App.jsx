import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";


const router = createBrowserRouter(createRoutesFromElements( <Route path='/' element={<MainLayout />}>
<Route index element={<Homepage />} />
</Route>
  ))

const App = () => {
  return ( 
    <div className="container flex-col text-center h-full bg-white">
      <RouterProvider router={router}/>
    </div>
   );
}
 
export default App;