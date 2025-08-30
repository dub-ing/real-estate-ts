import About from "./components/About"
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
    </div>
  )
}

export default App
