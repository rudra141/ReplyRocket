
'use client';

import React, { useEffect } from 'react';
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

export const AuroraHero = ({ children }: { children: React.ReactNode }) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative overflow-hidden bg-gray-950 text-gray-200"
    >
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
};
