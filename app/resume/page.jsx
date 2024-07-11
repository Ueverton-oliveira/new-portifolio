"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws
} from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { BiLogoHeroku } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { SiSidekiq } from "react-icons/si";



import {SiTailwindcss, SiNextdotjs} from "react-icons/si";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const about = {
  title: "About",
  description: "I am a seasoned Full Stack Developer with over 5 years of experience specializing\n" +
    "in crafting robust, scalable, and secure features. My expertise lies in writing clean,\n" +
    "maintainable, and efficient code, ensuring seamless functionality across applications.\n" +
    "Proficient in all phases of the development lifecycle, I am dedicated to driving the\n" +
    "continuous adoption and integration of cutting-edge technologies to enhance product\n" +
    "development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ueverton Souza"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+55) 67 99226-9670"
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ years"
    },
    {
      fieldName: "WhatsApp",
      fieldValue: "(+55) 67 99226-9670"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian"
    },
    {
      fieldName: "Email",
      fieldValue: "ueverton.souz@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "Portuguese, English, Spanish"
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "",
  items: [
    {
      company: "Caiena Tecnology",
      position: "Full Stack Developer",
      duration: "2020 - 2023"
    },
    {
      company: "CDD IT - Service Innovation",
      position: "Freelance Full Stack Developer",
      duration: "2021 - 2022"
    },
    {
      company: "Impulso",
      position: "Full Stack Developer",
      duration: "2020 - 2021"
    },
    {
      company: "Binamik Technology",
      position: "Frontend Developer",
      duration: "2018 - 2019"
    }
  ]
}

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  items: [
    {
      institution: "Unigran",
      degree: "Software Engineer",
      duration: "2019 - 2023"
    },
    {
      institution: "Universidade Federal da Grande Dourados - UFGD",
      degree: "Environment Manager",
      duration: "2011 - 2015"
    }
  ]
}

const skills = {
  title: "My Skills",
  description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <GrGraphQl />,
      name: "graphQl"
    },
    {
      icon: <DiRuby />,
      name: "ruby"
    },
    {
      icon: <SiRubyonrails />,
      name: "rails"
    },
    {
      icon: <FaDocker />,
      name: "docker"
    },
    {
      icon: <FaAws />,
      name: "aws"
    },
    {
      icon: <BiLogoPostgresql />,
      name: "postgresql"
    },
    {
      icon: <GrMysql />,
      name: "mysql"
    },
    {
      icon: <BiLogoHeroku />,
      name: "heroku"
    },
    {
      icon: <SiSidekiq />,
      name: "sidekiq"
    }
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultChecked="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experice</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4x-l font-bold">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-center gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume