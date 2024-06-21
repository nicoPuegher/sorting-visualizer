import { useState, useRef, useEffect } from 'react';

import Chart from '../Chart/Chart';
import Controls from '../Controls/Controls';

import setNewDimensions from './helpers/setNewDimensions.js';
import generateBarChartArray from './helpers/generateBarChartArray.js';
import Sort from './core/Sort.js';
import displayAnimations from './helpers/displayAnimations.js';

function SortingVisualizer() {
	const [state, setState] = useState({
		displayChart: false,
		isAnimationActive: false,
		chartArray: [],
		containerWidth: 0,
		contanierHeight: 0,
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

	const handleDisplay = () => {
		if (barChart.array.length > 0) {
			displayAnimations(null, []);
		}

		setBarChart({
			display: true,
			isAnimationGoing: false,
			array: generateBarChartArray(currentDimensions),
		});
	};

	const handleSubmit = (sortingAlgorithm) => {
		Sort[sortingAlgorithm](barChart, setBarChart);
	};

	return (
		<>
			<Chart barChart={barChart} ref={ref} />
			<Controls
				barChart={barChart}
				onDisplay={handleDisplay}
				onSubmit={handleSubmit}
			/>
		</>
	);
}

export default SortingVisualizer;
