import ProductDb from '../../ProductDb.json'
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
          return(
          <div key={product.id} className="flex flex-col space-y-2 h-fit w-[200px] rounded pb-6 border hover:shadow-md">
                    <div className="h-[200px] w-full bg-gray-200 rounded flex flex-col items-center space-y-3 p-6">
                        <div className="rounded p-1 w-12 bg-red-700 text-white text-xs self-start">{Math.floor(Math.random() * 50)}%</div>
                        <img className="w-[80px] h-auto items-center" src={product.image} alt="product" />
                    </div>
                    <p className='font-bold'>{product.name}</p>
                    <p>
                        <span className='line-through text-red-700'>$-2100</span> 
                        <span className='text-blue-700'> ${product.price}</span>
                    </p>
                    <p className="font-xs">rating: {Math.floor(Math.random()*100)}%</p>
                </div>
          )
        })
      }
                
            </div>
    )
}
export default FetchedProducts