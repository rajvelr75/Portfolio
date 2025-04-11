import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-scroll';

const Home = ({ theme }) => {
  const isLightTheme = theme === 'light';

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white'
      }`}
      id="about"
    >
      <section className="flex flex-col lg:flex-row xl:flex-row items-center justify-between max-w-6xl mx-auto py-12 px-8 space-y-12 lg:space-y-0 lg:space-x-16 mt-10">
        <div className="flex flex-col items-center lg:items-start">
          <img
            src="/assets/proto_dp.png"
            alt="profile"
            className={`w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full border-4 shadow-lg ${
              isLightTheme ? 'border-blue-300' : 'border-blue-500'
            }`}
          />
          <div
            className={`mt-8 text-center lg:text-left ${
              isLightTheme ? 'text-gray-800' : 'text-gray-300'
            }`}
          >
            <h2 className="text-4xl font-bold">Rajvel</h2>
            <h3
              className={`text-xl font-medium mt-2 ${
                isLightTheme ? 'text-blue-500' : 'text-blue-400'
              }`}
            >
              Web Developer
            </h3>
            <p className="mt-4 mb-4">
              I thrive on solving complex problems and building engaging
              applications with a focus on performance and aesthetics.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full lg:items-center">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <div
              className={`p-6 rounded-lg shadow-lg text-center ${
                isLightTheme
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              <h4
                className={`text-3xl font-bold ${
                  isLightTheme ? 'text-blue-500' : 'text-blue-400'
                }`}
              >
                90+
              </h4>
              <p>Commits</p>
            </div>
            <div
              className={`p-6 rounded-lg shadow-lg text-center ${
                isLightTheme
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              <h4
                className={`text-3xl font-bold ${
                  isLightTheme ? 'text-blue-500' : 'text-blue-400'
                }`}
              >
                4
              </h4>
              <p>Projects</p>
            </div>
            <div
              className={`p-6 rounded-lg shadow-lg text-center ${
                isLightTheme
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              <h4
                className={`text-3xl font-bold ${
                  isLightTheme ? 'text-blue-500' : 'text-blue-400'
                }`}
              >
                8.46
              </h4>
              <p>CGPA</p>
            </div>
            <div
              className={`p-6 rounded-lg shadow-lg text-center ${
                isLightTheme
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              <h4
                className={`text-3xl font-bold ${
                  isLightTheme ? 'text-blue-500' : 'text-blue-400'
                }`}
              >
                100+
              </h4>
              <p>Leetcode Problems</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center w-full">
            <div className="flex space-x-6">
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                className={`px-6 py-3 cursor-pointer font-semibold rounded-lg shadow-md transition ${
                  isLightTheme
                    ? 'bg-blue-500 text-white hover:bg-blue-600 hover:text-black'
                    : 'bg-blue-400 text-white hover:bg-blue-500 hover:text-black'
                }`}
              >
                Hire Me
              </Link>
              <a
                href="/assets/Resume.pdf"
                target="_blank"
                className={`px-6 py-3 font-semibold rounded-lg shadow-md transition ${
                  isLightTheme
                    ? 'bg-blue-500 text-white hover:bg-blue-600 hover:text-black'
                    : 'bg-blue-400 text-white hover:bg-blue-500 hover:text-black'
                }`}
              >
                Resume
              </a>
            </div>

            <div className="mt-6 text-center">
              <p
                className={`text-lg font-medium ${
                  isLightTheme ? 'text-gray-800' : 'text-gray-300'
                }`}
              >
                Follow Me On
              </p>
              <div className="flex space-x-6 mt-4">
                <a
                  href="https://www.instagram.com/rajvels75/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${
                    isLightTheme
                      ? 'text-gray-600 hover:text-pink-600'
                      : 'text-gray-400 hover:text-pink-400'
                  }`}
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajvels75/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${
                    isLightTheme
                      ? 'text-gray-600 hover:text-blue-500'
                      : 'text-gray-400 hover:text-blue-400'
                  }`}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/rajvelr75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${
                    isLightTheme
                      ? 'text-gray-600 hover:text-gray-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <FaGithub />
                </a>
                <a
                  href="https://leetcode.com/u/rajvels75/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${
                    isLightTheme
                      ? 'text-gray-600 hover:text-yellow-500'
                      : 'text-gray-400 hover:text-yellow-400'
                  }`}
                >
                  <SiLeetcode />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
