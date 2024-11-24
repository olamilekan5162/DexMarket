import ProductDb from '../../ProductDb.json'
import { Link } from 'react-router-dom'
const FetchedProducts = ({isHome}) => {
  let prod;
  if (isHome){
    prod = ProductDb.slice(0,4)
  }else{
    prod = ProductDb
  }
  return (
    <div className="flex flex-row flex-wrap container items-center mt-6 px-2 gap-4 justify-center">
      {
        prod.map((product) =>{
          const discount = Math.floor(Math.random() * 50)
          const discountedPrice = product.price - (product.price * (discount / 100))
          return(
          <div key={product.id} className="flex flex-col space-y-2 h-fit w-[350px] rounded pb-6 border hover:shadow-md">
                    <div className="h-[200px] w-full bg-gray-200 rounded flex flex-col items-center space-y-3 p-6">
                        <div className="rounded p-1 w-12 bg-red-700 text-white text-xs self-start">{discount}%</div>
                        <img className="w-[80px] h-auto items-center" src={product.image} alt="product" />
                    </div>
                    <p className='font-bold px-2'>{product.name}</p>
                    <p className="text-xs px-4">{product.description}</p>
                    <p>
                        <span className='line-through text-red-700'>${product.price}</span> 
                        <span className='text-blue-700'> ${discountedPrice.toFixed(2)}</span>
                    </p>
                    <Link to="/" className="self-center rounded text-white bg-blue-700 px-auto py-2 min-w-16">Buy</Link>
                </div>
          )
        })
      }
                
            </div>
    )
}
export default FetchedProducts