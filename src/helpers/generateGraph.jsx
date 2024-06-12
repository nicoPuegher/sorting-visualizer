const generateGraph = (barChart, styles) => {
	let graph = null;

	if (barChart.array) {
		graph = barChart.array.map((bar, index) => (
			<div
				key={index}
				className={styles}
				style={{
					// width: `${bar.width}px`,
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

	return graph;
};

export default generateGraph;
