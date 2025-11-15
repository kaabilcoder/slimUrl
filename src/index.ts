import express from "express";
import { UrlModel } from "./models/db";
import { router as urlRoute } from './routes/url';
import path from "path";
import { handleRedirectUrl } from "./controllers/handleRedirectUrl";

const app = express();
const PORT = 8000;

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.use('/url', urlRoute)
app.get('/url/:shortId', handleRedirectUrl)

app.get("/", async (req, res) => {
    const allUrl = await UrlModel.find({});
    return res.render('home',{
        urls: allUrl
    })
})

app.listen(PORT, () => console.log(`server is running on the port ${PORT}`))
