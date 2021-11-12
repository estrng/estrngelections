import { useState, useEffect } from "react";
import { getCities, getElection, getCandidates } from "./services/api";
import Header from "./components/Header";
import Painelheader from "./components/Painelheader";
import { order } from "./utils/order";
import ClipLoader from "react-spinners/ClipLoader";
import Election from "./components/Election";

export default function App() {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState([]);
  const [elections, setElections] = useState([]);
  const [election, setElection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [candiates, setCandidates] = useState([]);
  const [allElectionCandidate, setAllElectionCandidate] = useState([]);

  useEffect(() => {
    async function loadCities() {
      const res = await getCities();
      const orderedCities = order(res);
      setCities(orderedCities);
    }
    loadCities();

    async function loadCandidates() {
      const res = await getCandidates();
      setCandidates(res);
    }
    loadCandidates();

    async function loadElections() {
      const res = await getElection();
      setElections(res);
    }
    loadElections();
  }, []);

  /* console.log("Cidades: ", cities);
  console.log("Eleções: ", elections);
  console.log("Candidatos: ", candiates); */

  function handleCity(event) {
    event.preventDefault();
    const city = event.target.value;
    const candidateSelect = [];
    const result = [];

    const foundCity = cities.find((item) => item.id === city);

    setCity(foundCity);

    elections.map((election) => {
      if (election.cityId === city) {
        candidateSelect.push(election.candidateId);
        result.push(election);
      }
    });

    setAllElectionCandidate(candidateSelect);
    setElection(result);
  }

  return (
    <div>
      <Header>
        <h1 className="text-center font-semibold text-xl">
          React investiments
        </h1>
      </Header>
      <main className="flex flex-col justify-center items-center">
        {
          <select name="select" id="selectorHeader" onChange={handleCity}>
            <option value="">Selecione uma cidade</option>
            {cities.map((city) => {
              return (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              );
            })}
          </select>
        }
      </main>
      <Painelheader
        cityItems={city}
        numOfCondidates={allElectionCandidate.length}
      />
      {!election ? (
        "carregando!"
      ) : (
        <Election
          data={election}
          candidates={candiates}
          totalVotes={city.presence}
        />
      )}
    </div>
  );
}
