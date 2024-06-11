const SPEED = 10;

const generateAnimations = (array, animations) => {
	array.forEach((_, i) => {
		// Sort an item and remove it from the iteration
		for (let j = 0; j < array.length - i - 1; j++) {
			// Current bars for comparison [current, next, isCompared, isSorted]
			const comparison = [j, j + 1, false, false];
			animations.push(comparison);

			// If next bar is greater, swap it
			if (array[j].height > array[j + 1].height) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				comparison[2] = true;
			}
		}

		// Sorted item
		animations[animations.length - 1][3] = true;
	});
};

const displayAnimations = (setState, animations) => {
	animations.forEach((animation, i) => {
		// Adjust SPEED variable to control the sorting speed
		setTimeout(() => {
			setState((s) => {
				const [j, k, swapped, sorted] = animation;
				const copyArr = [...s.arr];

				// Current comparison
				copyArr[j].isCompared = true;
				copyArr[k].isCompared = true;

				// Turn previous item back to normal
				if (j > 0) {
					copyArr[j - 1].isCompared = false;
				}

				// Perform swap animation
				if (swapped) {
					[copyArr[j], copyArr[k]] = [copyArr[k], copyArr[j]];
				}

				// Item is sorted
				if (sorted) {
					copyArr[j].isCompared = false;
					copyArr[k].isSorted = true;
					copyArr[k].isCompared = false;
				}

				// Set last item (first) as sorted
				if (i == animations.length - 1) {
					copyArr[j].isSorted = true;
				}

				return { ...s, arr: copyArr };
			});
		}, i * SPEED);
	});
};

const bubble = (state, setState) => {
	const array = [...state.arr];
	const animations = [];

	generateAnimations(array, animations);
	displayAnimations(setState, animations);
};

export default bubble;
