import mongoose, {Schema, model} from "mongoose"
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
    .then(() => console.log(`Connected to MongoDB at ${mongoose.connection.name}`))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

const UrlSchema = new Schema({
    shortID: {type: String, require: true, unique: true},
    redirectURL: {type: String, require: true},
    visitHistory: [{timestamp: {type: Number}}],
    createdAt: { type: Date, default: Date.now, index: { expires: 86400 } } // TTL - time to live index setup for 1 day
},
{timestamps: true})

export const UrlModel = model("Url", UrlSchema);