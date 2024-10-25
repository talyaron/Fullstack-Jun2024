# Creating Typescript project

## Create a new project
Create relevant folder.

```npm init --y```  this will create a package.json file

## Install Typescript
```npm i -D typescript tsc ts-node nodemon @types/node```

## Create a tsconfig.json file
create a new file tsconfig.json in the root folder

```json
{
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "outDir": "./dist",
      "rootDir": "./src",
      "strict": true,
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "resolveJsonModule": true,
      "sourceMap": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "**/*.spec.ts"]
  }
```



## Create a src folder
Create a src folder in the root folder
create a new file index.ts in the src folder


## Add dev script to package.json
```json
"scripts": {
    "dev": "nodemon src/server.ts"
  }
```

