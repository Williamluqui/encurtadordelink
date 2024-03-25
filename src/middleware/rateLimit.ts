import rateLimit from "express-rate-limit";
import { Request, Response, NextFunction } from "express";

export const limiterResend = rateLimit({
  windowMs: 2 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  keyGenerator: (req: Request): any => {
    return req.ip;
  },
  handler: (_, res: Response, next: NextFunction): void => {
    res.status(429).send({
      code: 429,
      message: "Você tentou acessar muitas vezes,aguarde a liberação!!",
    });
  },
});
