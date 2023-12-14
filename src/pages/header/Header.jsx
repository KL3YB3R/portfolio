import { HeaderItems } from "./components/HeaderItems";

export const Header = () => {
  const optionsHeader = ["About me", "Projects", "Works"];

  return (
    <header className="header border-b-2 mb-16">
      {/* LOGO */}
      <div>
        <img src="" alt="" />
      </div>
      {/* OPTIONS CONTAINER */}
      <nav className="flex justify-center align-middle">
        <HeaderItems options={optionsHeader} />
      </nav>
    </header>
  );
};
