import express, { NextFunction } from 'express';
/**
 * Express API error handler.
 */
function errorHandler(
	err: any,
	req: express.Request,
	res: express.Response,
	next: NextFunction
) {
	const { status = 500, message = 'Something went wrong!' } = err;
	res.status(status).json({ error: message });
}

export default errorHandler;
