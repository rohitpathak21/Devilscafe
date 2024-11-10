import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
type cartItemProps = {
    cartItem:any,

}

const CartItem = ({cartItem} : cartItemProps) => {
  const { photo, productId, name, price, quantity, } = cartItem;  
  return (
    <div className="p-8 flex justify-start items-center gap-12">
        <img src={photo} alt={name} className="w-20 h-20 object-contain"/>
        <article className="flex flex-col justify-center items-start gap-1">
            <Link to={`/product/${productId}`} className="text-base  font-semibold text-black hover:text-red-600">{name}</Link>
            <span className="font-semibold ">₹{price}</span>
        </article>
        <div className="ml-auto flex justify-center items-center gap-3">
            <button className="px-3 py-2 h-10 w-10 bg-gray-500 rounded-xl text-white hover:bg-black hover:text-white cursor-pointer text-lg">-</button>
            <p>{quantity}</p>
            <button className="px-3 py-2 h-10 w-10 bg-gray-500 rounded-xl text-white hover:bg-black hover:text-white cursor-pointer text-lg">+</button>
        </div>
        <button className="border-none text-xl bg-transparent flex justify-center items-center cursor-pointer hover:text-red-600">
            <FaTrash/>
        </button>
    </div>
  )
}

export default CartItem