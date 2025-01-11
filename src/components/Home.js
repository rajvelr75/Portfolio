import React from 'react';

const Home = ({ theme }) => {
  const isLightTheme = theme === 'light';

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white'
      }`} id='about'
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
                60+
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
                2
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
                8.5
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
                80+
              </h4>
              <p>Leetcode Problems</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center w-full">
            <div className="flex space-x-6">
              <a
                href="#hire"
                className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition ${
                  isLightTheme
                    ? 'bg-white text-black hover:bg-blue-100'
                    : 'bg-black text-white hover:bg-blue-100'
                }`}
              >
                Hire Me
              </a>
              <a
                href="#resume"
                className={`px-6 py-3 font-semibold rounded-lg shadow-lg transition ${
                  isLightTheme
                    ? 'bg-white text-black hover:bg-blue-100'
                    : 'bg-black text-white hover:bg-blue-100'
                }`}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
