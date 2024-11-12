"use client";
import { teko } from "@/utils/fonts";
import { clsx } from "clsx";
import { Variants, motion } from "framer-motion";
import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  variants?: Variants;
  initial?: string;
  animate?: string;
  whileInView?: string;
  type: "gradient" | "solid";
};

const Heading = (props: HeadingProps) => {
  return (
    <motion.h2
      className={clsx(
        "uppercase text-3xl md:text-4xl text-center w-content mx-auto",
        props.type === "gradient"
          ? "bg-gradient-to-r from-purple-800 via-sky-200 to-indigo-300 inline-block text-transparent bg-clip-text"
          : teko.className + " text-white font-semibold text-2xl md:text-4xl"
      )}
      {...props}
      viewport={{
        once: true,
      }}
    >
      {props.children}
    </motion.h2>
  );
};

export default Heading;
