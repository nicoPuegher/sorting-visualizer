const createBarsArr = (dimensions) => {
	const barsArr = [];
	const len = Math.floor(dimensions.width / 2);
	for (let i = 0; i < len; i++) {
		const random = Math.random() * dimensions.height;
		barsArr.push(Math.floor(random) + 1);
	}
	return barsArr;
};

export default createBarsArr;
