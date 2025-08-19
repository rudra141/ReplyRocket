
'use client';

import { AppLogo } from "@/components/AppLogo";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.div style={{ backgroundImage }} className="flex flex-col min-h-screen items-center justify-center p-4 relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="mb-8">
            <AppLogo />
        </div>
        {children}
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.div>
  );
}
