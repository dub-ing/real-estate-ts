import { star_icon } from "../assets/assets"

function TestimonialCard({story}) {
    const {name, title, image, alt, rating, text} = story
    return (
      <div className="max-w-[340px] flex flex-col items-center justify-between border-0 shadow-lg rounded-2xl text-center px-8 py-12">
        <img
          src={image}
          alt={alt}
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h3 class='text-xl text-gray-700 font-medium'>{name}</h3>
        <p class='text-gray-500 mb-4 text-sm'>{title}</p>
        <span class="flex justify-center gap-1 text-red-500 mb-4">
          {Array.from({ length: rating }, (item, index) => (
            <img src={star_icon} alt="rating icon" key={index} />
          ))}
        </span>
        <div className="">
          <p class="text-gray-600">{text}</p>
        </div>
      </div>
    );
}

export default TestimonialCard
