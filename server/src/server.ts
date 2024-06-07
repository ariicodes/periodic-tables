import app from './app';
import connectToMongoDB from './utils/db';

const port = process.env.PORT || 5000;

connectToMongoDB();

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
