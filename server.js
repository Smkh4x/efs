import sequelize from "./config/database.js";
import { arbitre, match, Affectation } from "./models/index.js";
import express from "express";
import routerAr from "./routes/arbitre.routes.js";
import routerMa from "./routes/match.routes.js";
import routerAf from "./routes/affectation.routes.js";
import logArbitre from "./middlewares/logger.middleware.js";
import errMidlleare from "./middlewares/error.middleware.js";
import routerAuth from "./routes/auth.route.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();
app.use(express.json());
app.use(logArbitre);

app.use("/auth", routerAuth);

app.use("/arbitrs", routerAr);
app.use("/matchs", routerMa);
app.use("/affec", routerAf)

app.use(errMidlleare)

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log("database is connect");
        await sequelize.sync({
            alter: true,
        });
        console.log("database is working")
    } catch (err) {
        console.log({"error": err.message}); 
    }
}
main()

app.listen(3000, () => {
    console.log("databse is connect on port : 3000")
})



