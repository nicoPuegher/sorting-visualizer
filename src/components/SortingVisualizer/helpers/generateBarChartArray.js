import constants from '../../../data/constants.js';

const { TOTAL_BARS } = constants;

const generateBarChartArray = (dimensions) => {
	const barChartArray = [];

	for (let i = 0; i < TOTAL_BARS; i++) {
		const random = Math.random() * dimensions.height;

		barChartArray.push({
			height: Math.floor(random) + 1,
			isCompared: false,
			isSorted: false,
		});
	}

	return barChartArray;
};

export default generateBarChartArray;
