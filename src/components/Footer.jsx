import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#819A91] text-white py-2 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        <p className="text-lg font-semibold">İletişim</p>
        <p className="text-sm">aleyna.erkulll@gmail.com</p>

        <div className="flex gap-6 mt-2 text-2xl">
          <a href="https://github.com/aleynaaley" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-300 transition" />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-300 transition" />
          </a>
          <a href="https://medium.com/@Aleynaerkul" target="_blank" rel="noopener noreferrer">
            <FaMedium className="hover:text-gray-300 transition" />
          </a>
        </div>

        <p className="text-sm mt-4">© 2025 Aley Aley. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer;
