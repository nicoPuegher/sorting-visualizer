const TOTAL_BARS = 70;

const createBarsArr = (dimensions) => {
	const barsArr = [];

	for (let i = 0; i < TOTAL_BARS; i++) {
		const random = Math.random() * dimensions.height;

		barsArr.push({
			height: Math.floor(random) + 1,
			isCompared: false,
			isSorted: false,
		});
	}

	return barsArr;
};

export default createBarsArr;
