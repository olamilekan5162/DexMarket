import { Link } from 'react-router-dom'
const Transactions = () => {
  return (
    <div className="container flex flex-col p-6 mt-32">
      <h1 className="font-bold text-blue-700 text-xl">Transactions</h1>
      
      <div className="flex flex-row justify-between items-center p-2 border-l-8 border-blue-700 h-fit mt-6">
        <select className="border-none outline-none p-2 bg-transparent font-semibold">
          <option value="All Transactions">All Transactions</option>
          <option value="Sales">Sales</option>
          <option value="Purchases">Purchases</option>
          <option value="Transfer">Transfer</option>
        </select>
        <Link className="hover:text-blue-700" to="/"> &#8592; back home</Link>
      </div>
      <div className=" container flex flex-col mt-6 space-y-4">
        <div className="flex flex-row border-b-2 items-center justify-between py-4 px-2 hover:shadow-md">
          <div className='text-left'>
            <h1 className="font-bold">Sales</h1>
            <p className="text-gray-500">Men T Shirt</p>
            <p className="text-xs">2024-11-23, 10:54:am</p>
          </div>
          <div className='text-right'>
            <h1 className="font-bold">+$4100</h1>
            <p className="text-green-700">Sucess</p>
          </div>
        </div>
        
        <div className="flex flex-row border-b-2 items-center justify-between p-3 hover:shadow-md">
          <div className='text-left'>
            <h1 className="font-bold">Purchases</h1>
            <p className="text-gray-400">Shool bag</p>
            <p className="text-xs">2024-11-10, 1:54:am</p>
          </div>
          <div className='text-right'>
            <h1 className="font-bold">-$3000</h1>
            <p className="text-red-700">Failed</p>
          </div>
        </div>
        
      </div>
    </div>
    );
}
export default Transactions;