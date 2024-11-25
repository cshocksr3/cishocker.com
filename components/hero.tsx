"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import cursor from "../public/icon1.png";
import lightning from "@/public/icon2.png";
import profilepic from "@/public/cshock.png";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8f5C55_60%,#DBAF6E_80%)]">
      <div>
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98b4ce]">Hi, I am</h1>
          <h1 className="text-[#e48a57]">Chris Shockley</h1>
        </div>

        <motion.div className="absolute left-[280px] top-[170px]" drag>
          <Image
            src={cursor}
            height="190"
            width="190"
            alt="cursor"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div className="absolute left-[220px] top-[170px]" drag>
          <Image
            src={lightning}
            height="120"
            width="120"
            alt="cursor"
            className=""
            draggable="false"
          />
        </motion.div>
      </div>

      <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
        I am a software engineer focused on creating user friendly and thoguht
        provoaking software.
      </p>

      <Image
        src={profilepic}
        alt="profile pic"
        className="h-auto w-auto mx-auto"
      />
    </div>
  );
};
export default Hero;
