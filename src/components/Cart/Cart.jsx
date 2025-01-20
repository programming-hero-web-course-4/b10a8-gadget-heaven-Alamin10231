import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getToCart, removeToCart } from '../About/AddToDb';
import { TiDeleteOutline } from "react-icons/ti";
 import Modal from '../Modal/Modal';
import { PiSliders } from "react-icons/pi";


const Cart = () => {
   const [CartList,SetCartList]=useState([]);
   const [TotalCost,SetTotalCost]= useState(0);
   const [isModelOpen,SetIsModelOpen]= useState(false);
   const [isPurchaseOpen,SetIsPurchaseOpen]= useState(false);

   const allCart = useLoaderData();// json data ta ami load korlam 

   useEffect(()=>{
    const StoredCart = getToCart();// ami json e convert kora data gula niya aslam
    const filterCartList = allCart.filter(Cart=> StoredCart.includes(Cart.product_id)) // sob cart theka check kore ekta ekta kore bosabo 
    SetCartList(filterCartList);// setcartlist e store korlam 
    const Total = filterCartList.reduce((acc,CartItem)=>acc + CartItem.price,0)//jokhn ekta ekta kore list korbo ekta ekta kore jog hobe
    SetTotalCost(Total)// setTotalCost e store tahkbe
    if(SetTotalCost.length === 0){
        SetIsPurchaseOpen(true)// jokhn amr purches e taka 0 hobe tokhn true ....
    }else{
        SetIsPurchaseOpen(false)
    }
   },[allCart])
   const handleSortByPrice=()=>{
    const SortedCart = [...CartList].sort((x,y)=> x.price - y.price)// boro theka choto kore sajano price er amount
   }
   const handlePurchaseProduct =()=>{
    SetTotalCost(0)
    SetCartList ([])
    localStorage.removeItem('Cart-Item')
    SetIsPurchaseOpen(true)
    SetIsModelOpen(true)
   }
   const handleRemoveToCart=(product_id)=>{
removeToCart(product_id);
const UpdatedChartList= CartList.filter(Cart=>Cart.product_id !== product_id)// chartlist theka ami product id diye sob gula filter korbo jeita  milbena oita remove kore dibo r baki gula rekhe dibo
SetCartList(UpdatedChartList);
   }
   const Newtotal = UpdatedChartList.reduce((acc,CartItem)=>acc + CartItem.price)
   SetTotalCost(Newtotal)
if(UpdatedChartList.length === 0){
    SetIsPurchaseOpen(true)
}
    return (
        <div className='w-11/12 2xl:w-4/5 mx-auto mt-12'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <h2 className='text-xl font-bold'>Cart</h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <h2 className='text-xl font-bold'>Total cost: {TotalCost}</h2>
                <button onClick={handleSortByPrice} className='btn btn-outline text-[#9538E2] font-semibold border border-[#9538E2] rounded-[32px]'>
                    Sort by Price <PiSliders className='text-lg' />
                </button>
                <div>
                    <button
                        onClick={handlePurchaseProduct}
                        className={`btn bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold border-none rounded-[32px] ${isPurchaseOpen ? 'opacity-50 pointer-events-none' : ''}`}
                        disabled={isPurchaseOpen}
                    >
                        Purchase
                    </button>
                    <Modal isOpen={isModelOpen} onClose={() => SetIsModelOpen(false)} TotalCost={TotalCost} />
                </div>
            </div>
        </div>

        <div className='mt-8 space-y-6'>
            {
                cartList.map(cart => (
                    <div key={cart.product_id} className='flex flex-col md:flex-row justify-between items-center gap-4 bg-white rounded-2xl'>
                        <div className='md:w-1/5'>
                        <img className='w-48' src={`/images/${cart.product_image.split('/').pop()}`} alt={`${cart.product_image.split('/').pop()} image`} />
                        </div>
                        <div className='md:w-4/5 space-y-2 p-4 md:p-0'>
                            <div className='flex justify-between text-xl font-bold'>
                                {cart.product_title}
                                <TiDeleteOutline onClick={() => handleRemoveToCart(cart.product_id)} className='text-red-400 text-3xl mr-16 cursor-pointer' />
                            </div>
                            <p className='text-sm text-[#09080F99]'>{cart.description}</p>
                            <h4 className='font-bold'>{`Price: $${cart.price}`}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    );
};

export default Cart;