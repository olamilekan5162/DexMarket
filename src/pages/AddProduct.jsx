const AddProduct = () => {
  return (
    <div className="container flex items-center justify-center p-6">
      
      <form>
        <fieldset>
          <legend className="font-bold text-blue-700 p-4">ADD PRODUCT</legend>
          <label for="product">
            Product Name
            <input type="text" name="product" id="product"/>
          </label>
          <label for="price">
            Product Price
            <input type="number" name="price" id="price"/>
          </label>
          
        </fieldset>
      </form>
    </div>
    );
}
export default AddProduct;