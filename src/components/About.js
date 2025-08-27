// import React from "react";
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
              I am an undergraduate pursuing B-Tech in Computer Science &
              Engineering from
              <span className="text-cyan-400 ml-2">NIT Hamirpur</span> I'm a
              MERN-stack developer with solid SQL experience who loves turning
              ideas into polished products. I keep my algorithms sharp by
              solving LeetCode problems regularly and I'm actively studying
              System Design to build scalable systems. Lately I've been
              branching into app development to bring smarter experiences to the
              projects I build. I value hands-on learning, clean code, and
              designing systems that scale — and I'm excited to apply what I
              learn to real-world problems.
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
