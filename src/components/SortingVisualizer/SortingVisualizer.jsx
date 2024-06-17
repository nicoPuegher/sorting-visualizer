import { useState, useRef, useEffect } from 'react';

import Chart from '../Chart/Chart';
import Controls from '../Controls/Controls';

import setNewDimensions from './helpers/setNewDimensions.js';
import generateBarChartArray from './helpers/generateBarChartArray.js';
import Sort from '../../sort/Sort.js';

function SortingVisualizer() {
	const [barChart, setBarChart] = useState({
		display: false,
		isSorted: false,
		array: [],
	});

	const [currentDimensions, setCurrentDimensions] = useState({
		width: 0,
		height: 0,
	});

	const ref = useRef(null);

	useEffect(() => {
		const newDimensions = setNewDimensions(
			ref,
			setBarChart,
			setCurrentDimensions,
		);
		newDimensions();
		window.addEventListener('resize', newDimensions);
		return () => window.removeEventListener('resize', newDimensions);
	}, []);

	const handleDisplay = () =>
		setBarChart({
			display: true,
			isSorted: false,
			array: generateBarChartArray(currentDimensions),
		});

	const handleSubmit = (sortingAlgorithm) => {
		Sort[sortingAlgorithm](barChart, setBarChart);
	};

	const handleSelect = () => {
		if (barChart.isSorted) {
			setNewDimensions(ref, setBarChart, setCurrentDimensions);
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
