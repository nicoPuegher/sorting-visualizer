const generateBarChart = (state, styles) => {
	let chart = null;

	if (state.chartArray) {
		chart = state.chartArray.map((bar, index) => (
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

	return chart;
};

export default generateBarChart;
