const Projects = () => {
  const projectList = [
    {
      title: "News Website",
      description: "A news website that contains news about a region, such as history, geography, natural beauty.",
      image: "/src/assets/img/honjewara.jpg", // Ganti dengan gambar proyek Anda
      // link: "https://www.example.com/project1"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase skills and projects, built with React and TailwindCSS.",
      image: "/src/assets/img/portofolio.jpg", // Ganti dengan gambar proyek Anda
      // link: "https://www.example.com/project2"
    },
    {
      title: "Student Data Management",
      description: "Application to load student data who will register at a school institution, the application is built using pure PHP technology and tailwindscss to beautify the appearance.",
      image: "/src/assets/img/sman7garut.jpg", // Ganti dengan gambar proyek Anda
      // link: "https://www.example.com/project3"
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-lg mx-auto max-w-3xl">
            Here are some of the projects I have worked on. Click on each project for more details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 text-lg font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
