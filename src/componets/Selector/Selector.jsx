import React from "react";

export const Selector = ({ label, options, changeValue }) => {
  return (
    <div className="">
      <label className="">{label}</label>
      <select
        onChange={(e) => {
          changeValue(e);
        }}
        className=""
      >
        <option value={-1}>Seleccionar</option>
        {options && Array.isArray(options) && options.map((option, index) => (
          <option key={index} value={option.ID}>
            {option.nombre.charAt(0).toUpperCase() + option.nombre.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
