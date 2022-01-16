/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line arrow-body-style
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// eslint-disable-next-line arrow-body-style
const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 5000);
	}, []);

	return (
		<div className='not-found'>
			<h1>Ooooop......</h1>
			<h2>The page you requested was not found</h2>
			<p>
				Go back to
				<Link href='/'>
					<a> Homepage</a>
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
