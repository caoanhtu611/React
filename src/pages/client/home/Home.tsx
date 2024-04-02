import Banner from "./Banner";
import Content from "./Content";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Content />
        <ProductList title="Featured Products" />
      </div>

      <Banner />
      <div className="container mx-auto">
        <ProductList title="Popular Products" />
      </div>
    </div>
  );
};

export default Home;
