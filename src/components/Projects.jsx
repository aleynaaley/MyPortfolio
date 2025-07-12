function Projects() {
  const projects = [
    { id: 1, name: "Approval System", imageUrl: "/projects/proje1.jpg", link: "https://github.com/aleynaaley/approvalSystem/tree/main" },
    { id: 2, name: "YuniEvent", imageUrl: "/projects/proje2.jpg", link: "!" },
    { id: 3, name: "Board Game Archive", imageUrl: "/projects/proje3.jpg", link: "https://github.com/aleynaaley/BoardGameArchive" },
    { id: 4, name: "Smart Home Automation", imageUrl: "/projects/proje4.jpg", link: "https://github.com/aleynaaley/SmartHomeAutomation" },
    { id: 5, name: "Ecole 42 Projects", imageUrl: "/projects/proje5.jpg", link: "!" },
    { id: 6, name: "TokenDil", imageUrl: "/projects/proje6.png", link: "https://github.com/TokenDil" },
  ];

  const toSlug = (name) =>
    name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  return (
    <section id="projeler" className="min-h-screen bg-white py-16 px-6 sm:px-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Projeler</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map(({ id, name, imageUrl, link }) => {
          const isExternal = link !== "!";
          // Eğer özel detay sayfası için link yoksa, kendi sitenizdeki detay sayfasına yönlendir
          const href = isExternal ? link : `/proje/${toSlug(name)}`;

          return (
            <a
              key={id}
              href={href}
              target="_blank"  // yeni sekme açar
              rel="noopener noreferrer"
              className="relative rounded-lg overflow-hidden shadow-lg group"
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-lg font-semibold px-2 text-center">{name}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
