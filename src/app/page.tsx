"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

export default function Home() {
  const [displayModal, setdisplayModal] = useState(false);
  const submitForm = (e: any) => {
    e.preventDefault();
    setdisplayModal(true);
    // setTimeout(()=>{setdisplayModal(false)},5000)
  };
  return (
    <>
      {displayModal && <Modal setdisplayModal={setdisplayModal} />}
      <div className=" bg-orange-300 h-screen w-full max-lg:items-center max-lg:flex max-lg:justify-center">
        <form
          className="z-10 form h-auto w-[500px] p-5 rounded-xl bg-sky-600 flex flex-col absolute right-40 top-1/2 -translate-y-1/2 max-lg:relative max-lg:-translate-y-0 max-lg:right-0 max-lg:top-0"
          // onSubmit={submitForm}
        >
          <p className="text-gray-200">
            Enter the birthday person's name, age, and a custom message that
            will appear after they blow out their candles.
          </p>
          <Input
            placeholder="Enter Full Name"
            name="fullname"
            label="Full Name"
            icon={icons.name}
          />
          <Input
            placeholder="Enter Age "
            name="Age"
            label="Age"
            type="number"
            icon={icons.age}
          />
          <Input
            placeholder="Enter Message"
            name="message"
            label="Message"
            icon={icons.message}
          />
          <Button type="submit" onClick={submitForm} className="self-center" />
        </form>
      </div>
    </>
  );
}

const icons = {
  name: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  ),
  age: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  ),
  message: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
      />
    </svg>
  ),
};
