// import profileImage from "./../assets/img/foto-kleyber.jpg";

export const BannerSection = () => {
  return (
    <section className="flex justify-center bg-no-repeat bg-cover bg-opacity-5 h-128 bg-banner">
      <article className="flex w-4/5 h-5/6 my-auto ">
        {/* <img src={profileImage} alt="Kleyber" className="w-56 h-56 rounded-full my-auto" /> */}
        <aside className="flex flex-col justify-center ml-6">
          <h2 className="text-7xl font-bold text-white uppercase">Kleyber Infante</h2>
          <h4 className="text-2xl font-semibold text-white mt-2">Ingeniero en Informática</h4>
          <div className="flex mt-5">
            <button className="w-32 bg-blue-700 px-5 py-2 text-white rounded mr-4 hover:bg-blue-600 transition-all duration-300">
              <span></span> Ver CV
            </button>
            <button className="w-32 bg-yellow-700 px-5 py-2 text-white rounded hover:bg-yellow-600 transition-all duration-300">
              <span></span> Contáctame
            </button>
          </div>
        </aside>
      </article>
    </section>
  );
};
