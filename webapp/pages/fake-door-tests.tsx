import { gql, useApolloClient, useQuery } from "@apollo/client";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import client from "../apollo-client";
import { GET_FAKE_DOOR_TESTS } from "../graphql/fake-door-test";
import { GET_USERS } from "../graphql/user";

// const gql = (...a: unknown[]) => a;
// const usersFragment = gql`
//   users {
//     id
//     name
//     email
//   }
// `;

// const fakeDoorTestsFragment = gql`
//   fakeDoorTests {
//     id
//     name
//   }
// `;

// const QUERY = gql`
// query Stuff {
//     ${usersFragment}
//     ${fakeDoorTestsFragment}
//   }
// `;

export default function Users(props): JSX.Element {
  const client = useApolloClient();
  const [users, setUsers] = useState(props.users);
  const { data } = useQuery(GET_FAKE_DOOR_TESTS);

  return (
    <div>
      <Button
        onClick={() => {
          (async () => {
            console.log("Update");
            const {
              data: { users },
            } = await client.query({ query: GET_USERS });

            console.log(users);
            setUsers(users);
          })();
        }}
      >
        Fetch Users
      </Button>
      <Button
        onClick={() => {
          (async () => {
            const {
              data: { users },
            } = await client.query({ query: GET_USERS });

            console.log(users);
            setUsers(users);
          })();
        }}
      >
        Add Test
      </Button>
      <h1> List of all companies shown here.</h1>
      <Stack sx={{ marginLeft: 2 }}>
        {data?.users?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </Stack>
      <h1> List of all fakedoortests shown here.</h1>
      <Stack sx={{ marginLeft: 2 }}>
        {data?.fakeDoorTests?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </Stack>
    </div>
  );
}

export async function getStaticProps() {
  const {
    data: { users },
  } = await client.query({
    query: GET_USERS,
  });

  return {
    props: {
      users,
    },
  };
}
