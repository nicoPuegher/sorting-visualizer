import constants from '../../../data/constants.js';

const { TOTAL_BARS } = constants;

// Generate a chart array of TOTAL_BARS with a max height from the Chart container
const generateChartArray = (height) => {
	const chartArray = [];

	for (let i = 0; i < TOTAL_BARS; i++) {
		const random = Math.random() * height;

		chartArray.push({
			height: Math.floor(random) + 1,
			isCompared: false,
			isSorted: false,
		});
	}

	return chartArray;
};

export default generateChartArray;
