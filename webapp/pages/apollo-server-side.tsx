import Head from "next/head";
import { gql } from "@apollo/client";

// local
import styles from "../styles/Home.module.css";
import client from "../apollo-client";
import Countries from "../components/Countries";

function ApolloPage({ countries }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SSR</h1>
        <Countries countries={countries} />
      </main>
    </div>
  );
}

export default ApolloPage;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
