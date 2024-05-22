const selection = (array) => {
	const copy = array.slice();
	const len = copy.length;

	for (let i = 0; i < len - 1; i++) {
		let smallest = i;

		for (let j = i + 1; j < len; j++) {
			if (copy[j] < copy[smallest]) {
				smallest = j;
			}
		}

		if (smallest !== i) {
			[copy[i], copy[smallest]] = [copy[smallest], copy[i]];
		}
	}

	return copy;
};

export default selection;
