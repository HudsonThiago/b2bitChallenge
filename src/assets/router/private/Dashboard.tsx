import loading from "../../images/loading.svg"
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import { getProfile } from "../../api/services/Service";
import { Alert } from "../../components/Alert";

export default function Dashboard() {
  const [message, setMessage] = useState<Array<string>>([]);
  const [alert, setAlert] = useState<boolean>(false);
  const [user, setUser] = useState<UserInterface>();

  useEffect(()=>{
    getData();
  }, []);

  const getData = async () => {
    const authenticated:boolean = localStorage.getItem("token") !== null;
  if(authenticated){
    const token = localStorage.getItem("token") || "";
    await getProfile(token)
    .then((response)=>{
      setUser(response.data)
    }).catch((error)=>{
      setMessage(error.message);
      setAlert(true);
    });
  }
  }

  return (
    <div className=" h-screen flex flex-col">
        <Header/>
        <div className=" bg-bg2 w-full bg-bg2 flex flex-grow items-center justify-center">
        <div className="lg:w-4/12 xl:w-3/12 sm:w-96 sm:m-6 box-border bg-white flex flex-grow sm:flex-grow-0 mx-4 flex-col items-center gap-8 shadow-2xl rounded-lg p-6">
            {user != null
            ? (
                <>
                    <div className=" flex flex-col justify-center items-center">
                        <h3 className=" font-medium mb-2">Profile picture</h3>
                        { user && user.avatar.high != null &&
                          (
                            <img className=" w-1/5 h-auto rounded-xl select-none" src={require(user.avatar.high)} alt="Profile image" draggable="false" />
                          )
                        }
                    </div>
                    {user && 
                      (
                        <>
                          <Input id="name" type="text" value={user.name} disabled placeholder="your name">
                            <p className=" font-normal">Your <span className=" font-bold">Name</span></p>
                          </Input>
                          <Input id="email"  type="text" value={user.email} disabled  placeholder="@gmail.com">
                            <p className=" font-normal">Your <span className=" font-bold">E-mail</span></p>
                          </Input>
                        </>
                      )
                    }
                </>
              )
            : (
                <img className="w-12 h-auto animate-spin" src={loading} alt="loading" />
              )
            }
            </div>
        </div>
      <Alert id="alert2" alert={alert} setAlert={setAlert} message={message} />
    </div>
  )
}
