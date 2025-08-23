import { useEffect, useState } from "react";
import { cross_icon, logo, menu_icon } from "../assets/assets";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(()=> {
    if(isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])
  return (
    <div className="absolute top-0 left-0 w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={logo} alt="logo icon" />
        <ul className="hidden md:flex gap-7 text-white">
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          src={menu_icon}
          className="md:hidden cursor-pointer"
          width={24}
          height={24}
          alt="menu toggle icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
        <div className={`md:hidden ${isMenuOpen ? 'w-full fixed' : 'w-0 h-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className="flex justify-end p-6" >
            <img
              src={cross_icon}
              width={24}
              height={24}
              className="cursor-pointer"
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg">
            <li className="rounded-full inline-block px-4 py-2" onClick={()=> setIsMenuOpen(false)}>
              <a href="#home">Home</a>
            </li>
            <li className="rounded-full inline-block px-4 py-2" onClick={()=> setIsMenuOpen(false)}>
              <a href="#about">About</a>
            </li>
            <li className="rounded-full inline-block px-4 py-2" onClick={()=> setIsMenuOpen(false)}>
              <a href="#project">Project</a>
            </li>
            <li className="rounded-full inline-block px-4 py-2" onClick={()=> setIsMenuOpen(false)}>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Navbar;
