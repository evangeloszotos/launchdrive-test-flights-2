import { gql } from '@apollo/client';

// local
import client from '../apollo-client';

function ApolloPage({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>
          <h3>{country.name}</h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ApolloPage;

export async function getStaticProps() {
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
