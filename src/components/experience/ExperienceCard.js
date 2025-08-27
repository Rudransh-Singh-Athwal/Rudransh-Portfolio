// import React from "react";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function ExperienceCard(props) {
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;

  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="grid w-full place-content-center px-4 py-12">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d", transform }}
        className="relative h-96 w-72 rounded-xl border-2 border-cyan-800"
      >
        <div
          className="absolute inset-4 grid place-content-center rounded-xl bg-gradient-to-br from-cyan-400 to-slate-800 shadow-lg border-2 border-cyan-600"
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="flex flex-col justify-around text-center text-gray-100"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="py-[4%]">
              <img
                class="object-fill w-full h-40 px-3 transform duration-700 backdrop-opacity-100"
                src={props.exp.img}
                alt="Experience"
              />
            </div>
            <div className="py-[8%]">
              <div className="text-xl font-bold">{props.exp.company}</div>
              <div className="text-sm font-thin">{props.exp.position}</div>
              <div className="text-sm font-thin py-[1%]">{props.exp.date}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
