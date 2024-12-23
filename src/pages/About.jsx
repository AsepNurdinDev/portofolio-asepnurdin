const About = () => {
  const biodata = {
    name: "     Asep Nurdin",
    birthDate: "Desember 28, 2005",
    education: "Computer Science, Ganesha University of Education",
    address: "Bali, Indonesia",
  };

  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "TailwindCSS", "PHP", "Codeigniter", "LARAVEL"];
  const experiences = [
    {
      title: "Web Developer",
      company: "Acode Inc.",
      duration: "2024",
    },
    {
      title: "Frontend Intern",
      company: "Tech Solutions",
      duration: "2024",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* About Me Title */}
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p  className="text-lg  mx-auto max-w-3xl">I am a passionate web developer focused on building user-friendly and responsive websites. With a deep interest in coding and problem-solving, I am always striving to learn new technologies and improve my skills.</p>

        {/* Photo */}
        <div className="relative mx-auto w-80 h-80 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-6 mt-7 ">
          <img
            src="/src/assets/img/DSC_3883.JPG"
            alt="Asep Nurdin"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Biodata */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 text-left justify-center flex center">
          
          <ul className="space-y-2 text-gray-300">
          <h3 className="text-xl mb-4 font-bold">Biodata</h3>
            <li>
              <span className="font-bold text-white">Name :</span> {biodata.name}
            </li>
            <li>
              <span className="font-bold text-white">Date of Birth:</span>{" "}
              {biodata.birthDate}
            </li>
            <li>
              <span className="font-bold text-white">Education:</span>{" "}
              {biodata.education}
            </li>
            <li>
              <span className="font-bold text-white">Address:</span>{" "}
              {biodata.address}
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap justify-center space-x-2 space-y-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          <ul className="space-y-4">
            {experiences.map((experience, index) => (
              <li key={index} className="text-gray-300">
                <span className="font-bold text-white">{experience.title}</span> -{" "}
                {experience.company} ({experience.duration})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

