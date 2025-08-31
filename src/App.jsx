import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Testimonial from "./components/Testimonial"

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
