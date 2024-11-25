"use client";

import proj5 from "@/public/proj5.png";
import proj6 from "@/public/proj6.jpg";
import proj7 from "@/public/proj7.jpg";
import proj8 from "@/public/proj8.jpg";
import proj9 from "@/public/proj9.jpg";
import proj10 from "@/public/proj10.jpg";
import Link from "next/link";
import Image from "next/image";
import { AiFillChrome, AiFillGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 h-[92vh]">
      <div className="px-7 mx-auto grid sm:grid-cols-2 gap-6">
        <div className="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
          <Link href="/" className="group h-48 col-span-3 md:h-80">
            <Image
              src={proj5}
              alt=""
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
            />
          </Link>
          <div className="flex flex-col col-span-4 p-4 mx-auto my-auto">
            <h2 className="text-gray-200 font-bold text-xl leading-10">
              Project # 1
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              eligendi earum officia accusamus dolorum maiores dolores, optio
              cupiditate quis sunt adipisci culpa accusantium soluta laborum
              necessitatibus hic voluptate veritatis atque.
            </p>
          </div>
          <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
            <AiFillGithub className="w-[55px] h-auto" />
            <AiFillChrome className="w-[55px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
