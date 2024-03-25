import { Url } from "../@types/url.interface";
import { SchemaUrlShort } from "../mongoose.schema/schema";

export async function CreateUrlHash(url: string, hash: string, urlShort: string) {
  const data = SchemaUrlShort.create({ url, hash, urlShort });
  return data;
}

export async function FindHash(hashUrl: string) {
  const findHash = await SchemaUrlShort.findOne({ hashUrl });
  return findHash;
}
