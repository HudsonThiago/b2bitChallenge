import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
  text: React.ReactNode | string;
}

export const Input=(props:InputProps)=> {

  return (
    <div className="w-full flex flex-col">
        <label htmlFor={props.id}><p className="mb-2 font-bold text-font1">{props.text}</p></label>
        <input className=" bg-input p-3 rounded-md font-normal select-none" {...props} />
    </div>
  )
}
