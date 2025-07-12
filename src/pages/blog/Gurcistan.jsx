import React from "react";

function Gürcistan() {
  return (

    <><button
      onClick={() => window.close()}
      className="fixed top-6 left-6 bg-[#819A91] hover:bg-[#6d867e] text-white px-4 py-2 rounded-full shadow-md z-50"
    >
      Geri
    </button>
    <section className="min-h-screen bg-white py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Sayfa başlığı */}
          <h1 className="text-4xl font-bold text-[#819A91] text-center mb-6">
            Gürcistan'da 1 Hafta: Tiflis,Mtsheta,Batum
          </h1>

          {/* Banner görsel (sayfa başı) */}
          <img
            src="/blogs/gurcistan3.jpg"
            alt=""
            className="w-full rounded-lg shadow-md" />

          {/* Giriş paragrafları */}
          <p className="text-gray-800 text-lg leading-relaxed">
            Merhaba! Bu yazımda arkadaşlarım ile birlikte yaptığım Gürcistan
            gezimden bahsetmek istiyorum.
            En baştan ve gitmeyi düşünenlere de bazı tavsiyeler olması adına
            küçük ayrıntıları da ekleyerek ilerlemeyi düşünüyorum.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            5 Mayıs 2025 tarihinde arkadaşlarım ile birlikte Gürcistan’ın
            başkenti Tiflis’e uçtuk. Planımız Gürcistanın başkentinde 4-5 gün , bir gün Mtsheta'da 
            ,son iki gün de Batumda geçirmekti. Tiflis havaalanına iner inmez sim kart almayı
            hedefliyorduk öyle de oldu.
          </p>

          {/* Ara banner fotoğraf */}
          <img
            src="/blogs/tiflis1.jpg"
            alt="Tiflis Havaalanı"
            className="w-full rounded-lg shadow-md" />

          {/* Devam paragrafları */}
          <p className="text-gray-800 text-lg leading-relaxed">
            Hepimiz 15 günlük geçerli sim kartını aldık fiyatı 22
            Lari idi (1 Lari ≈ 14 TL). Sim kartı aldıktan sonra havaalanında bir
            bankadan bir haftalık geçerliliği olan travelcard alıp tüm hafta boyunca
            otobüs ve metroyu sınırsız kullandık. Fiyatı sadece 20 Lari.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Biz tüm seyahatimiz boyunca otobüs tercih ettik ama Bolt
            uygulaması da şehirde epey yaygın.
          </p>


          <p className="text-gray-800 text-lg leading-relaxed">
            Otel olarak biz Episode Tbilisi'yi tercih ettik ve oldukça
            memnun kaldık. Gitmek istediğimiz yerlere biraz uzak kalsa da
            şehir içi ulaşım kolay olduğu için sıkıntı yaşamadık.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
          
          <img
          src="/blogs/tiflis2.jpg"
          alt="Episode"
          className="w-full md:w-[48%] rounded-lg shadow-md"
          />
          <img
          src="/blogs/tiflis3.jpg"
          alt="Episode Tbilisi Otel"
          className="w-full md:w-[48%] rounded-lg shadow-md"
          />
          </div>

        </div>
      </section></>
  );
}

export default Gürcistan;
