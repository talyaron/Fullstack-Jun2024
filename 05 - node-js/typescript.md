# Creating Typescript project

## Create a new project
Create relevant folder.

```npm init --y```  this will create a ```package.json``` file

## Install Typescript
```npm i -D typescript ts-node nodemon @types/node```

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



## Create a src and public folders
Create a src folder in the root folder
create a new file index.ts in the src folder


## Add dev script to package.json
```json
"scripts": {
    "dev": "nodemon src/server.ts"
  }
```

## Add Express
To install express run the following commands

```npm i express```

```npm i -D @types/express```

## Create server file
create server.ts file and set the following code:
```typescript
import express from 'express'
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Add mongoose
```npm i mongoose```


