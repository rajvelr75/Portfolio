import React, { useState } from 'react';

const Projects = ({ theme }) => {
  const isLightTheme = theme === 'light';
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Web Chat Application',
      image: '/assets/chat_app.jpeg', 
      description:
        'A real-time web chat application with user authentication, message encryption, and responsive UI for seamless communication.',
    },
    {
      id: 2,
      title: 'User Database Management',
      image: '/assets/database.jpg', 
      description:
        'A system to manage user data efficiently, offering CRUD operations, search functionality, and data visualization.',
    },
    {
      id: 3,
      title: 'Password Checker',
      image: '/assets/password.jpg', 
      description:
        'A tool to analyze password strength, detect vulnerabilities, and provide recommendations for enhanced security.',
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white'
      }`}
      id="projects"
    >
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`p-6 rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105 ${
              isLightTheme
                ? 'bg-white text-black'
                : 'bg-gray-800 text-gray-300'
            }`}
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3
              className={`text-2xl font-semibold ${
                isLightTheme ? 'text-blue-500' : 'text-blue-400'
              }`}
            >
              {project.title}
            </h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
        >
          <div
            className={`max-w-lg p-6 rounded-lg shadow-lg ${
              isLightTheme
                ? 'bg-white text-black'
                : 'bg-gray-800 text-gray-300'
            }`}
          >
            <h3
              className={`text-3xl font-bold ${
                isLightTheme ? 'text-blue-500' : 'text-blue-400'
              }`}
            >
              {selectedProject.title}
            </h3>
            <p className="mt-4">{selectedProject.description}</p>
            <button
              className={`mt-6 px-4 py-2 font-semibold rounded-lg shadow-lg transition ${
                isLightTheme
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-blue-400 text-white hover:bg-blue-500'
              }`}
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
