import PropTypes from "prop-types";
// import { useState } from "react";
import "./../../../helpers/navigation";

export const HeaderItems = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <a
          key={option}
          href={`${option.replace(/ /g, "").toLowerCase()}`}
          className={`text-lg px-5 py-5 option-navigate border-b-4 ${
            option.replace(/ /g, "").toLowerCase() === "aboutme" ? "border-zinc-950" : "border-white"
          }`}
          id="item-link"
          // className={`text-white px-5 py-3 hover:font-bold transition-all duration-300 ${
          //   optionActive ? "border-b-4 border-sky-500" : "border-b-4 border-zinc-950"
          // }`}
          // onClick={() => onActiveOption(option)}
        >
          {option}
        </a>
      ))}
    </>
  );
};

HeaderItems.propTypes = {
  options: PropTypes.array.isRequired,
};
