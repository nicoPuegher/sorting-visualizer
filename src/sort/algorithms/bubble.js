const bubble = (array) => {
	const copy = array.slice();
	let len = copy.length;
	let swapped;

	do {
		swapped = false;
		for (let i = 0; i < len - 1; i++) {
			if (copy[i] > copy[i + 1]) {
				[copy[i], copy[i + 1]] = [copy[i + 1], copy[i]];
				swapped = true;
			}
		}
		len--;
	} while (swapped);

	return copy;
};

export default bubble;
