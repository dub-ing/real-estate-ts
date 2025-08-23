import logo from "../assets/assets";
function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div>
        <img src={logo} width={200} height={200} alt="" />
        <ul>
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
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
