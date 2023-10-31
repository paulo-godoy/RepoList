// pages/index.tsx
import React, { useEffect, useState } from "react";
import { getRepositories } from "../utils/api";
import { List, ListItem } from "../styles/RepositoryList.styles";

const RepositoryList = () => {
  const [repositories, setRepositories] = useState<any[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const data = await getRepositories("paulo-godoy");
        setRepositories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div>
      <h1>Lista de Repositórios do GitHub</h1>
      <List>
        {repositories.map((repo) => (
          <ListItem key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RepositoryList;
