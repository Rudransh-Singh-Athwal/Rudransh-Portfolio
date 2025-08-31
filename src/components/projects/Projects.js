// import React from "react";
import ProjectsCard from "./ProjectsCard";

import fintrackHome from "../../assets/projects/fintrackHome.png";
import flashCards from "../../assets/projects/flashCards.png";
import csedNith from "../../assets/projects/csedNith.png";
import certificaAuthentify from "../../assets/projects/certificaAuthentify.png";

import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import express from "../../assets/express.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import sql from "../../assets/sql.png";
import mongodb from "../../assets/mongodb.png";
import solidity from "../../assets/solidity.png";
import node from "../../assets/node.png";
import nextjs from "../../assets/nextjs.png";

export default function Projects() {
  const projects = [
    {
      title: "Official website of CSE Department, NIT'H",
      img: csedNith,
      desc: "This is an information-centric portal that presents program details, faculty profiles, research highlights, labs and facilities, and academic resources (syllabi, timetables, downloadable forms), with a dynamic notices/events section for timely announcements. It provides quick access to contact information, course and faculty pages, and responsive navigation across devices while supporting dynamic content updates so department news and notices display promptly.",
      link: "https://cse.nith.ac.in/",
      github: "https://github.com/cseWebsite/cseFrontend/",
      tech: [html, tailwind, js, react, nextjs, node, sql],
    },
    {
      title: "Fintrack",
      img: fintrackHome,
      desc: "FinTrack is a sleek, responsive web application focused on personal finance management. Its intuitive dashboard provides users with real-time insights into their total expenses, income, net savings, and allows a breakdown of monthly expenditures, income categories, and recent transactions—all in one glance.",
      link: "https://fintrack-rsa.vercel.app/",
      github: "https://github.com/Rudransh-Singh-Athwal/Fintrack",
      tech: [html, tailwind, js, react, node, nextjs, express, mongodb],
    },
    {
      title: "Flash cards",
      img: flashCards,
      desc: "It is an interactive web application for studying with digital flashcards, where each card flips to reveal the answer on click. Users can navigate between cards using Previous and Next buttons and fully manage their collection by adding, editing, or deleting cards, making it a simple yet effective tool for learning.",
      link: "https://flashcards-rudransh.netlify.app/",
      github: "https://github.com/Rudransh-Singh-Athwal/Flash-Cards",
      tech: [html, css, js, sql, express],
    },
    {
      title: "Certifica Authentify",
      img: certificaAuthentify,
      desc: "A blockchain based certificate verification system using Javascript and Solidity.",
      link: "https://github.com/Rudransh-Singh-Athwal/Certifica_Authentify",
      github: "https://github.com/Rudransh-Singh-Athwal/Certifica_Authentify",
      tech: [html, css, js, solidity],
    },
  ];

  return (
    <div id="projects" name="projects" className="w-full min-h-screen py-12">
      <div className="relative max-w-screen-xl mx-auto px-6 flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center h-full w-full">
          <div className="flex justify-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-bold pb-8 lg:pb-20">
            Projects
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-500 text-base sm:text-lg max-w-[90%] m-auto w-full lg:grid-rows-3">
            {projects.map((project) => (
              <ProjectsCard project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
