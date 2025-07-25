// src/components/About.jsx
import profileImg from "../assets/pp.jpg"; // kendi fotoğrafını assets klasörüne ekle (örnek: profile.jpg)

function About() {
  return (
    <section id="hakkimda" className="min-h-screen bg-white py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profil Fotoğrafı */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Profil"
            className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-[#819A91]"
          />
        </div>

        {/* Yazı Bölümü */}
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Hakkımda</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
             Merhaba! Ben bilgisayar mühendisliği 4. sınıf öğrencisiyim. Teknolojiye olan ilgim, yalnızca kod yazmakla sınırlı değil; aynı zamanda öğrenmeyi, öğrendiklerimi paylaşmayı ve farklı alanları keşfetmeyi de çok seviyorum. Meraklı bir yapıya sahibim. Gerçekten her şeyi merak ederim. Yeni şeyler öğrenmek, farklı konular üzerine araştırmalar yapmak ve bu bilgileri çevremle paylaşmak beni hem besliyor hem de motive ediyor. Tek bir alana sıkışmaktan ziyade farklı disiplinleri deneyimlemeye, her alanda kendimi geliştirmeye çalışıyorum. 
              <br /><br />
              Bulunduğum ortama kolayca uyum sağlayabilir, gerektiğinde kendime alan açabilirim. İnsanlarla etkileşim kurmayı, birlikte üretmeyi ve fikir alışverişinde bulunmayı çok değerli buluyorum. Yalnızca teknik anlamda değil, sosyal ve kültürel olarak da kendimi zenginleştirmeye çalışıyorum. Seyahat etmeyi, yeni kültürler tanımayı ve müzikle uğraşmayı çok seviyorum. Farklı enstrümanlara ilgim var; mızıka, okarina, piyano ve ukulele gibi enstrümanlarla pratik yapıyorum. Hangi işi yapıyor olursam olayım, elimden gelenin en iyisini yapmak temel motivasyonum. Öğrenmek, üretmek ve paylaşmak benim için sadece bir süreç değil; aynı zamanda bir yaşam biçimi.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
