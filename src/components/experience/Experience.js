import React, { useEffect, useState } from 'react'
import ExperienceCard from './ExperienceCard'
import GSSoC from '../../assets/GSSoC.png'
import SSoC from '../../assets/ssoc.png'
import Hacktoberfest from '../../assets/Hacktoberfest.jpg'
import CodessCafe from '../../assets/CodessCafe.gif'
import SPEC from '../../assets/spec.png'
import Vibhav from '../../assets/Vibhav.png'


export default function Experience() {
    const experiences = [
        {
            img: CodessCafe,
            bg: "red-100",
            position: "Mentee",
            company: "CodessCafe",
            link: "https://www.linkedin.com/company/codesscafe/",
            date: "Jan 2023 - Present"
        },
        {
            img: GSSoC,
            bg: "red-100",
            position: "Open Source Developer",
            company: "GSSoC",
            link: "https://gssoc.girlscript.tech/",
            date: "May 2023 - Aug 2023"
        },
        {
            img: SSoC,
            bg: "yellow-100",
            position: "Open Source Developer",
            company: "SSoC",
            link: "https://www.linkedin.com/showcase/socialsummerofcode/",
            date: "Jun 2023 - Aug 2023"
        },
        {
            img: SPEC,
            bg: "red-100",
            position: "Executive",
            company: "SPEC",
            link: "https://www.linkedin.com/company/spec-nith/",
            date: "Aug 2022 - Mar 2023"
        },
        {
            img: Hacktoberfest,
            bg: "red-100",
            position: "Open Source Developer",
            company: "Hacktoberfest",
            link: "https://www.linkedin.com/company/hacktoberfest/",
            date: "Oct 2022"
        },
        {
            img: Vibhav,
            bg: "red-100",
            position: "Volunteer",
            company: "Vibhav",
            link: "https://www.linkedin.com/company/team-vibhav/",
            date: "Mar 2022 - Dec 2022"
        },
    ]
    return (
        <div name="experience" className="h-full w-full my-[8%]">
            <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className="flex flex-col justify-center h-full w-full">
                    <div className='flex flex-row justify-center text-6xl text-white font-bold  my-[6%] animate-fall'>
                        Experience
                    </div>

                    <div className="grid grid-cols-3 grid-rows-2 gap-2 max-w-[100%] m-auto">
                        {experiences.map((experience) => (
                            <ExperienceCard exp={experience} />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}