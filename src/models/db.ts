import mongoose, {Schema, model} from "mongoose"
import dotenv from 'dotenv'

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017"
const DB_NAME = process.env.DB_NAME || "urlShortner";

mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

const UrlSchema = new Schema({
    shortID: {type: String, require: true, unique: true},
    redirectURL: {type: String, require: true},
    visitHistory: [{timestamp: {type: Number}}],
},
{timestamps: true})

export const UrlModel = model("Url", UrlSchema);