import Product from "../../../components/Product";

const ProductList = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Featured Products</h2>
      <div className='flex justify-content-between align-items-end'>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
        <button
          style={{
            width: "125px",
            height: "49px",
            color: "black",
            border: "1px solid black",
            borderRadius: "10px",
          }}>
          View All
        </button>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-5'>
        {[...Array(8)].map(() => {
          return <Product />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
