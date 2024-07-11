"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from 'next/link';
import {motion} from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full Stack Developer",
    href: "https://www.caiena.net/cases",
    description: "Developed scalable features for a social project management system for Municipal Education Directors " +
      "using Ruby on Rails and JavaScript. Applied Agile Scrum methodology to manage project development efficiently. " +
      "Wrote clean and maintainable code, contributing to all phases of the development lifecycle. Utilized AWS, Git, Github, and Linux technologies for developing and maintaining the system",
  },
  {
    num: "02",
    title: "Full Stack Developer",
    href: "https://www.marche.com.br/",
    description: "Developed digital market features for supermarket St. Marche using Ruby on Rails. \n" +
      "Spearheaded the design and implementation of a complimentary management\n" +
      "system tailored for Municipal Education Directors, significantly enhancing query\n" +
      "efficiency. Through my efforts, we achieved a remarkable 90% reduction in query\n" +
      "times, optimizing system performance and streamlining operations.",
  },
  {
    num: "03",
    title: "Full Stack Developer",
    href: "https://vindi.com.br/",
    description: "Engineered robust, scalable online payment system features for the Locaweb team," +
      "alongside crafting a platform-as-a-bank service for BxBlue. Leveraged Ruby on Rails" +
      "to ensure seamless functionality and streamlined maintenance." +
      "Worked on the credit portability feature, building the application from inception to" +
      "delivery with a robust architecture and 100% test coverage."
  },
  {
    num: "04",
    title: "Front-end Developer",
    href: "https://binamik.com.br/",
    description: "Worked on the Billing team of the Binamik Platform, a digital sales solution for" +
      "tourism." +
      "Developed secure features using React.JS and JavaScript contributing to a robust" +
      "platform." +
      "Utilized CircleCI for continuous integration and delivery, ensuring efficient code" +
      "deployment and delivery." +
      "Implemented Google Cloud Platform for scaling and managing applications",
  }
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3x-l"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services