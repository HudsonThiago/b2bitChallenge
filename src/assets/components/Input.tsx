import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
}

export const Input=({children, ...props}:InputProps)=> {

  return (
    <div className="w-full flex flex-col">
        <label htmlFor={props.id}>{children}</label>
        <input className=" bg-input p-3 rounded-md font-normal select-none" {...props} />
    </div>
  )
}
