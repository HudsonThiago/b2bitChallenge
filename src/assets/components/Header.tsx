import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
  text: React.ReactNode | string;
}

export default function Header() {

  return (
    <div className=" bg-white w-full flex justify-end p-4 pr-10">
        <button className=" bg-primary text-white w-80 p-3 font-normal rounded-md">
            Logout
        </button>
    </div>
  )
}
