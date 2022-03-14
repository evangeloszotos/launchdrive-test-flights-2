import { gql } from "@apollo/client";

export const GET_ONE_FAKE_DOOR_TEST = gql`
  query FakeDoorTestById($testId: ID) {
    testFlight(where: { id: $testId }) {
      id
      name
    }
  }
`;

export const GET_FAKE_DOOR_TESTS = gql`
  query FakeDoorTests {
    testFlights {
      id
      name
    }
  }
`;

export const ADD_FAKE_DOOR_TEST = gql`
  mutation FakeDoorTest($data: TestFlightCreateInput!) {
    createTestFlight(data: $data) {
      id
      name
    }
  }
`;
