'use client';

import React from "react";
import Title from "@/website-components/ui/Title";
import SubTitle from "@/website-components/ui/SubTitle";
import Paragraph from "@/website-components/ui/Paragraph";
import Button from "@/website-components/ui/Button";
import { RocketIcon } from "@radix-ui/react-icons";
import { config } from "@/constant";
import { useRouter } from "next/navigation";

function Skills() {
  const router = useRouter();
  return (
    <div className="flex flex-col sm:justify-center justify-center gap-11 py-12" id="skills" data-aos="fade-up">
      <div className=" sm:m-auto md:text-center">
        <Title title={config.mySkills.title} />
        <SubTitle title={config.mySkills.subTitle} />
        <Paragraph content={config.mySkills.content} />
        <div className="mt-2 sm:inline-block" data-aos="fade-up">
          <Button onClick={() => {
            router.push("/#contact")
          }}><RocketIcon /><span className="ml-1">{config.mySkills.actionButton.name}</span></Button>
        </div>
      </div>
      <div>
        <div className="">
          <h1 className="text-xl text-center font-bold my-4" data-aos="fade-up">Layanan Kami</h1>
          <div className="flex flex-wrap gap-4">
            {config.mySkills.skills.map((skill, index: number) => (
              <div className="p-2 border w-full md:flex-basis[calc(33.333%_-_1rem)] md:max-w-[calc(33.333%_-_1rem)]" key={index.toString()} data-aos="fade-up">
                <div className="flex flex-col items-center">
                  <skill.icon width={36} height={36} className="text-slate-500" />
                  <h4 className="text-lg font-medium mt-4 mb-1">{skill.title}</h4>
                  <p className="text-slate-400 font-light">{skill.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
