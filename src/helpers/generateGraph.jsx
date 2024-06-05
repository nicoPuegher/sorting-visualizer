const generateGraph = (bars, styles) => {
	let graph = null;

	if (bars.arr) {
		graph = bars.arr.map((bar, index) => (
			<div
				key={index}
				className={styles}
				style={{ height: `${bar}px` }}
			></div>
		));
	}

	return graph;
};

export default generateGraph;
