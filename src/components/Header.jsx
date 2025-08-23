import Button from "../ui/Button"
import Navbar from "./Navbar"

function Header() {
    return (
      <div
        className="min-h-screen flex items-center w-full overflow-hidden bg-hero"
        id="home"
      >
        <Navbar />
        <div className="mx-auto flex flex-col py-4 px-6 gap-10 md:px-20  lg:px-32 justify-between items-center">
          <h3 className="text-5xl sm:text-6xl md:text-7xl max-w-3xl text-center font-semibold text-white inline-block">
            Explore homes that fit your dreams
          </h3>
          <div className="flex gap-5">
            <a href="#project"><Button label="Projects" /></a>
            <a href="#contact"><Button label="Contact us" bgColor="bg-blue-400" /></a>
          </div>
        </div>
      </div>
    );
}

export default Header
