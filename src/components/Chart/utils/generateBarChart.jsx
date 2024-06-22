const generateBarChart = (chartArray, styles) => {
	let array = null;

	if (chartArray) {
		array = chartArray.map((bar, index) => (
			<div
				key={index}
				className={styles}
				style={{
					height: `${bar.height}px`,
					backgroundColor: bar.isSorted
						? 'purple'
						: bar.isCompared
							? 'red'
							: '',
				}}
			></div>
		));
	}

	return array;
};

export default generateBarChart;
