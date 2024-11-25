"use client";
import Image from "next/image";
import project1 from "@/public/proj1.jpg";
import project2 from "@/public/proj2.jpg";
import project3 from "@/public/proj3.png";
import project4 from "@/public/proj4.jpg";
import { motion } from "framer-motion";
import { AiOutlineCheck } from "react-icons/ai";

const projects = [
  {
    id: 1,
    title: "Design Cube",
    category: "Web Design",
    image: project1,
    bulletPoint1: "Enhanced user experience by 40%",
  },
  {
    id: 2,
    title: "Project 1",
    category: "Web Design",
    image: project2,
  },
  {
    id: 3,
    title: "Project 1",
    category: "Java",
    image: project3,
  },
  {
    id: 4,
    title: "Project 1",
    category: "React    ",
    image: project4,
  },
];
const RecentProjects = () => {
  return (
    <section className="py-16 container mx-auto min-h-[300vh]">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="border mx-auto border-white/20 flex flex-col md:flex-row text-white rounded-3xl bg-gradient-to-r from-[#0d0d0e] via-[#303131] to-[#212122] p-12 justify-between space-x-4items-start mb-24 w-[300px] md:w-[1100px] sticky top-28"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <p className="text-gray-200">{project.category}</p>
            <h2 className="text-2xl font-bold md:text-4xl">{project.title}</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <AiOutlineCheck className="w-5 h-5 text-emerald-400" />
                <p>{project.bulletPoint1}</p>
              </li>
            </ul>
          </div>

          <Image
            src={project.image}
            height={300}
            width={500}
            alt={project.title}
            className="rounded-3xl"
          />
        </motion.div>
      ))}
    </section>
  );
};
export default RecentProjects;
