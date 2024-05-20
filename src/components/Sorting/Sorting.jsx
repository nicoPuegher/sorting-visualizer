import { useState, useEffect } from 'react';
import Bars from '../Bars/Bars';
import Controls from '../Controls/Controls';

function Sorting() {
	const [showBars, setShowBars] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth !== width) {
				setShowBars(false);
				setWidth(window.innerWidth);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [width]);

	const handleShowBars = () => setShowBars(true);

	return (
		<>
			<Bars showBars={showBars} />
			<Controls onHandleShowBars={handleShowBars} />
		</>
	);
}

export default Sorting;
