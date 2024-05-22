const insertion = (array) => {
	const copy = array.slice();
	const len = copy.length;

	if (len < 2) return copy;

	for (let i = 1; i < len; i++) {
		const temporal = copy[i];
		let j = i - 1;

		while (j >= 0 && copy[j] > temporal) {
			copy[j + 1] = copy[j];
			j--;
		}

		copy[j + 1] = temporal;
	}

	return copy;
};

export default insertion;
