"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="text-white  opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url('https://palazzo-altura-di-maria.de/file/i/e7fd381f899077112.jpg')",
      }}
      className="flex bg-cover bg-center h-svh justify-center items-center"
    >
      <div className={cn("font-bold", className)}>
        <div className="mt-4 mx-auto w-4/5">
          <div className=" text-white text-xl  md:text-4xl leading-snug tracking-wide">
            {renderWords()}
          </div>
        </div>
      </div>
    </div>
  );
};
