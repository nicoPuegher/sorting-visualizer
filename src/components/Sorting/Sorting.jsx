import { useState, useRef, useEffect } from 'react';
import updateDimensions from './updateDimensions.js';
import createBarsArr from './createBarsArr.js';
import Bars from '../Bars/Bars';
import Controls from '../Controls/Controls';

function Sorting() {
	const [bars, setBars] = useState({ display: false, arr: [] });
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const ref = useRef(null);

	useEffect(() => {
		const resize = updateDimensions(ref, setBars, setDimensions);
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	const handleDisplay = () =>
		setBars({ display: true, arr: createBarsArr(dimensions) });

	return (
		<>
			<Bars bars={bars} ref={ref} />
			<Controls onDisplay={handleDisplay} />
		</>
	);
}

export default Sorting;
