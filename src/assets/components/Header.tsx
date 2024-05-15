import { ComponentProps } from "react";
import { useNavigate } from "react-router-dom";

export const Header=()=> {

  const navigate = useNavigate();

  const logout=()=>{
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className=" bg-white w-full flex justify-end p-4 pr-10">
        <button onClick={()=>logout()} className=" bg-primary text-white w-80 p-3 font-normal rounded-md select-none">
            Logout
        </button>
    </div>
  )
}
