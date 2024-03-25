import mongoose from "mongoose";

const schema = mongoose.Schema;

const urlShort = new schema(
  {
    _id: { type: schema.Types.ObjectId, auto: true },
    url:{ type: String, required: true },
    hash: { type: String, unique: true, required: true },
    urlShort: { type: String },
  },
  { timestamps: true }
);

export const SchemaUrlShort =  mongoose.model("urlShort", urlShort);
