Dependancies:

`npm install --save express body-parser mongoose`

Dev. Dependancies:

`npm install --save-dev nodemon concurrently`

Create a react app:

`create-react-app client`

Install dependancy:

`npm install axios`

Add the `scripts` into ./package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "client": "npm run start --prefix client",
    "server": "nodemon index.js",
    "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\"",
    "start": "node index.js"
  },
```
To run the project:

`npm run dev`