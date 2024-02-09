import React, { useRef } from "react";

const ProductCreateForm = ({addProduct}) => {

  const nameRef=useRef("");
  const priceRef= useRef("");

  const handleAddBtn=()=>{
   
    const newProduct={
      id: Date.now(),
      name:nameRef.current.value,
      price:priceRef.current.valueAsNumber
    }
    console.log(newProduct);
    addProduct(newProduct);
    nameRef.current.value="";
    priceRef.current.valueAsNumber=NaN;
  }
  
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-xs">
            New Product Name
          </label>
          <input
            type="text"
            name=""
            id=""
            ref={nameRef}
            className=" outline-none text-xs border px-2 py-1 border-orange-300 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-xs">
           Product Price
          </label>
          <input
            type="number"
            name=""
            id=""
            ref={priceRef}
            className=" outline-none text-xs border px-2 py-1 border-orange-300 "
          />
        </div>
        <div className="flex justify-end">
            <button onClick={handleAddBtn}  className='bg-orange-600 tracking-wider text-white px-5 text-xs py-1 rounded-md'>Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCreateForm;
