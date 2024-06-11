const bubble = (state, setState) => {
	const array = [...state.arr];
	let jLen = array.length;
	const animations = [];

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < jLen - 1; j++) {
			animations.push([j, j + 1, false, false]);
			if (array[j].height > array[j + 1].height) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				animations[animations.length - 1][2] = true;
			}
		}
		animations[animations.length - 1][3] = true;
		jLen--;
	}

	for (let i = 0; i < animations.length; i++) {
		setTimeout(() => {
			setState((s) => {
				const [j, k, swapped, sorted] = animations[i];
				const newArr = [...s.arr];
				newArr[j].isCompared = true;
				newArr[k].isCompared = true;
				if (j > 0) {
					newArr[j - 1].isCompared = false;
				}

				if (swapped) {
					[newArr[j], newArr[k]] = [newArr[k], newArr[j]];
				}

				if (sorted == true) {
					newArr[j].isCompared = false;
					newArr[k].isSorted = true;
					newArr[k].isCompared = false;
				}

				if (i == animations.length - 1) {
					newArr[j].isSorted = true;
				}
				return { ...s, arr: newArr };
			});
		}, i * 10);
	}
};

export default bubble;
