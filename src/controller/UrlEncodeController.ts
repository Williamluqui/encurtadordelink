import { NextFunction, Request, Response } from "express";
import shortid from "shortid";

import { ErrorHandler } from "../errors/errorHandler";
import { errorHandlerCatch } from "../errors/errorCatch";
import { CreateUrlHash, FindHash } from "../model/urlModel";
import { validateUrl } from "../core/regexUrl";

export async function shorten(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const url = String(req.body.url);
    const shortenUrl = shortid.generate();

    if (!validateUrl(url))
      throw new ErrorHandler(
        400,
        "Long URL should start with 'http://' or 'https://'"
      );

    const urlBodyAndShortUrl = `${process.env.BASE_URL_DEV}/${shortenUrl}`;

    const data = await CreateUrlHash(url, shortenUrl, urlBodyAndShortUrl);

    res.status(201).json({ data });
  } catch (error) {
    console.error(error);
    const { statusCode, message } = errorHandlerCatch(error);
    next(new ErrorHandler(statusCode, message));
  }
}

export async function decriptUrl(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const hashUrl = String(req.params.hashUrl);

    const urlHash = await FindHash(hashUrl);
    if (!urlHash) throw new ErrorHandler(400, "Inválid url or url empty");

    return res.redirect(urlHash.url);
  } catch (error) {
    console.error(error);
    const { statusCode, message } = errorHandlerCatch(error);
    next(new ErrorHandler(statusCode, message));
  }
}
