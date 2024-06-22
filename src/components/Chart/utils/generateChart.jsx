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

const getColor = (bar) => {
	return bar.isSorted ? 'purple' : bar.isCompared ? 'red' : '';
};

export default generateChart;
