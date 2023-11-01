import Nav from "./sections/Nav";
import MainPresentation from "./sections/MainPresentation";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Logo from "./components/Logo";
function App() {
  return (
    <main>
      <Nav />
      <Logo />
      <section>
        <MainPresentation />
      </section>
      <section className="bg-black pt-28">
        <Skills />
      </section>
      <section id="projects" className="bg-black pt-28 overflow-hidden">
        <Projects />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
