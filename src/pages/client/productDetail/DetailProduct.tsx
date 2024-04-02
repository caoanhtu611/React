import Slider from "react-slick";
import anh1 from "../../../image/Frame 894.png";
import anh2 from "../../../image/Frame 895.png";
import anh3 from "../../../image/Frame 896.png";
import anh4 from "../../../image/Frame 897.png";
import anh5 from "../../../image/Frame 919.png";

import image5 from "../../../image/Image5.png";
import image6 from "../../../image/Image6.png";
import image7 from "../../../image/Image7.png";
import image8 from "../../../image/Image8.png";
const DetailProduct = () => {
  const arr = [anh1, anh2, anh3, anh4];
  const settings = {
    customPaging: function (i: any) {
      return (
        <div style={{}}>
          <img src={arr[i]} height={100} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mx-auto py-[40px]">
      <div className="px-[50px]">
        <nav className="flex justify-between" aria-label="Breadcrumb">
          <ol className="inline-flex items-center mb-3 sm:mb-0">
            <li>
              <div className="flex items-center">
                <button
                  id="dropdownProject"
                  data-dropdown-toggle="dropdown-project"
                  className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
                >
                  Account
                </button>
              </div>
            </li>
            <span className="mx-2 text-gray-400">/</span>
            <li aria-current="page">
              <div className="flex items-center">
                <button
                  id="dropdownDatabase"
                  data-dropdown-toggle="dropdown-database"
                  className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-600 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
                >
                  Gaming
                </button>
              </div>
            </li>
            <span className="mx-2 text-gray-400">/</span>
            <li aria-current="page">
              <div className="flex items-center">
                <button
                  id="dropdownDatabase"
                  data-dropdown-toggle="dropdown-database"
                  className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-black bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
                >
                  Product Havic HV G-92 Gamepad
                </button>
              </div>
            </li>
          </ol>
        </nav>
        <div className="px-[20px] flex justify-content-between mt-[50px]">
          <div
            className="slider-container flex gap-4"
            style={{
              width: "600px",
            }}
          >
            <div
              className=""
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <img src={anh2} alt="" />
              <img src={anh3} alt="" />
              <img src={anh4} alt="" />
              <img src={anh5} alt="" />
            </div>
            <div className="">
              <img src={anh1} alt="" />
            </div>
            {/* <Slider {...settings}>
              <div>
                <img src={anh1} width={500} height={600} />
              </div>
              <div>
                <img src={anh2} width={500} height={600} />
              </div>
              <div>
                <img src={anh3} width={500} height={600} />
              </div>
              <div>
                <img src={anh4} width={500} height={600} />
              </div>
            </Slider> */}
          </div>
          <div className="w-[400px]">
            <div className="">
              <h3 className="font-bold">Havic HV G-92 Gamepad</h3>
            </div>
            <div className="flex gap-3 mt-[15px]">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <div
                className=" "
                style={{
                  borderRight: "1px solid black",
                  color: "#dddddds",
                  paddingRight: "18px",
                }}
              >
                <span>(150) reviews</span>
              </div>
              <span style={{ color: "#00FF66" }}>In Shock</span>
            </div>
            <div
              className=""
              style={{ borderBottom: "2px solid grey", paddingBottom: "20px" }}
            >
              <span style={{ fontSize: "25px" }}>$192.00</span>
              <p className="mt-[10px]">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
            </div>
            <div className=" mt-5 flex justify-content-between">
              <form
                className=""
                style={{
                  border: "1px solid grey",
                  width: "max-content",
                  borderRadius: "9px",
                }}
              >
                <div className="relative flex items-center max-w-[8rem]">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="quantity-input"
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    value={1}
                    type="text"
                    id="quantity-input"
                    data-input-counter=""
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="quantity-input"
                    className="bg-[#DB4444] dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-3 h-3 text-white dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </form>
              <button
                style={{
                  background: "#DB4444",
                  width: "165px",
                  color: "white",
                  height: "44px",
                  borderRadius: "9px",
                }}
              >
                Buy Now
              </button>
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "44px",
                  width: "44px",
                  border: "1px solid grey",
                  borderRadius: "9px",
                }}
              >
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="mt-5" style={{ border: "1px solid grey" }}>
              <div
                className="flex align-items-center p-3 gap-3"
                style={{ borderBottom: "1px solid grey" }}
              >
                <i className="fa-solid fa-truck text-[18px]"></i>
                <div className="flex flex-column">
                  <span>Free Delivery</span>
                  <span style={{ textDecoration: "underline" }}>
                    Enter your postal code for Delivery Availability
                  </span>
                </div>
              </div>
              <div className="flex align-items-center p-3 gap-3">
                <i className="fa-solid fa-rotate-left text-[18px]"></i>
                <div className="flex flex-column">
                  <span>Return Delivery</span>
                  <span style={{ textDecoration: "underline" }}>
                    Free 30 Days Delivery Returns. Details
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2>Other Product</h2>
        <div className="grid grid-cols-4 gap-4 mt-5">
          <div className="">
            <img src={image5} alt="" />
            <div className="flex justify-content-between mt-[10px]">
              <h6 style={{ fontWeight: "bold" }}>Round Dingning table</h6>
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
              <h6 style={{ fontWeight: "bold" }}>Round Dingning table</h6>
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
              <h6 style={{ fontWeight: "bold" }}>Round Dingning table</h6>
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
              <h6 style={{ fontWeight: "bold" }}>Round Dingning table</h6>
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
    </div>
  );
};

export default DetailProduct;
