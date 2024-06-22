import { useState, useRef, useEffect } from 'react';

import Chart from '../Chart/Chart';
import Controls from '../Controls/Controls';

import setNewDimensions from './helpers/setNewDimensions.js';
import generateChartArray from './helpers/generateChartArray.js';
import Sort from './core/Sort.js';
import displayAnimations from './helpers/displayAnimations.js';

function SortingVisualizer() {
	const [state, setState] = useState({
		displayChart: false,
		isAnimationActive: false,
		chartArray: [],
		containerDimensions: { width: 0, height: 0 },
	});

	const ref = useRef(null);

	useEffect(() => {
		const newDimensions = setNewDimensions(ref.current, setState);
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
			chartArray: generateChartArray(state.containerDimensions.height),
			containerDimensions: { width: 0, height: 0 },
		});
	};

	const handleSubmit = (algorithm) => {
		Sort[algorithm](state, setState);
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
