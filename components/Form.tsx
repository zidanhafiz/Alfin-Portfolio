"use client";
import { motion } from "framer-motion";
import { containerVariants, itemsVariants } from "@/utils/variants";
import { FormEvent, useState } from "react";
import { send } from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [data, setData] = useState<{ name: string; email: string; message: string }>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSuccess("Email sent successfully");
      setError(null);
      setData({ name: "", email: "", message: "" });
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className='flex flex-col gap-3'
      variants={containerVariants}
      initial='hidden'
      whileInView='inView'
      viewport={{ once: true }}
    >
      <div className='flex flex-col md:flex-row gap-3'>
        <motion.input
          name='name'
          type='text'
          placeholder='Name'
          className='bg-transparent border border-white/20 rounded-lg p-3 w-full'
          variants={itemsVariants}
          required
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          disabled={isLoading}
        />
        <motion.input
          name='email'
          type='email'
          placeholder='Email'
          className='bg-transparent border border-white/20 rounded-lg p-3 w-full'
          variants={itemsVariants}
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          disabled={isLoading}
        />
      </div>
      <motion.textarea
        name='message'
        placeholder='Message'
        className='bg-transparent border border-white/20 rounded-lg p-3 w-full'
        rows={5}
        variants={itemsVariants}
        required
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
        disabled={isLoading}
      />
      {error && <p className='text-red-500'>{error}</p>}
      {success && <p className='text-green-500'>{success}</p>}
      <motion.button
        type='submit'
        className='bg-white text-black rounded-lg p-3 w-fit ml-auto disabled:opacity-50'
        variants={itemsVariants}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send"}
      </motion.button>
    </motion.form>
  );
};
