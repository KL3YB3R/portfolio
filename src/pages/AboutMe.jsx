import programmerImage from "./../assets/img/programador-web.jpg";
import { Languages } from "../utils/languages";

export const AboutMe = () => {
  return (
    <main id="aboutme" className="opacity-100 transition-all duration-300 mb-20">
      {/* ABOUT ME SECTION */}
      <section className="w-11/12 rounded mx-auto flex p-5">
        <article className="w-6/12 p-5">
          <h5 className="text-3xl font-bold text-center">About me</h5>
          <p className="text-xl indent-10 mb-2 text-justify leading-8 mt-8">
            Cursé estudios en la Universidad Nacional Experimental de la Gran Caracas (UNEXCA), en Venezuela, obteniendo
            el título de Ingeniero en Informática en el año 2020. Actualmente cuento con 4 años de experiencia en el
            conocimiento de diversas áreas de programación, principalmente en el Desarrollo Web, cuyo principal objetivo
            es brindar una solucion rápida y eficiente.
          </p>
          <p className="text-xl indent-10 text-justify leading-8">
            Mi mayor logro es trabajar de la mano con el cliente, haciendolo partícipe de un proceso acción-actor, donde
            formará parte de un equipo creador que dará forma a la concreción de sus ideas.
          </p>
        </article>
        <article className="w-6/12 p-5">
          <h5 className="text-3xl font-bold text-center">Languages and Dev Tools</h5>
          <aside className="grid text-center align-baseline w-11/12 mx-auto mt-8 grid-cols-5 gap-2">
            {Languages.map((lang, i) => (
              <aside key={i} className="flex flex-col justify-center align-middle">
                {/* <span className={`bg-[url()] w-20`}></span> */}
                <img
                  src={lang.image}
                  alt=""
                  className="w-14 h-4/4 mx-auto rounded-full p-1 shadow-md mb-2 cursor-pointer"
                />
                <p className="w-full text-md font-semibold">{lang.name}</p>
              </aside>
            ))}
          </aside>
        </article>
      </section>
    </main>
  );
};

{
  /* <section className="rounded w-4/5 mx-auto flex p-5 bg-stone-100 mb-28 shadow-md">
  <img src={programmerImage} alt="About me" className="w-2/5 rounded" />
  <article className="w-3/5 ml-5 flex flex-col justify-center">
    <p className="text-xl indent-10 mb-10 leading-8">
      Cursé estudios en la Universidad Nacional Experimental de la Gran Caracas (UNEXCA), en Venezuela, obteniendo el
      título de Ingeniero en Informática en el año 2020. Actualmente cuento con 4 años de experiencia en el conocimiento
      de diversas áreas de programación, principalmente en el Desarrollo Web, cuyo principal objetivo es brindar una
      solucion rápida y eficiente.
    </p>
    <p className="text-xl indent-10 leading-8">
      Mi mayor logro es trabajar de la mano con el cliente, haciendolo partícipe de un proceso acción-actor, donde
      formará parte de un equipo creador que dará forma a la concreción de sus ideas.
    </p>
  </article>
</section>;

{
  /* SKILLS SECTION 
}
<section className="w-4/5 mx-auto">
  <h3 className="text-4xl font-bold">Languages and Dev Tools</h3>
  <article className="grid text-center align-baseline w-11/12 mx-auto mt-20 grid-cols-5 gap-2">
    {Languages.map((lang, i) => (
      <aside key={i} className="flex flex-col justify-center align-middle">
        {/* <span className={`bg-[url()] w-20`}></span> }
        <img src={lang.image} alt="" className="w-16 h-4/4 mx-auto rounded-full p-1 shadow-md mb-2 cursor-pointer" />
        <p className="w-full text-lg font-semibold">{lang.name}</p>
      </aside>
    ))}
  </article>
</section>; */
}
