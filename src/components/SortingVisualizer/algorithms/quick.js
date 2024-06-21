import Animation from '../core/Animation';
import displayAnimations from '../helpers/displayAnimations';

function partition(arr, low, high, animations) {
	let pivot = arr[high];
	let smallest = low - 1;

	for (let j = low; j < high; j++) {
		// Push a comparison animation
		Animation.comparison(animations, j, high);

		// Swap items
		if (arr[j].height <= pivot.height) {
			smallest++;
			[arr[smallest], arr[j]] = [arr[j], arr[smallest]];

			// Push a swap animation
			Animation.swap(animations, smallest, j);
		}
	}

	// Swap items
	[arr[smallest + 1], arr[high]] = [arr[high], arr[smallest + 1]];

	// Push a swap animation
	Animation.swap(animations, smallest + 1, high);

	return smallest + 1;
}

function generateAnimations(arr, low = 0, high = arr.length - 1, animations) {
	if (low < high) {
		let pi = partition(arr, low, high, animations);

		generateAnimations(arr, low, pi - 1, animations);
		generateAnimations(arr, pi + 1, high, animations);
	}
}

const quick = (state, setState) => {
	const copy = structuredClone(state.chartArray);
	const animations = [];

	generateAnimations(copy, 0, copy.length - 1, animations);
	displayAnimations(setState, animations);
};

export default quick;
