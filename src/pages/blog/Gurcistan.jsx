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
            Merhaba!
            Bu yazımda, arkadaşlarımla birlikte yaptığım Gürcistan gezisinden bahsetmek istiyorum. 
            En başından başlayarak, gitmeyi düşünenlere fikir vermesi açısından bazı küçük ayrıntılara da yer vermeye çalışacağım.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            5 Mayıs 2025 tarihinde arkadaşlarımla birlikte Gürcistan’ın başkenti Tiflis’e uçtuk. 
            Planımız; Tiflis’te 4-5 gün, ardından bir gün Mtsheta’da, son iki günü ise Batum’da geçirmekteydi. 
            Tiflis Havalimanı’na iner inmez ilk hedefimiz sim kart almaktı ve bunu hemen gerçekleştirdik.
          </p>

          {/* Ara banner fotoğraf */}
          <img
            src="/blogs/tiflis1.jpg"
            alt="Tiflis Havaalanı"
            className="w-full rounded-lg shadow-md" />

          {/* Devam paragrafları */}
          <p className="text-gray-800 text-lg leading-relaxed">
            Hepimiz 15 gün geçerli bir sim kart satın aldık. Fiyatı 22 Lari idi (1 Lari ≈ 14 TL). 
            Ardından havalimanındaki bir bankadan, bir haftalık geçerliliği olan bir Travel Card alarak otobüs ve metro gibi toplu taşıma araçlarını sınırsız
             kullanma hakkı elde ettik. Üstelik bu kartın fiyatı sadece 20 Lari.


          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Tüm seyahatimiz boyunca genellikle otobüs kullandık, fakat Bolt uygulaması (Uber benzeri bir ulaşım uygulaması) 
            da şehirde oldukça yaygın ve kullanışlıydı.
          </p>


          <p className="text-gray-800 text-lg leading-relaxed">
            Konaklama için Episode Tbilisi adlı oteli tercih ettik ve gerçekten çok memnun kaldık.
             Gitmek istediğimiz yerlere biraz uzak olsa da, şehir içi ulaşımın kolaylığı sayesinde bu bizim için bir sorun olmadı.
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
          <p className="text-gray-800 text-lg leading-relaxed">
          Gitmeden önce iyi bir araştırma yapmıştık; görmek istediğimiz yerleri, tatmak istediğimiz lezzetleri ve yapmayı planladığımız aktiviteleri not almıştık. 
          Sabah erkenden çizdiğimiz haritamız ile birlikte yola çıktık. Kahvaltımızı yaptıktan sonra biraz şehirde gezindik.
          </p>
          <img
            src="/blogs/tiflis4.jpg"
            className="w-full rounded-lg shadow-md" />
            
          <p className="text-gray-800 text-lg leading-relaxed">

            İlk olarak "Writers’ House of Georgia" (Gürcistan Yazarlar Evi)’ne gittik. Gürcistan’da, özellikle Tiflis’te müze veya bu tarz yapıların girişleri biraz belirsiz ve ürkütücü görünebilir. Hatta açık olup olmadıklarını anlamak zor olabiliyor. (Biz, apartman kapısını bir arkadaşımıza misafirliğe gidiyormuş gibi çaldık ve görevliye “Gezebilir miyiz?” diye sorduk.)
            Sanırım yapı içerisinde ücretli ve ücretsiz alanlar var, ancak biz her yeri ücretsiz gezdik. Girişte sadece bir görevli vardı ve herhangi bir ücret talep etmedi.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
          Bu konak, 1903-1905 yılları arasında David Sarajishvili tarafından inşa edilmiş. O dönemde şehirdeki kültürel hayatın önemli bir merkezi hâline gelmiş ve sık sık edebiyat ile sanat akşamlarına ev sahipliği yapmış. David’in ölümünün ardından konak bir hayırsever tarafından satın alınmış.
          Yıllar boyunca bu ev, Gürcistan’ın tarihi açısından büyük önem taşıyan pek çok olaya tanıklık etmiş. Aynı zamanda birçok ilginç ve hoş etkinliğin yanı sıra, bazı dramatik olaylara da ev sahipliği yapmış. Bunların en trajik olanı ise, ünlü şair Paolo Iashvili’nin burada intihar etmesidir.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
          2008 yılından itibaren konak, Writers’ House (Yazarlar Evi) adlı açık bir kuruma dönüştürülmüş. Bugün Gürcü kültürünü, geleneklerini ve modern dönüşümlerini temsil eden, halka açık bir kültür alanı olarak hizmet veriyor.
          </p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
           <img
            src="/blogs/tiflis5.jpg"
            className="w-full h-auto rounded-lg shadow-md object-cover"
           />
          <img
             src="/blogs/tiflis6.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
           />
          <img
           src="/blogs/tiflis7.jpg"
           className="w-full h-auto rounded-lg shadow-md object-cover"
          />
          </div>


          <p className="text-gray-800 text-lg leading-relaxed">
          Writers’ House’dan sonraki durağımız, farklı aromalı çaylar denemek amacıyla Bitadze Tea Museum oldu. Ancak maalesef gittiğimizde kapalıydı. Açıkçası, müzenin açık olup olmadığına dair hiçbir yerde net bir bilgiye ulaşamadık.
           Google haritalarda açık gözüküyordu ama kapalıydı. Sanırım belirli saatlerde veya randevu ile çalışıyor olabilir.
          Yine de çay kültürüne meraklıysanız burası mutlaka listenizde olmalı. Farklı Gürcü çaylarını deneyimlemek ve o atmosferi yaşamak ilgi çekici olurdu. Eğer siz gittiğinizde açık bulursanız, bizim yerimize de bir fincan çay tadın! ☕🙂
          </p>
          <img
           src="/blogs/tiflis8.jpg"
           className="w-full h-auto rounded-lg shadow-md object-cover"
          />

          <p className="text-gray-800 text-lg leading-relaxed">
            Gürcistan’ın en önemli sembollerinden biri olan Mother of Georgia (Kartlis Deda), Tiflis’in neredeyse her yerinden görülebilen etkileyici bir anıt. 
            Bu dev heykel, Tiflis’in 1500. kuruluş yıl dönümünü kutladığı 1958 yılında, şehre hâkim Sololaki Tepesi’nin zirvesine dikilmiş.
          </p>
          
          <p className="text-gray-800 text-lg leading-relaxed">
            Heykel, geleneksel Gürcü ulusal kıyafetleri giymiş bir kadını tasvir ediyor. Sol elinde, dostça gelenleri karşılamak için bir şarap kadehi, sağ elinde ise düşmanlara karşı hazırlıklı olduğunu simgeleyen bir kılıç tutuyor. 
            Bu güçlü sembolizm, Gürcü kültürünün hem misafirperverliğini hem de direncini yansıtıyor.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Buraya ulaşmak oldukça kolay. Rike Parkı’nın içinden binebileceğiniz bir teleferik ile hem şehri yukarıdan izleyebilir hem de kısa sürede Sololaki Tepesi’ne ulaşabilirsiniz.
          </p>

          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-8">
          <img
            src="/blogs/tiflis9.jpg"
            className="w-full h-auto object-cover"
          />
          </div>
          


        </div>
      </section></>
  );
}

export default Gürcistan;
