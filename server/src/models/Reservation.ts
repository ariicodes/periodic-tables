import mongoose from 'mongoose';

interface Reservation {
	first_name: string;
	last_name: string;
	mobile_number: string;
	reservation_date: Date;
	party_size: number;
	createdAt: string;
	updatedAt: string;
}

const reservationSchema = new mongoose.Schema<Reservation>(
	{
		first_name: { type: String, required: true },
		last_name: { type: String, required: true },
		mobile_number: { type: String, required: true },
		reservation_date: { type: Date, required: true },
		party_size: { type: Number, required: true },
		createdAt: { type: String, required: true },
		updatedAt: { type: String, required: true },
	},
	{
		// Make Mongoose use Unix time (seconds since Jan 1, 1970)
		timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
	}
);

const Reservation = mongoose.model<Reservation>(
	'Reservation',
	reservationSchema
);

export default Reservation;
