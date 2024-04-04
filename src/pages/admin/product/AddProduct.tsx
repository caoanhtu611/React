import React from "react";

type Props = {};

const AddProduct = (props: Props) => {
  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              Add Product Form
            </h2>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="productName">Product Name</label>
                      <input
                        type="text"
                        name="productName"
                        id="productName"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue=""
                        placeholder="Enter Product Name"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="image">Product Image</label>
                      <input
                        type="text"
                        name="image"
                        id="image"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue=""
                        placeholder="Enter Product Image"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="price">Product Price</label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue=""
                        placeholder="Enter Product Price"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="desc">Description</label>
                      <input
                        type="text"
                        name="desc"
                        id="desc"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        defaultValue=""
                        placeholder="Enter Description"
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Create New Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://www.buymeacoffee.com/dgauderman"
            target="_blank"
            className="md:absolute bottom-0 right-0 p-4 float-right"
          >
            <img
              src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
              alt="Buy Me A Coffee"
              className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
