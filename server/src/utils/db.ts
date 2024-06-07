import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToMongoDB = async () => {
	const mongoUri =
		process.env.MONGO_URI_TEST ||
		process.env.MONGO_URI_DEVELOPMENT ||
		process.env.MONGO_URI_PREVIEW ||
		process.env.MONGO_URI_PRODUCTION ||
		'mongodb://localhost:5000/development';
	await mongoose
		.connect(mongoUri)
		.then(() => console.log('Connected to MongoDB'))
		.catch((err: Error) => console.error(err));
};

export default connectToMongoDB;
