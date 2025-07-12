// src/pages/Contact.jsx
import { XMarkIcon } from "@heroicons/react/24/outline";

function ContactForm({ showForm, setShowForm }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[#EEEFE0]/90 backdrop-blur-sm transition-transform duration-500 ${
        showForm ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200"
      >
        <XMarkIcon className="h-6 w-6 text-gray-700" />
      </button>

      <div className="flex items-center justify-center min-h-full p-4">
        <form
          action="https://formsubmit.co/aleyna.erkulll@gmail.com"
          method="POST"
          className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-lg space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-700">Bana Mesaj Gönder</h2>
          <input
            type="text"
            name="isim"
            placeholder="Ad Soyad"
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta adresiniz"
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none"
          />
          <textarea
            name="mesaj"
            rows="5"
            placeholder="Mesajınız"
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none"
          ></textarea>
          <input type="hidden" name="_captcha" value="false" />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
