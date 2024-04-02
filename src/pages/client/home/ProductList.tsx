import Product from "../../../components/Product";
import image1 from "../../../image/Image1.jpg";
import image2 from "../../../image/Image2.png";
import image3 from "../../../image/Image3.png";
import image4 from "../../../image/Image4.png";
import image5 from "../../../image/Image5.png";
import image6 from "../../../image/Image6.png";
import image7 from "../../../image/Image7.png";
import image8 from "../../../image/Image8.png";

const ProductList = (props: any) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h2>{props.title}</h2>
      <div className="flex justify-content-between align-items-end">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
        <button
          style={{
            width: "125px",
            height: "49px",
            color: "black",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          View All
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <div className="">
          <img src={image1} alt="" />
          <div className="flex justify-content-between mt-[10px]">
            <h6 style={{ fontWeight: "bold" }}>Round Dining Table</h6>
            <span style={{ fontWeight: "bold" }}>$55</span>
          </div>
          <span>Bed Table</span>
          <button
            className=" mt-[10px]"
            style={{
              width: "100%",
              height: "49px",
              color: "black",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="">
          <img src={image2} alt="" />
          <div className="flex justify-content-between mt-[10px]">
            <h6 style={{ fontWeight: "bold" }}>Right Hand Fabric</h6>
            <span style={{ fontWeight: "bold" }}>$55</span>
          </div>
          <span>Bed Table</span>
          <button
            className=" mt-[10px]"
            style={{
              width: "100%",
              height: "49px",
              color: "black",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="">
          <img src={image3} alt="" />
          <div className="flex justify-content-between mt-[10px]">
            <h6 style={{ fontWeight: "bold" }}>Velvet Wingback Chair</h6>
            <span style={{ fontWeight: "bold" }}>$55</span>
          </div>
          <span>Bed Table</span>
          <button
            className=" mt-[10px]"
            style={{
              width: "100%",
              height: "49px",
              color: "black",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="">
          <img src={image4} alt="" />
          <div className="flex justify-content-between mt-[10px]">
            <h6 style={{ fontWeight: "bold" }}>Velvet Wingback Chair</h6>
            <span style={{ fontWeight: "bold" }}>$55</span>
          </div>
          <span>Bed Table</span>
          <button
            className=" mt-[10px]"
            style={{
              width: "100%",
              height: "49px",
              color: "black",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="">
          <img src={image5} alt="" />
          <div className="flex justify-content-between mt-[10px]">
            <h6 style={{ fontWeight: "bold" }}>Product name</h6>
            <span style={{ fontWeight: "bold" }}>$55</span>
          </div>
          <span>Bed Table</span>
          <button
            className=" mt-[10px]"
            style={{
              width: "100%",
              height: "49px",
              color: "black",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="">
          <img src={image6} alt="" />
          <div className="flex justify-content-between mt-[10px]">
            <h6 style={{ fontWeight: "bold" }}>Velvet Dining Chair</h6>
            <span style={{ fontWeight: "bold" }}>$55</span>
          </div>
          <span>Bed Table</span>
          <button
            className=" mt-[10px]"
            style={{
              width: "100%",
              height: "49px",
              color: "black",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="">
          <img src={image7} alt="" />
          <div className="flex justify-content-between mt-[10px]">
            <h6 style={{ fontWeight: "bold" }}>Jute Pouffe White</h6>
            <span style={{ fontWeight: "bold" }}>$55</span>
          </div>
          <span>Bed Table</span>
          <button
            className=" mt-[10px]"
            style={{
              width: "100%",
              height: "49px",
              color: "black",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="">
          <img src={image8} alt="" />
          <div className="flex justify-content-between mt-[10px]">
            <h6 style={{ fontWeight: "bold" }}>Fabric Dining Chair</h6>
            <span style={{ fontWeight: "bold" }}>$55</span>
          </div>
          <span>Bed Table</span>
          <button
            className=" mt-[10px]"
            style={{
              width: "100%",
              height: "49px",
              color: "black",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
