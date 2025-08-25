import { useEffect, useState } from "react";
import { left_arrow, projectsData, right_arrow } from "../assets/assets";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCards, setDisplayCards] = useState(1);

  function handleNext() {
    setCurrentIndex((curr) => (curr + 1) % projectsData.length);
  }
  function handlePrevious() {
    setCurrentIndex((curr) => (curr === 0 ? projectsData.length : curr - 1));
  }

  useEffect(() => {
    const updateDisplayCards = () => {
      if (window.innerWidth >= 1024) {
        setDisplayCards(projectsData.length);
      } else {
        setDisplayCards(1);
      }
    };
    updateDisplayCards();
    window.addEventListener("resize", updateDisplayCards);
    return () => window.removeEventListener("resize", updateDisplayCards);
  }, [setDisplayCards]);
  return (
    <div className="container mx-auto py-4 pt-20 px-16 md:px-20 lg:px-32 my-20 w-full flex flex-col items-center justify-between">
      <div className="text-center max-w-2xl">
        <h3 className="text-2xl sm:text-4xl font-bold my-3">
          Projects{" "}
          <span className="font-light underline underline-offset-4 decoration-1 ">
            Completed
          </span>
        </h3>
        <p className="text-gray-500 font-light text-center max-w-80 mx-auto">
          Crafting Spaces, Building Legacies-Explore Our Portfolio
        </p>
      </div>
      <div className="my-10 flex flex-col justify-between">
        <div className="flex justify-end mb-5">
          <button
            className="p-3 rounded bg-gray-200 mr-2"
            aria-label="Previous Project"
            onClick={handlePrevious}
          >
            <img src={left_arrow} alt="previous button icon" />
          </button>
          <button
            className="p-3 rounded bg-gray-200 mr-2"
            aria-label="Next Project"
            onClick={handleNext}
          >
            <img src={right_arrow} alt="next button icon" />
          </button>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-8 transition-transform  duration-500 ease-in-out" style={{transform: `translateX(-${(currentIndex * 100) / displayCards}%)`}}>
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
