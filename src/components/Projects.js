const Projects = ({ theme }) => {
  const isLightTheme = theme === 'light';

  const projects = [
    {
      id: 1,
      title: 'Identity Access Management',
      image: '/assets/iam.jpg',
      description:
        'Identity Access Management (IAM) is a secure web application that manages user roles, permissions, and authentication. Built using Next.js and TypeScript, it ensures that only authorized users can access specific resources, enhancing data protection and system integrity.',
      github: 'https://github.com/rajvelr75/IAM',
    },
    {
      id: 2,
      title: 'Web Chat Application',
      image: '/assets/chat_app.jpeg',
      description:
        'A real-time web chat application with user authentication, message encryption, and responsive UI for seamless communication.',
      github: 'https://github.com/rajvelr75/Chat-App',
      deploy: 'https://chat-app-9r2.pages.dev/',
    },
    {
      id: 3,
      title: 'User Database Management',
      image: '/assets/database.jpg',
      description:
        'A system to manage user data efficiently, offering CRUD operations, search functionality, and data visualization.',
      github: 'https://github.com/rajvelr75/User-Database',
    },
    {
      id: 4,
      title: 'Password Validator',
      image: '/assets/password.jpg',
      description:
        'Designed and implemented a robust database management system, optimizing data storage, retrieval, and management for efficient operations.',
      github: 'https://github.com/rajvelr75/Password-Checker',
    },
  ];

  return (
    <section
      className={`py-20 ${isLightTheme ? 'bg-gray-50 text-gray-800' : 'bg-gray-900 text-gray-100'}`}
      id="projects"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className={`w-24 h-1 mx-auto ${isLightTheme ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
          <p className={`mt-6 max-w-2xl mx-auto text-lg ${isLightTheme ? 'text-gray-600' : 'text-gray-300'}`}>
            Here are some of my recent projects showcasing my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ${
                isLightTheme 
                  ? 'bg-white border border-gray-100' 
                  : 'bg-gray-800 border border-gray-700'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className={`text-2xl font-semibold mb-3 ${
                  isLightTheme ? 'text-blue-600' : 'text-blue-400'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`mb-5 ${isLightTheme ? 'text-gray-600' : 'text-gray-300'}`}>
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className={`w-5 h-5 mr-2 ${isLightTheme ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium hover:underline ${
                        isLightTheme ? 'text-blue-600 hover:text-blue-700' : 'text-blue-400 hover:text-blue-300'
                      }`}
                    >
                      View on GitHub
                    </a>
                  </div>
                  
                  {project.deploy && (
                    <div className="flex items-center">
                      <svg className={`w-5 h-5 mr-2 ${isLightTheme ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-medium hover:underline ${
                          isLightTheme ? 'text-blue-600 hover:text-blue-700' : 'text-blue-400 hover:text-blue-300'
                        }`}
                      >
                        Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;