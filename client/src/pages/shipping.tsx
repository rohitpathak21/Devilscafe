import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
    const[shippingInfo, setShippingInfo] = useState({
        address:"",
        city:"",
        state:"",
        pincode:"",
    });
    const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setShippingInfo((prev) => ({...prev,[e.target.name]: e.target.value}))
    }
    const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center">
         <button className="h-10 w-10 bg-black text-white flex justify-center items-center fixed top-8 left-8 rounded-full cursor-pointer border-none outline-none shadow-lg" onClick={()=> navigate("./cart")}><BiArrowBack className="transition-all hover:-translate-x-1"/></button> 

         <form action="" className="max-w-[450px] w-full flex flex-col justify-center gap-8 p-8">

            <h1 className="m-8 text-center tracking-wide text-3xl uppercase">Shipping Address</h1>
            <input type="text" required placeholder="Address" name="address" 
            value={shippingInfo.address} 
            onChange={changeHandler}
            className="w-full p-4 bg-inherit border-2 border-black outline-none text-lg"/>

            <input type="text" required placeholder="City" name="city" 
            value={shippingInfo.city} 
            onChange={changeHandler}
            className="w-full p-4 bg-inherit border-2 border-black outline-none text-lg"/>

            <input type="text" required placeholder="State" name="state" 
            value={shippingInfo.state} 
            onChange={changeHandler}
            className="w-full p-4 bg-inherit border-2 border-black outline-none text-lg"/>

            <input type="number" required placeholder="PIN" name="pincode" 
            value={shippingInfo.pincode} 
            onChange={changeHandler}
            className="w-full p-4 bg-inherit border-2 border-black outline-none text-lg"/>


            <button type="submit" className="w-full p-4 bg-blue-600 hover:bg-blue-400 outline-none text-lg">PAY NOW</button>

         </form>
    </div>
  )
}

export default Shipping