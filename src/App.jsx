import React, { useState } from 'react'
import Header from './components/Header'
import CheckoutForm from './components/CheckoutForm'
import RecordTable from './components/RecordTable'
import Footer from './components/Footer'
import ProductDrawer from './components/ProductDrawer'

const App = () => {
  const [drawerOpen,setDrawerOpen] = useState(false);

  const drawerHandler=()=>{
    setDrawerOpen(true);
  }

  const closeDrawerHandler=()=>{
    setDrawerOpen(false);
  }

  const [products,setProducts]=useState([
    { id: 1, name: "Apple", price: 1.25 },
    { id: 2, name: "Banana", price: 0.75 },
    { id: 3, name: "Orange", price: 0.99 },
    { id: 4, name: "Grapes", price: 2.50 }
  ]);

  const addProduct= (newProduct)=>{
    setProducts([...products,newProduct]);
  }

  const [records,setRecord] = useState([]);

  const addRecords=(newRecord)=>{
    const isExitedproducts= records.find(el=>el.productId===newRecord.productId);
    console.log(isExitedproducts);
    if(isExitedproducts){
      updateRecordHandlers(isExitedproducts.id,newRecord.quantity)
    }else{
      setRecord([...records,newRecord])
    }
  }

  const deleteRecordHandlers=(id)=>{
    const deleteRecords=records.filter(record=>record.id !== id);
    setRecord(deleteRecords);
  }

  const updateRecordHandlers=(id,quantity)=>{
    const updateRecords= records.map((el)=>{
      if(el.id===id){
        const newQuantity= el.quantity + quantity;
        const newCost = el.price * newQuantity;
        return{
          ...el,
          quantity: newQuantity,
          cost : newCost
        }
      }
      return el;
    })
    console.log(updateRecords);
    setRecord(updateRecords)
  }
  return (
    <div className='max-w-[900px]  mx-auto my-5 font-poppins flex text-sm flex-col gap-8'>
      <Header title="Invoice App"/>
      <CheckoutForm products={products} addRecords={addRecords} />
      <RecordTable records={records} deleteRecordHandlers={deleteRecordHandlers} updateRecordHandlers={updateRecordHandlers}/>
      <Footer drawerHandler={drawerHandler}/>
      <ProductDrawer addProduct={addProduct} products={products} drawerOpen={drawerOpen} closeDrawerHandler={closeDrawerHandler}  />
    </div>
  )
}

export default App
