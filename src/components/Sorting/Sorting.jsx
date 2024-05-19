import { useState } from 'react';
import Bars from '../Bars/Bars';
import Controls from '../Controls/Controls';

function Sorting() {
	const [showBars, setShowBars] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	return (
		<>
			<Bars />
			<Controls />
		</>
	);
}

export default Sorting;
