import axios from "axios";

const API_URL = "https://api.github.com";

export const getRepositories = async (username: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    throw new Error("Não foi possível buscar os repositórios.");
  }
};
