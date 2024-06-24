// Static methods do not require a class constructor
class Transform {
	static allToNotCompared(chartArray) {
		chartArray.forEach((bar) => (bar.isCompared = false));
	}

	static allToSorted(animations, chartArray, i) {
		if (i == animations.length - 1) {
			chartArray.forEach((bar) => (bar.isSorted = true));
		}
	}
}

export default Transform;
