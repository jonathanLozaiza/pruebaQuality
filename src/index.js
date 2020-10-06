const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");

//initialize
const app = express();
app.set("port",process.env.PORT || 4000);

//midlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));
app.use(session({
    secret:"secretcode",
    resave:true,
    saveUninitialized:true
}));
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api/market", require("./routes/market"));
app.use("/api/company", require("./routes/company"));
app.use("/api/service", require("./routes/service"));
app.use("/api/project", require("./routes/projects"));
app.use("/api/task/", require("./routes/task"));
app.use("/api/tarea/", require("./routes/tarea"));

//run server
app.listen(app.get('port'),()=>{
    console.log("server on port ",app.get("port"));
})