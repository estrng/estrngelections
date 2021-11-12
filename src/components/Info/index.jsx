import React, { useEffect, useState } from "react";

// import { Container } from './styles';

export default function Info({ candidateId, candidates }) {
  const [candidate, setCandidate] = useState([]);

  useEffect(() => {
    function loadCandidateInfo() {
      const response = candidates.find(
        (candidate) => candidate.id === candidateId
      );
      setCandidate(response);
    }

    loadCandidateInfo();
  }, []);

  return (
    <div>
      <div className="img-fluid rounded-full">
        <img
          width={50}
          height={50}
          src={
            candidate.username
              ? require(`../../img/${candidate.username}.png`).default
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/768px-DC_Comics_logo.png"
          }
          alt={candidate.name}
        />
      </div>
      <h1>{candidate.name}</h1>
    </div>
  );
}
