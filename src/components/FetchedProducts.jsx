import { buyProduct, listProducts } from '../contractAP.js'
import { ethers } from 'ethers'
import { useState, useEffect, useCallback } from 'react'
// import useConnectWallet from '../hooks/useConnectWallet'

const FetchedProducts = ({ isConnected }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const buy = async (name, id, price) => {
    await buyProduct(name, id, price)
  }

  const getProducts = useCallback(async () =>{
    if (isConnected){
      console.log(isConnected)
      const product = await listProducts()
      const filteredProduct = product.filter(prod => prod.isSold === false)
      setProducts(filteredProduct)
      setLoading(false)
    }
  },[isConnected])


  useEffect(() => {
    getProducts()
  },[getProducts])
  
  return (
    <>
      {loading && <div className="ml-4px self-start">Loading...</div>}
    <div className="w-full flex flex-row flex-wrap px-auto justify-center gap-4">
      {
        products.map((product) =>{
          return(
          <div key={product.id} className="flex flex-col gap-3 h-fit w-[300px] rounded pb-6 border text-center hover:shadow-md">
                    <div className="h-[200px] w-full bg-gray-100 rounded flex flex-col items-center gap-3 p-6">
                        <div className="rounded p-1 w-12 bg-red-700 text-white text-xs self-start">{Math.floor(Math.random() * 20)}%</div>
                        <img className="w-[80px] h-auto" src={product.imageURL} alt="product" />
                    </div>
                    <p className='font-bold px-2'>{product.name}</p>
                    <p className="text-xs px-4">{product.description}</p>
                    <p className='text-blue-700'> {ethers.formatEther(product.price)} ETH</p>
                    <button 
              className="self-center rounded text-white bg-blue-700 px-auto py-2 min-w-16"
              onClick={() => buy(product.name, product.id.toString(), ethers.formatEther(product.price))}>Buy</button>
                </div>
          )
        })
      }  
            </div>
      </>
    )
}
export default FetchedProducts
