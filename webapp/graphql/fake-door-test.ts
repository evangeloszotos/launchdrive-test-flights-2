import { gql } from "@apollo/client";

export const GET_ONE_FAKE_DOOR_TEST = gql`
  query FakeDoorTestById($testId: ID) {
    fakeDoorTest(where: { id: $testId }) {
      id
      name
    }
  }
`;

export const GET_FAKE_DOOR_TESTS = gql`
  query FakeDoorTests {
    fakeDoorTests {
      id
      name
    }
  }
`;

export const ADD_FAKE_DOOR_TEST = gql`
  mutation FakeDoorTest($data: FakeDoorTestCreateInput!) {
    createFakeDoorTest(data: $data) {
      id
      name
    }
  }
`;
