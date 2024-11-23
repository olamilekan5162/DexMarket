const Transactions = () => {
  return (
    <div className="container flex flex-col mt-10 p-6 ">
      <h1>Transactions</h1>
      <div className="flex items-center px-2 py-3 border-l-8 border-blue-700 h-fit ">
        <select>
          <option selected>All Transactions</option>
          <option>Sales</option>
          <option>Purchases</option>
          <option>Transfer</option>
        </select>
      </div>
      
    </div>
    );
}
export default Transactions;