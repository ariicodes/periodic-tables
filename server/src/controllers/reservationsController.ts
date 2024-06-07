import express from 'express';
import Reservation from '../models/Reservation';

// List all reservations
export const list = async (req: express.Request, res: express.Response) => {
	try {
		const reservations = await Reservation.find();
		res.json(reservations);
	} catch (err: any) {
		console.error('!!!Error:', err);
		res.status(500).json({ message: err.message });
	}
};

// Create a reservation
export const create = async (req: express.Request, res: express.Response) => {
	const newReservation = new Reservation(req.body);

	try {
		const reservation = await newReservation.save();
		res.status(201).json(reservation);
	} catch (err: any) {
		console.error('!!!Error:', err);
		res.status(400).json({ message: err.message });
	}
};

// Read a reservation
export const read = async (req: express.Request, res: express.Response) => {
	const { _id } = req.params;

	try {
		const reservation = await Reservation.findById(_id);

		reservation
			? res.json(reservation)
			: res.status(404).json({ message: 'Reservation not found' });
	} catch (err: any) {
		console.error('!!!Error:', err);
		res.status(500).json({ message: err.message });
	}
};

// Update a reservation
export const update = async (req: express.Request, res: express.Response) => {
	const { _id } = req.params;

	try {
		const reservation = await Reservation.findByIdAndUpdate(_id, req.body, {
			new: true,
		});

		reservation
			? res.json(reservation)
			: res.status(404).json({ message: 'Reservation not found' });
	} catch (err: any) {
		console.error('!!!Error:', err);
		res.status(500).json({ message: err.message });
	}
};

// Delete a reservation
export const destroy = async (req: express.Request, res: express.Response) => {
	const { _id } = req.params;

	try {
		const reservation = await Reservation.findByIdAndDelete(_id);

		reservation
			? res.json(reservation)
			: res.status(404).json({ message: 'Reservation not found' });
	} catch (err: any) {
		console.error('!!!Error:', err);
		res.status(500).json({ message: err.message });
	}
};
