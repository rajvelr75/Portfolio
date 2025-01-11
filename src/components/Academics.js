import React from 'react';
import { Fade } from 'react-awesome-reveal'; 

const Academics = ({ theme }) => {
  const isLightTheme = theme === 'light';

  const academicDetails = [
    {
      degree: 'M.C.A',
      institution: 'SRMIST Kattankulathur, Chennai',
      duration: '2023-25',
      percentage: '8.50',
    },
    {
      degree: 'B.Sc Computer Science',
      institution: 'Alphonsa College of Arts and Science, Karungal',
      duration: '2020-23',
      percentage: '7.79',
    },
    {
      degree: 'Higher Secondary',
      institution: 'Bethany Navajeevan Matriculation Higher Secondary School, Vencode',
      duration: '2019-20',
      percentage: '61.0%',
    },
    {
      degree: 'SSLC',
      institution: 'Bethany Navajeevan Matriculation Higher Secondary School, Vencode',
      duration: '2017-18',
      percentage: '87.9%',
    },
  ];

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white'}`}
      id="academics"
    >
      <section className="w-9/12 mx-auto py-12 px-8">
        <h1
          className={`text-4xl font-bold text-center mb-12 ${isLightTheme ? 'text-gray-800' : 'text-white'}`}
        >
          Academic Background
        </h1>

        <div className="space-y-10">
          {academicDetails.map((item, index) => (
            <Fade key={index} direction="up" triggerOnce>
              <div
                className={`flex flex-col lg:flex-row items-center justify-between p-6 rounded-lg shadow-lg ${
                  isLightTheme ? 'bg-gray-100 text-gray-800' : 'bg-gray-800 text-gray-300'
                }`}
              >
                <div className="text-center lg:text-left">
                  <h2
                    className={`text-2xl font-semibold ${isLightTheme ? 'text-gray-900' : 'text-white'}`}
                  >
                    {item.degree}
                  </h2>
                  <p className="mt-2 text-lg">{item.institution}</p>
                  <p className="mt-1 text-sm">{item.duration}</p>
                </div>

                <div
                  className={`mt-4 lg:mt-0 text-3xl font-bold ${isLightTheme ? 'text-blue-500' : 'text-blue-400'}`}
                >
                  {item.percentage}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Academics;
