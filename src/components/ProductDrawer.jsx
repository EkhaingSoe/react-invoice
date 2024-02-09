import React from "react";
import Header from "./Header";
import { RxCross2 } from "react-icons/rx";
import ProductGroup from "./ProductGroup";
import ProductCreateForm from "./ProductCreateForm";

const ProductDrawer = ({drawerOpen,closeDrawerHandler,products,addProduct}) => {
  return (
    <div className={`w-96 h-screen fixed top-0 right-0 bg-white shadow-lg ${drawerOpen?"":"translate-x-full"} transition-all duration-500 `}>
      <div className="px-4 py-2 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header title="Your Products" />
          <button onClick={closeDrawerHandler} className="bg-orange-50 text-orange-600 p-2 rounded-sm">
            <RxCross2 />
          </button>
        </div>
        <ProductGroup products={products}/>
        <ProductCreateForm addProduct={addProduct}/>
      </div>
    </div>
  );
};

export default ProductDrawer;
