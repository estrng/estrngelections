import React from "react";
import { numberWithDots } from "../../utils/formatter";

export default function Painelheader({ cityItems, numOfCondidates }) {
  const { name, presence, votingPopulation, absence } = cityItems;

  return (
    <>
      {!cityItems ? (
        <h1>Carregando...</h1>
      ) : (
        <div className="flex border w-auto mt-10 ml-10 mr-10 justify-around">
          <h1 className="font-semibold text-xl">Eleição em: {name}</h1>
          <div className="flex justify-between w-1/2 p-2">
            <p className="text-gray-600">
              Total de eleitores:{" "}
              {votingPopulation
                ? numberWithDots(votingPopulation)
                : "Aguardando..."}
            </p>
            <p className="text-gray-600">
              Abstenção: {absence ? numberWithDots(absence) : "Aguardando..."}
            </p>
            <p className="text-gray-600">
              Presença: {!presence ? "Aguardando..." : numberWithDots(presence)}
            </p>
            <h1>
              {numOfCondidates ? numOfCondidates : "Sem dados"} Candidatos
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
