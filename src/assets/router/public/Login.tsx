import b2bitLogo from "../../images/b2bitLogo.svg";
import LoginDTO from "../../api/services/Service.ts";
import loading from "../../images/loading.svg"
import { Input } from "../../components/Input";
import { login } from "../../api/services/Service.ts"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();

  const submitForm = async () => {
    setButtonPressed(true);
    let loginDTO:LoginDTO = {
        'email': email,
        'password': password
    }

    await login(loginDTO)
    .then((response)=>{
        if(response.data.tokens){
          let token:string = response.data.tokens['access'];
          console.log(response);
          localStorage.setItem("token", token);
          navigate("dashboard")
        }
    })
    .catch((error)=>{
      if(error.response.data){
        setTimeout(()=>{
          let response:string = "";
          if(error.response.data['detail']){
            response=error.response.data['detail'];
          } else if(error.response.data['email']) {
            response="O campo E-mail não pode estar em branco";
          } else if(error.response.data['password']) {
            response="O campo Password não pode estar em branco";
          }
          setMessage(response);
          setAlert(true);
        }, 500)
      }
    }).finally(()=>{
      setTimeout(()=>{
        setButtonPressed(false);
      }, 500)
    });
  }

  const closeModal=(e:HTMLElement)=>{
    e.classList.remove("animate-openModal");
    e.classList.add("animate-closeModal");
    setTimeout(()=>{
      setAlert(false);
    }, 500)
  }

  useEffect(()=>{
    const authenticated:boolean = localStorage.getItem("token") !== null;
    if(authenticated) navigate("dashboard");
  }, []);

  return (
    <div className="bg-bg1 w-full h-screen bg-bg1 flex items-center justify-center">
      <div className="lg:w-4/12 xl:w-3/12 sm:w-96 sm:m-6 box-border bg-white flex flex-grow sm:flex-grow-0 mx-4 flex-col items-center gap-8 shadow-2xl rounded-lg p-6 pt-16">
        <img className="w-3/4 h-auto select-none " src={b2bitLogo} alt="b2bit logo" draggable="false" />
        <Input onChange={(e)=>setEmail(e.target.value)} id="email" text="E-mail" type="text"placeholder="@gmail.com"/>
        <Input onChange={(e)=>setPassword(e.target.value)}  id="password" text="Password" type="password"  placeholder="****************"/>
        {
          buttonPressed === false
          ? (<button onClick={()=>submitForm()} className={`${(email==="" || password==="")?'bg-slate-300 cursor-default':'bg-primary cursor-pointer'} bg-primary w-full p-3 font-normal rounded-md select-none`} disabled={(email==="" || password==="")?true:false}>
                <p className="text-white" >Sign In</p>
            </button>)
          : (<button type="submit" className="bg-slate-300 w-full p-3 font-normal rounded-md select-none flex items-center justify-center gap-2 cursor-default" disabled>
                <img className="w-6 h-auto animate-spin" src={loading} alt="loading" />
                <p className="text-white mr-4" >Processing...</p>
            </button>)
        }
      </div>
      <div onClick={(e)=>closeModal(e.currentTarget)} className={`absolute top-0 left-auto sm:top-auto sm:bottom-0 sm:left-0 flex flex-grow flex-col sm:flex-grow-0 w-full ${alert==true?'animate-openModal':'hidden opacity-0'}`} >
        <div className="ml-4 mr-4 mb-2 mt-4 sm:ml-4 sm:mb-4 lg:ml-10 lg:mb-10 sm:w-96 bg-red-100 border-l-4 border-red-400 text-red-700 p-4 cursor-pointer select-none" role="alert">
          <div className="flex items-center justify-between">
            <p className="font-bold">Be Warned</p>
            <span>
              <svg className="fill-current h-6 w-6 text-red-700" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}
