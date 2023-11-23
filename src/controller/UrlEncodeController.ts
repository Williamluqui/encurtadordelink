import { NextFunction, Request, Response } from "express";
import shortid from "shortid"; 
import  { prisma, Url }  from "../database/database"

export async function shorten(req:Request, res: Response,next:NextFunction):Promise<void>{
    try {
        const { url } = req.body;
        const shortenUrl = shortid.generate();
        const urlBodyAndShortUrl =  `${process.env.BASE_URL_DEV}/${shortenUrl}`;
         if (!url) throw new Error  ("insert valid url")
         if (!/^http(s){0,1}:\/\//.test(url)) throw new Error("Long URL should start with 'http://' or 'https://'");
        const data:Url = await prisma.url.create({data:{url,hash:shortenUrl,urlShort: urlBodyAndShortUrl}});
       res.status(201).json({data})
    } catch (err) {
        res.send(err.message)
        console.log(err.message)
        next()
        return
    }
}
 
export async function decriptUrl(req:Request, res: Response):Promise<void> {
    try {
        const {hashUrl} = req.params;
        const findHash = await prisma.url.findMany({where:{hash:hashUrl}})
        if(findHash) return res.redirect(findHash[0].url) 
        res.status(400).json({err:'error'})
    } catch (error) {
        console.log(error)
        return
    }
}