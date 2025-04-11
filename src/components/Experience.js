import React from 'react';

const Experience = ({ theme }) => {
  const isLightTheme = theme === 'light';

  const experiences = [
    {
      role: 'Web Developer',
      organization: 'LiveWires (Student Club) SRM',
      duration: 'Jan 2024 - Dec 2024',
      logo: '/assets/livewires.jpg',
      description: 'Developed and maintained club projects, organized tech events, and mentored junior members in web development.'
    },
    {
      role: 'Full Stack Developer - Intern',
      organization: 'AlphaesAI',
      duration: 'Jan 2025 - Mar 2025',
      logo: '/assets/alphaesai.png',
      description: 'Developed an Identity Access Management system using Next.js and TypeScript, demonstrating strong front-end and back-end integration skills',
    },
    {
      role: 'Website Coordinator - Intern',
      organization: 'SRM University',
      duration: 'Jan 2025 - Present',
      logo: '/assets/srm.jpg',
      description: 'Managed university website content, improved UI/UX, and implemented accessibility features.'
    },
  ];

  return (
    <div className={`min-h-screen py-20 ${isLightTheme ? 'bg-gray-200' : 'bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isLightTheme ? 'text-gray-900' : 'text-white'}`}>
            Experience
          </h2>
          <div className={`w-20 h-1 mx-auto ${isLightTheme ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isLightTheme 
                  ? 'bg-white border border-gray-200 hover:border-blue-200' 
                  : 'bg-gray-800 border border-gray-700 hover:border-blue-400'
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <div className="flex items-center mb-6">
              <div className="p-1">
              <img 
                src={exp.logo} 
                alt={`${exp.organization} logo`} 
                className="w-14 h-14 object-contain "
              />
              </div>
                <div className="ml-4">
                  <h3 className={`text-xl font-bold ${isLightTheme ? 'text-gray-900' : 'text-white'}`}>
                    {exp.role}
                  </h3>
                  <p className={`text-sm ${isLightTheme ? 'text-gray-600' : 'text-gray-300'}`}>
                    {exp.organization}
                  </p>
                </div>
              </div>

              <div className={`mb-4 text-sm ${isLightTheme ? 'text-gray-500' : 'text-gray-400'}`}>
                {exp.duration}
              </div>

              <p className={`text-base ${isLightTheme ? 'text-gray-700' : 'text-gray-300'}`}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;