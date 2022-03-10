import { gql } from "@apollo/client";

export const GET_ONE_FAKE_DOOR_TEST = gql`
  query FakeDoorTestById($testId: ID) {
    fakeDoorTest(where: { id: $testId }) {
      id
      name
    }
  }
`;
