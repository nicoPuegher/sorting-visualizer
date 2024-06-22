import Animation from '../core/Animation';
import displayAnimations from '../helpers/displayAnimations';

function partition(copyArray, low, high, animations) {
	let pivot = copyArray[high];
	let smallest = low - 1;

	for (let j = low; j < high; j++) {
		// Push a comparison animation
		Animation.compared(animations, j, high);

		// Swap items
		if (copyArray[j].height <= pivot.height) {
			smallest++;
			[copyArray[smallest], copyArray[j]] = [
				copyArray[j],
				copyArray[smallest],
			];

			// Push a swap animation
			Animation.swapped(animations, smallest, j);
		}
	}

	// Swap items
	[copyArray[smallest + 1], copyArray[high]] = [
		copyArray[high],
		copyArray[smallest + 1],
	];

	// Push a swap animation
	Animation.swapped(animations, smallest + 1, high);

	return smallest + 1;
}

function generateAnimations(
	copyArray,
	low = 0,
	high = copyArray.length - 1,
	animations,
) {
	if (low < high) {
		let pi = partition(copyArray, low, high, animations);

		generateAnimations(copyArray, low, pi - 1, animations);
		generateAnimations(copyArray, pi + 1, high, animations);
	}
}

const quick = (chartArray, setState) => {
	const copyArray = structuredClone(chartArray);
	const animations = [];

	generateAnimations(copyArray, 0, copyArray.length - 1, animations);
	displayAnimations(setState, animations);
};

export default quick;
