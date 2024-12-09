import { useState } from 'react'
import { addProduct } from '../contractAP.js'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const navigate = useNavigate()
  
  const submitProduct = async (e) => {
    e.preventDefault()
    await addProduct(name, description, price, image)
    return navigate('/')
  }
  
  return (
    <div className="w-full flex items-center justify-center px-6 mt-28">
      <form action="/" className="w-full min-w-24 border-2 rounded border-blue-700 py-6 px-10" onSubmit={submitProduct}>
        <fieldset>
          <legend className="text-blue-700 p-4 font-bold text-xl text-center">Add Product</legend>
          
          <label htmlFor="product" className="block text-left">
            Product Name:

            <input 
            type="text" 
            name="product" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="product" 
            required
            placeholder="Enter the name of the Product"
            className="w-full p-3 border-none bg-gray-100 rounded my-2 outline-1 outline-blue-700" />

          </label>

          <label htmlFor="price" className="block text-left">
            Price
            
            <input 
            type="number" 
            name="price" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="price" 
            required
            placeholder="Enter the price of the product" 
            className="w-full p-3 bg-gray-100 rounded my-2 outline-1 outline-blue-700" />

          </label>

          <label htmlFor="description" className="block text-left">
            Description

            <textarea 
            name="description" 
            id="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the product description"
            className="w-full p-3 bg-gray-100 rounded my-2 outline-1 outline-blue-700">
            </textarea>

          </label>

          <label htmlFor="image" className="block text text-left">
            Image Url

            <input 
            type="url" 
            name="image" 
            value={image}
            required
            onChange={(e) => setImage(e.target.value)}
            id="image" 
            placeholder="Enter the product image url" 
            className="w-full p-3 bg-gray-100 rounded my-2 outline-1 outline-blue-700" />
            
          </label>

          <button
          className="bg-blue-700 text-white px-6 py-2 mt-6 rounded hover:bg-blue-800" 
          type="submit"
          >Submit
          </button>

        </fieldset>
      </form>
    </div>
    );
}
export default AddProduct;