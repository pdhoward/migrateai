
## Strategic Machines

### AI Workflow

#### Migrating applications with embedded pipeline intelligence

This web app is structured to run a fully integrated development environment to accelerate migrations. The application will startup as a preview, providing api access to an array of functions that are fundamental to repo migration. In other words, add this app to your package.json, follow the usage instructions on this page, and when your repo opens, these superpowers will be added.

* Useage 

1. a package.json must be added to the target repo which installs this component

```javascript

{
    "name": "your repo",
    "version": "0.5.0",
    "scripts": {
      "postinstall": "sh ./postinstall.sh",
      "dev": "next dev"
    },
    "dependencies": {
      "migrate": "git+https://github.com/pdhoward/migrateai"
    }
  }

```


2. a post install bash script must be added to the target repo to copy the app from node_modules to root

3. add a .gitignore to ignore active changes in node_modules

