import homeborIcon from "./../assets/img/homebor-icon.png";
import cnti from "./../assets/img/cnti.png";

export const Works = () => {
  return (
    <section
      id="works"
      className="opacity-0 hidden transition-all duration-300 w-5/6 mx-auto relative after:content-[''] after:absolute after:w-0.5 after:h-full after:bg-gray-200 after:top-0 after:left-2/4"
    >
      <article className="w-6/12 p-8 relative left-0">
        <img
          src={homeborIcon}
          alt=""
          className="absolute w-10 -right-5 z-50 top-10 p-1 bg-white rounded-full shadow-md"
        />
        {/* <span className="py-2 px-2  border-gray-400 rounded-full absolute -right-2 z-50 top-10"></span> */}
        <aside className="bg-white shadow-md p-5 rounded-md">
          <h2 className="text-xl font-semibold mb-1">Plataforma Homebor</h2>
          <h3 className="text-sm font-semibold mb-1">Desarrollador Frontend - Desarrollador Backend </h3>
          <h5 className="text-sm text-slate-700 mb-4">2020 - 2023</h5>
          <p className="text-md text-justify">
            Homebor es una plataforma eficiente de alojamiento para estudiantes que agiliza su proceso comercial y, al
            mismo tiempo, mejora la experiencia para su equipo, familias anfitrionas y estudiantes. Me encargué del
            desarrollo web tanto Frontend como Backend, cada vez mejorando las tecnicas para la gestión de la
            información almacenada y una mejor experiencia para los usuarios.
          </p>
        </aside>
      </article>
      <article className="w-6/12 mb-5 p-8 relative left-2/4">
        <img src={cnti} alt="" className="absolute w-10 -left-5 z-50 top-10 p-1 bg-white rounded-full shadow-md" />
        {/* <span className="py-2 px-2 bg-gray-200 border-gray-400 rounded-full absolute -left-2 z-50 top-10"></span> */}
        <aside className="bg-white shadow-md p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-1">Centro Nacional de Tecnologías de Información</h2>
          <h3 className="text-sm font-semibold mb-1">Desarrollador</h3>
          <h5 className="text-sm text-slate-700 mb-4">2019 - 2020</h5>
          <p className="text-md text-justify">
            Formé parte del proyecto Canaima GNU/Linux, donde desempeñe tareas como: Tematizar el Instalador Calamares,
            dictar talleres para un mejor manejo de la Distribución Canaima GNU/Linux, así como la instalación del
            Sistema Operativo en las Comunidades.
          </p>
        </aside>
      </article>
    </section>
  );
};
