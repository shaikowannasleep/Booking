import express from 'express';
import { readdirSync } from 'fs';

const express = require("express");

const app = express();

readdirSync("./routes").map((r) => 
app.use("/api", require(`./routes/${r}`)));

app.listen(8000, () => 
console.log(`Sever is running on port 8000`));
