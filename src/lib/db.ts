import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Global type to extend NodeJS global
interface Global {
  mongoosePromise?: Promise<typeof mongoose>;
}

let cached = (global as Global).mongoosePromise;

export async function connectDB() {
  if (cached) {
    return cached;
  }

  cached = mongoose.connect(MONGODB_URI);
  (global as Global).mongoosePromise = cached;

  return cached;
}
