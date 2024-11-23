const Transactions = () => {
  return (
    <div className="container flex flex-col p-6 ">
      <h1 className="font-bold text-blue-700 text-xl">Transactions</h1>
      
      <div className="flex flex-row justify-between items-center px-2 py-3 border-l-8 border-blue-700 h-fit mt-6">
        <select className="border-none outline-none p-2 bg-transparent font-semibold">
          <option value="All Transactions">All Transactions</option>
          <option value="Sales">Sales</option>
          <option value="Purchases">Purchases</option>
          <option value="Transfer">Transfer</option>
        </select>
        <a className="hover:text-blue-700" href="/"> &#8592; back home</a>
      </div>
      <div className=" container flex flex-col mt-6 space-y-2">
        <div className="flex flex-row shadow-md items-center justify-between py-4 px-2 hover:border-2">
          <div>
            <h1 className="font-bold">Sales</h1>
            <p className="text-gray-400">Men T Shirt</p>
            <p className="text-xs">2024-11-23, 10:54:am</p>
          </div>
          <div>
            <h1 className="font-bold">+$4100</h1>
            <p className="text-green-700">Sucess</p>
          </div>
        </div>
        
        <div className="flex flex-row shadow-md items-center justify-between py-4 px-2">
          <div>
            <h1 className="font-bold">Purchases</h1>
            <p className="text-gray-400">Shool bag</p>
            <p className="text-xs">2024-11-10, 1:54:am</p>
          </div>
          <div>
            <h1 className="font-bold">-$3000</h1>
            <p className="text-red-700">Failed</p>
          </div>
        </div>
        
      </div>
    </div>
    );
}
export default Transactions;