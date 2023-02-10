const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`);

app.use(bodyParser.json());

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {

    console.log(" $$$$$$\                            $$\                                                         $$\                     ");
    console.log("$$  __$$\                           \__|                                                        \__|                    ");
    console.log("$$ /  $$ | $$$$$$\   $$$$$$\        $$\  $$$$$$$\        $$$$$$\  $$\   $$\ $$$$$$$\  $$$$$$$\  $$\ $$$$$$$\   $$$$$$\  ");
    console.log("$$$$$$$$ |$$  __$$\ $$  __$$\       $$ |$$  _____|      $$  __$$\ $$ |  $$ |$$  __$$\ $$  __$$\ $$ |$$  __$$\ $$  __$$\ ");
    console.log("$$  __$$ |$$ /  $$ |$$ /  $$ |      $$ |\$$$$$$\        $$ |  \__|$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |$$ |  $$ |$$ /  $$ |");
    console.log("$$ |  $$ |$$ |  $$ |$$ |  $$ |      $$ | \____$$\       $$ |      $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |$$ |  $$ |$$ |  $$ |");
    console.log("$$ |  $$ |$$$$$$$  |$$$$$$$  |      $$ |$$$$$$$  |      $$ |      \$$$$$$  |$$ |  $$ |$$ |  $$ |$$ |$$ |  $$ |\$$$$$$$ |");
    console.log("\__|  \__|$$  ____/ $$  ____/       \__|\_______/       \__|       \______/ \__|  \__|\__|  \__|\__|\__|  \__| \____$$ |");
    console.log("          $$ |      $$ |                                                                                      $$\   $$ |");
    console.log("          $$ |      $$ |                                                                                      \$$$$$$  |");
    console.log("          \__|      \__|                                                                                       \______/ ");


    console.log(`app running on port ${PORT}`);
});