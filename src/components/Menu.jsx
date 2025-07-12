// src/components/Menu.jsx
import { XMarkIcon } from "@heroicons/react/24/outline";

function Menu({ showMenu, setShowMenu }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[300px] z-50 bg-[#EEEFE0]/90 backdrop-blur-sm shadow-lg transform transition-transform duration-500 ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Kapatma Butonu */}
      <button
        onClick={() => setShowMenu(false)}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200"
      >
        <XMarkIcon className="h-6 w-6 text-gray-700" />
      </button>

      {/* Menü İçeriği */}
      <nav className="flex flex-col items-start p-8 text-[#819A91] font-semibold text-lg space-y-[60px] mt-16">
        <a href="#hakkimda" className="hover:opacity-70 transition">Hakkımda</a>
        <a href="#egitim" className="hover:opacity-70 transition">Eğitim</a>
        <a href="#deneyim" className="hover:opacity-70 transition">Deneyimler</a>
        <a href="#projeler" className="hover:opacity-70 transition">Projeler</a>
        <a href="#blog" className="hover:opacity-70 transition">Blog</a>
      </nav>
    </div>
  );
}

export default Menu;
