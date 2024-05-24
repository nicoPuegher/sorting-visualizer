const quick = (array) => {
	if (array.length < 2) return array;

	const pivot = array[array.length - 1];
	const less = [];
	const greater = [];

	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] <= pivot) less.push(array[i]);
		else greater.push(array[i]);
	}

	const updated_less = quick(less);
	const updated_greater = quick(greater);

	return [...updated_less, pivot, ...updated_greater];
};

export default quick;
