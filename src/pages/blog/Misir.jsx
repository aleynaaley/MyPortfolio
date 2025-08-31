function Misir() {
  return (
    <><button
      onClick={() => window.close()}
      className="fixed top-6 left-6 bg-[#819A91] hover:bg-[#6d867e] text-white px-4 py-2 rounded-full shadow-md z-50"
    >
      Geri
    </button><div className="min-h-screen bg-white py-16 px-6 sm:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#819A91] mb-6 text-center">Antik Ülke Mısır</h1>

        <p className="text-gray-700 leading-relaxed text-lg">
          Merhaba!
          Bu yazımda, arkadaşlarımla birlikte yaptığım Mısır gezisinden bahsetmek istiyorum. 
          En başından başlayarak, gitmeyi düşünenlere fikir vermesi açısından bazı küçük ayrıntılara da yer vermeye çalışacağım.
        </p>
      </div></>
  );
}

export default Misir;
