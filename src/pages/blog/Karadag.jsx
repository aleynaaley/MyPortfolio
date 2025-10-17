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

         
          <p className="text-gray-800 text-lg leading-relaxed">İlk durağım Kotor oldu. "Adriyatik'in İncisi" olarak bilinen bu şehir, UNESCO Dünya Mirası Listesi'nde yer alıyor. Orta Çağ'dan kalma dar sokakları, taş yapıları ve surlarıyla adeta zamanda yolculuk yapıyormuş hissi veriyor. Şehre vardığımda ilk olarak, meydanda tüm heybetiyle yükselen Aziz Nikola Kilisesi (St. Nicholas Church) dikkatimi çekti ve içeri girdim. Burası, Kotor'un en büyük ve en önemli Ortodoks kilisesi. 20. yüzyılın başlarında inşa edilmiş ve denizcilerin koruyucu azizi olan Aziz Nikola'ya adanmış. İki büyük çan kulesiyle göğe uzanan bu yapı, dışarıdan sade görünse de içeri adım attığınızda sizi zengin ikonları ve gümüş hazineleriyle dolu görkemli bir atmosferle karşılıyor.</p>

          
          <img
              src="/blogs_2/karadag/k2.jpeg"
              className="w-full rounded-lg shadow-md"
          />

          <p className="text-gray-800 text-lg leading-relaxed">Kotor oldukça küçük bir şehir olduğu için gezmek oldukça kolaydı. Tek kötü nokta ise, benim gittiğim anda yağan yağmurdu. Neyse ki ince ince yağıyordu ve rahatsız edici değildi. Hatta şehrin taş binalarına ayrı bir atmosfer kattığını bile söyleyebilirim</p>

          <video
            src="/blogs_2/karadag/k3.mov"
            autoPlay
            muted
            loop
            className="w-80 mx-auto h-auto rounded-lg shadow-md my-6"
          >
            Tarayıcınız video etiketini desteklemiyor.
          </video>


          <p className="text-gray-800 text-lg leading-relaxed">Aziz Nikola Kilisesi'nin manevi havasından sonra biraz acıktığımızı fark ettik ve daha önceden araştırıp not aldığımız Pizzeria Pronto’ya uğradık. İnternette epey güzel yorumlar okumuştuk ve tavsiyeler almıştık. Ancak çok fazla vakit kaybetmemek için oturup yemek yerine, hazır satılan dilim pizzalardan aldık. Belki de bu yüzden pizzalar biraz soğuktu ve tadı beklentimizi karşılamadı. Kötü değildi, ama çok özel ya da unutulmaz bir lezzet de değildi.</p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">

            <img
              src="/blogs_2/karadag/k4.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <img
              src="/blogs_2/karadag/k5.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
          </div>


          <p className="text-gray-800 text-lg leading-relaxed">Yemek molasından hemen sonra, yağmurun parlattığı daracık bir sokaktan geçerek Aziz Klara Kilisesi'ne (Church of St. Clara) ulaştık. Burası, Aziz Nikola'nın Ortodoks görkeminden çok farklı, daha saklı kalmış bir Katolik hazinesi gibiydi. Bir Fransisken manastırının parçası olan bu kilise, içeri girer girmez insanı büyüleyen inanılmaz güzellikteki barok mermer mihrabıyla ünlü. Detaylı oymaları ve sanatsal işçiliğiyle mihrap, adeta göz kamaştırıyordu. İlk gezdiğimiz kilisenin aksine burası daha küçük, daha süslü ve sanatsal bir atmosfere sahipti. Sanki şehrin içinde saklı bir sanat galerisi keşfetmiş gibi hissettim.</p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">

            <img
              src="/blogs_2/karadag/k7.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <img
              src="/blogs_2/karadag/k8.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">Kotor'un sadece kiliseleri ve tarihi yapıları değil, daracık, taş döşeli sokakları da kendine hayran bırakıyor. Bu sokaklar, sadece geçmişin izlerini taşımakla kalmıyor, aynı zamanda günümüzün Karadağlılarının renkli ruhlarını yansıtan sanat eserleriyle de doluydu. Her köşe başında, tarihi taş duvarların üzerinde beliren canlı graffitiler ve sokak resimleri, şehre modern bir dokunuş katıyordu. Sanatçıların şehrin ruhunu kendi yorumlarıyla yansıttığı bu eserler, adeta her adımda farklı bir hikaye fısıldıyordu. Ben de bu anları ölümsüzleştirmek adına birkaç fotoğraf çektim.</p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">

            <img
              src="/blogs_2/karadag/k9.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <img
              src="/blogs_2/karadag/k10.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">Gerçekten de Kotor'un sokakları, hem tarihin hem de modern sanatın iç içe geçtiği eşsiz bir atmosfer sunuyordu.</p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">

            <img
              src="/blogs_2/karadag/k11.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <img
              src="/blogs_2/karadag/k16.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">Bu kadar yürümenin ve şehri keşfetmenin üzerine tatlı bir molayı hak ettiğimizi düşündük. Sanat dolu sokaklarda gezinirken karşımıza çıkan Moritz Eis, bu mola için mükemmel bir durak oldu. Burası aslında tam bir dondurmacıdan ziyade, sorbeleriyle öne çıkan bir yer. Ben de tercihimi sorbeden yana kullandım ve lime-nane ile mangolu çeşitlerini denedim. Ve tek kelimeyle: bayıldım!</p>

          <p className="text-gray-800 text-lg leading-relaxed">Genel olarak Balkan ülkelerinde, özellikle Bosna ve Sırbistan'da tattığım dondurmalar hep farklı ve başarılı olmuştur. Ama bu sorbe, hepsini bambaşka bir seviyeye taşıdı. Hayatımda yediğim en ama en iyi sorbeydi diyebilirim. O ferahlatıcı lime ve nanenin, tropik mangonun tatlılığıyla birleşimi damağımda unutulmaz bir iz bıraktı. Eğer yolunuz Kotor'a düşerse, bu lezzeti tatmadan şehirden ayrılmamanızı şiddetle tavsiye ederim!</p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">

            <img
              src="/blogs_2/karadag/k6.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <img
              src="/blogs_2/karadag/k12.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">Tatlı molamızın ardından enerjimizi toplamış bir şekilde, Kotor'un meşhur surlarına doğru yöneldik. Şehrin tamamını bir kale gibi çevreleyen bu heybetli surlar, adeta Kotor'un koruyucu kolları gibiydi. Surların üzerine çıkıp, daracık patikalar boyunca yürüyerek şehri farklı bir açıdan keşfetme imkanınız var. Biz de bu fırsatı kaçırmak istemedik. Deniz tarafındaki girişlerden birini kullanarak surlara tırmandık.</p>

          <p className="text-gray-800 text-lg leading-relaxed">Yukarıdan manzara gerçekten nefes kesiciydi. Kırmızı kiremitli çatıların, daracık labirent gibi sokakların ve tarihi kilise kulelerinin oluşturduğu o eşsiz dokuyu bir de kuş bakışı görmek, şehre olan hayranlığımızı ikiye katladı. Adriyatik'in sakin sularına yaslanmış bu Orta Çağ masalına tepeden bakarak veda etmek, Kotor'daki günümüzü sonlandırmak için en güzel yoldu.</p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">

            <img
              src="/blogs_2/karadag/k13.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <img
              src="/blogs_2/karadag/k14.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">Kotor'un tarihi atmosferini ve lezzetlerini arkamızda bırakarak, Karadağ'ın bir başka popüler sahil kenti olan Budva'ya doğru yola çıktık. Günübirlik turumuzun kısıtlı zamanı nedeniyle Budva'nın hareketli merkezine girmek yerine, yol üzerinde Karadağ'ın belki de en çok fotoğraflanan, en ikonik manzaralarından birine tanıklık etmek için durakladık: Sveti Stefan Adası.</p>

          <p className="text-gray-800 text-lg leading-relaxed">Kıyıdan uzanan dar bir yolla karaya bağlı olan bu ada, kırmızı çatıları ve taş evleriyle adeta bir masal diyarından fırlamış gibiydi. Uzaktan bile olsa o kadar büyüleyiciydi ki, insan bir süre gözlerini alamıyor. Aslında burası, 15. yüzyılda korsan saldırılarına karşı korunmak için inşa edilmiş surlarla çevrili bir balıkçı köyüymüş. Zamanla evrilmiş ve bugün dünyanın en lüks ve özel otel resortlarından birine, Aman Sveti Stefan'a ev sahipliği yapıyor. Adanın bu özel statüsü nedeniyle, eğer otel misafiri değilseniz adanın içine girmenize izin verilmiyor. Biz de bu kartpostallık manzarayı hafızamıza kazıyarak ve bol bol fotoğraf çekerek Karadağ'daki son anlarımızın tadını çıkardık.</p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">

            <img
              src="/blogs_2/karadag/k15.jpeg"
              className="w-full md:w-[48%] rounded-lg shadow-md"
            />
            <video
            src="/blogs_2/karadag/k16.mov"
            autoPlay
            muted
            loop
            className="w-81 mx-auto h-auto rounded-lg shadow-md my-6"
            />
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">Böylece Karadağ'daki günübirlik maceramızın sonuna gelmiş olduk. Kotor'un tarihi sokaklarında kaybolmak, o harika sorbeyi tatmak ve Sveti Stefan'ın uzaktan görünen masalsı silüeti... Kısacık bir güne bile ne kadar çok güzellik sığdırılabileceğini görmek harikaydı. Karadağ, kesinlikle daha uzun bir zaman ayrılıp her köşesini keşfetmeyi hak eden, etkileyici bir ülke.</p>
          <p className="text-gray-800 text-lg leading-relaxed mb-12">Umarım bu yazı, Karadağ'ı ziyaret etmeyi düşünenler için ilham verici olmuştur. Bir sonraki seyahatimde görüşmek üzere!</p>
        </div>
        </section></>
  );
}

export default Karadag;
