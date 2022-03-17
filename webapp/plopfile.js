module.exports = function (plop) {
  plop.setGenerator('component', {
    description: "Create a new React component with it's stories and tests.",
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{name}}/index.ts',
        templateFile: 'plop-templates/component/index.hbs',
      },
      {
        type: 'add',
        path: 'components/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component/component.hbs',
      },
      {
        type: 'add',
        path: 'components/{{name}}/{{name}}.stories.tsx',
        templateFile: 'plop-templates/component/stories.hbs',
      },
      {
        type: 'add',
        path: 'components/{{name}}/{{name}}.test.ts',
        templateFile: 'plop-templates/component/tests.hbs',
      },
    ],
  });
};
