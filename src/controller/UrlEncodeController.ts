import { Request, Response } from "express";

export class UrlEncode {
    public shorten (req:Request, res: Response){
        res.json({msg: 'Tudo ok'})
    }

}