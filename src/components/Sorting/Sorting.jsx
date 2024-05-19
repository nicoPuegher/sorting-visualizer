import { useState } from 'react';
import Bars from '../Bars/Bars';
import Controls from '../Controls/Controls';

function Sorting() {
	const [showBars, setShowBars] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	const handleShowBars = () => setShowBars(true);

	return (
		<>
			<Bars showBars={showBars} />
			<Controls onHandleShowBars={handleShowBars} />
		</>
	);
}

export default Sorting;
