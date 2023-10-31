import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import RepositoryList from "../components/RepositoryList";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <RepositoryList />
      </main>
    </div>
  );
};

export default Home;
