"use client";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      if (
        formData.name.value &&
        formData.email.value &&
        formData.message.value
      ) {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setLoading(false);
          alert("Your message has been successfully sent");
          setFormData(defaultFormState);
        }
      }
      // Write your submit logic here
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
          required
        />

        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
          required
        />
      </div>
      <button
        className="flex items-center justify-center w-full px-2 py-2 mt-4 bg-sky-900 hover:bg-sky-800 rounded-md font-bold text-neutral-100 transition-colors"
        type="submit"
        disabled={loading}
      >
        {loading && <Loader2 className="mr-2 animate-spin" />}
        Submit
      </button>
    </form>
  );
};
