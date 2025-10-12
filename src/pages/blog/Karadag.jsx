function Karadag() {
  return (
    <><button
      onClick={() => window.close()}
      className="fixed top-6 left-6 bg-[#819A91] hover:bg-[#6d867e] text-white px-4 py-2 rounded-full shadow-md z-50"
    >
      Geri
    </button>
      <section className="min-h-screen bg-white py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-[#819A91] text-center mb-6">Günübirlik Karadağ </h1>
          {/* Banner görsel (sayfa başı) */}
          <img
            src="/blogs_2/karadag.jpeg"
            className="w-full rounded-lg shadow-md" />

          <br></br>
          <p className="text-gray-800 text-lg leading-relaxed">
            Merhaba! Bu yazımda, Balkan turum sırasında günübirlik olarak gezdiğim Karadağ’dan bahsedeceğim.
             Balkanların en güzel ve etkileyici ülkelerinden biri olan Karadağ, Adriyatik kıyıları, tarihi şehirleri ve doğal 
             güzellikleriyle gerçekten büyüleyici bir ülke. Ben de bu tur kapsamında bir günümü Karadağ’a ayırarak birkaç şehri
             keşfetme fırsatı buldum.
          </p>

          <video
            src="/blogs_2/karadag/k1.mov"
            autoPlay
            muted
            loop
            className="w-80 mx-auto h-auto rounded-lg shadow-md my-6"
          >
            Tarayıcınız video etiketini desteklemiyor.
          </video>

         
          <p className="text-gray-800 text-lg leading-relaxed">İlk durağım Kotor oldu. Adriyatik’in incisi olarak bilinen bu şehir,
             UNESCO Dünya Mirası Listesi’nde yer alıyor. Orta Çağ’dan kalma dar sokakları, taş yapıları ve surlarıyla adeta zamanda
              yolculuk yapıyormuş hissi veriyor. Şehre vardığımda ilk olarak küçük ama tarihi açıdan önemli yapılardan biri olan 
              Saint Luke’s Church’ü gezdim. 12. yüzyılda inşa edilen bu kilise, sade görünümüne rağmen bölge tarihini yansıtan 
              önemli detaylara sahip.</p>

          
          <img
              src="/blogs_2/karadag/k2.jpeg"
              className="w-full rounded-lg shadow-md"
          />

          <p className="text-gray-800 text-lg leading-relaxed">Kotor oldukça küçük bir şehir olduğu için yürüyerek gezmek gayet kolaydı. Tek engelleyici nokta ise, benim gittiğim tarihte yağmur yağıyor olmasıydı. Neyse ki ince ince yağıyordu, bu yüzden çok da rahatsız edici değildi. 
            Hatta şehre ayrı bir atmosfer kattığını söyleyebilirim.</p>

          <video
            src="/blogs_2/karadag/k3.mov"
            autoPlay
            muted
            loop
            className="w-80 mx-auto h-auto rounded-lg shadow-md my-6"
          >
            Tarayıcınız video etiketini desteklemiyor.
          </video>


          <p className="text-gray-800 text-lg leading-relaxed">Saint Luke’s Church’ü gezdikten sonra biraz acıktık ve daha 
            önceden araştırıp not aldığımız Pizzeria Pronto’ya uğradık. İnternette epey güzel yorumlar okumuştuk ve tavsiyeler 
            almıştık. Ancak çok fazla vakit kaybetmemek için oturup yemek yerine, hazır satılan dilim pizzalardan aldık. Belki 
            de bu yüzden pizzalar biraz soğuktu ve tadı beklentimizi karşılamadı. Kötü değildi, ama çok özel ya da unutulmaz bir 
            lezzet de değildi.</p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">

            <img
              src="/blogs_2/karadag/k4.jpeg"
              alt="Episode"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <img
              src="/blogs_2/karadag/k5.jpeg"
              alt="Episode Tbilisi Otel"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed"></p>

          <p className="text-gray-800 text-lg leading-relaxed"></p>

          <p className="text-gray-800 text-lg leading-relaxed"></p>

          <p className="text-gray-800 text-lg leading-relaxed"></p>

          <p className="text-gray-800 text-lg leading-relaxed"></p>

          <p className="text-gray-800 text-lg leading-relaxed"></p>

          <p className="text-gray-800 text-lg leading-relaxed"></p>

          <p className="text-gray-800 text-lg leading-relaxed"></p>

          <p className="text-gray-800 text-lg leading-relaxed"></p>

          <p className="text-gray-800 text-lg leading-relaxed"></p>

          <p className="text-gray-800 text-lg leading-relaxed"></p>

        </div>
        </section></>
  );
}

export default Karadag;
