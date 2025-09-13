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
            Google haritalarda açık gözüküyordu ama kapalıydı. Sanırım belirli saatlerde veya randevu ile çalışıyor.
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
          <p className="text-gray-800 text-lg leading-relaxed">
            Bir sonraki hedefimiz Narikala Castle oldu. Narikala Kalesi’ne doğru yaptığımız güzel ama yorucu yürüyüşün ardından teleferikle de yol aldık ve neredeyse kaleye ulaşmıştık. Ancak maalesef burası da restorasyon sebebiyle kapalıydı.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Orbiri Caddesi üzerinden ilerleyerek Tbilisi Juma Mosque’a vardık. Çift mihraplı cami olarak bilinen bu Cuma Camii, 1724 yılında inşa edilmiş, 1864 yılında ise genişletilerek yeniden yapılmıştır. Bu genişletme sırasında bir mihrap daha eklenmiştir. Bu nedenle “çift mihrabı” bulunmaktadır. Tiflis’in en büyük ve tek camisi olmasıyla, önemli bir tarihi miras niteliği taşımaktadır
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <img
              src="/blogs/gurcistan10.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <img
              src="/blogs/gurcistan11.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <img
              src="/blogs/gurcistan12.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">
            Buradan geçerken önce Second Bridge of Love (Aşk Köprüsü) ve ardından Leghvtakhevi Canyon’u gördük. Sonrasında Abanotubani Bölgesi’ne geldik. Burası, Gürcistan’ın başkenti Tiflis’in sülfürik banyolarıyla ünlü antik bir bölgesidir.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Kura Nehri’nin doğu yakasında, Metehi’nin karşısında ve Narikala Kalesi’nin yakınında bulunan Abanotubani, şehrin en önemli tarihi bölgelerinden biridir. Bir efsaneye göre, İberya Kralı Vahtang Gorgasali’nin av sırasında kullandığı atmaca buradaki doğal kaplıca suyuna düşmüş ve kral bunun üzerine buraya yeni bir şehir kurulmasını emretmiştir.
          </p>
          <img
            src="/blogs/gurcistan13.jpg"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />

          <p className="text-gray-800 text-lg leading-relaxed">
            Artık daha fazla dayanamadık ve Gürcü lezzetlerini denemek için meşhur Cafe Daphe’ye geldik. Abartıldığı kadar var mı emin değilim ama gerçekten lezzetli yemekleri vardı. Benim favorim ise “Fried Nadughi” oldu. Dışı çıtır, içi sebzeli ve peynirli; taban kısmında ise yoğurtlu harika bir meze şeklindeydi.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">

            <img
              src="/blogs/tiflis10.jpg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <img
              src="/blogs/tiflis11.jpg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">
            Günü, Tiflis’te sıkça karşımıza çıkan ve mutlaka uğramak istediğimiz bir yerle bitirdik: Fabrika Hostel. Burası, Sovyetler Birliği dönemine ait eski bir dikiş fabrikasının dönüştürülmesiyle oluşturulmuş. Endüstriyel unsurların farklı tasarımlarla harmanlanması sayesinde oldukça dikkat çekici bir atmosfere sahip.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Biz konaklamak için tercih etmedik, çünkü hostelde paylaşımlı odalar ve ortak banyolar bulunuyor. Ancak Fabrika’nın avlusu, şehrin en canlı sosyal alanlarından biri. İçerisinde çeşitli kafe ve barlar, sanat stüdyoları, atölyeler, konsept mağazaları, ortak çalışma alanı, berber dükkânı ve hatta yaratıcı eğitim okulu yer alıyor.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Kafelerdeki eski eşyalar sayesinde mekâna biraz otantik bir hava katılmış. Biz de sadece bir şeyler içmek ve bu atmosferi deneyimlemek için uğradık. Gerçekten keyifli bir akşam noktası oldu.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <img
              src="/blogs/tiflis12.jpg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <img
              src="/blogs/tiflis13.jpg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">
            Diğer gün ilk durağımız Sameba Katedrali oldu. 1995-2004 yılları arasında inşa edilen bu görkemli yapı, dünyanın üçüncü en yüksek Doğu Ortodoks katedrali olmasının yanı sıra, toplam alan bakımından da dünyanın en büyük dini yapılarından biri kabul ediliyor.
            Sameba, Gürcü kilise mimarisinin farklı dönemlerine hâkim olmuş geleneksel tarzların bir sentezi niteliğinde. Ayrıca yapıda Bizans mimarisinden esinlenmiş detaylar da göze çarpıyor. Devasa kubbesi ve geniş avlusu ile Tiflis’in neredeyse her yerinden görülebilen bu katedral, şehrin simgelerinden biri hâline gelmiş.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Katedralin içinde dikkat çeken en önemli şeylerden biri, farklı dini geleneklerin ibadet şekillerine duyulan saygıyı hissetmekti. Gürcü Ortodokslarının duaları, ikonların önünde yanan mumlar, sessizce dua eden insanlar ve manevi atmosfer, burayı yalnızca bir ibadethane değil aynı zamanda derin bir ruhani deneyim alanı hâline getiriyordu. Burada bulunmak, Gürcü halkı için inancın ve kültürün ne kadar iç içe olduğunu görmek açısından çok etkileyiciydi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <img
              src="/blogs/tiflis14.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <img
              src="/blogs/tiflis15.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <img
              src="/blogs/tiflis16.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <img
              src="/blogs/tiflis17.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>


          <p className="text-gray-800 text-lg leading-relaxed">
            Nikoloz Baratashvili Köprüsü’nü geçtikten hemen sonra karşımıza şehrin en ikonik yapılarından biri çıktı: The Clock Tower (Saat Kulesi). İlginç ve eğri yapısıyla dikkat çeken bu kule, Tiflis Eski Kenti’nde, ünlü Gabriadze Tiyatrosu’nun hemen yakınında yer alıyor.Ünlü kuklacı Rezo Gabriadze tarafından tasarlanan kule, 21. yüzyılın başlarında inşa edilmiş. O günden bu yana Tiflis’in kültürel mirasının sanatsal özünü yansıtan, sevilen bir cazibe merkezi hâline gelmiş.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Saat Kulesi’nin eğik mimarisi, adeta bir masal dünyasındaymış hissfari vererek her yaştan ziyaretçiyi büyülüyor. Saat Kulesi’nin dikkat çeken yanlarından biri de her saat başı gövdesinde açılan pencerede yapılan kukla gösterisi. Önce en üstteki pencereden bir melek çıkarak çan çalıyor, sonrasında ise alttaki pencerede kadın ve erkek iki kukla belirerek tanışmalarını, evliliklerini, çocuk sahibi oluşlarını ve ölümlerini simgeleyen yaşam döngüsünü eğlenceli ve hüzünlü bir şekilde anlatılıyorlar. Tüm bu detaylar, kuleyi yalnızca bir saat kulesi olmaktan çıkarıp, Tiflis’in ruhunu yansıtan büyülü bir simgeye dönüştürüyor.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <img
              src="/blogs/tiflis19.jpg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <img
              src="/blogs/tiflis20.jpg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
          </div>
          <p className="text-gray-800 text-lg leading-relaxed">
            Saat Kulesi’nden sonra Ioane Shavteli Caddesi üzerinden gezimize devam ettik. Barış Köprüsü’nün yanından geçerek Zion Cathedral of the Dormition of Tbilisi’ye (Tiflis Meryem’in Göğe Kabulü Sioni Katedrali) uğradık. Kiliselere, Kutsal Topraklardaki belirli yerlerin adlarını verme geleneğini sürdüren Orta Çağ Gürcü anlayışının bir örneği olan Sioni Katedrali, Kudüs’teki Zion Dağı’nın adını taşıyor.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">Katedral ilk olarak 6. ve 7. yüzyıllarda inşa edilmiş. Ancak tarih boyunca pek çok kez yabancı işgalciler tarafından tahrip edilmiş ve her seferinde yeniden inşa edilerek bugünkü halini almış. Gürcistan’ın dini ve kültürel tarihinde önemli bir yeri olan bu yapı, hem mimarisi hem de taşıdığı manevi anlamla ziyaretçileri etkilemeyi başarıyor.</p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <img
              src="/blogs/tiflis21.jpg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <img
              src="/blogs/tiflis22.jpg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">Katedralin hemen yanında Tbilisi Karvasla bulunuyor. Yüzyıllar önce gezgin tüccarların konakladığı, ticaret anlaşmaları yaptığı ve yollarına devam etmeden önce mola verdiği bu yapılar, adını “gezgin grubu” anlamındaki kārvān ve “saray” anlamındaki sarāy kelimelerinden türeyen “karvasla” sözcüğünden alıyor. İpek Yolu üzerinde bulunan Tiflis’te eskiden birçok karvasla bulunurmuş ve bunların ilki de Sioni Kilisesi’nin hemen yanında inşa edilmiş.</p>

          <p className="text-gray-800 text-lg leading-relaxed">Günümüzde Tbilisi Karvasla; Tiflis Tarih Müzesi, şarap müzesi, modern sanat galerileri ve çeşitli mağazalara ev sahipliği yapan bir kültür kompleksi hâline gelmiş. Bu haliyle, geçmişin kervansaray ruhunu günümüzle harmanlayan eşsiz bir durak niteliği taşıyor. </p>
          <img
            src="/blogs/tiflis23.jpg"
            className="block mx-auto h-auto rounded-lg shadow-md object-cover"
            style={{ width: "500px" }}
          />

          <p className="text-gray-800 text-lg leading-relaxed">Bir sonraki durağımız Meidan Bazar oldu. Antikalar, geleneksel Gürcü yemekleri, yerel sanat eserleri ve meşhur Gürcü şaraplarının satıldığı bu pazar yerinde biraz alışveriş yaptık. Renkli tezgâhlar ve samimi atmosferiyle Meidan Bazar, Tiflis’in yerel kültürünü yakından hissetmemizi sağladı.</p>

          <p className="text-gray-800 text-lg leading-relaxed">Akşam olduğunda, Meidan Bazar’ın hemen arkasındaki Samghebro Caddesi üzerinde yer alan Restaurant Hide’da akşam yemeği yedik ve bu günü de keyifli bir şekilde sonlandırdık.</p>

          <img
            src="/blogs/tiflis24.jpg"
            className="block mx-auto h-auto rounded-lg shadow-md object-cover"
            style={{ width: "500px" }}
          />

          <p className="text-gray-800 text-lg leading-relaxed">Bir sonraki gün, günlük bir tura katıldık. Bu tur, bizi Tiflis’in hemen bitişiğindeki Mtskheta şehrine götürecek, oradaki birkaç tarihi yapıyı gezdirecek ve günün sonunda tekrar Tiflis’e bırakacaktı.</p>

          <p className="text-gray-800 text-lg leading-relaxed">Sabahın erken saatlerinde, Rose Revolution Meydanı’ndaki bisiklet heykelinde tur rehberimiz ve diğer tur katılımcılarıyla buluştuk. Yol boyunca tur arkadaşlarımızla tanışıp kaynaşma fırsatı bulduk.</p>

          <p className="text-gray-800 text-lg leading-relaxed">İlk durağımız Jvari Monastery oldu. Bu 6. yüzyıldan kalma manastır, Mtskheta'nın tepesinde yer alıyor ve "Kutsal Haç" anlamına geliyor. Manastırın en büyüleyici özelliği, Mtkvari ve Aragvi nehirlerinin birleştiği noktayı gören muhteşem manzarası.Bu noktadan aşağıya bakınca, iki farklı renkli suyun birleştiği yeri net bir şekilde görebiliyorsunuz - doğanın bu muhteşem manzarası gerçekten büyüleyici. Manastırın tarihi dokusunu ve bu eşsiz manzarayı izlerken zamanın nasıl geçtiğini anlamadık.</p>

          <p className="text-gray-800 text-lg leading-relaxed">Jvari'den sonra aşağı inerek Svetitskhoveli Cathedral'i ziyaret ettik. Katedralin adı, "Hayat Veren Sütun" anlamına geliyor ve İsa'nın giysisinin gömüldüğü yerin üzerine inşa edildiğine inanılıyor. Rehberimizin anlattığına göre, Svetitskhoveli Katedrali ile ilgili oldukça ilginç bir efsane var.</p>

          <p className="text-gray-800 text-lg leading-relaxed">Katedralin mimarı Arsukidze, yapıyı 1010-1029 yılları arasında inşa etmiş. Efsaneye göre Arsukidze öylesine mükemmel bir eser ortaya çıkarmış ki, bu durum bazı kişilerde kıskançlığa yol açmış. Bir rivayete göre hocası onu kıskanıp kral nezdinde kötülemiş, başka bir rivayete göre ise kral, onun bir daha böyle bir şaheser yapmasını engellemek için sağ elini kestirmiş. Katedralin kuzey duvarında yer alan bir rölyef bu hikâyeyi simgeliyor: Kesilmiş bir sağ el ve elde bir alet (keski ya da L-cetvel) tasviri var. Bu rölyefin yanında "Tanrı'nın kulu Arsukidze'nin eli, ona bağışlanma nasip olsun" yazısı bulunuyor. </p>

          <p className="text-gray-800 text-lg leading-relaxed">Katedral, yemyeşil bir bahçe ile çevrili ve bulunduğu noktadan çevredeki dağların manzarası da muhteşem görünüyor. Burada hem tarihin hem de doğanın büyüleyici atmosferinin tadını çıkardık.</p>

          <p className="text-gray-800 text-lg leading-relaxed">Svetitskhoveli Katedrali'nden sonra kasabayı, Mtskheta meydanını ve etrafındaki dükkanları gezdik.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <img
              src="/blogs/tiflis25.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <img
              src="/blogs/tiflis27.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-8">
            <img
              src="/blogs/tiflis26.jpg"
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">Tur ile birlikte son durağımız Mtskheta ile Tiflis arasında bulunan Chronicle of Georgia (Gürcistan Kronikleri) anıtı idi.</p>

          <p className="text-gray-800 text-lg leading-relaxed">Bu etkileyici yapı, ünlü heykeltıraş Zurab Tsereteli tarafından 1985 yılında yapılmaya başlanmış ancak hiçbir zaman tam olarak tamamlanamamış bir eserdir. 16 adet ve 30-35 metre yüksekliğindeki sütunlar, büyük bir merdiven takımının tepesinde yer alıyor ve şehrin kuzey bölümünü farklı yönlerden gözlemleyebileceğiniz muhteşem bir manzara sunuyor. Sütunların üst kısımlarında Gürcistan tarihinden önemli sahneler, alt kısımlarında ise İsa'nın yaşamından hikayeler tasvir edilmiş. </p>

          <p className="text-gray-800 text-lg leading-relaxed">Chronicle of Georgia ziyaretimizin ardından turumuza son verdik. Yine bisiklet heykelinin bulunduğu noktada tur arkadaşlarımızla vedalaştık ve gezimize kaldığımız yerden devam etmek üzere ayrıldık.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <img
              src="/blogs/tiflis28.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <img
              src="/blogs/tiflis29.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">Bisiklet heykelinin orada turdan ayrıldıktan sonra günün geri kalan kısmında, Gürcistan'a gelmeden önce yaptığımız araştırmalar ve aldığımız tavsiyeler sonucunda, birçok kaynakta farklı ülkelerin kökenli olduğu belirtilen Chimney Cake'i (trdelník) denemek için Ice Cream Ge'ye gittik.</p>

          <p className="text-gray-800 text-lg leading-relaxed">Bu mekanı özellikle seçmemizin bir nedeni vardı: Ben tarçını hiç sevmem ve yemem. Bu tatlının hamuru pişirildikten sonra şeker ve tarçınlı bir karışıma bulanıyor. Gittiğimiz birçok işletmeye tarçınsız yapabilir misiniz diye sordum ama hiçbiri kabul etmedi. Ancak buradaki çalışanlar çok kibar ve naziktiler, özel isteğimi karşıladılar. Hem tatlı çok tazeydi hem de gerçekten lezzetliydi.</p>

          <img
            src="/blogs/tiflis30.jpg"
            className="block mx-auto h-auto rounded-lg shadow-md object-cover"
            style={{ width: "350px" }}
          />

          <p className="text-gray-800 text-lg leading-relaxed">Chimney Cake deneyiminin ardından hızlıca toparlanıp Dry Bridge Market'e gittik. Burası bir bit pazarı ve gerçekten çok güzel şeyler vardı! Özellikle fincan takımları, tavla takımları, eski takılar, eski madeni paralar ve rozetler, antika kameralar gibi birçok güzel objeler sergiliydi.</p>

          <p className="text-gray-800 text-lg leading-relaxed">Pazarda dolaşırken sanki bir hazine avına çıkmış gibi hissettik. Her tezgahta farklı hikayeler barındıran eski eşyalar, koleksiyonculara hitap eden nadir parçalar ve nostaljik objeler bulunuyordu. Tavsiyem buraya daha erken bir saatte gelmeniz.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <img
              src="/blogs/tiflis31.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <img
              src="/blogs/tiflis32.jpg"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Yazı */}
          <p className="text-gray-800 text-lg leading-relaxed">
            Dry Bridge'i gezdikten sonra acıktık ve bir Azeri restoranı bulduk: Sahaf Sufresi.
            Açıkçası günlerce khinkali ve khachapuri yemiştik — evet gerçekten güzellerdi ama
            artık biraz daha ev yemeği tadında, sıvı yemekler yemek istedik.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Bu restoranda domuz eti yoktu, bu yüzden çok rahattık. Çünkü birçok işletmede
            khinkali çeşitleri peynir, patates ve etli olarak sunuluyor; etli olanlar da dana
            ve domuz etli olarak ikiye ayrılıyor. Domuz eti de bulunduğu için biz güvenlik
            açısından dana etli khinkali denememiştik. Eğer siz de bu konuda dikkatli
            oluyorsanız, bu restoran tam size göre. Çorbaları da gerçekten çok lezzetliydi.
            Eğer Gürcistan'da Türk yemeklerini özlediyseniz buraya mutlaka uğrayın ev yemeği
            tadında sıcacık yemekler bulacaksınız.
          </p>

          <div className="flex justify-center items-center gap-6 my-10">
            <img
              src="/blogs/tiflis33.jpg"
                className="w-80 h-80 md:w-88 md:h-88 rounded-lg shadow-md object-cover"
            />
            <img
              src="/blogs/tiflis34.jpg"
                 className="w-80 h-80 md:w-88 md:h-88 rounded-lg shadow-md object-cover"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">Yemekten sonra biraz daha şehirde gezindik, küçük çaplı alışverişler yaptık ve sonunda otele geri döndük. Böylece Jvari Monastery, Svetitskhoveli Cathedral ve Chronicle of Georgia ziyaretleriyle başlayan, Chimney Cake denemesi ve Dry Bridge Market keşfiyle devam eden, Azeri mutfağından lezzetlerle son bulan dolu dolu bir günü tamamlamış olduk.</p>

          <video
            src="/blogs/tiflis35.mp4"
            autoPlay
            muted
            loop
            className="w-80 mx-auto h-auto rounded-lg shadow-md my-6"

          >
            Tarayıcınız video etiketini desteklemiyor.
          </video>

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

export default Gürcistan;
