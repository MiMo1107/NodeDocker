const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const knex = require("knex");

const db = knex({
  client: "postgresql",
  connection: {
    host: "postgres",
    user: "postgres",
    password: "not",
    database: "nodeTest"
  }
});
const app  = express();
const staticAssets = __dirname + "/public";
const faviconPath = __dirname + "/public/favicon.ico";

app
  .set("views", __dirname + "/views")
  .set("view engine", "hjs")
  .use(express.static(staticAssets))
  .use(favicon(faviconPath))
  .get("/", (req, res) =>{
    db("tweet").then((tweets) =>{
      res.render("index", {
        title: "Teest",
        tweets: tweets,
        partials: {header: "header"}
      })
    })
  })
  ;

app.listen(3000);
