// Generate an array of bars with a random height and custom color
const generateChart = (chartArray, styles) => {
	let array = null;

	if (chartArray) {
		array = chartArray.map((bar, index) => (
			<div
				key={index}
				className={styles}
				style={{
					height: `${bar.height}px`,
					backgroundColor: getColor(bar),
				}}
			></div>
		));
	}

	return array;
};

// Set bar color to purple if it is sorted, red if it is compared or empty as default
const getColor = (bar) => {
	return bar.isSorted ? 'purple' : bar.isCompared ? 'red' : '';
};

export default generateChart;
