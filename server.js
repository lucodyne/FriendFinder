const express = require("express");
const app = express();

const PATH = process.env.PATH || 6072;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
