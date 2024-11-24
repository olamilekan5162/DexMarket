const AddProduct = () => {
  return (
    <div className="container flex items-center justify-center p-6 mt-32">
      <form action="/" className="w-full min-w-24 border-2 rounded border-blue-700 mx-6 pb-6 px-10">
        <fieldset>
          <legend className="text-blue-700 p-4 font-bold text-xl">Add Product</legend>
          
          <label htmlFor="product" className="block text text-left">
            Product Name:
            <input 
            type="text" 
            name="product" id="product" 
            placeholder="Enter the nane of the Product"
            className="w-full p-3 border-none bg-gray-100 rounded my-2 outline-1 outline-blue-700" />
          </label>

          <label htmlFor="price" className="block text text-left">
            Price
            <input 
            type="number" 
            name="price" 
            id="price" 
            placeholder="Enter the price of the product" 
            className="w-full p-3 bg-gray-100 rounded my-2 outline-1 outline-blue-700" />
          </label>

          <label htmlFor="description" className="block text text-left">
            Description
            <textarea 
            name="description" 
            id="description"
            placeholder="Enter the product description"
            className="w-full p-3 bg-gray-100 rounded my-2 outline-1 outline-blue-700">
            </textarea>
          </label>

          <label htmlFor="image" className="block text text-left">
            Image Url
            <input 
            type="text" 
            name="image" 
            id="image" 
            placeholder="Enter the product image link" 
            className="w-full p-3 bg-gray-100 rounded my-2 outline-1 outline-blue-700" />
          </label>

          <button
          className="bg-blue-700 text-white px-6 py-2 mt-6 rounded hover:bg-blue-800" 
          type="submit">Submit</button>

        </fieldset>
      </form>
    </div>
    );
}
export default AddProduct;