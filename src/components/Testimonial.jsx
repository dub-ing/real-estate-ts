import { testimonialsData } from "../assets/assets";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
    return (
      <div
        className="container mx-auto py-4 pt-20 px-16 md:px-20 lg:px-32 my-20 w-full flex flex-col items-center justify-between"
        id="testimonials"
      >
        <div className="text-center max-w-2xl">
          <h3 className="text-2xl sm:text-4xl font-bold my-3">
            Customer{" "}
            <span className="font-light underline underline-offset-4 decoration-1 ">
              Testimonials
            </span>
          </h3>
          <p className="text-gray-500 font-light text-center max-w-80 mx-auto">
            Real Stories from Those Who Found Home with Us
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
                {testimonialsData.map((story, index) => (<TestimonialCard  key={index} story={story} />))}
        </div>
      </div>
    );
}

export default Testimonial
