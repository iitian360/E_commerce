import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";
import imgC from '../../components/Images/company.jpg';
import { FaQuestionCircle } from "react-icons/fa";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Mera Bestie</title>
      </Helmet>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-50 mt-28">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                About Our Company
              </span>
            </h1>
            <div className="w-full flex max-[540px]:flex-wrap-reverse gap-2 justify-center items-center h-auto">
              <div className="w-1/2 max-[540px]:w-full">
                <p className="text-xl font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dicta provident
                  suscipit earum ipsa ducimus quisquam aliquid nisi? Velit, ipsam!
                </p>
              </div>
              <div className="w-1/2 max-[540px]:w-full">
                <img
                  src={imgC}
                  alt="Company"
                  className="shadow-lg mx-auto max-w-full"
                />
              </div>
            </div>
          </div>

          <section className="relative rounded-3xl isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 mt-4 mb-4">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <h3 className="mx-auto text-center font-bold text-3xl">Mera Besite</h3>
                <figure className="mt-10">
                  <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                    <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <img className="mx-auto size-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                      <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className="font-semibold text-gray-900">Judith Black</div>
                        <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                          <circle cx="1" cy="1" r="1" />
                        </svg>
                        <div className="text-gray-600">CEO of Mera Bestie</div>
                      </div>
                  </figcaption>
                </figure>
            </div>
          </section>

          {/* About Sections */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* About Our Company Section */}
            <div
              data-aos="fade-right"
              className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #ffe6f2 100%)",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Who we are?
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div
              data-aos="fade-left"
              className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #ffe6f2 100%)",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Objective Section */}
            <div
              data-aos="fade-right"
              className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg lg:col-span-2"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #ffe6f2 100%)",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Objective</h2>
              <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </li>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </li>
                <li>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </li>
              </ul>
            </div>

            {/* Vision Section */}
            <div
              data-aos="fade-right"
              className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #ffe6f2 100%)",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Mission Section */}
            <div
              data-aos="fade-left"
              className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #ffe6f2 100%)",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

        
          

          {/* Footer Text */}
          <div className="text-center mt-16">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Lorem Ipsum
              </span>
              <span className="text-gray-800">, Dolor Sit Amet</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
