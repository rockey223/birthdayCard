import React from "react";

const Input = ({placeholder,name,label ,type="text",icon}:{placeholder: string,name: string,label:string,type?: string,className?: string,icon: React.ReactNode}) => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 my-3">
        <label htmlFor={name} className="text-xl font-medium text-gray-800">
          {label}
        </label>
        <div className="w-full h-10 flex gap-2 px-2 bg-slate-50 items-center rounded-lg">
          <span>
            {icon}
          </span>
          <input
            type={type}
            name={name}
            id={name}
            className="text-lg h-full w-full focus:outline-none focus:border-none "
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
