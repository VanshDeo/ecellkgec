"use client";

import Rounded from '@/components/roundedButton/Index'
import './styles.css'
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const StickyFooterContent: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6 sm:p-8 bg-gray-800 text-white">
        <div className="content col-span-1 md:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1 bg-transparent text-white rounded-lg shadow-lg max-w-full md:mb-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Us</h3>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-white bg-gray-800"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-white bg-gray-800"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 sm:px-4 bg-gray-800 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-white"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </form>
              <a href={'/'}>
                <Rounded className="button-container">
                  <span className='relative z-10'>View Event</span>
                </Rounded>
              </a>
            </div>
            <div className="social col-span-1 flex flex-col gap-4 sm:gap-6 mt-4 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Social Links</h3>
              <div className="flex flex-row gap-5">
              <a
                href="https://www.facebook.com/KGEC.ECELL"
                className="text-gray-300 hover:text-red-500"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5"/>
              </a>
              <a
                href="https://www.instagram.com/kgec.ecell/"
                className="text-gray-300 hover:text-red-500"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5"/>
              </a>
              <a
                href="https://www.linkedin.com/company/kgec-e-cell/posts/?feedView=all"
                className="text-gray-300 hover:text-red-500"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5"/>
              </a>
              {/* <a
                href="#"
                className="text-gray-300 hover:text-red-500"
                aria-label="Discord"
              >
                <FaDiscord className="w-5 h-5"/>
              </a> */}
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
              <ul>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-red-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="map col-span-1 md:col-span-2">
          <div className="rounded-lg overflow-hidden shadow-lg h-[70vh] sm:h-[60vh] flex flex-col">
            <iframe
              src="https://maps.google.com/maps?q=KGEC,+22.992593545127082,88.4487911059281&hl=es;z=14&t=m&amp;output=embed&amp;iwloc=A"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
            <div className="address col-span-1 pt-4 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-3">Address</h3>
              <p className="text-gray-400">Kalyani Government Engineering College</p>
              <p className="text-gray-400">Kalyani, Nadia</p>
              <p className="text-gray-400">West Bengal - 741235</p>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default StickyFooterContent;
