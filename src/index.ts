import express from "express";
import { UrlModel } from "./models/db";
import { router as urlRoute } from './routes/url';
const app = express();
const PORT = 8000;
app.use(express.json());

app.use('/url', urlRoute)
app.get('/:shortId', async(req, res) => {
    const shortId = req.params.shortId;

const entry = await UrlModel.findOneAndUpdate(
    { shortID: shortId },
    { 
        $push: { 
            visitHistory: {timestamp: Date.now()} 
        } 
    }
);
    if (entry?.redirectURL) {
        res.redirect(entry.redirectURL);
    } else {
        res.status(404).send("Redirect URL not found");
    }
})


app.listen(PORT, () => console.log(`server is running on the port ${PORT}`))
