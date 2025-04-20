import { Request, Response } from 'express';
import { UrlModel } from '../models/db';
import shortid from 'shortid'

export const handleGenerateShortUrl: any = async (req: Request, res: Response) => {
    const body = req.body;
    if(!body) return res.status(400).json({error: 'url is required'})
    const shortId = shortid.generate();

    await UrlModel.create({
        shortID: shortId,
        redirectURL: body.url,
        visitHistory: []
    })

    return res.json({id: shortId})

    
}
