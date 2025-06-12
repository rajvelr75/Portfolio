import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = ({ theme }) => {
  const isLightTheme = theme === 'light';

  const projects = [
    {
      id: 1,
      title: 'Identity Access Management',
      image: '/assets/iam.jpg',
      description: 'Secure web application managing user roles and permissions built with Next.js and TypeScript.',
      tags: ['Next.js', 'TypeScript', 'IAM'],
      github: 'https://github.com/rajvelr75/IAM',
    },
    {
      id: 2,
      title: 'Web Chat Application',
      image: '/assets/chat_app.jpeg',
      description: 'Real-time chat with authentication, message encryption, and responsive UI.',
      tags: ['React', 'Firebase', 'WebSockets'],
      github: 'https://github.com/rajvelr75/Chat-App',
      deploy: 'https://chat-app-9r2.pages.dev/',
    },
    {
      id: 3,
      title: 'User Database Management',
      image: '/assets/database.jpg',
      description: 'System for efficient user data management with CRUD operations and search functionality.',
      tags: ['Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/rajvelr75/User-Database',
    },
  ];

  return (
    <div className={`min-h-screen py-20 ${isLightTheme ? 'bg-gray-200' : 'bg-gray-900'}`} id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isLightTheme ? 'text-gray-900' : 'text-white'}`}>
            Projects
          </h2>
          <div className={`w-20 h-1 mx-auto ${isLightTheme ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
          <p className={`mt-6 max-w-2xl mx-auto text-lg ${isLightTheme ? 'text-gray-600' : 'text-gray-300'}`}>
            Here are some of my recent projects showcasing my skills and experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                isLightTheme
                  ? 'bg-white shadow-md hover:shadow-lg border border-gray-200'
                  : 'bg-gray-800 shadow-lg hover:shadow-xl border border-gray-700'
              }`}
            >
              
              {/* Project image */}
              <div className="h-48 overflow-hidden rounded-t-xl relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${
                  isLightTheme ? 'to-white/30' : 'to-gray-800/80'
                }`}></div>
              </div>
              
              {/* Project content */}
              <div className="p-6 pt-4">
                <h3 className={`text-xl font-bold mb-2 ${isLightTheme ? 'text-gray-900' : 'text-white'}`}>
                  {project.title}
                </h3>
                
                <p className={`mb-5 text-sm ${isLightTheme ? 'text-gray-600' : 'text-gray-300'}`}>
                  {project.description}
                </p>
                
                {/* Action buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center py-2 rounded-lg text-sm font-medium transition-colors ${
                      isLightTheme
                        ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                    }`}
                  >
                    <FiGithub className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  
                  {project.deploy && (
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center py-2 rounded-lg text-sm font-medium transition-colors ${
                        isLightTheme
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      <FiExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;