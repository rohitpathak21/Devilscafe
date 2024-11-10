import React, { useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import {Link} from 'react-router-dom';
const subtotal = 200;
const cartItems = [
  {
    productId : "afoghega",
    photo: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "French Fries",
    price: 3000,
    quantity : 2,
    stock: 10,
  }
];
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 40;
const discount = 20;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const [isValidCouponCode, setIsValidCouponCode] = useState(false);
  return (
    <div className="px-8 py-16 flex flex-row gap-16 h-[calc(100vh-4rem)]">
      <main className="w-[70%] overflow-y-auto ::-webkit-scrollbar">
        {
          cartItems.length > 0 ? cartItems.map((i,idx) => (<CartItem key={idx} cartItem={i}/>)) : <h1>No Items Added</h1>
        }
      </main>
      <aside className="w-[30%] p-16 flex flex-col justify-center items-stretch gap-6">
        <p>Subtotal:₹{subtotal}</p>
        <p>Shipping Charges:₹{shippingCharges}</p>
        <p>Tax:₹{tax}</p>
        <p>
          Discount: <em className="text-red-700">- ₹{discount}</em>
        </p>
        <p>Total:₹{total}</p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="p-4 b-[1px] border-blue-600 outline-none rounded-sm mt-8"
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="-mt-4 flex justify-center items-center gap-1">
              ₹{discount} using the <code className="font-semibold self-end ">{couponCode}</code>
            </span>
          ) : (
            <span>
              Invalid Coupon <VscError />
            </span>
          ))}
        {cartItems.length && <button className="bg-red-600 p-4 no-underline text-black flex justify-center items-center uppercase rounded-xl hover:opacity-75 tracking-wide "><Link to = "/shipping"></Link>Checkout</button>}
      </aside>
    </div>
  );
};

export default Cart;
