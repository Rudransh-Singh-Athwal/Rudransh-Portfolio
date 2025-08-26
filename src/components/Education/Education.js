import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';
import nith from "../../assets/nith2.png";
import kvs from "../../assets/kvs.png";


const Education = () => {
  return <section id="education" name="education" className='section h-screen w-full ml-6'>
    <div className='mx-auto max-w-screen-xl'>

      {/* <h2 className='h2 leading-tight text-cyan-500'>My Latest <br/>Work</h2> */}
      <div className="flex flex-row justify-start pb-10">
        <div className="text-4xl sm:text-7xl font-bold text-white mt-4">
          Education
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col mb-10'>

            <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='group relative overflow-hidden border-none rounded-md pl-20 pb-2 pr-2'>
              <div className="flex flex-row items-center mt-4">
                <div className='flex items-start justify-center'>
                  <a href="https://nith.ac.in/" className="flex h-28 w-28 items-center justify-center mx-2 rounded-full hover:glow" style={{ '--glow-color': 'silver'}}>
                    <img src={nith} alt="nith" />
                  </a>

                  <div className='flex flex-row rounded-lg'>
                    <span>
                      <div className="flex flex-col items-center bg-transparent border border-gray-200 rounded-lg md:flex-row md:max-w-full dark:border-gray-700 dark:bg-transparent">
                        <div className=' text-gray-900 dark:text-white'>

                          <div className="bg-cyan-500 rounded-t-lg flex flex-col justify-between p-4 leading-normal">
                            <div className='flex justify-between'>
                              <span className="mb-2 tracking-tight text-lg font-bold">
                                National Institute of Technology, Hamirpur
                              </span>
                              <span className="tracking-tighter">
                                2021 - Present
                              </span>
                            </div>
                            <div className='text-base'>
                              Electronics and Communication Engineering
                            </div>
                          </div>

                          <div className="list-disc p-6 font-normal text-gray-700 dark:text-gray-400">
                            <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
                            <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
                            <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>


      <motion.div variants={fadeIn('right', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='group relative overflow-hidden w-4/6 border-none rounded-sm pl-2 pb-2' >
        <div className="flex flex-row items-center mt-4">
          <div className='flex items-start justify-center'>

            <div className='flex flex-row rounded-lg'>
              <span>
                <div className="flex flex-col items-center bg-transparent border border-gray-200 rounded-lg md:flex-row md:max-w-full dark:border-gray-700 dark:bg-transparent">
                  <div className=' text-gray-900 dark:text-white'>

                    <div className="bg-cyan-500 rounded-t-lg flex flex-col justify-between p-4 leading-normal">
                      <div className='flex justify-between'>
                        <span className="mb-2 tracking-tight text-lg font-bold">
                          Kendriya Vidyalaya, Hamirpur
                        </span>
                        <span className="tracking-tighter">
                          2017 - 2020
                        </span>
                      </div>
                      <div className='text-base'>
                        10th and 12th
                      </div>
                    </div>

                    <div className="list-disc p-6 font-normal text-gray-700 dark:text-gray-400">
                      <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
                      <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
                      <li> I have studied core subjects like Data Structures, DBMS, etc.</li>
                    </div>
                  </div>
                </div>
              </span>
            </div>

            <a href="https://hamirpur.kvs.ac.in/" className="flex h-28 w-28 items-center justify-center mx-2 rounded-full hover:glow" style={{ '--glow-color': 'silver'}}>
              <img src={kvs} alt="kvs" />
            </a>

          </div>
        </div>

      </motion.div>

    </div >

  </section >;
};

export default Education;
