import express from 'express';
import {
	list,
	create,
	read,
	update,
	destroy,
} from '../controllers/reservationsController';
import asyncErrorBoundary from '../utils/asyncErrorBoundary';
import methodNotAllowed from '../utils/methodNotAllowed';

const router = express.Router();

router
	.route('/')
	.get(asyncErrorBoundary(list, 500))
	.post(asyncErrorBoundary(create, 500))
	.all(methodNotAllowed);
router
	.route('/:_id')
	.get(asyncErrorBoundary(read, 500))
	.put(asyncErrorBoundary(update, 500))
	.delete(asyncErrorBoundary(destroy, 500))
	.all(methodNotAllowed);

export default router;
