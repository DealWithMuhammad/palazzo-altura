"use client";

import { motion } from "framer-motion";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { BsMailbox } from "react-icons/bs";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    msg: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    console.log("Form submitted:", form);
    // Add your submission logic here
  };

  return (
    <div className="w-full flex flex-col justify-center align-middle mb-40 mt-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-16 sm:mb-6 text-xl text-center sm:text-5xl dark:text-white text-black"
      >
        Contact Us
      </motion.h2>
      <motion.h6
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm text-center  dark:text-white text-black"
      >
        Share your thoughts with us!
      </motion.h6>
      <br />
      <div className="mx-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Input
            fullWidth
            type="email"
            placeholder="you@example.com"
            labelPlacement="outside"
            startContent={
              <BsMailbox className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Textarea
            fullWidth
            label="Message"
            placeholder="Write Your Message"
            name="msg"
            value={form.msg}
            onChange={handleChange}
          />
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="md" fullWidth onClick={onSubmit}>
            Submit
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
