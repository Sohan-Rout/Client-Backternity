"use client";
import React from "react";
import { motion } from "motion/react";

export default function ColourfulText({
  text
}) {
  const colors = [
    "rgb(220, 220, 220)", // light silver
    "rgb(200, 200, 200)", // silver
    "rgb(180, 180, 180)", // medium gray
    "rgb(160, 160, 160)", // metallic gray
    "rgb(230, 230, 230)", // white-silver shine
    "rgb(210, 210, 210)", // chrome-like
    "rgb(190, 190, 190)", // brushed metal
    "rgb(170, 170, 170)", // deeper metallic tone
    "rgb(240, 240, 240)", // bright highlight
    "rgb(150, 150, 150)", // dark steel
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight">
      {char}
    </motion.span>
  ));
}
