import { useState, useRef, useEffect } from 'react';
import Bars from '../Bars/Bars';
import Controls from '../Controls/Controls';
import updateDimensions from '../../helpers/updateDimensions.js';
import createBarsArr from '../../helpers/createBarsArr.js';

function Sorting() {
	const [bars, setBars] = useState({
		display: false,
		sorted: false,
		arr: [],
	});
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const ref = useRef(null);

	useEffect(() => {
		const resize = updateDimensions(ref, setBars, setDimensions);
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	const handleDisplay = () =>
		setBars({
			display: true,
			sorted: false,
			arr: createBarsArr(dimensions),
		});

	const handleSubmit = (sortingAlgorithm) => {};

	const handleSelect = () => {
		if (bars.sorted) {
			updateDimensions(ref, setBars, setDimensions);
		}
	};

	return (
		<>
			<Bars bars={bars} ref={ref} />
			<Controls
				onDisplay={handleDisplay}
				onSubmit={handleSubmit}
				onSelect={handleSelect}
			/>
		</>
	);
}

export default Sorting;
