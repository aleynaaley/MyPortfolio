// App.jsx (sadece componentleri çağırıyor)
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import ContactForm from "./pages/Contact";
import Menu from "./components/Menu";
import ProjectDetail from "./pages/ProjectDetail";
import Gurcistan from "./pages/blog/Gurcistan";
import Misir from "./pages/blog/Misir";
import BosnaHersek from "./pages/blog/BosnaHersek";
import KuzeyMakedonya from "./pages/blog/KuzeyMakedonya";
import Karadag from "./pages/blog/Karadag";
import Sirbistan from "./pages/blog/Sirbistan";
import Arnavutluk from "./pages/blog/Arnavutluk";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const sectionIds = ["hero", "hakkimda", "egitim", "deneyim", "projeler", "blog"];
    const observers = sectionIds.map((id) => {
      const section = document.getElementById(id);
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (id === "hero") {
              history.replaceState(null, "", "/");
            } else {
              history.replaceState(null, "", `#${id}`);
            }
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, []);

  return (
    <>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero setShowForm={setShowForm} setShowMenu={setShowMenu} />
              <About />
              <Education />
              <Experience />
              <Projects />
              <Blog />
              <ContactForm showForm={showForm} setShowForm={setShowForm} />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />
        <Route path="/proje/:slug" element={<ProjectDetail />} />
        <Route path="/blog/Gurcistan" element={<Gurcistan />} />
        <Route path="/blog/Misir" element={<Misir />} />
        <Route path="/blog/BosnaHersek" element={<BosnaHersek />} />
        <Route path="/blog/KuzeyMakedonya" element={<KuzeyMakedonya />} />
        <Route path="/blog/Karadag" element={<Karadag />} />
        <Route path="/blog/Sirbistan" element={<Sirbistan />} />
        <Route path="/blog/Arnavutluk" element={<Arnavutluk />} />

      </Routes>
    </>
  );
}

export default App;

