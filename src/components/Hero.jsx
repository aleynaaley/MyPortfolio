// src/components/Hero.jsx
import { EnvelopeIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import backgroundImage from "../assets/backg.png";

function Hero({ setShowForm, setShowMenu }) {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Menü Butonu */}
      <button
        onClick={() => setShowMenu(true)}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-white/20 transition"
        title="Menü"
      >
        <Bars3Icon className="h-9 w-9 text-[#819A91]" />
      </button>

      {/* Mail Gönder Butonu */}
      <button
        onClick={() => setShowForm(true)}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition"
        title="Mail Gönder"
      >
        <EnvelopeIcon className="h-9 w-9 text-[#819A91]" />
      </button>

      {/* Merhaba yazısı */}
      <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-lg animate-fadeSlide">
        Merhaba, ben Aleyna !
      </h1>

      {/* Aşağı Ok */}
      <div className="absolute bottom-10 animate-bounce text-white">
        <ChevronDownIcon className="h-10 w-10" />
      </div>
    </section>
  );
}

export default Hero;
