const Projects = ({ theme }) => {
  const isLightTheme = theme === 'light';

  const projects = [
    {
      id: 1,
      title: 'Identity Access Management',
      image: '/assets/iam.jpg',
      description:
        'Identity Access Management (IAM) is a secure web application that manages user roles, permissions, and authentication. Built using Next.js and TypeScript, it ensures that only authorized users can access specific resources, enhancing data protection and system integrity.',
      github: 'https://github.com/rajvelr75/Chat-App',
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
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white'
      }`}
      id="projects"
    >
      <h2 className="text-4xl font-bold mb-6">My Projects</h2>
      <div className={`w-20 h-1 mb-10 mx-auto ${isLightTheme ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
      <div className="w-full max-w-6xl px-8">
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div
            key={project.id}
            className={`flex flex-col lg:flex-row mb-8 p-8 rounded-lg shadow-lg transition-transform hover:scale-105 w-full max-w-3xl ${
              isLightTheme ? 'bg-gray-100 text-black' : 'bg-gray-800 text-gray-300'
            }`}
          >
            <div className="w-full lg:w-1/3 h-56 lg:h-auto mb-4 lg:mb-0 flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          
            <div className="w-full lg:w-2/3 pl-0 lg:pl-8">
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  isLightTheme ? 'text-blue-500' : 'text-blue-400'
                }`}
              >
                {project.title}
              </h3>
              <p className="text-lg mb-4">{project.description}</p>
          
              <div className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <h3 className="font-semibold flex-shrink-0">Github Link:</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 break-all lg:truncate"
                  >
                    {project.github}
                  </a>
                </div>
          
                {project.deploy && (
                  <div className="flex items-start space-x-2">
                    <h3 className="font-semibold flex-shrink-0">Deployment Link:</h3>
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 break-all lg:truncate"
                    >
                      {project.deploy}
                    </a>
                  </div>
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
