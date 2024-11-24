const AddProduct = () => {
  return (
    <div className="container flex items-center justify-center p-6 mt-32">
      <form action="/" className="w-full bottom-1">
        <fieldset>
          <legend className="text-blue-700 p-4 font-bold">Add Product</legend>
          <label htmlFor="product" className="inline-block">
            Product Name:
            <input type="text" name="product" id="product" placeholder="Enter the nane of the Product" />
          </label>
        </fieldset>
      </form>
    </div>
    );
}
export default AddProduct;