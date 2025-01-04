const fs = require("node:fs");
const vm = require("node:vm");
const requirejs = require("requirejs");
const express = require("express");

global.define = requirejs.define;

const code = fs.readFileSync("./out/index.js", { encoding: "utf-8" });
const script = new vm.Script(code);
script.runInThisContext();

const handler = requirejs("index").default;
const instance = express().use((req, res) => {
  handler(req, res);
});

const PORT = 8123;
instance.listen(PORT, () => {
  console.log("listening on ", PORT);
});
