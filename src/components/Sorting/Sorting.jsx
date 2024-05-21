import { useState, useRef, useEffect } from 'react';
import updateDimensions from './updateDimensions.js';
import Bars from '../Bars/Bars';
import Controls from '../Controls/Controls';

function Sorting() {
	const [bars, setBars] = useState({ display: false, arr: [] });
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const ref = useRef(null);

	useEffect(() => {
		const resize = updateDimensions(ref, setBars, setDimensions);
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	const handleShowBars = () => setShowBars(true);

	return (
		<>
			<Bars bars={bars} dimensions={dimensions} ref={ref} />
			<Controls onHandleShowBars={handleShowBars} />
		</>
	);
}

export default Sorting;
