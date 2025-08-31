import { logo_dark } from "../assets/assets";
import Button from "../ui/Button";

function Footer() {
  return (
    <div
      class="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="footer"
    >
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div class="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={logo_dark} alt="logo dark themed" />
          <p class="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            quas aliquam sint inventore deleniti eveniet consequuntur mollitia
            eum libero tenetur?
          </p>
        </div>
        <div class="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 class="text-white text-lg font-bold mb-4">Company</h3>
          <ul class="flex flex-col gap-2 text-gray-400">
            <li class="hover:text-white">
              <a href="#home">Home</a>
            </li>
            <li class="hover:text-white">
              <a href="#about">About us</a>
            </li>
            <li class="hover:text-white">
              <a href="#contact">Contact us</a>
            </li>
            <li class="hover:text-white">
              <a href="#privacy">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/3">
          <h3 class="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p class="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to yout inbox weekly.
          </p>
          <div class='flex gap-2'>
            <input type="email" name="email" placeholder="Enter your email" class='p-2 rounded bg-gray-800 text-gray-400 border-0 border-t-gray-700 focus:outline-none w-full md:w-auto' />
            <Button label='Subscribe' bgColor='bg-blue-400'/>
          </div>
        </div>
      </div>
      <div class='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2024 Dubbing. All Right Reserved
      </div>
    </div>
  );
}

export default Footer;
