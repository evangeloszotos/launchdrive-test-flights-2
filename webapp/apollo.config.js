module.exports = {
  client: {
    includes: ["./graphql/*.ts"],
    service: {
      name: "LaunchDrive",
      url: "http://localhost:1337/api/graphql",
    },
  },
};
