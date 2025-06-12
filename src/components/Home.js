import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-scroll';

// Reusable Stat Card Component
const StatCard = ({ value, label, isLightTheme }) => (
  <div className={`relative rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg ${isLightTheme ? 'bg-gray-100 shadow-md hover:shadow-blue-100' : 'bg-gray-800 shadow-md hover:shadow-blue-900/20'}`}>
    <h4 className={`text-3xl font-bold mb-2 ${isLightTheme ? 'text-blue-600' : 'text-blue-400'}`}>{value}</h4>
    <p className={`text-sm uppercase tracking-wider ${isLightTheme ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
    <div className={`absolute inset-0 border-2 rounded-lg border-transparent hover:border-opacity-30 transition-all duration-300 pointer-events-none ${isLightTheme ? 'hover:border-blue-300' : 'hover:border-blue-500'}`}></div>
  </div>
)

// Reusable Button Component
const ActionButton = ({ children, isLightTheme, isLink = false, ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300";
  const lightClasses = "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg";
  const darkClasses = "bg-blue-400 text-white hover:bg-blue-500 hover:shadow-lg";
  
  const className = `${baseClasses} ${isLightTheme ? lightClasses : darkClasses}`;

  return isLink ? (
    <Link {...props} className={`${className} cursor-pointer`}>
      {children}
    </Link>
  ) : (
    <a {...props} className={className}>
      {children}
    </a>
  );
};

const Home = ({ theme }) => {
  const isLightTheme = theme === 'light';

  const stats = [
    { value: '90+', label: 'Commits' },
    { value: '4', label: 'Projects' },
    { value: '8.73', label: 'CGPA' },
    { value: '100+', label: 'Leetcode Problems' },
  ];

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white'
      }`}
      id="about"
    >
      <section className="flex flex-col lg:flex-row xl:flex-row items-center justify-between max-w-6xl mx-auto py-12 px-8 space-y-12 lg:space-y-0 lg:space-x-16 mt-10">
        <div className="flex flex-col items-center lg:items-start">
          <div className="group">
            <img
              src="/assets/proto_dp.png"
              alt="profile"
              className={`w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full border-2 shadow-lg transition-all duration-300 ${
                isLightTheme
                  ? 'border-blue-300 group-hover:border-blue-400'
                  : 'border-blue-500 group-hover:border-blue-300'
              }`}
            />
          </div>
          <div
            className={`mt-8 text-center lg:text-left ${
              isLightTheme ? 'text-gray-800' : 'text-gray-300'
            }`}
          >
            <h2 className="text-4xl font-bold">Rajvel</h2>
            <h3
              className={`text-xl font-medium mt-2 transition-all duration-300 ${
                isLightTheme ? 'text-blue-500 hover:text-blue-600' : 'text-blue-400 hover:text-blue-300'
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
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                isLightTheme={isLightTheme}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center w-full">
            <div className="flex space-x-6">
              <ActionButton
                isLightTheme={isLightTheme}
                isLink={true}
                to="contact"
                smooth={true}
                offset={-70}
              >
                Hire Me
              </ActionButton>
              <ActionButton
                isLightTheme={isLightTheme}
                href="/assets/Resume.pdf"
                target="_blank"
              >
                Resume
              </ActionButton>
            </div>

            <div className="mt-6 text-center">
              <p
                className={`text-lg font-medium transition-all duration-300 ${
                  isLightTheme ? 'text-gray-800 hover:text-gray-900' : 'text-gray-300 hover:text-gray-200'
                }`}
              >
                Follow Me On
              </p>
              <div className="flex justify-center space-x-6 mt-4">
                <a
                  href="https://www.instagram.com/rajvels75/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-transform transform hover:scale-110 ${
                    isLightTheme
                      ? 'text-gray-600 hover:text-[#dd2a7b]'
                      : 'text-gray-400 hover:text-pink-400'
                  }`}
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajvels75/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-transform transform hover:scale-110 ${
                    isLightTheme
                      ? 'text-gray-600 hover:text-blue-700'
                      : 'text-gray-400 hover:text-blue-400'
                  }`}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/rajvelr75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-transform transform hover:scale-110 ${
                    isLightTheme
                      ? 'text-gray-600 hover:text-gray-800'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <FaGithub />
                </a>
                <a
                  href="https://leetcode.com/u/rajvels75/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-transform transform hover:scale-110 ${
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