import { Request, Response } from 'express';
import { UrlModel } from '../models/db';

export const handleRedirectUrl: any = async(req: Request, res: Response) => {
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
}