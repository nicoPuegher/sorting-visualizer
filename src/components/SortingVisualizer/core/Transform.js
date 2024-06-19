class Transform {
	static allToNotCompared(array) {
		array.forEach((bar) => (bar.isCompared = false));
	}

	static allToSorted(animations, array, i) {
		if (i == animations.length - 1) {
			array.forEach((bar) => (bar.isSorted = true));
		}
	}
}

export default Transform;
