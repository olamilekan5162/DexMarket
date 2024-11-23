const Transactions = () => {
  return (
    <div className="container flex flex-col p-6 ">
      <h1 className="font-bold text-xl">Transactions</h1>
      
      <div className="flex flex-row justify-between items-center px-2 py-3 border-l-8 border-blue-700 h-fit mt-6">
        <select className="border-none outline-none p-2 bg-transparent font-semibold">
          <option value="All Transactions">All Transactions</option>
          <option value="Sales">Sales</option>
          <option value="Purchases">Purchases</option>
          <option value="Transfer">Transfer</option>
        </select>
        <a className="hover:text-blue-700" href="/"> &#852;back home</a>
      </div>
      <div>
        
      </div>
    </div>
    );
}
export default Transactions;