import { Link } from "react-router-dom";

const mediumBlogs = [
  {
    title: "Shell Nasıl Çalışır?",
    imageUrl: "/blogs/medium1.jpg",
    link: "https://medium.com/@Aleynaerkul/shell-9fe0ad022dde",
  },
  {
    title: "Dining Philosophers Problem",
    imageUrl: "/blogs/medium2.jpg",
    link: "https://medium.com/@Aleynaerkul/dining-philosophers-problem-1fbaa1719f48",
  },
  {
    title: "Makefile Nedir, Naıl Kullanılır?",
    imageUrl: "/blogs/medium3.jpg",
    link: "https://medium.com/@Aleynaerkul/makefile-nedir-nas%C4%B1l-kullan%C4%B1l%C4%B1r-6c296e74bf91",
  },
];

const geziBlogs = [
  {
    title: "Gürcistan",
    imageUrl: "/blogs/gurcistan2.jpg",
    link: "/blog/Gurcistan",
  },
  {
    title: "Mısır",
    imageUrl: "/blogs/misir5.jpg",
    link: "/blog/Misir",
  },
];

function Blog() {
  return (
    <section id="blog" className="min-h-screen bg-white py-16 px-6 sm:px-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Yazılarım</h2>

      {/* Medium Yazıları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {mediumBlogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold text-center px-4">{blog.title}</h3>
            </div>
          </a>
        ))}
      </div>

      {/* Gezi Blogları Başlık */}
      <h3 className="text-2xl font-bold text-[#819A91] mb-8 text-center">Gezi Yazılarım</h3>

      {/* Gezi Yazıları */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {geziBlogs.map((blog, index) => (
          <Link
            key={index}
            to={blog.link}
            target="_blank"
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold text-center px-4">{blog.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog;
