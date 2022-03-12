import { gql, useApolloClient, useQuery, useMutation } from "@apollo/client";
import { Button, Stack, TextField, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { ADD_FAKE_DOOR_TEST } from "../graphql/fake-door-test";
import { FETCH_POSTS, UPDATE_POST } from "../graphql/others";
import { FetchPosts } from "../graphql/types/FetchPosts";
import { UpdatePostVariables } from "../graphql/types/UpdatePost";

interface Tag {
  id: string;
  name: string;
}

interface Template {
  id: string;
  name: string;
  description: string;
  tags: Tag[];
}

interface FakeDoor {
  id: string;
  name: string;
  variants: Variant[];
}

interface Variant {
  id: string;
  name: string;
  template: Template;
}

const fakeDoor: FakeDoor = {
  id: "abc",
  variants: [{ id: "abc", name: "Variant1" }],
};

export default function Users(props): JSX.Element {
  const { data }: { data?: FetchPosts } = useQuery(FETCH_POSTS, {
    fetchPolicy: "no-cache",
  });
  const [updatePost] = useMutation<UpdatePostVariables>(UPDATE_POST, {
    refetchQueries: [FETCH_POSTS],
  });

  return (
    <Stack>
      <h1>Posts</h1>
      <Stack sx={{ marginLeft: 2 }}>
        {data?.posts?.map((post) => (
          <EditItem
            post={post}
            key={post.id}
            initValue={post.name}
            viewsCount={post.viewsCount === null ? undefined : post.viewsCount}
            onUpdate={({ value }) => {
              console.log(post.id, value);
              const variables: UpdatePostVariables = {
                id: post.id,
                data: {
                  name: value,
                  viewsCount: post.viewsCount + 1,
                  comments: {
                    create: [{ name: "Some Fancy Comment" }],
                  },
                },
              };
              updatePost({ variables });
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export function EditItem({
  initValue = "",
  viewsCount = 0,
  post = {},
  onUpdate = (data: any) => {},
}): JSX.Element {
  const [value, setValue] = useState(initValue);

  return (
    <Grid container>
      <TextField value={value} onChange={(e) => setValue(e.target.value)} />
      <Typography variant="body1">Views: {viewsCount}</Typography>

      <Button variant="outlined" onClick={() => onUpdate({ value })}>
        Update
      </Button>

      {JSON.stringify(post)}
    </Grid>
  );
}

// export async function getStaticProps() {
//   const value = await client.query({
//     query: GET_USERS,
//   });

//   const users = value?.data?.users;

//   return {
//     props: {
//       users: users ? users : null,
//     },
//   };
// }

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
