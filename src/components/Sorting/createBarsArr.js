const createBarsArr = (dimensions) => {
	const barsArr = [];

	for (let i = 0; i < dimensions.width; i++) {
		const random = Math.random() * dimensions.width;
		barsArr.push(Math.floor(random) + 1);
	}

	return barsArr;
};

export default createBarsArr;
