function ProjectCard({ project }) {
  const { title, price, location, image } = project;
  return (
    <div className="relative shrink-0 w-full sm:w-1/4">
      <img src={image} alt={title} className="w-full h-auto mb-14" />
      <div className="absolute left-0 right-0 bottom-5 flex justify-center">
        <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-500 text-sm">{price} <span>|</span> {location}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
