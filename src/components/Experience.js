import React from 'react';

const Experience = ({ theme }) => {
  const isLightTheme = theme === 'light';

  const experiences = [
    {
      role: 'Web Developer',
      organization: 'LiveWires',
      duration: '2024 - 2025',
      logo: '/assets/livewires.jpg', 
    },
    
  ];

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white'
      }`}
    >
      <section className="max-w-6xl mx-auto py-12 px-8 space-y-12 mt-10">
        <h2
          className={`text-4xl font-bold text-center ${
            isLightTheme ? 'text-gray-800' : 'text-gray-300'
          }`}
        >
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`flex items-center p-6 rounded-lg shadow-lg ${
                isLightTheme
                  ? 'bg-white text-gray-800'
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              <img
                src={experience.logo}
                alt={`${experience.organization} Logo`}
                className="w-20 h-20 rounded-full border-2 shadow-lg mr-6"
              />
              <div>
                <h3
                  className={`text-2xl font-bold ${
                    isLightTheme ? 'text-blue-500' : 'text-blue-400'
                  }`}
                >
                  {experience.role}
                </h3>
                <p className="text-lg font-medium mt-2">
                  {experience.organization}
                </p>
                <p className="text-sm mt-1">{experience.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
