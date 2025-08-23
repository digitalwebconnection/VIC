'use client';
import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const skills = [
  { percentage: 25, label: 'Business Security' },
  { percentage: 40, label: 'Solar Energy' },
  { percentage: 50, label: 'Save Global Energy' },
  { percentage: 90, label: 'Completed Projects' },
];

const faqs = [
  { question: 'What solar panels do Solarsense install?', answer: 'We install a variety of high-performance solar panels suitable for residential and commercial applications.' },
  { question: 'Feed-in Tariff has closed?', answer: 'Yes, the Feed-in Tariff scheme closed to new applicants, but existing users are unaffected.' },
  { question: 'Always in touch with the experts?', answer: 'Our team is always available to guide and support you through your solar journey.' },
  { question: 'Energy is a smart, but long term commitment?', answer: 'Yes, solar energy provides long-term financial and environmental benefits.' },
  { question: 'Where we’ve improved sustainability?', answer: 'We’ve contributed to numerous green energy projects globally, reducing carbon footprints.' },
];



export default function TeamTm ()  {

     const [openIndex, setOpenIndex] = useState<number | null>(1); // second item open by default



  return (
    <>
    
     <div className="max-w-7xl mx-auto py-15 px-4 md:px-4  grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side - Work Skills */}
      <div >
        <h2 className="text-3xl font-bold mb-6 ">Work Skills</h2>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-6 items-center ">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col justify-center items-center md:justify-start md:items-start  "
            >
              <div className="w-35 h-35 " >
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    pathColor: '#0000ff',
                    textColor: '#000',
                    trailColor: '#000000',
                    textSize: '20px',
                    
                  })}
                />
              </div>
              <p className="text-lg  mt-3 ">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Side - FAQ */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Helpful FAQ’s</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border border-blue-600 rounded-lg ${
                  isOpen ? 'bg-blue-600 text-white' : 'text-black'
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center px-4 py-3"
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
    
    
    </>
  )
}

