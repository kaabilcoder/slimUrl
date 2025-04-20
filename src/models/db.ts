import mongoose, {Schema, model} from "mongoose"
import dotenv from 'dotenv'

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = process.env.DB_NAME


mongoose.connect("mongodb://localhost:27017/urlShortner")

const UrlSchema = new Schema({
    shortID: {type: String, require: true, unique: true},
    redirectURL: {type: String, require: true},
    visitHistory: [{timestamp: {type: Number}}],
},
{timestamps: true})

export const UrlModel = model("Url", UrlSchema);