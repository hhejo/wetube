import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug"); // view engine을 pug로 셋
app.set("views", process.cwd() + "/src/views"); // 작업 디렉터리 변경
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`😎 Server Listening on port http://localhost:${PORT} 😎`);

app.listen(PORT, handleListening);
