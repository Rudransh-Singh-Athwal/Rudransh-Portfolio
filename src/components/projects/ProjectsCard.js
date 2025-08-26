import React from 'react'
import {FaGithub} from 'react-icons/fa';
import { LinkIcon } from '@heroicons/react/24/outline';
import "../../index.css";

export default function ProjectsCard(props) {
    return (
        <div class="relative group w-full h-full border-2 border-transparent rounded-none overflow-hidden m-auto hover:border-[0.5px] hover:border-gray-400 hover:glow" style={{ '--glow-color': 'silver', '--glow-size': '1px' }}>
            <img class="object-fill w-full h-3/4 transform duration-700 backdrop-opacity-100" src={props.project.img} alt='Project'/>
            <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-3/4 group-hover:-inset-y-0"></div>
                <div class="absolute bg-gradient-to-b from-[#10263a] to-[#122f4b] w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0 ">

                    <div class="absolute w-full place-content-center flex flex-col py-1">
                        <div class="font-bold text-1xl text-center text-white ">
                            {props.project.title}
                        </div>
                        <div className="flex justify-center gap-4 mt-2">
                            {props.project.tech.map((tech, index) => (
                                <img key={index} src={tech} alt="Tech Icon" className="h-6 w-6 transform transition-all duration-500 group-hover:scale-110" />
                            ))}
                        </div>
                    </div>

                    <div class="absolute w-full flex items-center justify-center place-content-center my-8" >
                        <p class="hidden sm:text-sm lg:text-base text-center w-full p-4 text-gray-100 mt-12 sm:block">{props.project.desc}</p>
                    </div>



                    <div className='flex justify-center text-white'>
                        <span className='px-8'>
                            <a href={props.project.github}>
                                <FaGithub className="absolute bottom-4 rounded-full border-none h-6 w-6 hover:glow" style={{ '--glow-color': 'silver', '--glow-size': '4px'}}/>
                            </a>
                        </span>
                        <span  className='px-8'>
                            <a href={props.project.link}>
                                <LinkIcon className="absolute bottom-4 rounded-full h-6 w-6 hover:bg-zinc-700 hover:glow" style={{ '--glow-color': 'gray', '--glow-size': '2px' }}/>
                            </a>
                        </span>
                    </div>

                
            </div>
        </div>

    )
}