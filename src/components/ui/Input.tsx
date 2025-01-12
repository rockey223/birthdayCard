"use client";
import React, { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, {
  placeholder: string;
  id: string;
  label: string;
  type?: string;
  icon: React.ReactNode;
  count?: boolean;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
}>(({
  placeholder,
  id,
  label,
  type = "text",
  icon,
  count,
  errorMessage,
  onChange
}, ref) => {
  return (
    <div className="w-full flex flex-col gap-2 my-3">
      <label htmlFor={id} className="text-xl font-medium text-gray-800">
        {label}
      </label>
      <div className="w-full h-10 flex gap-2 px-2 bg-slate-50 items-center rounded-lg">
        <span>{icon}</span>
        <input
          ref={ref}
          autoComplete="off"
          type={type}
          id={id}
          name={id}
          onChange={onChange}
          className="text-lg h-full w-full focus:outline-none focus:border-none"
          placeholder={placeholder}
        />
      </div>
      {errorMessage && (
        <span className="message text-red-500 text-xl">{errorMessage}</span>
      )}
      {count && (
        <p className="count self-end text-white">{/* Character count here if needed */}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
