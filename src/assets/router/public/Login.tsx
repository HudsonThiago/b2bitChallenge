import b2bitLogo from "../../images/b2bitLogo.svg";
import loading from "../../images/loading.svg"
import { Input } from "../../components/Input";
import { login } from "../../api/services/Service.ts"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/Alert.tsx";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [message, setMessage] = useState<Array<string>>([]);
  const [alert, setAlert] = useState<boolean>(false);

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
          console.log(response.data.tokens);
          let token:string = response.data.tokens['access'];
          localStorage.setItem("token", token);
          navigate("dashboard")
        }
    })
    .catch((error)=>{
      if(error.response.data){
        setTimeout(()=>{
          let errorList:Array<string> = [];
          
          if(error.response.data['detail']){
            errorList.push(error.response.data['detail']);
          }
          if(error.response.data['email']) {
            errorList.push("O campo E-mail não pode estar em branco");
          }
          if(error.response.data['password']) {
            errorList.push("O campo Password não pode estar em branco");
          }
          setMessage(errorList);
          setAlert(true);
        }, 500)
      }
    }).finally(()=>{
      setTimeout(()=>{
        setButtonPressed(false);
      }, 500)
    });
  }

  useEffect(()=>{
    const authenticated:boolean = localStorage.getItem("token") !== null;
    if(authenticated) navigate("dashboard");
  }, []);

  return (
    <div className="bg-bg1 w-full h-screen bg-bg1 flex items-center justify-center">
      <div className="lg:w-4/12 xl:w-3/12 sm:w-96 sm:m-6 box-border bg-white flex flex-grow sm:flex-grow-0 mx-4 flex-col items-center gap-8 shadow-2xl rounded-lg p-6 pt-16">
        <img className="w-3/4 h-auto select-none " src={b2bitLogo} alt="b2bit logo" draggable="false" />
        <Input onChange={(e)=>setEmail(e.target.value)} id="email" type="text" placeholder="@gmail.com">
          <p className="mb-2 font-bold text-font1">E-mail</p>
        </Input>
        <Input onChange={(e)=>setPassword(e.target.value)}  id="password" type="password"  placeholder="****************">
          <p className="mb-2 font-bold text-font1">Password</p>
        </Input>
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
      <Alert id="alert1" alert={alert} setAlert={setAlert} message={message} />
    </div>
  )
}
