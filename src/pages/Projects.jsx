import homebor from "./../assets/img/homebor.png";
import homeborIcon from "./../assets/img/homebor-icon.png";
import movies from "./../assets/img/movies.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="opacity-0 hidden transition-all duration-300 w-5/6 mx-auto grid-cols-3 gap-8 mb-20"
    >
      <a
        href="https://homebor.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col p-3 rounded-2xl bg-gray-200 hover:scale-105 transition-all duration-300"
      >
        <img src={homebor} alt="Homebor" className="w-full h-60 rounded-2xl mb-3" />
        <aside className="flex items-center w-full mb-3">
          <img src={homeborIcon} alt="Homebor" className="w-12 p-2 bg-white rounded-full" />
          <h6 className="mb-0 ml-3 text-lg font-semibold">Homebor Platform</h6>
        </aside>
        <aside className="flex flex-wrap mb-0">
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3 mr-3">HTML</span>
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3 mr-3">CSS</span>
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3 mr-3">PHP</span>
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3 mr-3">JavaScript</span>
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3 mr-3">Bootstrap</span>
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3">MySQL</span>
        </aside>
      </a>

      <a
        href="#"
        // target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col p-3 rounded-2xl bg-gray-200 hover:scale-105 transition-all duration-300"
      >
        <img src={movies} alt="Homebor" className="w-full h-60 rounded-2xl mb-3" />
        <aside className="flex items-center w-full mb-3">
          <img src={homeborIcon} alt="Homebor" className="w-12 p-2 bg-white rounded-full" />
          <h6 className="mb-0 ml-3 text-lg font-semibold">Rated Movies</h6>
        </aside>
        <aside className="flex flex-wrap mb-0">
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3 mr-3">HTML</span>
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3 mr-3">CSS</span>
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3 mr-3">PHP</span>
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3 mr-3">JavaScript</span>
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3 mr-3">Laravel</span>
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3 mr-3">Bootstrap</span>
          <span className="py-1 px-3 bg-gray-300 font-semibold rounded-full mb-3">MySQL</span>
        </aside>
      </a>
    </section>
  );
};
