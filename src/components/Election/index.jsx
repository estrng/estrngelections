import React from "react";
import Info from "../Info";
import { getPercentage } from "../../utils/math";
import { numberWithDots } from "../../utils/formatter";

// import { Container } from './styles';

export default function Election({ data, candidates, totalVotes }) {
  //order by highest votes.
  const orderedCandidates = data.sort((a, b) => {
    return b.votes - a.votes;
  });

  //get percentage of votes.
  function name(votes) {
    return getPercentage(votes, totalVotes);
  }

  return (
    <div className="flex border w-auto mt-10 ml-10 mr-10 justify-around">
      {orderedCandidates.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <Info candidateId={item.candidateId} candidates={candidates} />
            <p>Votos: {numberWithDots(item.votes)}</p>
            <h3>{name(item.votes)}%</h3>
          </div>
        );
      })}
    </div>
  );
}
