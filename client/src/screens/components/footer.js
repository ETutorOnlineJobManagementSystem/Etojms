import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter,FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-500 text-white">
        <div className="flex flex-col items-center justify-center p-4 md:flex-row md:items-center md:justify-between mx-auto max-w-screen-xl">
            <div className="text-center mb-8 md:mb-0 md:mr-8">
                <h1 className="text-4xl font-semibold mb-4">Any Queries</h1>
                <p className="text-lg font-light">To get the latest updates, join our community</p>
                <div className="mt-4">
                    <label htmlFor="email" className="sr-only"></label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 focus:outline-none "
                        placeholder="name@gmail.com"
                        required
                    />
                </div>
            </div>
            <div className="md:ml-10 text-center md:text-left">
                <h1 className="mb-3 text-lg">Follow Us on Social Media</h1>
                <div className="flex items-center space-x-3">
                    <FaInstagram className="text-xl font-medium" />
                    <FaFacebook className="text-xl font-medium" />
                    <FaTwitter className="text-xl font-medium" />
                    <FaWhatsapp className="text-xl font-medium" />
                </div>
            </div>
        </div>

        <footer className="bg-blue-500 text-white rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
                <span className="text-sm sm:text-center">
                    © 2023 <a href="#" className="hover:underline">VLEARN</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    </div>

    </>
  )
}

export default Footer;
