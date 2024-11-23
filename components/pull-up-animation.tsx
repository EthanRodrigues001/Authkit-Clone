"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface PullUpAnimationProps {
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
  children: React.ReactNode;
}

export function PullUpAnimation({
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
  children,
}: PullUpAnimationProps) {
  return (
    <motion.div
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn("flex flex-wrap justify-center", className)}
    >
      {React.Children.map(children, (child, i) => (
        <motion.div
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", margin: "4px" }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
