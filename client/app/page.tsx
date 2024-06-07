import ReservationsTable from './(components)/dashboard/ReservationsList';

export default async function Home() {
	const getSubscriptions = async () => {
		try {
			const res = await fetch(`http://localhost:5000/reservations`, {
				cache: 'no-cache',
			});
			return res.json();
		} catch (err: any) {
			console.error(`Failed to fetch reservations: ${err.message}`);
		}
	};

	const reservations = await getSubscriptions();

	return (
		<main className='ml-64 px-24 py-16'>
			<h1 className='text-5xl mb-4'>Reservations</h1>
			<ReservationsTable reservations={reservations} />
		</main>
	);
}
