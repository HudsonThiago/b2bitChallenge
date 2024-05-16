import profilePicture from "../../images/profileImage.png"
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
//import { useEffect } from "react";


export default function Dashboard() {

  const nameLabel = (<p className=" font-normal">Your <span className=" font-bold">Name</span></p>);
  const emailLabel = (<p className=" font-normal">Your <span className=" font-bold">E-mail</span></p>);

  return (
    <div className=" h-screen flex flex-col">
        <Header/>
        <div className=" bg-bg2 w-full bg-bg2 flex flex-grow items-center justify-center">
            <div className="lg:w-4/12 xl:w-3/12 sm:w-96 sm:m-6 box-border bg-white flex flex-grow sm:flex-grow-0 mx-4 flex-col items-center gap-8 shadow-2xl rounded-lg p-6">
                <div className=" flex flex-col justify-center items-center">
                    <h3 className=" font-medium mb-2">Profile picture</h3>
                    <img className=" w-1/5 h-auto rounded-xl select-none" src={profilePicture} alt="Profile image" draggable="false" />
                </div>
                <Input id="name" text={nameLabel} type="text" value="Hudson Thiago" disabled placeholder="your name"/>
                <Input id="email" text={emailLabel}  type="text" value="hudsonthiagocorreia@gmail.com" disabled  placeholder="@gmail.com"/>
            </div>
        </div>
    </div>
  )
}
