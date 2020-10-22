# Front office of the "Aném per feina" project

## Technologies of choice

- [Vue](https://vuejs.org/)
- [SASS](https://sass-lang.com/) using [BEMIT Architecture](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)
- [Nuxt](https://nuxtjs.org/)


## Running the development environment

After cloning the project for the first time you have to install the dependencies, to do it, run this command:

```bash
yarn
```

> **Tip:** This step is going to be necessary every time that a dependency is updated by some contributos, so if you just updated your local copy of the project with the latest changes and something is not working in your machine, it could mean that you're mising some dependency, run the `yarn` command and try again. This will probably fix the problem!

The development experience come in two flavours **running the nuxt app** or **running the storybook environment** choose wisely depending on what are you going to develop.

### Running the Nuxt app

Use this if you are going to **integrate a feature** into the existing app, to do it, run the following command:

```bash
yarn dev
```

### Running the storybook environemnt

Choose this option if you are going to develop a **isolated component**, of coure you will integrate the component later into the Nuxt app, but for developing the component run storybook:

```bash
yarn storybook
```

And once the component is ready, you can run the Nuxt app to integrate it.
