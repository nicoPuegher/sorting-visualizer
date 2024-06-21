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
			setState,
			setCurrentDimensions,
		);
		newDimensions();
		window.addEventListener('resize', newDimensions);
		return () => window.removeEventListener('resize', newDimensions);
	}, []);

	const handleDisplay = () => {
		if (state.chartArray.length > 0) {
			displayAnimations(null, []);
		}

		setState({
			displayChart: true,
			isAnimationActive: false,
			chartArray: generateBarChartArray(currentDimensions),
			containerWidth: 0,
			contanierHeight: 0,
		});
	};

	const handleSubmit = (sortingAlgorithm) => {
		Sort[sortingAlgorithm](state, setState);
	};

	return (
		<>
			<Chart state={state} ref={ref} />
			<Controls
				state={state}
				onDisplay={handleDisplay}
				onSubmit={handleSubmit}
			/>
		</>
	);
}

export default SortingVisualizer;
