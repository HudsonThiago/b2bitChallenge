
interface AlertProps {
  id:string;
  message:Array<string>;
  alert:boolean;
  setAlert:React.Dispatch<React.SetStateAction<boolean>>
}

export const Alert=({id, message, alert, setAlert}:AlertProps)=> {

  const closeAlert=()=>{
    let alert = document.getElementById(id);
    alert?.classList.remove("animate-openModal");
    alert?.classList.add("animate-closeModal");
    setTimeout(()=>{
      setAlert(false);
    }, 500)
  }

  const messageList = ()=>{
    return (message.map((item, index) => {
      return (<li key={`error-${index}`}>{item}</li>)
    }))
  }

  return (
    <div onClick={()=>closeAlert()} id={id} className={`absolute top-0 left-auto sm:top-auto sm:bottom-0 sm:left-0 flex flex-grow flex-col sm:flex-grow-0 w-full ${alert==true?'animate-openModal':'hidden opacity-0'}`} >
      <div className="ml-4 mr-4 mb-2 mt-4 sm:ml-4 sm:mb-4 lg:ml-10 lg:mb-10 sm:w-96 bg-amber-100 border-l-4 border-amber-400 text-amber-700 p-4 cursor-pointer select-none" role="alert">
        <div className="flex items-center justify-between">
          <p className="font-bold">Be Warned</p>
          <span>
            <svg className="fill-current h-6 w-6 text-amber-700" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
          {message != null && 
            (
              <ul>
                  {messageList()}
              </ul>
            )
          }
      </div>
    </div>
  )
}
