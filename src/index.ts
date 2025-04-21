import express from "express";
import { UrlModel } from "./models/db";
import { router as urlRoute } from './routes/url';
import { handleRedirectUrl } from "./controllers/handleRedirectUrl";
const app = express();
const PORT = 8000;
app.use(express.json());

app.use('/url', urlRoute)
app.get('/:shortId', handleRedirectUrl)


app.listen(PORT, () => console.log(`server is running on the port ${PORT}`))
