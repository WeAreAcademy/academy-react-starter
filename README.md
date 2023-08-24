# Simplified CRA (Create-React-App) starter

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's technical curriculum for **The Mark**. All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>

This project was created using [Create React App](https://create-react-app.dev/)

Extra features added:

-   Add CI with GitHub Actions
-   Add custom eslint config
-   Prettier
-   TypeScript
-   Removed unneccessary logo images
-   Removed unnecessary web-vitals
-   Added an example extra module and unit test (greet.ts)
-   Added more scripts to package.json

```
    "test": "react-scripts test --watchAll=false",
    "test:watch": "react-scripts test",
    "format": "prettier --write src",
    "format:check": "prettier --check src",
    "lint": "eslint src",
    "type-check": "tsc --noEmit"
```

### What's the jest / axios config in package.json?

A workaround to jest incompatibilities with axios now that the latter is packaged as ESM.

```json
"jest": {
    "moduleNameMapper": {
      "axios": "axios/dist/node/axios.cjs"
    }
  }
```

[Read more here](https://stackoverflow.com/a/74297004/669686)

## Learn more about Create-React-App

You can learn more in the [Create React App documentation](https://create-react-app.dev/).

To learn React, check out the [React documentation](https://reactjs.org/) or the [new docs (in beta)](https://beta.reactjs.org/)
