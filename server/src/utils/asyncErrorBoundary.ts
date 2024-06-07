import { Request, Response, NextFunction } from 'express';

const asyncErrorBoundary = (delegate: any, defaultStatus?: any) => {
	return (request: Request, response: Response, next: NextFunction) => {
		Promise.resolve()
			.then(() => delegate(request, response, next))
			.catch((error = {}) => {
				const { status = defaultStatus, message = error } = error;
				next({
					status,
					message,
				});
			});
	};
};

export default asyncErrorBoundary;
