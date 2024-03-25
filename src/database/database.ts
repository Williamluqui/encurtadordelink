// import { PrismaClient } from "../../node_modules/.prisma/client";

// const prisma = new PrismaClient();

// export { prisma };

import mongoose from "mongoose";
const url = process.env.DATABASE_URL;

export async function main() {
  try {
    await mongoose.connect(url);
    console.log('Db conected!')
  } catch (error) {
    console.log(error);
  }
}