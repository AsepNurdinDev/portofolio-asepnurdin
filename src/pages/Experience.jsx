const Experience = () => {
  const experiences = [
    {
      title: "Web Developer at Acode",
      company: "Acode Inc.",
      duration: "Jan 2024 ",
      description: "Building web applications using modern JavaScript frameworks and technologies such as React, Node.js, and Express.",
    },
    {
      title: "Front-End Developer Intern",
      company: "Tech Solutions",
      duration: "Jun 2024 ",
      description: "Worked as an intern to design responsive websites and implement UI features using HTML, CSS, and JavaScript.",
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      duration: "Jan 2023",
      description: "Developed various web applications for clients, including e-commerce platforms, blogs, and business websites.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Experience</h2>
          <p className="text-lg mx-auto max-w-3xl">
            Below are some of the professional experiences I have gained in my career so far.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
              <p className="text-lg mb-2 text-gray-400">{experience.company}</p>
              <p className="text-lg mb-4 text-gray-500">{experience.duration}</p>
              <p className="text-lg">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
