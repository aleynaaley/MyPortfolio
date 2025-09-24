import { useParams } from "react-router-dom";

const projectDetails = {
  yunievent: {
    name: "YuniEvent",
    imageUrl: "/projects/proje2.jpg",
    description:
      "YuniEvent projem , 2 takım arkadaşım ile birlikte üzerinde hala çalıştığımız henüz bitmemiş bir proje. Amacımız eğitim gördüğümüz Yalova Üniversitesine kalıcı ve yıllarca kullanılabilir bir mobil uygulama geliştirmek. Tüm etkinlikleri ve kulüpleri tek bir uygulama altında birleştirmeyi hedefliyoruz.",
    details: `
      Bu projede kullanıcılar Yalova Üniversitesin etkinlikleri ve detayları görüntüleyebilir ve  duyurulara katılım sağlayabilir. Flutter ile geliştirildi, veriler Firebase ile saklandı.
      Ayrıca etkinlik bildirimi için bildirim sistemi entegre edildi. Henüz bitmedi test ve deneme aşamasında.
    `,
  },
  "ecole-42-projects": {
    name: "Ecole 42 Projects",
    imageUrl: "/projects/proje5-1.jpg",
    description:
      " Ecole 42 , alışılagelmişin dışında bir öğretim sistemi olan; öğretmen , sınıf gibi kavramların olmadığı akran öğrenmesinin bulunduğu ve proje tabanlı bir okuldur. Görevler belirli bir zaman diliminde yapılmalı ve diğer öğrencilere sunulmalı . Hem sunum becerimizi hem de bildiklerimizi başkalarına anlatma becerilerimizi geliştiren bir sistem vardır. Zaman yönetimi ve belirli projelerdeki grup çalışmaları bana iş hayatına uyum sağlama becerisi kattı.  42'deki eğitim sürecim boyunca Shell scripting, algoritmalar, C dilinde sistem programlama gibi birçok konuda yoğun eğitim aldım.Peer-to-peer code review sistemi sayesinde sürekli geri bildirim aldım ve verdim. Projeler bireysel ve ekip halinde geliştirilip sistematik olarak test edildi.Burada 42 de ki eğitim sürecim boyunca yaptığım projeler yer alıyor.",
    details: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#819A91]">Libft</h3>
        <p>
          Libft adlı projede , C standart kütüphanesinin birkaç fonksiyonunu ve bazı yardımcı
          fonksiyonları yeniden yazıp kendi kütüphanemi oluşturdum. Makefile ile de derleme
          işlemlerini kolaylaştırdım. Bundan sonraki diğer projelerimde libft kütüphanemi kullandım.
        </p>

         <h3 className="text-2xl font-semibold text-[#819A91]">Printf</h3>
        <p>
          ft_printf projemde , 'printf()' fonksiyonunun birçok özelğiğini dikkate alarak kendi
          fonksiyonumu oluşturdum. Variadic fonksiyonların temellerini öğrendim ve kullandım.
        </p>
                 <h3 className="text-2xl font-semibold text-[#819A91]">GetNextLine</h3>
        <p>
          get_netx_line aslında bir fonksiyon olarak kullanılıyor. Bu fonksiyona girdi olarak verilen file
          descriptor'ı satır satır , her seferinde buffer size kadar okumayı sağlıyor.
        </p>
                 <h3 className="text-2xl font-semibold text-[#819A91]">Born2BeRoot</h3>
        <p>
          Bu projede sistem yönetimi ve server kurmak üzerine çalıştım. Sanal makine kurarak kendi
          işletim sistemimi istediğim gibi yapılandırdım. Sanal makine nasıl çalışır , vm'ler ne amaçla
          kullanılır ve avantajları , işletim sistemleri arasındaki farklar, paket yönetimleri ,güvenlik
          sistemleri nasıl çalışır ve bash komutları nelerdir gibi sorulara cevap aradım.
        </p>

                 <h3 className="text-2xl font-semibold text-[#819A91]">MiniTalk</h3>
        <p>
          Minitalk unıx ve benzeri işletim sistemlerindeki sinyalleri kullanarak geliştirdiğim basit bir
          iletişim servisi . Client- server arası mesajlaşma sistemi.
        </p>

                         <h3 className="text-2xl font-semibold text-[#819A91]">PushSwap</h3>
        <p>
          push_swap projemde, minimum sayıda ve kısıtlı aksiyonlar ile bir stack üzerinde veri
          sıralaması yaptığım basit bir sitem. Radix sort algoritmasını kullandığım karışık şekilde verilen
          argümanlarımı en kısa aksiyon ile sıralama hedeflediğim bir c programı.
        </p>

                         <h3 className="text-2xl font-semibold text-[#819A91]">SoLong</h3>
        <p>
          Minilbx grafik kütüphanesini kullanarak c dilinde 2 boyutu basit bir oyun programı so_long.
        </p>

                         <h3 className="text-2xl font-semibold text-[#819A91]">MiniShell</h3>
        <p>
          Minishell üzerinde hala çalıştığım, bash kabuğunu taklit etmeye çalıştığımız iki kişilik bir proje.
        </p>

      </div>
    ),
  },
};

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-xl">
        Proje bulunamadı.
      </div>
    );
  }

  return (
    <><button
      onClick={() => window.close()}
      className="fixed top-6 left-6 bg-[#819A91] hover:bg-[#6d867e] text-white px-4 py-2 rounded-full shadow-md z-50"
    >
      Geri
    </button><section className="min-h-screen bg-white py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <h2 className="text-3xl font-bold text-[#819A91] mb-12 text-center">
            {project.name}
          </h2>

          {/* Üst kısım: Resim + kısa açıklama */}
          <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full md:w-1/3 rounded-lg shadow-md object-cover" />
            <p className="text-gray-700 text-lg leading-relaxed md:w-2/3">
              {project.description}
            </p>
          </div>

          {/* Alt kısım: Ayrıntılar */}
          {project.details && (
            <div className="bg-[#EEEFE0] p-6 rounded-lg shadow-inner text-gray-900 text-base leading-relaxed space-y-4">
              {typeof project.details === "string" ? (
                project.details.split("\n").map((line, index) => (
                  <p key={index}>{line.trim()}</p>
                ))
              ) : (
                project.details
              )}
            </div>
          )}

        </div>
      </section></>
  );
}

export default ProjectDetail;
