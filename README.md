# Meerkats Javascript Styleguide

It's based very closely on Airbnb but for Node and Angular, not React.

## Getting Started

Install this into your project with `eslint` and you should be good to go

```bash
npm install --save-dev eslint-config-meerkats
```

Add an `.eslintrc` file to the root of your project that looks like

```json
{
  "extends": "meerkats",
  // Customize as needed!
  // "rules": {
  // }
}
```

## Upgrading from 1.0.4
You will need to remove from your project's packages.json:
```
"eslint-plugin-shadow-exception": "^1.1.2",
```

This is no longer required as it's built into eslint (and causes an npm install to fail)

## Author

This repo is created and maintained by Meerkats The Brand Leadership Company in Subiaco, Western Australia
