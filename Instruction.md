# Make a folder 
public >> temp >> .gitkeep file

# Make a file .gitignore 
    So that the sensitive files doesn't get pushed.
    use online available gitignore generator => search for Node and create

[gitignore1](https://mrkandreev.name/snippets/gitignore-generator/)

[gitignore2](https://www.toptal.com/developers/gitignore)

# Make a file .env
    This is an environment variable file, Whenever the project is pushed in the production these variables are retreived from the system for the security purpose and not directly from the file. And these are not supposed to be public.

# Make a folder /src
    This is completely optional, just to keep it organised we create this folder in the root.
    Inside this folder create few files:
        app.js
        constants.js
        index.js

    > touch app.js constants.js index.js 

# Changes in package.json file
As javascript supports two ways to import files i.e., common and module
Add

    "type": "module"
Again whenever the server file gets modified we need to repeatedly stop & start the server.

To avoid this, we can install nodemon utility.
There are two types of installation process.

Dev Dependency: When we use during the development phase and avoid in production

    > npm i -D nodemon
    or
    > npm install --save-dev nodemon

Dependency: Want to use during production too.

    > npm i nodemon
    or
    > npm install -g nodemon

and modify package.json

    "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node index.js",
    }



# Make Folders in /src

    controllers: functionality
    db: database connections
    middlewares: codes that are needed to be run inbetween client and server
    models: for creating the database schema
    routes: for routing
    utils: for utilities e.g. file uploading, mailing, tokens, etc

    > mkdir controllers db middlewares models routes utils

# Optional
Install prettier

    > npm i -D prettier

add .prettierrc

    {
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "semi": true,
    "trailingComma": "all"
    } 

add .prettierignore

    /.vscode
    /node_modules
    ./dist

    *.env
    .env
    .env.*

