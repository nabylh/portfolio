import express from "express";
const app = express();
const LOCAL_PORT = 9000;
import path from "path";
import router from "./routes/index.routes.js";

app.use(express.static( path.join(process.cwd(), "public")));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

app.use(router);

app.listen(LOCAL_PORT, () => {
    console.log(`listening at http://localhost:${LOCAL_PORT}`);
});