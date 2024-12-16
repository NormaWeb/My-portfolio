"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>AlpineJs</li>
        <li>ReactJs</li>
        <li>NextJs</li>
        <li>Creative Writing</li>
        <li>Teaching</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Front-end Web Development- Target Tech Academy</li>
        <li>English Education- University of Uyo, Uyo</li>
      </ul>
    )
  },
  {
    title: "Books",
    id: "books",
    content: (
      <ul className="list-disc pl-2">
        <li>Looking For Ene</li>
        <li>The Father's Boy</li>
        <li>War Wife</li>
        <li>To be a Man</li>
      </ul>
    )
  }

]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 flex flex-col-reverse md:flex-row">
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
          <Image
            src="/images/Bee.PNG"
            alt='hero image'
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={300}
            height={300}
          />
        </div>
      
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Front-End Web Developer and a passionate Creative Writer who believes that life is a story waiting to be told and seeks to find beauty in every moment and strives to capture it in words and in codes.
            <br /> <br />
            Also, I have a deep passion for nurturing the next generation. When i'm not coding or writing, you'll find me in the classroom, empowering young minds to dream big and become the best version of who they want to be. 
            <br /> <br />
            Let's connect and collaborate!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills {" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education {" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("books")}
              active={tab === "books"}
            >
              {" "}
              Books {" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}

          </div>
        </div>
      </motion.div>
    </section>


  );
};

export default AboutSection;