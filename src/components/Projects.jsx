import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

function Projects() {
  const projects = [
    { id: 1, name: "Approval System", imageUrl: "/projects/proje1.jpg", link: "https://github.com/aleynaaley/approvalSystem/tree/main" },
    { id: 2, name: "YuniEvent", imageUrl: "/projects/proje2.jpg", link: "!" },
    { id: 3, name: "Board Game Archive", imageUrl: "/projects/proje3.jpg", link: "https://github.com/aleynaaley/BoardGameArchive" },
    { id: 4, name: "Smart Home Automation", imageUrl: "/projects/proje4.jpg", link: "https://github.com/aleynaaley/SmartHomeAutomation" },
    { id: 5, name: "Ecole 42 Projects", imageUrl: "/projects/proje5.jpg", link: "!" },
    { id: 6, name: "PusulaAI", imageUrl: "/projects/proje6.png", link: "https://github.com/PusulaAI77" },
    { id: 7, name: "Çay Molası Extension", imageUrl: "/projects/proje7.png", link: "https://github.com/aleynaaley/cay_molasi_extension" },
    { id: 8, name: "Roll Dice App", imageUrl: "/projects/proje8.png", link: "https://github.com/aleynaaley/Roll_Dice_App" },
    { id: 9, name: "Ocarina Converter", imageUrl: "/projects/proje9.png", link: "https://ocarinaconverter.netlify.app/" },
  ];

  return (
    <section id="projeler" className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Projeler</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        // Responsive breakpoints
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="px-4"
      >
        {projects.map(({ id, name, imageUrl, link }) => {
          const isExternal = link !== "!";
          const href = isExternal ? link : "#";

          return (
            <SwiperSlide key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-lg overflow-hidden shadow-lg group block"
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Projects;