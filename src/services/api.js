import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export async function getCities() {
  const { data } = await api.get("/cities");
  return data;
}

//get candidates.
export async function getCandidates() {
  const { data } = await api.get("/candidates");

  return data;
}

//get election.
export async function getElection() {
  const { data } = await api.get("/election");

  const election = data;

  return election;
}

export async function getElectionByCity(cityId) {
  const { data } = await api.get(`/election?cityId=${cityId}`);

  return data;
}

export async function getCandidatesById(candidateId) {
  const { data } = await api.get(`/candidates/${candidateId}`);

  return data;
}
