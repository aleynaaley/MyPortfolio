const educations = [
  {
    school: "Ecole 42",
    degree: "",
    period: "2023-2024",
    description:
      "Ecole 42, öğretmen ve sınıf kavramlarının olmadığı, akran öğrenmesi ve proje tabanlı eğitimle zaman yönetimi ve grup çalışmasını geliştiren yenilikçi bir okul",
  },
  {
    school: "Yalova Üniversitesi",
    degree: "Bilgisayar Mühendisliği",
    period: "2021 - halen",
    description:
      "Lisans eğitimimde yazılım geliştirme, algoritmalar ve yapay zeka konularında yoğunlaştım.",
  },
  {
    school: "Emine Ahmet Yeni Proje İmam Hatip Lisesi",
    degree: "",
    period: "2017-2021",
    description:
      "Lise eğitimim boyunca fen ve matematik ağırlıklı eğitim aldım.Uluslararası biyoloji sempozyumuna projem ile katıldım.",
  },
];

function Education() {
  return (
    <section
      id="egitim"
      className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6 sm:px-12 relative"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center dark:text-white">
        Eğitim
      </h2>
      <div className="max-w-4xl mx-auto relative ">
        {/* Timeline çizgisi */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#819A91]" />
        <div className="space-y-20">
      {educations.map((edu, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
          className={`relative flex flex-col md:flex-row md:items-center md:justify-between`}
          >
      {/* Nokta */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#819A91] border-4 border-white z-20" />

      {/* Eğer soldaysa kutu solda, boş alan sağda */}
        {isLeft ? (
         <>
          <div className="bg-[#EEEFE0] p-6 rounded-lg shadow-md max-w-md w-full md:mr-8 md:text-right"
               style={{ boxShadow: "0 4px 12px rgba(129,154,145,0.3)" }}>
            <h3 className="text-xl font-semibold text-[#819A91]">{edu.school}</h3>
            <p className="italic text-gray-600">{edu.degree}</p>
            <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
            <p className="text-gray-700 leading-relaxed">{edu.description}</p>
          </div>
          <div className="hidden md:block max-w-md w-full"></div>
          </>
          ) : (
          <>
          <div className="hidden md:block max-w-md w-full"></div>
          <div className="bg-[#EEEFE0] p-6 rounded-lg shadow-md max-w-md w-full md:ml-8 md:text-left"
               style={{ boxShadow: "0 4px 12px rgba(129,154,145,0.3)" }}>
            <h3 className="text-xl font-semibold text-[#819A91]">{edu.school}</h3>
            <p className="italic text-gray-600">{edu.degree}</p>
            <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
            <p className="text-gray-700 leading-relaxed">{edu.description}</p>
          </div>
          </>
        )}
      </div>
    );
  })}

        </div>
      </div>
    </section>
  );
}

export default Education;