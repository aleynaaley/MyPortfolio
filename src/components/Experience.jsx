function Experience() {
  const experience = {
    title: "Mobil Uygulama Eğitmenliği",
    company: "T3 Vakfı / Deneyap Atölyesi",
    period: "Temmuz 2024 - Ağustos 2024",
    description: "Deneyap atölyelerinde 1,5 ay boyunca orta okul seviyesindeki öğrencilere Mobil Uygulama eğitmenliği yaptım. Bu eğitmenlik bana ; araştırma , sunum becerileri , mobil uygulama geliştirme süreçleri gibi beceriler kattı."
  };

  return (
    <section id="deneyim" className="bg-white py-8 px-6 sm:px-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Deneyimler</h2>
      
      <div className="max-w-3xl mx-auto bg-[#EEEFE0] p-8 rounded-lg shadow-md" style={{boxShadow: "0 4px 12px rgba(129,154,145,0.3)"}}>
        <h3 className="text-2xl font-semibold text-[#819A91] mb-1">{experience.title}</h3>
        <p className="italic text-gray-600 mb-2">{experience.company} | {experience.period}</p>
        <p className="text-gray-900 leading-relaxed">{experience.description}</p>
      </div>
    </section>
  );
}

export default Experience;
