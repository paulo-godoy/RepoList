// styles/RepositoryList.styles.ts
import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #1a1a1a;
  color: #fff;

  a {
    display: block;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;

    &:hover {
      background-color: #303030;
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }
  }
`;
