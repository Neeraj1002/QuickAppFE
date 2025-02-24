"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useRouter } from "next/navigation";

interface IOrderData {
  fullName: string;
  phoneNumber: string;
  address: string;
  services: { value: string; label: string }[];
  notes: string;
}

const serviceOptions = [
  { value: "Car Washing (Rs 99/- Only)", label: "Car Washing (Rs 99/- Only)" },
  { value: "Bike Washing (Rs 49/- Only)", label: "Bike Washing (Rs 49/- Only)" },
  { value: "Interior Cleaning (Rs 149/- Only)", label: "Interior Cleaning (Rs 149/- Only)" },
];

export default function OrderForm() {
  const { register, handleSubmit, control, formState } = useForm<IOrderData>({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      address: "",
      services: [],
      notes: "",
    },
    mode: "onChange",
  });

  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents mismatch by waiting for client render

  const onSubmit = async (data: IOrderData) => {
    const response = await fetch('http://localhost:3001/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push('/order-success');
    } else {
      alert('Failed to submit order');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg space-y-4 font-sans text-gray-700"
      >
        {/* Form Heading */}
        <div className="mb-4">
          <label className="block text-xl font-bold">Quick Service</label>
          <p className="text-sm font-medium text-gray-600">
            Get it Done Just Quickly :)
          </p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Full Name*</label>
          <input
            {...register("fullName", { required: true })}
            type="text"
            placeholder="Your full name"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Mobile Number*</label>
          <input
            {...register("phoneNumber", { required: true })}
            type="tel"
            placeholder="Your mobile number"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Full Address*</label>
          <textarea
            {...register("address", { required: true })}
            placeholder="Your address"
            rows={3}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Select Services*</label>
          <Controller
            name="services"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                options={serviceOptions}
                isMulti
                placeholder="Select one or more services"
                onChange={(selected) => field.onChange(selected)}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            )}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Any Note?</label>
          <textarea
            {...register("notes")}
            placeholder="Any additional note"
            rows={3}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={!formState.isValid}
          className={`w-full py-2 rounded-md transition ${
            formState.isValid
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
