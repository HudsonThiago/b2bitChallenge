import b2bitLogo from "../../images/b2bitLogo.svg";
import Input from "../../components/Input";
import { login } from "../../api/services/Service.ts"
import { useState } from "react";
import LoginDTO from "../../api/services/Service.ts";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const submitForm= async ()=>{

    let loginDTO:LoginDTO = {
        'email': email,
        'password': password
    }

    const response = await login(loginDTO).then((data)=>{
        console.log(data);
    })

  }

  return (
    <div className=" bg-bg1 w-full h-screen bg-slate-400 flex items-center justify-center">
      <div className="lg:w-4/12 xl:w-3/12 sm:w-96 w-full sm:m-6 box-border bg-white flex flex-col items-center gap-8 shadow-2xl rounded-lg p-6 pt-16">
        <img className=" w-3/4 h-auto" src={b2bitLogo} alt="b2bit logo" draggable="false" />
        <Input onChange={(e)=>setEmail(e.target.value)} id="email" text="E-mail" type="text"placeholder="@gmail.com"/>
        <Input onChange={(e)=>setPassword(e.target.value)}  id="password" text="Password" type="password"  placeholder="****************"/>
        <button onClick={()=>submitForm()} className=" bg-primary text-white w-full p-3 font-normal rounded-md">
            Sign In
        </button>
      </div>
    </div>
  )
}
