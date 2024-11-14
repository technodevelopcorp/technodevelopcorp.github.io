# Welcome to the TechnoDevelop app

## Running the application locally

To install the dependencies and run the application locally, follow these steps:

1. To run the application consistently, open the `vite.config.js` file and comment out the 'base' key defined in the `defineConfig` function.
2. In the terminal, run the following commands,

```console
npm install
npm run dev
```

3. A link should pop-up in the terminal that you can navigate to on your browser.
   > > WARNING: When commiting code, remember to uncomment the 'base' key mentioned in the first step.

## How does the application build

This application is hosted on [GitHub Pages](https://pages.github.com/). A couple of jobs are setup in GitHub Actions to build and deploy the application. The built code is commited to a new branch called `gh-pages` which GitHub Pages then hosts. If you navigate to `.github>workflows>deploy.yml` in the project, `on.push.branches` and `deploy.runs-on` is the branch that the `gh-pages` branch builds from. So if you want to target a new branch to build off of, you need to make changes to these two sections of the configuration file.

There are a couple of issues that can occur, them being the GitHub Pages might not be targetting the `gh-pages` branch, HTTPS might be disabled or you might need to re-enter the custom domain. To fix these issues you will need to navigate to the [configuration page](https://github.com/technodevelopcorp/technodevelopcorp.github.io/settings/pages), under `Build and deployment > Source`, select `Deploy from Branch` and under `Build and deployment > Branch`, select `gh-pages` and `/root`. Make sure the `Custom Domain` is set to `technodevelop.com`. To ensure that the website is running under the HTTPS protocol, on the same page ensure that `Enforce HTTPS` is checked.
