const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/dbConfig");

dotenv.config({ path: "server/config/config.env" });
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is working at http://localhost:${process.env.PORT}`);
});
