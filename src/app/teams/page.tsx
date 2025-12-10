/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import PageSection from "@/hooks/PageSection";
import './style.css';
import { Playfair_Display } from "next/font/google";


import { studentsData, studentsDataConvenors, facultiesData } from './index';
import Link from "next/link";
import StickyFooterContent from "@/components/StickyFooterContent";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

interface Student {
  domainName: string;
  description: string;
  names: string[];
  imageUrls: string[];
  linkedinUrls: string[];
}

interface Faculty {
  name: string;
  imageUrl: string;
  description: string;
  linkedinUrl: string;
}

const Team = () => {
  const [hoveredStudentIndex, setHoveredStudentIndex] = useState<{ [key: number]: number | null }>({});
  const [hoveredFacultyIndex, setHoveredFacultyIndex] = useState<number | null>(null);

  const [hovered, setHovered] = useState(false);


  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-72 h-72 bg-yellow-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-80 h-80 bg-yellow-500 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Meet Our <span className="text-[#F7931E]">Team</span></h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">The dedicated individuals behind our entrepreneurial ecosystem, working together to foster innovation and success.</p>
          </div>
        </div>
      </div>

      <PageSection>
        <div className="flex flex-col px-6 py-20 max-w-7xl mx-auto">
          <h2 className="text-[#F7931E] text-5xl font-bold text-center mb-10">
            FACULTIES
          </h2>
          <div className="w-24 h-1 bg-[#F7931E] mx-auto mb-20 rounded-full"></div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {facultiesData.length % 2 !== 0 && (
              <div className="lg:col-span-2 flex justify-center">
                <div
                  className="bg-white rounded-xl flex flex-col items-center p-8 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl lg:w-[48%] border border-gray-100 team-card"
                  onMouseEnter={() => setHoveredFacultyIndex(0)}
                  onMouseLeave={() => setHoveredFacultyIndex(null)}
                >
                  <div className="flex flex-col text-center mb-8">
                    <h1 className="font-bold text-3xl text-gray-800">{facultiesData[0].name}</h1>
                    <h1 className="font-normal text-xl text-gray-800">{facultiesData[0].title}</h1>
                  </div>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={facultiesData[0].imageUrl}
                      alt={facultiesData[0].name}
                      className="w-[300px] h-[300px] object-cover transition-transform duration-500 ease-in-out profile-image"
                    />
                    <div
                      className={`absolute inset-0 bg-black transition-opacity duration-300 ${hoveredFacultyIndex === 0 ? "opacity-50" : "opacity-0"}`}
                    ></div>
                    <div
                      className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${hoveredFacultyIndex === 0 ? "opacity-100" : "opacity-0"}`}
                    >
                      <Link href={facultiesData[0].linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="w-10 h-10 text-white hover:text-[#F7931E] transition-colors duration-300" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col text-center mt-8 max-w-2xl">
                    <p className="text-base text-gray-600 leading-relaxed">{facultiesData[0].description}</p>
                  </div>
                </div>
              </div>
            )}
            {facultiesData.slice(facultiesData.length % 2 !== 0 ? 1 : 0).map((faculty, facultyIndex) => (
              <div
                key={facultyIndex}
                className="bg-white rounded-xl flex flex-col items-center p-8 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl border border-gray-100 team-card"
                onMouseEnter={() => setHoveredFacultyIndex(facultyIndex + (facultiesData.length % 2 !== 0 ? 1 : 0))}
                onMouseLeave={() => setHoveredFacultyIndex(null)}
              >
                <div className="flex flex-col text-center mb-8">
                  <h1 className="font-bold text-3xl text-gray-800">{faculty.name}</h1>
                  <h1 className="font-normal text-xl text-gray-800">{faculty.title}</h1>
                </div>
                <div className="relative overflow-hidden rounded-xl group">
                  <img
                    src={faculty.imageUrl}
                    alt={faculty.name}
                    className="w-[300px] h-[300px] object-cover transition-transform duration-500 ease-in-out profile-image"
                  />
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${hoveredFacultyIndex === facultyIndex + (facultiesData.length % 2 !== 0 ? 1 : 0) ? "opacity-50" : "opacity-0"}`}
                  ></div>
                  <div
                    className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${hoveredFacultyIndex === facultyIndex + (facultiesData.length % 2 !== 0 ? 1 : 0) ? "opacity-100" : "opacity-0"}`}
                  >
                    <Link href={faculty.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn className="w-10 h-10 text-white hover:text-[#F7931E] transition-colors duration-300" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col text-center mt-8 max-w-2xl">
                  <p className="text-base text-gray-600 leading-relaxed">{faculty.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-[#F7931E] text-5xl font-bold text-center mt-32 mb-10">
            TEAM LEADS
          </h2>
          <div className="w-24 h-1 bg-[#F7931E] mx-auto mb-20 rounded-full"></div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

            {/* Student Cards */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="bg-white rounded-xl flex flex-col items-center p-8 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl lg:w-[48%] border border-gray-100 team-card">
                <div className="flex flex-col text-center mb-8">
                  <h1 className="font-bold text-3xl text-gray-800">Additional Secretary</h1>
                </div>
                <div className="flex justify-center">
                  <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="relative group"
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-md">
                      <img
                        src="https://res.cloudinary.com/dkxskaege/image/upload/v1765282152/WhatsApp_Image_2025-12-06_at_12.22.33_xddbij.jpg"
                        alt="student-image"
                        className="w-[200px] h-[200px] object-cover transition-transform duration-500 ease-in-out profile-image"
                      />

                      {/* <div
                          className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300 ${hovered ? "opacity-60" : "opacity-0"
                            }`}
                        ></div> */}

                      <div
                        className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"
                          }`}
                      >
                        <Link href="https://www.linkedin.com/in/sarit-paira-134801242/" target="_blank" rel="noopener noreferrer">
                          <FaLinkedinIn className="w-8 h-8 text-white hover:text-[#F7931E] transition-colors duration-300" />
                        </Link>
                      </div>
                    </div>

                    <h4 className={`text-center mt-4 text-lg font-bold text-gray-800 ${playfairDisplay.className}`}>
                      Sarit Paira
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col text-center mt-8 max-w-2xl">
                  <p className="text-base text-gray-600 leading-relaxed"></p>
                </div>
              </div>
            </div>

            {studentsData.length % 2 !== 0 && (
              <div className="lg:col-span-2 flex justify-center">

                <div className="bg-white rounded-xl flex flex-col items-center p-8 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl lg:w-[48%] border border-gray-100 team-card">
                  <div className="flex flex-col text-center mb-8">
                    <h1 className="font-bold text-3xl text-gray-800">{studentsData[0].domainName}</h1>
                  </div>

                  <div className="flex flex-wrap justify-center gap-8">
                    {studentsData[0].imageUrls.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        onMouseEnter={() => setHoveredStudentIndex(prev => ({ ...prev, [0]: imageIndex }))}
                        onMouseLeave={() => setHoveredStudentIndex(prev => ({ ...prev, [0]: null }))}
                        className="relative group"
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-md">
                          <img
                            src={image}
                            alt={`student-image-${imageIndex}`}
                            className={`w-[200px] h-[200px] object-cover transition-transform duration-500 ease-in-out profile-image`}
                          />
                          <div
                            className={`overlay ${hoveredStudentIndex[0] === imageIndex ? "opacity-60" : "opacity-0"} absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300`}
                          ></div>
                          <div
                            className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${hoveredStudentIndex[0] === imageIndex ? "opacity-100" : "opacity-0"}`}
                          >
                            <Link href={studentsData[0].linkedinUrls[imageIndex]} target="_blank" rel="noopener noreferrer">
                              <FaLinkedinIn className="w-8 h-8 text-white hover:text-[#F7931E] transition-colors duration-300" />
                            </Link>
                          </div>
                        </div>
                        <h4 className={`text-center mt-4 text-lg font-bold text-gray-800 ${playfairDisplay.className}`}>{studentsData[0].names[imageIndex]}</h4>
                      </div>
                    ))}
                  </div>
                  {/* <div className="flex flex-col text-center mt-8 max-w-2xl">
                    <p className="text-base text-gray-600 leading-relaxed">{studentsData[0].description}</p>
                  </div> */}
                </div>
              </div>
            )}
            {studentsData.slice(studentsData.length % 2 !== 0 ? 1 : 0).map((student, studentIndex) => (
              <div
                key={studentIndex}
                className="bg-white rounded-xl flex flex-col items-center p-8 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl border border-gray-100 team-card"
              >
                <div className="flex flex-col text-center mb-8 min-h-[80px] flex items-center justify-center">
                  <h1 className="font-bold text-3xl text-gray-800 leading-tight">{student.domainName}</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                  {student.imageUrls.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      onMouseEnter={() => setHoveredStudentIndex(prev => ({ ...prev, [studentIndex + (studentsData.length % 2 !== 0 ? 1 : 0)]: imageIndex }))}
                      onMouseLeave={() => setHoveredStudentIndex(prev => ({ ...prev, [studentIndex + (studentsData.length % 2 !== 0 ? 1 : 0)]: null }))}
                      className="relative group"
                    >
                      <div className="relative overflow-hidden rounded-xl shadow-md">
                        <img
                          src={image}
                          alt={`student-image-${imageIndex}`}
                          className={`w-[200px] h-[200px] object-cover transition-transform duration-500 ease-in-out profile-image`}
                        />
                        <div
                          className={`overlay ${hoveredStudentIndex[studentIndex + (studentsData.length % 2 !== 0 ? 1 : 0)] === imageIndex ? "opacity-60" : "opacity-0"} absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300`}
                        ></div>
                        <div
                          className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${hoveredStudentIndex[studentIndex + (studentsData.length % 2 !== 0 ? 1 : 0)] === imageIndex ? "opacity-100" : "opacity-0"}`}
                        >
                          <Link href={student.linkedinUrls[imageIndex]} target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="w-8 h-8 text-white hover:text-[#F7931E] transition-colors duration-300" />
                          </Link>
                        </div>
                      </div>
                      <h4 className={`text-center mt-4 text-lg font-bold text-gray-800 ${playfairDisplay.className}`}>{student.names[imageIndex]}</h4>
                    </div>
                  ))}
                </div>
                {/* <div className="flex flex-col text-center mt-8 max-w-2xl">
                  <p className="text-base text-gray-600 leading-relaxed">{student.description}</p>
                </div> */}
              </div>
            ))}

            {studentsDataConvenors.length % 2 !== 0 && (
              <div className="lg:col-span-2 flex justify-center">

                <div className="bg-white rounded-xl flex flex-col items-center p-8 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl lg:w-[48%] border border-gray-100 team-card">
                  <div className="flex flex-col text-center mb-8">
                    <h1 className="font-bold text-3xl text-gray-800">{studentsDataConvenors[0].domainName}</h1>
                  </div>

                  <div className="flex flex-wrap justify-center gap-8">
                    {studentsDataConvenors[0].imageUrls.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        onMouseEnter={() => setHoveredStudentIndex(prev => ({ ...prev, [0]: imageIndex }))}
                        onMouseLeave={() => setHoveredStudentIndex(prev => ({ ...prev, [0]: null }))}
                        className="relative group"
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-md">
                          <img
                            src={image}
                            alt={`student-image-${imageIndex}`}
                            className={`w-[200px] h-[200px] object-cover transition-transform duration-500 ease-in-out profile-image`}
                          />
                          <div
                            className={`overlay ${hoveredStudentIndex[0] === imageIndex ? "opacity-60" : "opacity-0"} absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300`}
                          ></div>
                          <div
                            className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${hoveredStudentIndex[0] === imageIndex ? "opacity-100" : "opacity-0"}`}
                          >
                            <Link href={studentsDataConvenors[0].linkedinUrls[imageIndex]} target="_blank" rel="noopener noreferrer">
                              <FaLinkedinIn className="w-8 h-8 text-white hover:text-[#F7931E] transition-colors duration-300" />
                            </Link>
                          </div>
                        </div>
                        <h4 className={`text-center mt-4 text-lg font-bold text-gray-800 ${playfairDisplay.className}`}>{studentsDataConvenors[0].names[imageIndex]}</h4>
                      </div>
                    ))}
                  </div>
                  {/* <div className="flex flex-col text-center mt-8 max-w-2xl">
                    <p className="text-base text-gray-600 leading-relaxed">{studentsDataConvenors[0].description}</p>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </PageSection>
      <StickyFooterContent />
    </>
  );
};

export default Team;
