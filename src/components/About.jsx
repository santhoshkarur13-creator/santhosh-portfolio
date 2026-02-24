export default function About() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Jquery",
        "React.js",
        "Redux",
        "Bootstrap",
        "Material UI",
        "uiverse.io",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python",, "Java(core)","Express.js", "Django", "REST APIs"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "Mongodb Atlas", "MySQL"],
    },
  ];

  const tools = [
    { name: "VS Code", icon: "./assets/vscode.png" },
    { name: "Firebase", icon: "./assets/firebase.png" },
    { name: "MongoDB Compass", icon: "./assets/mongodb.png" },
    { name: "Postman", icon: "./assets/postman.png" },
    { name: "Git", icon: "./assets/git.png" },
    { name: "GitHub", icon: "./assets/github.png" },
  ];

  return (
    <div id="about" className="w-full px-[12%] py-20 scroll-mt-20">
      {/* Heading */}
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo mb-16">About Me</h2>

      <div className="flex flex-col lg:flex-row items-start gap-16">
        {/* Image */}
        <div className="relative mx-auto lg:mx-0">
          <img
            src="./assets/user-image.png"
            alt="user"
            className="w-72 sm:w-80 rounded-3xl shadow-xl"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* About Text */}
          <p className="mb-10 max-w-2xl text-gray-600 dark:text-white/80">
            I am a Full Stack Developer with 2 years of experience building
            scalable and user-friendly web applications. I specialize in both
            frontend and backend technologies and enjoy creating complete
            end-to-end solutions.
          </p>

          {/* Skills */}
          <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-10">
            {skillCategories.map(({ title, skills }) => (
              <div key={title}>
                <h4 className="text-xl font-semibold mb-4">{title}</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <h4 className="mb-5 font-semibold text-gray-700 dark:text-white/80">
            Tools & Software
          </h4>
          <div className="flex flex-wrap gap-5">
            {tools.map(({ name, icon }) => (
              <div
                key={name}
                className="w-14 h-14 flex items-center justify-center rounded-lg border border-gray-300 dark:border-white/30 hover:-translate-y-1 transition-transform duration-300 cursor-pointer bg-white/10"
                title={name}
              >
                <img src={icon} alt={name} className="w-7" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}