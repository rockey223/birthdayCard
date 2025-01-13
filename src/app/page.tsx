"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  senderName: z.string().min(3,"Sender name is required"),
  fullName: z.string().min(3, "Name is Required."),
  age: z.preprocess(
    (value) => (typeof value === "string" ? parseInt(value, 10) : value),
    z
      .number()
      .min(1, "Age must be at least 1")
      .max(120, "Age cannot exceed 120").nullable()
  ),
  message: z
    .string()
    .min(3, "Message is Required")
    .max(540, "Message must be of only 540 characters."),
});
type FormData = z.infer<typeof formSchema>;

export default function Home() {
  const [displayModal, setdisplayModal] = useState(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    getValues
  } = useForm({
    defaultValues: {
      senderName: "",
      fullName: "",
      age: 0,
      message: "",
    },
    resolver: zodResolver(formSchema),
  });
const [link,setLink]= useState("")
  const submitForm = (data: FormData) => {
    

    
    axios
      .post("/api/birthday", data)
      .then((res) => {
        setLink(`${process.env.NEXT_PUBLIC_HOST }/${ res.data.data.birthdayId}`)
        
      })
      .catch((err) => {
        console.log(err);
      });
    setdisplayModal(true);
    // setTimeout(()=>{setdisplayModal(false)},5000)
  };

  
  return (
    <>
      {displayModal && (
        <Modal setdisplayModal={setdisplayModal} message={getValues("message")} link={link} />
      )}
      <div className="select-none flex items-center bg-orange-300 h-auto min-h-screen w-full max-lg:items-center max-lg:flex max-lg:flex-col max-lg:gap-4 max-lg:justify-center max-sm:py-10">
        <div className="image">
          <Image
            src={"/ballon.png"}
            alt="ballon"
            width={200}
            height={200}
            className="absolute h-[200px] w-[200px] right-1/2 max-lg:hidden"
          />
          <Image
            src={"/cake.png"}
            alt="ballon"
            width={200}
            height={200}
            className="absolute h-[200px] w-[200px] max-lg:hidden top-14 left-32"
          />
          <Image
            src={"/gift.png"}
            alt="ballon"
            width={200}
            height={200}
            className="absolute h-[200px] w-[200px] max-lg:hidden top-14 right-32"
          />
          <Image
            src={"/party.png"}
            alt="ballon"
            width={200}
            height={200}
            className="absolute h-[200px] w-[200px] max-lg:hidden bottom-10 right-32"
          />
        </div>
        <div className="description text-9xl h-full flex flex-col justify-center items-center w-4/12 max-lg:w-full max-lg:items-center ml-32 max-lg:ml-0 max-sm:mb-5">
          <span className="bg-orange-600 px-10 py-5 -skew-y-12 max-lg:text-8xl max-sm:text-[64px] max-sm:py-0 max-sm:px-4">
            Create a{" "}
          </span>
          <span className="bg-blue-600 px-9 py-5 mt-5 -skew-y-12 max-lg:text-8xl max-sm:text-[64px] max-sm:py-0 max-sm:px-4">
            Birthday{" "}
          </span>
          <span className="bg-pink-400 px-10 py-5 -skew-y-12 mt-5 max-lg:text-8xl max-sm:text-[64px] max-sm:py-0 max-sm:px-4">
            Card
          </span>
        </div>
        <div className="z-10 form  h-auto w-[500px]  absolute right-40 top-1/2 -translate-y-1/2 max-lg:relative max-lg:-translate-y-0 max-lg:right-0 max-lg:top-0 max-sm:w-full max-sm:mx-10 max-sm:px-10">
          <form
            onSubmit={handleSubmit(submitForm)}
            className="bg-indigo-300 p-5 rounded-xl h-full w-full flex flex-col"
            // className="z-10 form  h-auto w-[500px] p-5 rounded-xl bg-sky-600 flex flex-col absolute right-40 top-1/2 -translate-y-1/2 max-lg:relative max-lg:-translate-y-0 max-lg:right-0 max-lg:top-0 max-sm:w-full max-sm:mx-10"
            // onSubmit={submitForm}
          >
            <p className="text-slate-900 text-md leading-6 max-sm:leading-4">
              Enter the birthday person&apos;s name, age, and a custom message to
              make their birthday special.
            </p>
            <Input
              placeholder="Enter Your Name"
              // name="fullname"
              id="senderName"
              label="Your Name"
              icon={icons.name}
              {...register("senderName")}
              errorMessage={errors.senderName?.message}
            />
            <Input
              placeholder="Enter Full Name"
              // name="fullname"
              id="fullName"
              label="Full Name"
              icon={icons.name}
              {...register("fullName")}
              errorMessage={errors.fullName?.message}
            />
            <Input
              placeholder="Enter Age in Number "
              id="age"
              label="Age"
              type="number"
              icon={icons.age}
              {...register("age")}
              errorMessage={errors.age?.message}
            />
            <Input
              placeholder="Enter Message (max 540 characters)"
              id="message"
              label="Message"
              {...register("message")}
              icon={icons.message}
             
              errorMessage={errors.message?.message}
            />
            <Button
              type="submit"
              disable={isSubmitting}
              className="self-center"
            />
          </form>
        </div>
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
