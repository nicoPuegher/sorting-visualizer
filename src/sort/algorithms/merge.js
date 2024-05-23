const mergeArrays = (left, right) => {
	const merged = [];
	let i = 0;
	let j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			merged.push(left[i]);
			i++;
		} else {
			merged.push(right[j]);
			j++;
		}
	}

	return [...merged, ...left.slice(i), ...right.slice(j)];
};

const merge = (array) => {
	if (array.length <= 1) return array;

	const mid = Math.floor(array.length / 2);
	const left = array.slice(0, mid);
	const right = array.slice(mid);

	return mergeArrays(merge(left), merge(right));
};

export default merge;
