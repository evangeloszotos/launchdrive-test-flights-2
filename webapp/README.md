## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Thoughts

- We will use a subdomain for the launchdrive app wor example `app.launchdrive.io` this way `launchdrive.io` can be completley maintained externaly for example using WordPress.

## Useful Links

[`apollo client tutorial`](https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/).

[`Scrum Master Role Explained`](https://www.youtube.com/watch?v=7ZiClMDjY-w).



## Conventions

### Naming conventions

- **folder-names** use snake case
- Normal **fileNames** use camel case
- Files exporting **ReactComponents** or **Classes** use pascal case

### Component styling

We try to avoid styling via *sx* and want to use *styled* instead.
An example for how to use styled will be generated in each component created with plop. 

### Component structure

Each component has it's own directory in components.
Root components should contain several stories displaying all possible component options.
It's important, that each stories code can be copied easily.
Because of that, they shouldn't use properties but fixed values instead.

However, playground stories that use properties are not prohibited.
Just make sure there is a specific story for each concrete state. 