const findMax = (array) => {
	let max;

	for (let i = 0; i < array.length; i++) {
		if (max == undefined) max = array[i];
		if (array[i] > max) max = array[i];
	}

	return max;
};

const countElements = (array, max) => {
	const countArray = new Array(max + 1).fill(0);

	for (let i = 0; i < array.length; i++) {
		countArray[array[i]]++;
	}

	return countArray;
};

const cumulativeSum = (cumulativeArray) => {
	for (let i = 1; i < cumulativeArray.length; i++) {
		cumulativeArray[i] = cumulativeArray[i - 1] + cumulativeArray[i];
	}
};

const updateArrays = (array, countArray) => {
	const outputArray = [];

	for (let i = array.length - 1; i >= 0; i--) {
		outputArray[countArray[array[i]] - 1] = array[i];
		countArray[array[i]] = countArray[array[i]] - 1;
	}

	return outputArray;
};

const counting = (array) => {
	if (array.length < 1) return array;

	const max = findMax(array);
	const countArray = countElements(array, max);
	cumulativeSum(countArray);
	const outputArray = updateArrays(array, countArray);

	return outputArray;
};

export default counting;
