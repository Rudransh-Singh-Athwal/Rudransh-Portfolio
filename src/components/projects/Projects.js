// import React from "react";
import ProjectsCard from "./ProjectsCard";

import fintrackHome from "../../assets/projects/fintrackHome.png";
import flashCards from "../../assets/projects/flashCards.png";
import csedNith from "../../assets/projects/csedNith.png";
import certificaAuthentify from "../../assets/projects/certificaAuthentify.png";
// import Textify from "../../assets/projects/Textify-dark-theme.png";
// import TicTacToe from "../../assets/projects/TicTacToe2.png";
// import ComputerVision from "../../assets/projects/ComputerVision1.png";
// import Tetris from "../../assets/projects/Tetris.png";
// import ToDo from "../../assets/projects/ToDo.png";

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
// import bootstrap from "../../assets/bootstrap.png";
// import django from "../../assets/django.png";
// import ejs from "../../assets/ejs.png";
// import opencv from "../../assets/opencv.png";
// import python from "../../assets/python.png";
// import blender from "../../assets/blender.svg";
// import threejs from "../../assets/3js.png";

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
    // {
    //   title: "To Do App",
    //   img: ToDo,
    //   desc: "A app to manage your daily tasks in smarter way.",
    //   link: "https://github.com/pearlrathour/To-do-list",
    //   github: "https://github.com/pearlrathour/To-do-list",
    //   tech: [express, ejs, css],
    // },
    // {
    //   title: "Textify",
    //   img: Textify,
    //   desc: "Textify is a tool that can be used to perform many operations on text, such as converting it to lowercase or uppercase, removing extra spaces, copying text, and clearing text.",
    //   link: "https://textify-k96wa9u86-pearlrathour.vercel.app/",
    //   github: "https://github.com/pearlrathour/Textify",
    //   tech: [react, bootstrap],
    // },
    // {
    //   title: "Computer Vision",
    //   img: ComputerVision,
    //   desc: "Car detection, face, and eye detection, live face and eye detection.",
    //   link: "https://github.com/pearlrathour/Computer-Vision",
    //   github: "https://github.com/pearlrathour/Computer-Vision",
    //   tech: [python, opencv],
    // },
    // {
    //   title: "Tetris",
    //   img: Tetris,
    //   desc: "Tetris is a web-based game where Tetriminos fall from the top of the grid and stack up at the bottom. Players complete rows across the field to win. The game ends when the Tetriminos reach the top of the grid.",
    //   link: "https://tetris-game-alpha.vercel.app/",
    //   github: "https://github.com/pearlrathour/Tetris",
    //   tech: [html, js, css],
    // },
    // {
    //   title: "Tic Tac Toe",
    //   img: TicTacToe,
    //   desc: "Tic Tac Toe is a game where two players take turns marking spaces on a 3x3 grid. The objective is to get three of their symbols in a row.",
    //   link: "https://github.com/pearlrathour/Tic-Tac-Toe",
    //   github: "https://github.com/pearlrathour/Tic-Tac-Toe",
    //   tech: [html, js, css],
    // },
  ];

  return (
    <div id="projects" name="projects" className="h-full w-full my-[10%]">
      <div className="relative max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center h-full w-full">
          <div className="flex justify-center text-5xl text-white font-bold pb-20 ">
            Projects
          </div>

          <div className="grid grid-cols-2 grid-rows-5 gap-0 text-gray-500 text-lg max-w-[90%] m-auto lg:grid-cols-3 lg:grid-rows-3">
            {projects.map((project) => (
              <ProjectsCard project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
