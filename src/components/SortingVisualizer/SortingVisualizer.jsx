import { useState, useRef, useEffect } from 'react';

import Chart from '../Chart/Chart';
import Controls from '../Controls/Controls';

import updateDimensions from '../../helpers/updateDimensions.js';
import createBarsArr from '../../helpers/createBarsArr.js';
import Sort from '../../sort/Sort.js';

function SortingVisualizer() {
	const [barChart, setBarChart] = useState({
		display: false,
		isSorted: false,
		array: [],
	});
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const ref = useRef(null);

	useEffect(() => {
		const resize = updateDimensions(ref, setBarChart, setDimensions);
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	const handleDisplay = () =>
		setBarChart({
			display: true,
			isSorted: false,
			array: createBarsArr(dimensions),
		});

	const handleSubmit = (sortingAlgorithm) => {
		Sort[sortingAlgorithm](barChart, setBarChart);
	};

	const handleSelect = () => {
		if (barChart.isSorted) {
			updateDimensions(ref, setBarChart, setDimensions);
		}
	};

	return (
		<>
			<Chart barChart={barChart} ref={ref} />
			<Controls
				onDisplay={handleDisplay}
				onSubmit={handleSubmit}
				onSelect={handleSelect}
			/>
		</>
	);
}

export default SortingVisualizer;
