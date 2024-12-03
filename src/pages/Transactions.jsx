import { Link } from 'react-router-dom'
import { getTransactions } from '../contractAP';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers'


const Transactions = () => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect( () => {

    const myTransactions = async () => {
      const transact = await getTransactions()
      setTransactions(transact)
      setLoading(false)

    }
    myTransactions()
  },[])


  return (
    <div className="w-full flex flex-col px-6 mt-28 text-center gap-6">
      <h1 className="font-bold text-blue-700 text-xl">Transactions</h1>
      
      <div className="flex flex-row justify-between items-center p-2 border-l-8 border-blue-700 h-fit">
        <select className="border-none outline-none p-2 bg-transparent font-semibold">
          <option value="All Transactions">All Transactions</option>
          <option value="Sales">Sales</option>
          <option value="Purchases">Purchases</option>
          <option value="Transfer">Transfer</option>
        </select>
        <Link className="hover:text-blue-700" to="/"> &#8592; back home</Link>
      </div>
      {loading && <div>Loading</div>}
      <div className=" container flex flex-col gap-5">
        { transactions.map((transact) => {
          return(
            <div key={transact.id} className="flex flex-row shadow-sm border-b items-center justify-between p-3 hover:border-blue-700">
              <div className='text-left'>
                <h1 className="font-bold">Sales</h1>
                <p className="text-gray-500 text-sm">Seller: <span className='text-black'>{`${transact.seller.slice(0,5)}...${transact.seller.slice(-5)}`}</span></p>
                <p className="text-gray-500 text-sm">Buyer: <span className='text-black'>{`${transact.buyer.slice(0,5)}...${transact.buyer.slice(-5)}`}</span></p>
                <p className="text-xs mt-1 text-blue-700">{new Date(transact.timestamp.toString() * 1000).toLocaleString()}</p>
              </div>
              <div className='text-right'>
                <h1 className="font-bold">{ethers.formatEther(transact.amount)} ETH</h1>
                <p className="text-green-700">Success</p>
              </div>
            </div>
          )

        })
        }
        {/* <div className="flex flex-row border-b border-blue-700 items-center justify-between p-2 hover:shadow-lg">
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
        
        <div className="flex flex-row border-b border-blue-700 items-center justify-between p-2 hover:shadow-lg">
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
        
        <div className="flex flex-row border-b border-blue-700 items-center justify-between p-2 hover:shadow-lg">
          <div className='text-left'>
            <h1 className="font-bold">Transfer</h1>
            <p className="text-gray-400">Transfer to Freed</p>
            <p className="text-xs">2024-11-25, 11:54:pm</p>
          </div>
          <div className='text-right'>
            <h1 className="font-bold">-$1000</h1>
            <p className="text-green-700">Success</p>
          </div>
        </div> */}
        
      </div>
    </div>
    );
}
export default Transactions;