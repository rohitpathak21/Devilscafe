import { useState } from "react"
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const[gender,setGender] = useState("");
    const[date,setDate] = useState("");

  return (
    <div className="h-[90vh] flex flex-col justify-center items-center gap-4 ">
        <main className="w-full h-[80%] max-w-[400px] p-8 shadow-md flex flex-col gap-4 justify-center items-stretch">
            <h1 className="text-center text-3xl uppercase tracking-wide m-8">Login</h1>
            <div className="w-full flex flex-col justify-start items-stretch gap-1">
                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="p-4 bg-none bg-inherit w-full outline-none border-[1px] border-black rounded-lg font-sans">
                 <option value="">Select Gender</option>
                 <option value="male">Male</option>
                 <option value="female">Female</option>
                </select>
            </div>
            <div className="w-full flex flex-col justify-start items-stretch gap-1">
                <label>Date of Birth</label>
                <input type="date" value={date}
                onChange={(e)=> setDate(e.target.value)}
                className="p-4 bg-none bg-inherit w-full outline-none border-[1px] border-black rounded-lg font-sans"/>
             </div>
             <div className="w-full flex flex-col justify-start items-stretch gap-1">
                <p className="text-center m-8">Already signed in once</p>
                <button className="w-[70%] m-auto h-12 cursor-pointer border-none outline-none bg-blue-600 text-white flex justify-center items-center border-blue-600 border-[1px] rounded-lg text-lg"><FcGoogle className="bg-white w-[30%] h-full"/><span className="w-full text-center">Sign in with Google</span></button>
             </div>
        </main>
    </div>
  )
}

export default Login