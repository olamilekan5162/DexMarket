const AddProduct = () => {
  return (
    <div className="container flex items-center justify-center p-6 mt-32">
      <form action="/" className="w-full border-2 border-blue-700">
        <fieldset>
          <legend className="text-blue-700 p-4 font-bold text-xl">Add Product</legend>
          <label htmlFor="product" className="inline-block">
            Product Name:
            <input type="text" name="product" id="product" placeholder="Enter the nane of the Product" />
          </label>
          <label htmlFor="price">
            Price
            <input type="number" name="price" id="price" placeholder="Enter the price of the product" />
          </label>
          <label htmlFor="description">
            Description
            <textarea name="description" id="description"></textarea>
          </label>
        </fieldset>
      </form>
    </div>
    );
}
export default AddProduct;