import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mongoServer = null;

export async function connectDatabase() {
  try {
    // Configure embedded MongoDB with persistent storage
    const dbPath = path.join(__dirname, '../../.mongodb');
    
    console.log('🔄 Starting embedded MongoDB server...');
    console.log(`📁 Database path: ${dbPath}`);
    
    mongoServer = await MongoMemoryServer.create({
      instance: {
        dbPath: dbPath,
        storageEngine: 'wiredTiger',
      },
      binary: {
        version: '7.0.4',
      },
    });

    const uri = mongoServer.getUri();
    console.log(`🔗 MongoDB URI: ${uri}`);

    await mongoose.connect(uri, {
      dbName: 'appdb',
    });

    console.log('✅ Connected to embedded MongoDB successfully');
    console.log('💾 Data will persist in .mongodb folder');
    
    return mongoServer;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
}

export async function disconnectDatabase() {
  try {
    await mongoose.disconnect();
    if (mongoServer) {
      await mongoServer.stop();
    }
    console.log('🛑 MongoDB disconnected');
  } catch (error) {
    console.error('❌ Error disconnecting MongoDB:', error);
    throw error;
  }
}

// Handle process termination
process.on('SIGINT', async () => {
  await disconnectDatabase();
  process.exit(0);
});
