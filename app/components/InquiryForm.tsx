"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface InquiryFormProps {
  heading: string;
}

// 1. Fixed the schema bugs here
const inquirySchema = z.object({
  full_name: z.string().min(2, { message: "Name is too short" }),
  contact_number: z.string().min(10, { message: "Please enter a valid number" }), 
  email_address: z.email({ message: "Invalid email address" }),
  wedding_date: z.string().optional(),
  retreat_date: z.string().min(1, { message: "Retreat date is required" })
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const ErrorMsg = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <p className="text-red-500 text-[12px] mt-1 absolute -bottom-5 left-0">
      {message}
    </p>
  );
};

export default function InquiryForm({ heading }: InquiryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema)
  });

  // For now, log to console
  const onSubmit = (data: InquiryFormValues) => {
    console.log("Form data is valid. Here is the output:", data);
  };

  const baseInputClass = "font-['Nimbus',sans-serif] h-[51px] bg-[#F2F2F2] rounded-[10px] border border-[#D8D8D8] font-normal text-[18px] leading-none px-[20px] outline-none w-full";

  return (
    <section className="py-20 bg-[#F7FCFFBF]">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <h2 className="font-['Nimbus',sans-serif] font-normal italic text-[36px] leading-9 text-center uppercase mb-10">
            {heading}
          </h2>
          
          <form
            onSubmit={handleSubmit(onSubmit)} id="eform" name="eform"
            className="flex gap-[1.3%] w-85/96 mx-auto flex-wrap lg:flex-nowrap"
          >
            {/* Full Name */}
            <div className="w-[16%] relative flex-1">
              <input
                type="text" id="FullName" placeholder="Full Name*"
                className={baseInputClass} {...register("full_name")}
              />
              <ErrorMsg message={errors.full_name?.message} />
            </div>

            {/* Contact Number */}
            <div className="w-[16%] relative flex-1">
              <input
                type="tel" id="ContactNumber" placeholder="Contact Number*"
                className={baseInputClass} {...register("contact_number")}
              />
              <ErrorMsg message={errors.contact_number?.message} />
            </div>

            {/* Email Address */}
            <div className="w-[16%] relative flex-1">
              <input
                type="email" id="EmailAddress" placeholder="Email Address*"
                className={baseInputClass} {...register("email_address")}
              />
              <ErrorMsg message={errors.email_address?.message} />
            </div>

            {/* Wedding Date */}
            <div className="w-[16%] relative flex-1 flex items-center bg-[#F2F2F2] rounded-[10px] border border-[#D8D8D8] px-5 h-12.75">
              <input
                className={`${baseInputClass} bg-transparent! border-none! h-full! px-0! outline-none!`}
                type="text" id="wedding_date" placeholder="Wedding Date"
                
                onFocus={(e) => (e.target.type = "date")}
                {...register("wedding_date", {onBlur: (e) => {if (!e.target.value) e.target.type = "text";}})}
              />
              <ErrorMsg message={errors.wedding_date?.message} />
            </div>

            {/* Retreat Date */}
            <div className="w-[16%] relative flex-1 flex items-center bg-[#F2F2F2] rounded-[10px] border border-[#D8D8D8] px-5 h-12.75">
              <input
                className={`${baseInputClass} bg-transparent! border-none! h-full! px-0! outline-none!`}
                type="text" id="retreat_date" placeholder="Retreat Dates*"
                
                onFocus={(e) => (e.target.type = "date")}
                {...register("retreat_date", {onBlur: (e) => {if (!e.target.value) e.target.type = "text";}})}
              />
              <ErrorMsg message={errors.retreat_date?.message} />
            </div>

            <button 
              type="submit"
              className="font-inter font-bold text-[20px] leading-none text-center uppercase text-white px-12.5 h-12.75 rounded-[10px] bg-brand-blue cursor-pointer hover:bg-[#2d4e62] transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
