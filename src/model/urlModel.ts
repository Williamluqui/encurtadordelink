import { Url } from "../@types/url.interface";
import { prisma } from "../database/database";

export async function CreateUrlHash(url: string, hash: string, urlShort: string) {
  const data: Url = await prisma.url.create({
    data: { url, hash, urlShort },
  });
  return data;
}

export async function FindHash(hashUrl: string) {
  const findHash = await prisma.url.findMany({ where: { hash: hashUrl } });
  return findHash;
}
