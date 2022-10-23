const ProductDetails = ({ productDetailspage, handleClick }) => {
  return (
    <>
      <div className="container mt-5 text-center">
        <img src={productDetailspage?.thumbnail} alt="img"></img>
        <h2 className="mt-2">{productDetailspage?.title.toUpperCase()}</h2>
        <div>{productDetailspage?.description}</div>
        <div>{productDetailspage?.price}</div>
        {productDetailspage && (
          <button
            className="btn btn-primary"
            onClick={(e) => handleClick(e, productDetailspage)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </>
  );
};
export default ProductDetails;
