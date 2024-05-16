import { useNavigate } from "react-router-dom";

export const Header=()=> {

  const navigate = useNavigate();

  const logout=()=>{
    localStorage.removeItem("token");
    navigate("/b2bitChallenge");
  }

  return (
    <div className=" bg-white w-full flex justify-end p-4 sm:pr-10">
        <button onClick={()=>logout()} className=" bg-primary text-white flex justify-center items-center flex-grow sm:flex-grow-0 sm:w-80 p-3 font-normal rounded-md select-none">
            Logout
        </button>
    </div>
  )
}
