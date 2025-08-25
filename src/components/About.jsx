import { brand_img } from "../assets/assets";
import Button from "../ui/Button";

function About() {
  return (
    <div className="container flex flex-col items-center justify-center py-20 px-14 mx-auto md:px-20 lg:px-32 w-full overflow-hidden" id="about">
      <div className="text-center max-w-2xs">
        <h3 className="text-2xl sm:text-4xl font-bold my-2">
          About{" "}
          <span className="font-light underline underline-offset-3 decoration-1 ">
            Our Brand
          </span>
        </h3>
        <p className="text-gray-500">
          Passionate About properties, Dedicated to Your Vision
        </p>
      </div>
      <div className="my-10 flex flex-col items-center md:flex-row md:items-start gap-10 md:gap-20">
        <div>
          <img src={brand_img} alt="" className="" />
        </div>
        <div className="flex flex-col justify-evenly items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <h3 className="text-4xl font-medium text-gray-800">10+</h3>
              <p>Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-4xl font-medium text-gray-800">15+</h3>
              <p>Years of Excenllence</p>
            </div>
            <div>
              <h3 className="text-4xl font-medium text-gray-800">30+</h3>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <h3 className="text-4xl font-medium text-gray-800">25+</h3>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <div>
            <p  className="my-10 md:max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              repellat eius commodi quos, cumque minima aut excepturi? Ut
              dignissimos dolorem temporibus delectus libero qui modi assumenda,
              amet eveniet adipisci quod!
            </p>
          </div>
          <Button label="Learn more" bgColor="bg-blue-400" />
        </div>
      </div>
    </div>
  );
}

export default About;