import React from "react";

type Props = {};

const DashBoard = (props: Props) => {
  return (
    <div>
      <>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
          Add Product
        </h3>
        <p-toast />
        {/* Modal body */}
        <form className="flex justify-center">
          <div className="grid gap-4 mb-4 sm:grid-cols-2 w-[500px]">
            <div className="sm:col-span-3">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                formcontrolname="title"
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product title"
              />
              <div>
                <small className="text-[red]">
                  Product Name is not required
                </small>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Image
              </label>
              <input
                formcontrolname="image"
                type="text"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand"
              />
              <div>
                <small className="text-[red]">Image is not required</small>
              </div>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Price
              </label>
              <input
                formcontrolname="price"
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 w-100% text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter Product Price"
              />
              <div>
                <small className="text-[red]">Price is not required</small>
              </div>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                formcontrolname="categoryId"
                name="categoryId"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option></option>
              </select>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                formcontrolname="description"
                id="description"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write product description here"
                name="description"
                defaultValue={""}
              />
              <div>
                <small className="text-[red]">
                  Description is not required
                </small>
              </div>
            </div>
            <button
              type="submit"
              className="text-white justify-center inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                className="mr-1 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Create product
            </button>
          </div>
        </form>
      </>
    </div>
  );
};

export default DashBoard;
