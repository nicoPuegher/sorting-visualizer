const generateBarChart = (barChart, styles) => {
	let chart = null;

	if (barChart.array) {
		chart = barChart.array.map((bar, index) => (
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
