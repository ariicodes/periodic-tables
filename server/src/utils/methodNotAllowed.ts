import express, { NextFunction } from 'express';

const methodNotAllowed = (
	req: express.Request,
	res: express.Response,
	next: NextFunction
) => {
	next({
		status: 405,
		message: `${req.method} not allowed for ${req.originalUrl}`,
	});
};

export default methodNotAllowed;
