import express from "express";
import cors  from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"
import router from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js"
import chatRoute from "./routes/user.route.js"
import messageRoute from "./routes/user.route.js"

const app = express();

// app.use(cors({origin: process.env.CLIENT_URL, Credentials: true}));
// app.use(cors());
app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", authRoute);
app.use("/api/auth",router);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, ()=>{
    console.log("Server is running");
});