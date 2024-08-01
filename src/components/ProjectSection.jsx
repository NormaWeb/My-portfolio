"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const ProjectData = [
    {
        id: 1,
        title: "Webpadi",
        description: "Project 1 decription",
        image: "/images/projectimg/Webpadi.img.jpg",
        tag: ["All", "web"],
        gitUrl: "#project",
        previewUrl: "#project"
    },
    {
        id: 2,
        title: "Nike Shoes",
        description: "Project 2 decription",
        image: "/images/projectimg/Nike.img.jpg",
        tag: ["All", "web"],
        gitUrl: "#project",
        previewUrl: "#project"
    },
    {
        id: 3,
        title: "WAV",
        description: "Project 3 decription",
        image: "/images/projectimg/Wav.img.jpg",
        tag: ["All", "web"],
        gitUrl: "#project",
        previewUrl: "#project"
    },
    {
        id: 4,
        title: "Host Communities",
        description: "Project 4 decription",
        image: "/images/projectimg/Host.img.jpg",
        tag: ["All", "web"],
        gitUrl: "#project",
        previewUrl: "#project"
    },
    {
        id: 5,
        title: "SMSpadi",
        description: "Project 5 decription",
        image: "/images/projectimg/SMSpadi.img.jpg",
        tag: ["All", "web"],
        gitUrl: "#project",
        previewUrl: "#project"
        
    },
    {
        id: 6,
        title: "Nike Card",
        description: "Project 6 decription",
        image: "/images/projectimg/Nikeshoes.img.jpg",
        tag: ["All", "web"],
        gitUrl: "#project",
        previewUrl: "#project",
        
    },

]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProject = ProjectData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <section id="projects" ref={ref}>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />

                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />

                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProject.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;