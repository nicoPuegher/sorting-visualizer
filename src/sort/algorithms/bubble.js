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

const displayAnimations = (setBarChart, animations) => {
	animations.forEach((animation, i) => {
		// Adjust SPEED variable to control the sorting speed
		setTimeout(() => {
			setBarChart((b) => {
				const [j, k, swapped, sorted] = animation;
				const copyArray = [...b.array];

				// Current comparison
				copyArray[j].isCompared = true;
				copyArray[k].isCompared = true;

				// Turn previous item back to normal
				if (j > 0) {
					copyArray[j - 1].isCompared = false;
				}

				// Perform swap animation
				if (swapped) {
					[copyArray[j], copyArray[k]] = [copyArray[k], copyArray[j]];
				}

				// Item is sorted
				if (sorted) {
					copyArray[j].isCompared = false;
					copyArray[k].isSorted = true;
					copyArray[k].isCompared = false;
				}

				// Set last item (first) as sorted
				if (i == animations.length - 1) {
					copyArray[j].isSorted = true;
				}

				return { ...b, array: copyArray };
			});
		}, i * SPEED);
	});
};

const bubble = (barChart, setBarChart) => {
	const array = [...barChart.array];
	const animations = [];

	generateAnimations(array, animations);
	displayAnimations(setBarChart, animations);
};

export default bubble;
