import React, { useRef } from 'react'

const CheckoutForm = ({products,addRecords}) => {

  const idRef=useRef("");
  const quantityRef = useRef("");

  
  const handleBuyBtn=()=>{
    const currentProduct= products.find(product=>product.id === parseInt(idRef.current.value));
    console.log(idRef.current.value);
    // console.log(quantityRef.current.valueAsNumber);
    console.log(currentProduct.id);
    const cost = currentProduct.price * parseInt(quantityRef.current.valueAsNumber);
    // console.log(cost);
    const newRecord={
      id:Date.now(),
      productId:parseInt(idRef.current.value),
      name:currentProduct.name,
      price:currentProduct.price,
      quantity:quantityRef.current.valueAsNumber,
      cost
    }
    addRecords(newRecord);
    idRef.current.value="";
    quantityRef.current.valueAsNumber=0;
  }
  return (
    <div className='flex items-end justify-between'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="" className='text-sm'>Select Your Products</label>
        <select name="" ref={idRef} id="" className=' outline-none text-sm border px-2 py-1 border-orange-300 w-[300px]'>
           
            {
              products.map(product=><option key={product.id} value={product.id} >{product.name}</option>)
            }
        </select>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="" className='text-sm'>Quantity</label>
        <input type="number" ref={quantityRef} name="" id="" className=' outline-none text-sm border px-2 py-1 border-orange-300 w-[300px]' />
      </div>
      <div>
        <button onClick={handleBuyBtn} className='bg-orange-600 text-white px-10 text-sm py-1 rounded-md'>Buy</button>
      </div>
    </div>
  )
}

export default CheckoutForm
