import React from "react";
import Skills from "./Skills";
import { Link } from "react-scroll";

export default function About() {
  return (
    <div id="about" name="about" className="h-screen w-full">
      <div className="max-w-screen-xl mx-[9%] flex flex-col items-center justify-between h-full gap-[10%] lg:flex-row">
        <div className="flex flex-col justify-center h-full mt-20">
          <h2 className="text-3xl text-center font-bold text-white mb-6">
            MORE ABOUT MYSELF
          </h2>
          <div className="text-gray-400 text-lg text-center py-6 max-w-2xl">
            <p>
              I am an undergraduate pursuing B-Tech in Electronics and
              Communication Engineering from
              <span className="text-cyan-400 ml-2">NIT Hamirpur</span> with a
              current grade point of
              <span className="text-cyan-400 ml-2">8.98.</span> While my current
              focus is on working with the MERN stack, I am eager to explore the
              vast potential of Machine Learning and Artificial Intelligence.
              With an insatiable curiosity and an unwavering commitment to
              learning, I am determined to make a significant impact in these
              cutting-edge fields. I actively participate in hackathons, and I
              take pride in being a
              <span className="text-cyan-400 ml-2">SIH'22</span> Finalist and
              winning the Travel and Tourism category in{" "}
              <span className="text-cyan-400 ml-2">Electorthon 5.0.</span>
            </p>
            <div className="mt-6">
              <Link to="contact" className="text-cyan-400 cursor-pointer">
                Join me on this exciting journey of innovation and technology.
              </Link>
            </div>
          </div>
        </div>

        <div className="md:block">
          <Skills />
        </div>
      </div>
    </div>
  );
}
