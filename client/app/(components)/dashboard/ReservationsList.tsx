import moment from 'moment';

interface Reservation {
	_id: string;
	first_name: string;
	last_name: string;
	mobile_number: string;
	reservation_date: Date;
	party_size: number;
}

const ReservationsList = ({
	reservations,
}: {
	reservations: Reservation[];
}) => {
	const formattedDate = (date: Date) => moment(date).format('MM-DD-YYYY'); // Format the date
	const formattedTime = (date: Date) => moment(date).format('LT'); // Format the time

	return (
		<div>
			<ul className='flex flex-wrap gap-4'>
				{reservations ? (
					reservations.map(reservation => {
						return (
							<li
								key={reservation._id}
								className='size-80 border-8 rounded-lg p-2 flex flex-col items-center'
							>
								<div className='flex flex-row justify-between self-stretch'>
									<div className='text-6xl'>{reservation.party_size}</div>
									<div>
										{formattedDate(reservation.reservation_date)} |{' '}
										{formattedTime(reservation.reservation_date)}
									</div>
								</div>
								<div className='text-9xl mt-2'>
									{reservation.first_name.charAt(0).toUpperCase()}
									{reservation.last_name.charAt(0).toLowerCase()}
								</div>
								<div className='text-center mt-2'>
									<div className='text-2xl font-medium'>
										{reservation.first_name} {reservation.last_name}
									</div>
									<div>{reservation.mobile_number}</div>
								</div>
							</li>
						);
					})
				) : (
					<li>No reservations found</li>
				)}
			</ul>
		</div>
	);
};

export default ReservationsList;
