import React from "react";

// import { Container } from './styles';

export default function Selector({ options, onSelection }) {
  console.log("cities: ", options);
  return (
    <select className="border-2 border-black rounded">
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
